export default function ReportRetrieval() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold border-b border-black pb-2">
        📄 Report Retrieval
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>1️⃣ User requests report</strong> from API (`/api/report/
        {"jobId"}
        `). <br />
        <strong>2️⃣ Checks Redis cache first</strong> for fast retrieval. <br />
        <strong>3️⃣ If not cached, fetches from MongoDB</strong> and updates
        cache. <br />
        <strong>4️⃣ Returns structured ECG report</strong> to frontend.
      </p>
    </div>
  );
}
