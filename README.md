
(can maybe finish missing items in the project if it's not finished so that your project is a complete project and not a half-baked project)


# PopReel

PopReel is a modern video-sharing platform inspired by TikTok, built with Next.js 14 and TypeScript. It features a sleek, responsive design and smooth video playback experience.

## Features

- 📱 Responsive design that works on both desktop and mobile
- 🎥 Smooth video playback with autoplay on scroll
- 🔊 Advanced volume controls with memory feature
- ❤️ Interactive elements (like, bookmark, share)
- 🎨 Beautiful gradient UI elements
- 🔄 Infinite scroll for continuous content
- 🎵 Song attribution and user verification badges
- 🌓 Dark mode optimized interface

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **State Management**: React Hooks

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/popreel.git
cd popreel
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/lib` - Utility functions and data services
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration

## Key Components

- `TikTokPost` - Main video player component with interactive features
- `TikTokFeed` - Infinite scroll feed with intersection observer
- `Sidebar` - Navigation and user interface component

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by TikTok
- Video content from Google Cloud Storage sample videos
- Avatar generation by DiceBear API

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
