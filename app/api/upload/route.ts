import { NextResponse } from "next/server";
import cloudinary from "@/app/lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      {
        folder: "friday-ai",
      }
    );

    return NextResponse.json({
      success: true,
      secure_url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error: any) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
        http_code: error.http_code,
        name: error.name,
        error,
      },
      { status: 500 }
    );
  }
}