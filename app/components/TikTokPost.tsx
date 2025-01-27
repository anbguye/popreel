"use client";

import { useState, useRef, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Play,
} from "lucide-react";
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
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay error:", error);
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isMuted) {
      // Unmuting - restore previous volume
      setVolume(previousVolume);
      videoRef.current.volume = previousVolume;
    } else {
      // Muting - save current volume
      setPreviousVolume(volume);
      setVolume(0);
      videoRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (newVolume > 0) {
      setPreviousVolume(newVolume);
    }
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 300);
  };

  return (
    <div className="flex justify-center h-[100vh] snap-center">
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 h-full items-center w-full md:w-auto px-2 md:px-0">
        {/* Video Container */}
        <div className="relative w-full md:w-[650px] h-[calc(100vh-120px)] md:h-[calc(100vh-32px)]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
            src={videoSrc}
            loop
            playsInline
            muted={isMuted}
            autoPlay
            onClick={togglePlay}
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
          {/* Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!isPlaying && (
              <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            )}
          </div>
          {/* Volume Control */}
          <div
            className="absolute bottom-20 right-4 flex flex-col items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Volume Slider */}
            <div
              className={`mb-5 w-8 h-28 bg-gray-900/80 rounded-full p-2 transition-opacity duration-200 flex items-center justify-center ${
                isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer origin-center -rotate-90"
                style={{
                  WebkitAppearance: "none",
                }}
              />
              <style jsx>{`
                input[type="range"]::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 12px;
                  height: 12px;
                  background: white;
                  border-radius: 50%;
                  cursor: pointer;
                }
                input[type="range"]::-moz-range-thumb {
                  width: 12px;
                  height: 12px;
                  background: white;
                  border-radius: 50%;
                  cursor: pointer;
                  border: none;
                }
              `}</style>
            </div>
            {/* Volume Button */}
            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
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
                  <span className="font-semibold hover:underline cursor-pointer text-white">
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
                <p className="text-sm text-white/90">{description}</p>
                <p className="text-sm mt-2">
                  <span className="text-white/70">♫ {songTitle}</span>
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
          <button
            className="flex flex-col items-center"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
              <Bookmark
                className={`w-6 h-6 ${
                  isBookmarked ? "text-blue-500 fill-blue-500" : ""
                }`}
              />
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
