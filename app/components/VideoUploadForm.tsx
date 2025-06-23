"use client";
import { useState } from "react";
import FileUpload from "./FIleUpload";

export default function VideoUploadForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleUploadSuccess = (res: any) => {
    setVideoUrl(res.url || "");
    alert("Video uploaded successfully!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send title, description, and videoUrl to your backend
    alert(`Title: ${title}\nDescription: ${description}\nVideo URL: ${videoUrl}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          className="input input-bordered w-full"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          className="textarea textarea-bordered w-full"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Video File</label>
        <FileUpload onSuccess={handleUploadSuccess} fileType="video" />
        {videoUrl && (
          <p className="text-green-600 text-sm mt-2">Video uploaded!</p>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={!videoUrl}
      >
        Submit
      </button>
    </form>
  );
}