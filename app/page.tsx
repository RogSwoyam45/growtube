import Image from "next/image";
import VideoFeed from "./components/VideoFeed";
import { getVideos } from "@/lib/getVideos";

export default async function Home() {
  // Replace this with your actual data fetching logic
  const videos = await getVideos(); // getVideos should fetch an array of IVideo

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Latest Videos</h1>
      <VideoFeed videos={videos} />
    </div>
  );
}
