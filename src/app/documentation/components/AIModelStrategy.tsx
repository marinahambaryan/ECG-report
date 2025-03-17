export default function AIModelStrategy() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-4">
        🤖 AI Model Strategy
      </h2>

      <p className="text-lg text-gray-800 mb-4">
        The AI-powered ECG Analysis System extracts and processes ECG data using
        advanced **machine learning models**.
      </p>

      <h3 className="text-2xl font-semibold text-black mb-2">
        📌 How the AI Model Works
      </h3>
      <ul className="list-disc list-inside text-gray-800 text-lg ml-6">
        <li>
          <strong>OCR & Vectorization:</strong> Extracts waveform data and
          text-based features.
        </li>
        <li>
          <strong>Feature Extraction:</strong> Identifies critical ECG
          parameters such as **heart rate, QRS duration, and ST-segment
          elevation.**
        </li>
        <li>
          <strong>Deep Learning Model:</strong> Classifies ECG conditions and
          provides a human-readable interpretation.
        </li>
        <li>
          <strong>Medical Explainability:</strong> Uses{" "}
          <strong>retrieval-augmented generation (RAG)</strong> to enhance AI
          explanations with case studies.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        🔬 AI Accuracy & Validation
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        The system continuously improves accuracy through:
      </p>
      <ul className="list-disc list-inside text-gray-800 text-lg ml-6">
        <li>
          <strong>Supervised Learning:</strong> Training on real-world ECG
          datasets annotated by cardiologists.
        </li>
        <li>
          <strong>Confidence Scores:</strong> Each AI-generated report includes
          confidence levels.
        </li>
        <li>
          <strong>Bias Detection:</strong> Ensuring that AI predictions are fair
          across age, gender, and health conditions.
        </li>
      </ul>
    </div>
  );
}
