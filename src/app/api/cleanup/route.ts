import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { uploadDir } from "@/app/lib/utils";

export async function DELETE() {
  try {
    // Check if directory exists
    if (!fs.existsSync(uploadDir)) {
      return NextResponse.json(
        { success: false, message: "Uploads directory does not exist" },
        { status: 404 }
      );
    }

    // Delete all files in the uploads directory
    fs.readdirSync(uploadDir).forEach((file) => {
      const filePath = path.join(uploadDir, file);
      fs.unlinkSync(filePath); // Delete each file
    });

    return NextResponse.json({
      success: true,
      message: "All files deleted successfully",
    });
  } catch (error) {
    console.error("Cleanup Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete files" },
      { status: 500 }
    );
  }
}
