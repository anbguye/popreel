export interface TikTokPost {
  id: string;
  username: string;
  description: string;
  likes: string;
  comments: string;
  bookmarks: string;
  shares: string;
  videoSrc: string;
  userAvatar: string;
  verified?: boolean;
  songTitle: string;
}

const basePostTemplates = [
  {
    username: "barstoolsports",
    description: "The spinning 🍜 @You Gotta Try This (via:@Cyrus Banks )",
    likes: "149.6K",
    comments: "1171",
    bookmarks: "7010",
    shares: "29.5K",
    videoSrc:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=barstool",
    verified: true,
    songTitle: "original sound - barstoolsports",
  },
  {
    username: "danceking",
    description: "When the beat drops 🔥 #dance #viral",
    likes: "50.2K",
    comments: "892",
    bookmarks: "3240",
    shares: "12.1K",
    videoSrc:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dance",
    songTitle: "DANCE - Original Mix",
  },
  {
    username: "travelvibes",
    description: "Paradise found in Bali 🌴 #travel #wanderlust",
    likes: "203K",
    comments: "1.5K",
    bookmarks: "15K",
    shares: "8.2K",
    videoSrc:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=travel",
    verified: true,
    songTitle: "Tropical Vibes - Summer Mix",
  },
];

export async function fetchPosts(page: number = 1): Promise<TikTokPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.log("Fetching posts for page:", page);

  // Generate unique posts for each page by adding page-specific IDs
  const posts = basePostTemplates.map((template, index) => ({
    ...template,
    id: `${page}-${index + 1}`, // This ensures unique IDs across pages
  }));

  console.log("Generated posts:", posts);
  return posts;
}
