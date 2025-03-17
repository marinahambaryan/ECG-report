export default function SecurityPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 border-b border-black pb-3">
        🔐 Security & Compliance
      </h1>
      <p className="text-lg text-gray-800">
        The ECG Analysis System follows{" "}
        <strong>strict security measures</strong> to ensure{" "}
        <strong>data privacy, encryption, and role-based access control</strong>
        .
      </p>

      {/* Authentication & API Security */}
      <h2 className="text-2xl font-semibold mt-6">
        🔑 Authentication & API Security
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        To ensure <strong>secure API access</strong>, we implement:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>JWT Authentication:</strong> Users must send a valid{" "}
          <strong>JWT token</strong> with each request.
        </li>
        <li>
          <strong>OAuth2 Support:</strong> Enables{" "}
          <strong>secure third-party authentication</strong> (e.g., Google
          Sign-In).
        </li>
        <li>
          <strong>API Rate Limiting:</strong> Prevents{" "}
          <strong>brute-force attacks</strong> by limiting API calls per user.
        </li>
      </ul>

      {/* Role-Based Access Control (RBAC) */}
      <h2 className="text-2xl font-semibold mt-6">
        👥 Role-Based Access Control (RBAC)
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>RBAC restricts access</strong> to ECG reports based on the
        user's role:
      </p>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`{
"roles": [
  { "role": "doctor", "permissions": ["view_reports", "analyze_ecg"] },
  { "role": "patient", "permissions": ["view_own_reports"] },
  { "role": "admin", "permissions": ["manage_users", "delete_reports"] }
]
}`}
      </pre>

      {/* Data Encryption in MongoDB */}
      <h2 className="text-2xl font-semibold mt-6">
        🔒 Data Encryption in MongoDB
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>All ECG data is encrypted</strong> in MongoDB to prevent
        unauthorized access:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>Field-Level Encryption:</strong> Sensitive fields (e.g., ECG
          parameters) are encrypted before storage.
        </li>
        <li>
          <strong>Encryption at Rest:</strong> MongoDB uses{" "}
          <strong>AES-256 encryption</strong> for stored data.
        </li>
        <li>
          <strong>TLS Encryption in Transit:</strong> All communication between
          API and MongoDB is <strong>secured with TLS 1.2/1.3</strong>.
        </li>
      </ul>
      <p className="text-lg text-gray-800 mt-4">
        Example of **MongoDB Field-Level Encryption** for ECG reports:
      </p>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`db.ecg_reports.insertOne({
"patient_id": ObjectId("660987654321abcd"),
"ecg_data": {
  "heart_rate": 78,
  "pr_interval": 160
},
"encrypted_ecg_data": {
  "qrs_duration": encrypt(90, "AES-256"),
  "qt_interval": encrypt(400, "AES-256")
}
})`}
      </pre>

      {/* Audit Logging */}
      <h2 className="text-2xl font-semibold mt-6">
        📜 Audit Logging & Monitoring
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>All API requests and user actions are logged</strong> in MongoDB
        for security tracking:
      </p>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`db.audit_logs.insertOne({
"user_id": ObjectId("660987654321abcd"),
"action": "view_report",
"report_id": ObjectId("660123456789abcd"),
"timestamp": new Date()
})`}
      </pre>
      <p className="text-lg text-gray-800 mt-4">
        ✅ <strong>Logs every user access and report retrieval.</strong>✅{" "}
        <strong>Tracks unauthorized access attempts.</strong>✅{" "}
        <strong>
          Enables compliance with medical data regulations (HIPAA, GDPR).
        </strong>
      </p>

      {/* Secure File Uploads */}
      <h2 className="text-2xl font-semibold mt-6">📂 Secure File Uploads</h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>
          ECG reports uploaded by users go through a security validation
          process:
        </strong>
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>
          <strong>File Type Restriction:</strong> Only{" "}
          <strong>PDFs and images</strong> are allowed.
        </li>
        <li>
          <strong>Malware Scanning:</strong> Files are{" "}
          <strong>scanned for viruses before processing</strong>.
        </li>
        <li>
          <strong>Temporary Storage Handling:</strong> Files are{" "}
          <strong>deleted from temp storage after upload to S3</strong>.
        </li>
      </ul>

      {/* Real-Time Security Measures */}
      <h2 className="text-2xl font-semibold mt-6">
        ⏳ Real-Time Security Monitoring
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        ✅{" "}
        <strong>
          Monitors API traffic for unusual activity (DDoS detection).
        </strong>
        ✅ <strong>Automated alerts for unauthorized access attempts.</strong>✅{" "}
        <strong>Real-time logging of role-based access violations.</strong>
      </p>
    </div>
  );
}
