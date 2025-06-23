import { connectToDatabase } from "./db";
import Video from "@/models/Video";
import { IVideo } from "@/models/Video";

export async function getVideos(): Promise<IVideo[]> {
  await connectToDatabase();
  const videos = await Video.find({}).lean();

  // Ensure each video matches the IVideo type
  return videos.map((video: any) => ({
    _id: video._id.toString(),
    title: video.title || "",
    description: video.description || "",
    videoUrl: video.videoUrl || "",
    thumbnailUrl: video.thumbnailUrl || "",
    controls: video.controls ?? true,
    // Add any other fields from IVideo here if needed
  }));
}