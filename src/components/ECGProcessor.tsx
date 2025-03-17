"use client";
import { useState } from "react";
import Uploader from "@/components/Uploader";
import ECGResult from "@/components/ECGResult";
import ClearUploads from "@/components/ClearUploads";

export default function ECGProcessor() {
  const [ecgResult, setEcgResult] = useState<any>(null);

  return (
    <div className="flex flex-col items-center justify-center">
      <Uploader onUploadComplete={(data) => setEcgResult(data)} />
      {ecgResult && <ECGResult ecgResult={ecgResult} />}

      {/* Cleanup button below the uploader */}
      <div className="fixed left-4 top-20">
        <ClearUploads />
      </div>
    </div>
  );
}
