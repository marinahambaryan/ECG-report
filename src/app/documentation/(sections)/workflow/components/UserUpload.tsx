export default function UserUpload() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold border-b border-black pb-2">
        📤 User Upload & API Request
      </h2>
      <p className="text-lg text-gray-800 mt-4">
        <strong>1️⃣ User selects an ECG PDF/Image.</strong> <br />
        <strong>2️⃣ Clicks &quot;Upload&quot;</strong> → Sends a{" "}
        <strong>POST request</strong> to{" "}
        <strong>Next.js API (`/api/upload`)</strong>. <br />
        <strong>3️⃣ API validates the file & checks security</strong> before
        processing.
      </p>
    </div>
  );
}
