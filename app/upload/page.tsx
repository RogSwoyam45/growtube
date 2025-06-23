import VideoUploadForm from "../components/VideoUploadForm";

export default function UploadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-base-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 mt-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Upload a Video</h1>
        <VideoUploadForm />
      </div>
    </div>
  );
}