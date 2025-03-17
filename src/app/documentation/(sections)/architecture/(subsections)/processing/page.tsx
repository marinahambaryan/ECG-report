export default function Processing() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-4">⚙️ ECG Processing</h2>

      <p className="text-lg text-gray-800 mb-4">
        After an ECG file is uploaded, the system **extracts and vectorizes the
        waveform data** to make it usable for AI interpretation.
      </p>

      <h3 className="text-2xl font-semibold text-black mb-2">
        📌 OCR Extraction (PDF to Text)
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        The following snippet extracts text from ECG PDFs using
        **Tesseract.js**.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Next.js API Route: /app/api/ocr/route.ts
import { NextResponse } from "next/server";
import Tesseract from "tesseract.js";
import path from "path";

export async function POST(req: Request) {
    try {
        const { filePath } = await req.json();
        const absolutePath = path.resolve(filePath);

        // Perform OCR
        const { data: { text } } = await Tesseract.recognize(absolutePath, "eng");
        
        return NextResponse.json({ success: true, extractedText: text });
    } catch (error) {
        console.error("OCR Error:", error);
        return NextResponse.json({ success: false, message: "OCR processing failed" }, { status: 500 });
    }
}`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        📊 Vectorization (Convert ECG Waveform to Data)
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        ECG waveforms from PDFs are extracted into numerical arrays using
        **image processing**.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Utility Function: Vectorizing ECG Image
import cv from "opencv.js";

export function vectorizeECG(imagePath: string) {
    const img = cv.imread(imagePath); // Load image
    cv.cvtColor(img, img, cv.COLOR_BGR2GRAY); // Convert to grayscale

    const edges = new cv.Mat();
    cv.Canny(img, edges, 50, 150); // Edge detection for ECG waveform

    const vectorizedData = Array.from(edges.data); // Convert to numerical array
    img.delete();
    edges.delete();

    return vectorizedData;
}`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        🔍 Preprocessing (Normalization & Feature Extraction)
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        This step **normalizes and extracts critical ECG features** (e.g., heart
        rate, QRS duration).
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Preprocessing Function: Normalize ECG Data
export function preprocessECG(data: number[]) {
    const min = Math.min(...data);
    const max = Math.max(...data);

    // Normalize ECG values to [0, 1] range
    return data.map((val) => (val - min) / (max - min));
}

// Extract Features (Example: Peak Detection)
export function extractECGFeatures(data: number[]) {
    let peaks = 0;
    for (let i = 1; i < data.length - 1; i++) {
        if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
            peaks++;
        }
    }

    return { peakCount: peaks, avgAmplitude: data.reduce((a, b) => a + b, 0) / data.length };
}`}
      </pre>
    </div>
  );
}
