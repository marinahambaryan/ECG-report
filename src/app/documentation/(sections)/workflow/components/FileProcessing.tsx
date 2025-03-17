export default function FileProcessing() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold border-b border-black pb-2">
        📂 File Validation & Storage
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>1️⃣ Validates file type & size</strong> (PDF, PNG, JPEG). <br />
        <strong>2️⃣ Scans for malware</strong> before processing. <br />
        <strong>3️⃣ Uploads file to AWS S3</strong> for secure storage. <br />
        <strong>4️⃣ Generates a Job ID</strong> and sends to Redis Queue for
        processing.
      </p>
    </div>
  );
}
