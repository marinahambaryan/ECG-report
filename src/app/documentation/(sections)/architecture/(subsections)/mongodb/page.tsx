export default function MongoDBSchema() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-4">
        🗄 MongoDB Data Structure
      </h2>

      <p className="text-lg text-gray-800 mb-4">
        The ECG Analysis System uses **MongoDB** to store user data, ECG
        reports, AI-generated results, and job queues.
      </p>

      <h3 className="text-2xl font-semibold text-black mb-2">📌 User Schema</h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`{
    "_id": ObjectId("660abc123456def"),
    "name": "Dr. John Doe",
    "email": "johndoe@example.com",
    "password": "hashed_password",
    "role": "doctor",
    "createdAt": "2024-03-20T12:00:00Z"
  }`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        📌 ECG Report Schema
      </h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`{
    "_id": ObjectId("660def789012abc"),
    "userId": ObjectId("660abc123456def"),
    "fileUrl": "s3://ecg-reports/report1.pdf",
    "uploadedAt": "2024-03-20T12:10:00Z",
    "status": "completed"
  }`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        📌 AI Interpretation Schema
      </h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`{
    "_id": ObjectId("661ghi456789jkl"),
    "reportId": ObjectId("660def789012abc"),
    "vectorizedData": {
      "lead_1": [0.12, 0.18, -0.04, 0.09],
      "lead_2": [0.15, 0.17, -0.03, 0.08]
    },
    "diagnosis": "Normal sinus rhythm",
    "confidenceScore": 98.7,
    "recommendations": ["Maintain a healthy lifestyle", "Follow up in 6 months"],
    "createdAt": "2024-03-20T12:15:00Z"
  }`}
      </pre>
    </div>
  );
}
