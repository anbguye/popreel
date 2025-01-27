"use client"

import { useState } from "react"
import { Heart, MessageCircle, Bookmark, Share2} from "lucide-react"
import Image from "next/image"

interface TikTokPostProps {
  username: string
  description: string
  likes: string
  comments: string
  bookmarks: string
  shares: string
  videoSrc: string
  userAvatar: string
  verified?: boolean
  songTitle: string
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
}: TikTokPostProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="flex justify-center py-4 relative snap-center">
      <div className="max-w-[600px] relative">
        <video className="w-full rounded-lg max-h-[calc(100vh-200px)]" src={videoSrc} loop controls />
        <div className="absolute right-4 bottom-16 flex flex-col items-center gap-4">
          <button className="flex flex-col items-center" onClick={() => setIsLiked(!isLiked)}>
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800">
              <Heart className={`w-6 h-6 ${isLiked ? "text-red-500 fill-red-500" : ""}`} />
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
      <div className="absolute left-4 bottom-4 right-20">
        <div className="flex items-center gap-2">
          <Image
            src={userAvatar || "/placeholder.svg"}
            alt={username}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold hover:underline cursor-pointer">{username}</span>
              {verified && (
                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
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
  )
}

