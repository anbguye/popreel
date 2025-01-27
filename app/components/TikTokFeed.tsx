import TikTokPost from "./TikTokPost"

const mockPosts = [
  {
    id: "1",
    username: "barstoolsports",
    description: "The spinning 🍜 @You Gotta Try This (via:@Cyrus Banks )",
    likes: "149.6K",
    comments: "1171",
    bookmarks: "7010",
    shares: "29.5K",
    videoSrc: "/placeholder.mp4",
    userAvatar: "/placeholder.svg?height=40&width=40",
    verified: true,
    songTitle: "original sound - barstoolsports",
  },
  {
    id: "2",
    username: "creator",
    description: "Another amazing TikTok! #dance #viral",
    likes: "50.2K",
    comments: "892",
    bookmarks: "3240",
    shares: "12.1K",
    videoSrc: "/placeholder.mp4",
    userAvatar: "/placeholder.svg?height=40&width=40",
    songTitle: "original sound - creator",
  },
]

export default function TikTokFeed() {
  return (
    <div className="ml-[340px] snap-y snap-mandatory h-screen overflow-y-scroll">
      {mockPosts.map((post) => (
        <TikTokPost key={post.id} {...post} />
      ))}
    </div>
  )
}

