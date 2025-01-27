"use client";

import { useEffect, useState, useRef } from "react";
import TikTokPost from "./TikTokPost";
import { TikTokPost as TikTokPostType, fetchPosts } from "@/lib/data";

export default function TikTokFeed() {
  const [posts, setPosts] = useState<TikTokPostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [visiblePostId, setVisiblePostId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load initial posts
    fetchPosts(1).then(setPosts);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading) {
            setLoading(true);
            fetchPosts(page + 1).then((newPosts) => {
              setPosts((prev) => [...prev, ...newPosts]);
              setPage((p) => p + 1);
              setLoading(false);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [page, loading]);

  // Set up intersection observer for videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const postId = entry.target.getAttribute("data-post-id");
          if (entry.isIntersecting && postId) {
            setVisiblePostId(postId);
          }
        });
      },
      {
        threshold: 0.6, // Video should be 60% visible before playing
      }
    );

    const postElements = document.querySelectorAll("[data-post-id]");
    postElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [posts]);

  return (
    <div className="ml-[340px] snap-y snap-mandatory h-screen overflow-y-scroll">
      {posts.map((post) => (
        <div key={post.id} data-post-id={post.id}>
          <TikTokPost {...post} isVisible={post.id === visiblePostId} />
        </div>
      ))}
      <div ref={loadingRef} className="h-20 flex items-center justify-center">
        {loading && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
        )}
      </div>
    </div>
  );
}
