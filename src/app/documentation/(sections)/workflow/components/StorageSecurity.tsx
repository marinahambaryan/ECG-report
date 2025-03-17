export default function StorageSecurity() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold border-b border-black pb-2">
        🔐 Secure Storage & Encryption
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>
          1️⃣ Stores extracted ECG data & AI interpretation in MongoDB.
        </strong>{" "}
        <br />
        <strong>2️⃣ Applies AES-256 encryption</strong> for stored ECG reports.{" "}
        <br />
        <strong>3️⃣ Uses Role-Based Access Control (RBAC)</strong> for security.
      </p>
    </div>
  );
}
