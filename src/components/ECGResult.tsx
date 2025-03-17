"use client";

export default function ECGResult({ ecgResult }: { ecgResult: any }) {
  return (
    <div className="mt-6 p-6 border border-black rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">
        🩺 AI Interpretation
      </h2>
      <p className="mt-2">
        <strong>Analysis:</strong> {ecgResult.aiResponse.interpretation}
      </p>
      <p>
        <strong>Confidence Score:</strong>{" "}
        {ecgResult.aiResponse.confidence_score}%
      </p>
      <ul className="mt-2 text-gray-700">
        {ecgResult.aiResponse.recommendations.map(
          (rec: string, index: number) => (
            <li key={index} className="mt-1">
              ✅ {rec}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
