export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 border-b border-black pb-3">
        🛠 System Architecture
      </h1>
      <p className="text-lg text-gray-800">
        The ECG Analysis System is built using{" "}
        <strong>Next.js API routes</strong> to handle
        <strong>
          ECG report processing, AI-based interpretation, and secure data
          management
        </strong>
        .
      </p>

      {/* Section: Data Flow & Components */}
      <h2 className="text-2xl font-semibold mt-6">📌 Data Flow & Components</h2>
      <p className="text-lg text-gray-800 mt-4">
        The system consists of the following key components:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
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

      {/* Section: Next.js API as Backend */}
      <h2 className="text-2xl font-semibold mt-6">
        🌐 Next.js API as the Backend
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        Instead of using a separate backend (e.g., FastAPI or Node.js), this
        system utilizes <strong>Next.js API routes</strong> (`/api/*`) to
        manage:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>ECG File Upload & Validation</strong> (`/api/upload`)
        </li>
        <li>
          <strong>Job Queue Management (Redis)</strong> (`/api/jobs`)
        </li>
        <li>
          <strong>ECG Processing & AI Model Execution</strong> (`/api/process`)
        </li>
        <li>
          <strong>Real-time Progress Updates via SSE</strong> (`/api/progress/
          {"jobId"}`)
        </li>
        <li>
          <strong>Fetching AI-Generated Reports</strong> (`/api/report/{"jobId"}
          `)
        </li>
      </ul>

      {/* Section: Secure Data Handling */}
      <h2 className="text-2xl font-semibold mt-6">🔐 Secure Data Handling</h2>
      <p className="text-lg text-gray-800 mt-4">
        The system ensures compliance with <strong>HIPAA & GDPR</strong> by
        implementing:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>AES-256 Encryption:</strong> Protects stored ECG data.
        </li>
        <li>
          <strong>Role-Based Access Control (RBAC):</strong> Restricts access to
          reports.
        </li>
        <li>
          <strong>JWT Authentication:</strong> Ensures secure API requests.
        </li>
        <li>
          <strong>Audit Logging:</strong> Tracks access and modifications.
        </li>
      </ul>
    </div>
  );
}
