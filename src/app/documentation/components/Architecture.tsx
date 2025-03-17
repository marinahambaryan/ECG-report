export default function Architecture() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-4">
        🛠 System Architecture
      </h2>

      <p className="text-lg text-gray-800 mb-4">
        The <strong>ECG Analysis System</strong> is built using{" "}
        <strong>Next.js API routes</strong> to handle ECG report processing,
        AI-based interpretation, and secure data management.
      </p>

      <h3 className="text-2xl font-semibold text-black mb-2">
        📌 Data Flow & Components
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        The system consists of the following key components:
      </p>
      <ul className="list-disc list-inside text-gray-800 text-lg ml-6">
        <li>
          <strong>Next.js API Routes:</strong> Manage all requests, from file
          uploads to AI-generated reports.
        </li>
        <li>
          <strong>File Storage (S3):</strong> Stores raw ECG PDFs and images
          securely.
        </li>
        <li>
          <strong>Redis Queue:</strong> Handles background processing of ECG
          reports asynchronously.
        </li>
        <li>
          <strong>AI Model:</strong> Processes ECG vectorized data and generates
          human-readable interpretations.
        </li>
        <li>
          <strong>MongoDB Database:</strong> Stores structured ECG parameters
          and AI interpretations.
        </li>
        <li>
          <strong>Security Layer:</strong> Ensures encryption, RBAC, and API
          authentication.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        🌐 Next.js API as the Backend
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        Instead of using a separate backend (e.g., FastAPI or Node.js), this
        system leverages <strong>Next.js API routes (`/api/*`)</strong> for:
      </p>
      <ul className="list-disc list-inside text-gray-800 text-lg ml-6">
        <li>
          <strong>ECG File Upload & Validation:</strong>{" "}
          <code>/api/upload</code>
        </li>
        <li>
          <strong>Job Queue Management (Redis):</strong> <code>/api/jobs</code>
        </li>
        <li>
          <strong>ECG Processing & AI Model Execution:</strong>{" "}
          <code>/api/process</code>
        </li>
        <li>
          <strong>Real-time Progress Updates via SSE:</strong>{" "}
          <code>/api/progress/jobId</code>
        </li>
        <li>
          <strong>Fetching AI-Generated Reports:</strong>{" "}
          <code>/api/report/jobId</code>
        </li>
      </ul>
    </div>
  );
}
