"use client";
import { useState, useEffect } from "react";

export default function ClearUploads() {
  const [filesExist, setFilesExist] = useState(false);

  const checkUploads = async () => {
    const res = await fetch("/api/check-uploads");
    const data = await res.json();
    setFilesExist(data.filesExist);
  };

  useEffect(() => {
    if (!filesExist) {
      checkUploads();

      const interval = setInterval(() => {
        checkUploads();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [filesExist]);

  const handleCleanup = async () => {
    const res = await fetch("/api/cleanup", { method: "DELETE" });
    const data = await res.json();
    alert(data.message);
    setFilesExist(false); // Hide button after cleanup
  };

  return (
    <div className="mt-6">
      {filesExist && (
        <button
          onClick={handleCleanup}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Delete All Uploads
        </button>
      )}
    </div>
  );
}
