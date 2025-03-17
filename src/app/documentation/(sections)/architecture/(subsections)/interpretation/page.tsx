export default function Interpretation() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-4">
        🧠 AI Interpretation
      </h2>

      <p className="text-lg text-gray-800 mb-4">
        The AI model analyzes ECG data and generates human-readable diagnoses,
        explaining findings in a way that is understandable for both doctors and
        patients.
      </p>

      <h3 className="text-2xl font-semibold text-black mb-2">
        📌 AI Model Interpretation Process
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        The AI model processes **vectorized ECG data**, detects abnormalities,
        and formats findings into a structured report.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Next.js API Route: /app/api/interpret/route.ts
import { NextResponse } from "next/server";
import { interpretECG } from "@/lib/aiModel";

export async function POST(req: Request) {
    try {
        const { vectorizedData } = await req.json();
        if (!vectorizedData) return NextResponse.json({ success: false, message: "Missing ECG data" });

        // Generate AI interpretation
        const interpretation = await interpretECG(vectorizedData);

        return NextResponse.json({ success: true, interpretation });
    } catch (error) {
        console.error("Interpretation Error:", error);
        return NextResponse.json({ success: false, message: "AI interpretation failed" }, { status: 500 });
    }
}`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        📝 AI Interpretation Logic
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        The function below **translates ECG numerical data** into human-readable
        text.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// AI Interpretation Function
export async function interpretECG(vectorizedData: Record<string, number[]>) {
    // Simulated AI model logic (this would use a real ML model)
    const diagnosis = vectorizedData.lead_1.some(value => value > 1.5)
        ? "Potential Arrhythmia Detected"
        : "Normal Sinus Rhythm";

    const recommendations = diagnosis === "Potential Arrhythmia Detected"
        ? ["Consult a cardiologist", "Consider further ECG tests"]
        : ["Maintain a healthy lifestyle"];

    return {
        diagnosis,
        confidenceScore: Math.random() * (100 - 85) + 85, // Confidence between 85% - 100%
        recommendations
    };
}`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        📄 Example Human-Readable Output
      </h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`{
  "diagnosis": "Potential Arrhythmia Detected",
  "confidenceScore": 92.5,
  "recommendations": [
    "Consult a cardiologist",
    "Consider further ECG tests"
  ]
}`}
      </pre>
    </div>
  );
}
