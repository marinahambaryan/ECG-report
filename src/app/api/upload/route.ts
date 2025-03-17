import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    // Ensure uploads directory exists
    // const uploadDir = path.join(process.cwd(), "uploads");
    const uploadDir = "/tmp/uploads";

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save file to local uploads folder
    const filePath = path.join(uploadDir, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      filePath,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { success: false, message: "File upload failed" },
      { status: 500 }
    );
  }
}
