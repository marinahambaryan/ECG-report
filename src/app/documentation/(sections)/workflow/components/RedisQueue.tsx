export default function RedisQueue() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold border-b border-black pb-2">
        🔄 Redis Queue & Worker Processing
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>1️⃣ API pushes the Job ID</strong> to{" "}
        <strong>Redis (`ecg-processing-queue`)</strong>. <br />
        <strong>2️⃣ `ecgWorker` picks up the job</strong> and starts processing
        the ECG data. <br />
        <strong>3️⃣ Performs OCR & vectorization</strong> to extract key ECG
        parameters. <br />
        <strong>4️⃣ Prepares the vectorized ECG data</strong> for AI analysis.
      </p>
    </div>
  );
}
