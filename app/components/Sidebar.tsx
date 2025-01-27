"use client";

import {
  Home,
  Compass,
  Users,
  Upload,
  Video,
  User,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <div className="hidden md:flex w-[340px] flex-col h-screen p-4 border-r border-gray-800 fixed left-0 top-0 bg-black">
      <Link href="/" className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:from-blue-400 hover:to-pink-400 transition-all">
          PopReel
        </h1>
      </Link>
      <nav className="flex-1 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-2 py-3 text-lg font-semibold hover:bg-gray-900 rounded-lg transition-colors"
        >
          <Home className="w-6 h-6" />
          For You
        </Link>
        <Link
          href="/explore"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
        >
          <Compass className="w-6 h-6" />
          Explore
        </Link>
        <Link
          href="/following"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
        >
          <Users className="w-6 h-6" />
          Following
        </Link>
        <Link
          href="/upload"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
        >
          <Upload className="w-6 h-6" />
          Upload
        </Link>
        <Link
          href="/live"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
        >
          <Video className="w-6 h-6" />
          LIVE
        </Link>
        <Link
          href="/profile"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
        >
          <User className="w-6 h-6" />
          Profile
        </Link>
        <button className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg w-full text-left transition-colors">
          <MoreHorizontal className="w-6 h-6" />
          More
        </button>
      </nav>
      <Button
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-white rounded-md mb-4"
      >
        Log in
      </Button>
      <div className="text-xs space-y-4 text-gray-400">
        <div className="space-x-2">
          <Link
            href="#"
            className="hover:underline hover:text-gray-300 transition-colors"
          >
            Company
          </Link>
          <Link
            href="#"
            className="hover:underline hover:text-gray-300 transition-colors"
          >
            Program
          </Link>
          <Link
            href="#"
            className="hover:underline hover:text-gray-300 transition-colors"
          >
            Terms & Policies
          </Link>
        </div>
        <div>© 2025 PopReel</div>
      </div>
    </div>
  );
}
