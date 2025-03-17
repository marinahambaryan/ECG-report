export default function AIProcessing() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold border-b border-black pb-2">
        🤖 AI Model Processing
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>
          1️⃣ AI model (BioGPT / Med-PaLM) analyzes the vectorized ECG data.
        </strong>{" "}
        <br />
        <strong>2️⃣ Generates AI-driven interpretation</strong> with confidence
        scores. <br />
        <strong>3️⃣ Stores AI report in MongoDB</strong> for retrieval.
      </p>
    </div>
  );
}
