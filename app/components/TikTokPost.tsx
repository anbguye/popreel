"use client";

import { useState, useRef, useEffect } from "react";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";
import Image from "next/image";
import { TikTokPost as TikTokPostType } from "@/lib/data";

interface TikTokPostProps extends TikTokPostType {
  isVisible?: boolean;
}

export default function TikTokPost({
  username,
  description,
  likes,
  comments,
  bookmarks,
  shares,
  videoSrc,
  userAvatar,
  verified,
  songTitle,
  isVisible = false,
}: TikTokPostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked by browser
        console.log("Autoplay blocked");
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center h-[100vh] snap-center">
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 h-full items-center w-full md:w-auto px-2 md:px-0">
        {/* Video Container */}
        <div className="relative w-full md:w-[650px] h-[calc(100vh-120px)] md:h-[calc(100vh-32px)]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl"
            src={videoSrc}
            loop
            playsInline
            onClick={togglePlay}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!isPlaying && (
              <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>
          {/* User Info and Description */}
          <div className="absolute left-4 bottom-4 right-20">
            <div className="flex items-center gap-2">
              <Image
                src={userAvatar}
                alt={username}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold hover:underline cursor-pointer">
                    {username}
                  </span>
                  {verified && (
                    <svg
                      className="w-4 h-4 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
                    </svg>
                  )}
                </div>
                <p className="text-sm">{description}</p>
                <p className="text-sm mt-2">
                  <span className="text-gray-400">♫ {songTitle}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interaction Buttons */}
        <div className="flex md:flex-col items-center gap-6 pb-4 md:pb-0">
          <button
            className="flex flex-col items-center"
            onClick={() => setIsLiked(!isLiked)}
          >
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
              <Heart
                className={`w-6 h-6 ${
                  isLiked ? "text-red-500 fill-red-500" : ""
                }`}
              />
            </div>
            <span className="text-xs mt-1">{likes}</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs mt-1">{comments}</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
              <Bookmark className="w-6 h-6" />
            </div>
            <span className="text-xs mt-1">{bookmarks}</span>
          </button>
          <button className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
              <Share2 className="w-6 h-6" />
            </div>
            <span className="text-xs mt-1">{shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
