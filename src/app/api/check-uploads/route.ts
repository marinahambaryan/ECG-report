import { NextResponse } from "next/server";
import fs from "fs";
// import path from "path";

export async function GET() {
  try {
    const uploadDir = "/tmp/uploads";

    // const uploadDir = path.join(process.cwd(), "uploads");

    // Check if directory exists
    if (!fs.existsSync(uploadDir)) {
      return NextResponse.json({ filesExist: false });
    }

    // Check if there are any files inside
    const files = fs.readdirSync(uploadDir);
    const filesExist = files.length > 0;

    return NextResponse.json({ filesExist });
  } catch (error) {
    console.error("Check Uploads Error:", error);
    return NextResponse.json({ filesExist: false }, { status: 500 });
  }
}
