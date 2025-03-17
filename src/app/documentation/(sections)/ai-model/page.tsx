export default function AIModelPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 border-b border-black pb-3">
        🤖 AI Model Strategy
      </h1>
      <p className="text-lg text-gray-800">
        The ECG Analysis System processes and interprets ECG reports using{" "}
        <strong>Next.js API routes</strong>. AI-powered analysis converts **raw
        ECG data** into **structured insights**, helping doctors and patients
        understand results more clearly.
      </p>

      {/* How ECG Data is Processed */}
      <h2 className="text-2xl font-semibold mt-6">
        🔍 How is ECG Data Processed?
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        The AI pipeline is entirely managed inside{" "}
        <strong>Next.js API routes (`/api/process`)</strong> and follows these
        steps:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>File Upload:</strong> Users upload{" "}
          <strong>ECG PDFs or images</strong> via the frontend.
        </li>
        <li>
          <strong>OCR & Vectorization:</strong> The Next.js API extracts ECG
          waveforms and **converts them into structured vectors**.
        </li>
        <li>
          <strong>Feature Extraction:</strong> The API extracts key ECG
          parameters like{" "}
          <strong>heart rate, PR interval, and QRS duration</strong>.
        </li>
        <li>
          <strong>AI Model Analysis:</strong> The API calls an **internal AI
          function** to analyze the vectorized ECG data.
        </li>
        <li>
          <strong>Report Storage:</strong> The AI-generated ECG interpretation
          is securely stored in <strong>MongoDB</strong>.
        </li>
      </ul>

      {/* AI Processing Inside Next.js API */}
      <h2 className="text-2xl font-semibold mt-6">
        🚀 AI Processing Inside Next.js API
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        The AI model is executed **directly in the Next.js API**, eliminating
        the need for an external backend.
      </p>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Next.js API Route: /api/process/route.ts
import { NextResponse } from "next/server";
import { processECG } from "@/lib/ai"; // Internal AI function

export async function POST(req: Request) {
  const { fileUrl } = await req.json();
  
  // Extract ECG features and analyze data
  const ecgData = await extractECGData(fileUrl);
  const aiResult = await processECG(ecgData);
  
  return NextResponse.json({ success: true, analysis: aiResult });
}`}
      </pre>

      {/* Why Use OCR for ECG Processing? */}
      <h2 className="text-2xl font-semibold mt-6">
        📄 Why Use OCR for ECG Processing?
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        Many ECG reports are stored as <strong>PDFs or images</strong>. To
        convert them into **structured data**, the Next.js API applies{" "}
        <strong>Optical Character Recognition (OCR)</strong> to extract ECG
        parameters.
      </p>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Next.js AI Processing Function (lib/ai.ts)
import pytesseract from "pytesseract";
import { convert_from_path } from "pdf2image";

export async function extractECGData(fileUrl: string) {
  const images = convert_from_path(fileUrl);
  const text = pytesseract.image_to_string(images[0]);
  return parseECGText(text);
}`}
      </pre>

      {/* Storing AI Reports in MongoDB */}
      <h2 className="text-2xl font-semibold mt-6">
        📂 Storing AI Reports in MongoDB
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        AI-generated reports are securely stored inside <strong>MongoDB</strong>{" "}
        with **AES-256 encryption**.
      </p>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Example MongoDB ECG Report
{
"_id": ObjectId("660abc123456def"),
"patient_id": ObjectId("660987654321abcd"),
"vectorized_ecg": {
  "lead_1": [0.12, 0.18, -0.04, 0.09],
  "lead_2": [0.15, 0.17, -0.03, 0.08]
},
"ai_prediction": "Normal sinus rhythm with no abnormalities detected.",
"confidence_score": 98.7
}`}
      </pre>

      {/* Ensuring AI Accuracy */}
      <h2 className="text-2xl font-semibold mt-6">
        ✅ Ensuring AI Accuracy & Explainability
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        AI-generated ECG reports must be{" "}
        <strong>accurate and explainable</strong>. The system ensures:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>Supervised Learning:</strong> The model is trained on{" "}
          <strong>real ECG datasets</strong> annotated by cardiologists.
        </li>
        <li>
          <strong>Confidence Scores:</strong> Each prediction includes a{" "}
          <strong>confidence level</strong>.
        </li>
        <li>
          <strong>Explainability:</strong> The AI highlights **which ECG
          features contributed to the final decision**.
        </li>
      </ul>

      {/* Retrieval-Augmented Generation (RAG) */}
      <h2 className="text-2xl font-semibold mt-6">
        🔍 Retrieval-Augmented Generation (RAG)
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        The system uses <strong>Retrieval-Augmented Generation (RAG)</strong> to
        **provide evidence-based explanations** for AI predictions.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>Retrieves similar ECG cases</strong> from a knowledge base.
        </li>
        <li>
          <strong>Combines retrieved evidence</strong> with new patient data.
        </li>
        <li>
          <strong>Doctors receive contextualized ECG interpretations</strong>{" "}
          backed by medical literature.
        </li>
      </ul>

      {/* AI Model Performance Monitoring */}
      <h2 className="text-2xl font-semibold mt-6">
        📊 AI Model Performance & Monitoring
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        The AI system is continuously monitored for:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>Model Accuracy:</strong> Predictions are validated against{" "}
          <strong>real patient data</strong>.
        </li>
        <li>
          <strong>Bias Detection:</strong> AI is tested to avoid{" "}
          <strong>age, gender, or health condition bias</strong>.
        </li>
        <li>
          <strong>Continuous Learning:</strong> AI is{" "}
          <strong>fine-tuned using new ECG cases</strong>.
        </li>
      </ul>

      {/* Compliance with Medical Standards */}
      <h2 className="text-2xl font-semibold mt-6">
        📜 Compliance with Medical Standards
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        The AI-powered ECG analysis system follows:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>
            HIPAA (Health Insurance Portability and Accountability Act)
          </strong>{" "}
          – Protects <strong>patient data</strong>.
        </li>
        <li>
          <strong>GDPR (General Data Protection Regulation)</strong> – Ensures{" "}
          <strong>privacy and security</strong>.
        </li>
        <li>
          <strong>FDA AI/ML Guidelines:</strong> AI meets{" "}
          <strong>explainability and accuracy standards</strong>.
        </li>
      </ul>
    </div>
  );
}
