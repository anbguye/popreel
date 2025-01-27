import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TikTok Clone",
  description: "A TikTok clone created with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 max-h-screen overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}

