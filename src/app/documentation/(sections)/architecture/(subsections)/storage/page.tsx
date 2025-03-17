export default function S3Storage() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-4">☁️ S3 File Storage</h2>

      <p className="text-lg text-gray-800 mb-4">
        **Amazon S3** is used for storing uploaded ECG PDFs and images securely.
        The system uploads files to an **S3 bucket** and retrieves them when
        needed for processing.
      </p>

      <h3 className="text-2xl font-semibold text-black mb-2">
        📌 Example S3 File Structure
      </h3>
      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`s3://ecg-reports/
   ├── user_660abc123456def/
   │   ├── report1.pdf
   │   ├── report2.png
`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        📤 Uploading Files to S3
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        The following code snippet demonstrates how to upload files to **AWS
        S3** using a **Next.js API route**.
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`// Next.js API Route: /app/api/upload/route.ts
import { NextResponse } from "next/server";
import AWS from "aws-sdk";

// Configure AWS SDK
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        
        if (!file) {
            return NextResponse.json({ success: false, message: "No file uploaded" });
        }

        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const fileName = \`uploads/\${Date.now()}-\${file.name}\`;

        // Upload file to S3
        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileName,
            Body: fileBuffer,
            ContentType: file.type
        };

        const uploadResult = await s3.upload(params).promise();

        return NextResponse.json({
            success: true,
            fileUrl: uploadResult.Location
        });
    } catch (error) {
        console.error("S3 Upload Error:", error);
        return NextResponse.json({ success: false, message: "File upload failed" }, { status: 500 });
    }
}`}
      </pre>

      <h3 className="text-2xl font-semibold text-black mt-6 mb-2">
        ⚙️ Configuring AWS Credentials
      </h3>
      <p className="text-lg text-gray-800 mb-4">
        Ensure you have the following **environment variables** set in your
        **`.env.local`** file:
      </p>

      <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
        {`AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_s3_region
AWS_S3_BUCKET_NAME=your_bucket_name
`}
      </pre>
    </div>
  );
}
