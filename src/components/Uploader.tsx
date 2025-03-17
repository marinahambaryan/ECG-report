"use client";
import { useState } from "react";

export default function Uploader({
  onUploadComplete,
}: {
  onUploadComplete: (response: any) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    // Step 1: Upload File
    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadRes.json();
    if (!uploadData.success) {
      setMessage("File upload failed.");
      setLoading(false);
      return;
    }

    // Step 2: Process ECG Data
    const processRes = await fetch("/api/process", {
      method: "POST",
      body: JSON.stringify({ filePath: uploadData.filePath }),
      headers: { "Content-Type": "application/json" },
    });
    const processData = await processRes.json();
    onUploadComplete(processData);
    setMessage("ECG analysis completed.");
    setLoading(false);
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md w-96 border border-black">
      <h2 className="text-xl font-semibold mb-4 text-black">
        Upload ECG Report
      </h2>

      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-black border-dashed rounded-lg hover:bg-gray-100 transition">
        <input
          type="file"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        {file ? (
          <p className="text-sm text-black">{file.name}</p>
        ) : (
          <p className="text-sm text-gray-600">Click to select file</p>
        )}
      </label>

      <button
        onClick={handleUpload}
        className={`mt-4 w-full font-bold py-2 px-4 rounded transition ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-900"
        }`}
        disabled={loading}
      >
        {loading ? "Processing..." : "Upload & Analyze"}
      </button>

      {message && <p className="mt-4 text-green-600 text-sm">{message}</p>}
    </div>
  );
}
