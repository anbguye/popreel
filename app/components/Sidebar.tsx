import { Home, Compass, Users, Upload, Video, User, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <div className="w-[340px] flex flex-col h-screen p-4 border-r border-gray-800 fixed">
      <Link href="/" className="mb-8">
        <svg className="w-[118px] h-[42px] text-white" viewBox="0 0 118 42" fill="currentColor">
          <path d="M9.875 16.842v-1.119h8.36v10.97h9.231V16.842h8.36v1.119h-7.172v17.644h7.172v1.119h-8.36V27.812h-9.231v7.793h-8.36v-1.119h7.172V17.961H9.875zm38.06 20.028V26.063c0-2.52-1.832-4.367-4.089-4.367-2.544 0-4.311 1.71-4.311 4.367v10.807h-1.338V25.973c0-3.037 2.257-5.052 5.649-5.052 2.694 0 4.582 1.635 5.304 3.704h.15v-3.345h1.337v15.59h-2.702zm17.88-15.59h1.338v15.59h-1.338v-2.476h-.15c-.748 1.784-2.674 2.835-5.23 2.835-3.392 0-5.649-2.015-5.649-5.052V21.28h1.338v10.807c0 2.657 1.832 4.367 4.311 4.367 2.257 0 4.09-1.847 4.09-4.367V21.28h1.29zm20.692 0v15.59h-1.338v-2.476h-.15c-.748 1.784-2.674 2.835-5.23 2.835-3.392 0-5.649-2.015-5.649-5.052V21.28h1.338v10.807c0 2.657 1.832 4.367 4.311 4.367 2.258 0 4.09-1.847 4.09-4.367V21.28h2.628zm6.896 15.59h-1.338v-15.59h1.338v3.345h.15c.722-2.07 2.61-3.704 5.304-3.704 3.392 0 5.649 2.015 5.649 5.052v10.897h-1.338V26.063c0-2.52-1.832-4.367-4.09-4.367-2.543 0-4.31 1.71-4.31 4.367v10.807h-1.365z" />
        </svg>
      </Link>
      <nav className="flex-1 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-2 py-3 text-lg font-semibold hover:bg-gray-900 rounded-lg">
          <Home className="w-6 h-6" />
          For You
        </Link>
        <Link
          href="/explore"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:bg-gray-900 rounded-lg"
        >
          <Compass className="w-6 h-6" />
          Explore
        </Link>
        <Link
          href="/following"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:bg-gray-900 rounded-lg"
        >
          <Users className="w-6 h-6" />
          Following
        </Link>
        <Link
          href="/upload"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:bg-gray-900 rounded-lg"
        >
          <Upload className="w-6 h-6" />
          Upload
        </Link>
        <Link
          href="/live"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:bg-gray-900 rounded-lg"
        >
          <Video className="w-6 h-6" />
          LIVE
        </Link>
        <Link
          href="/profile"
          className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:bg-gray-900 rounded-lg"
        >
          <User className="w-6 h-6" />
          Profile
        </Link>
        <button className="flex items-center gap-3 px-2 py-3 text-lg text-gray-400 hover:bg-gray-900 rounded-lg w-full text-left">
          <MoreHorizontal className="w-6 h-6" />
          More
        </button>
      </nav>
      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-md py-3 mb-4">Log in</Button>
      <div className="text-xs space-y-4 text-gray-400">
        <div className="space-x-2">
          <Link href="#" className="hover:underline">
            Company
          </Link>
          <Link href="#" className="hover:underline">
            Program
          </Link>
          <Link href="#" className="hover:underline">
            Terms & Policies
          </Link>
        </div>
        <div>© 2025 TikTok</div>
      </div>
    </div>
  )
}

