
// import { NextResponse } from "next/server";
// import cloudinary from "@/app/lib/cloudinary";

// export async function GET() {
//   try {
//     const result = await cloudinary.uploader.upload(
//       "https://res.cloudinary.com/demo/image/upload/sample.jpg"
//     );

//     return NextResponse.json(result);
//   } catch (e) {
//     console.dir(e, { depth: null });
//     return NextResponse.json(e);
//   }
// }
import { NextResponse } from "next/server";
import cloudinary from "@/app/lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    );

    return NextResponse.json(result);
  } catch (err) {
    console.log(err);

    return NextResponse.json(err);
  }
}