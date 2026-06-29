// // // // /* eslint-disable @typescript-eslint/no-explicit-any */
// // // // // // "use server";

// // // // // // import cloudinary from "@/app/lib/cloudinary";

// // // // // // export async function uploadImageAction(
// // // // // //   file: File
// // // // // // ): Promise<string> {
// // // // // //   const bytes = await file.arrayBuffer();

// // // // // //   const buffer = Buffer.from(bytes);

// // // // // //   return new Promise((resolve, reject) => {
// // // // // //     cloudinary.uploader
// // // // // //       .upload_stream(
// // // // // //         {
// // // // // //           folder: "friday-ai",
// // // // // //         },
// // // // // //         (error, result) => {
// // // // // //           if (error) {
// // // // // //             reject(error);
// // // // // //             return;
// // // // // //           }

// // // // // //           resolve(result!.secure_url);
// // // // // //         }
// // // // // //       )
// // // // // //       .end(buffer);
// // // // // //   });
// // // // // // }
// // // // // "use server";

// // // // // import cloudinary from "@/app/lib/cloudinary";

// // // // // export async function uploadImageAction(file: File) {
// // // // //   console.log({
// // // // //     cloud: process.env.CLOUDINARY_CLOUD_NAME,
// // // // //     key: process.env.CLOUDINARY_API_KEY,
// // // // //     secretExists: !!process.env.CLOUDINARY_API_SECRET,
// // // // //   });

// // // // //   const bytes = await file.arrayBuffer();
// // // // //   const buffer = Buffer.from(bytes);

// // // // //   return new Promise((resolve, reject) => {
// // // // //     const stream = cloudinary.uploader.upload_stream(
// // // // //       {
// // // // //         folder: "friday-ai",
// // // // //       },
// // // // //     //   (error, result) => {
// // // // //     //     console.log("ERROR =", error);
// // // // //     //     console.log("RESULT =", result);

// // // // //     //     if (error) {
// // // // //     //       reject(error);
// // // // //     //       return;
// // // // //     //     }

// // // // //     //     resolve(result!.secure_url);
// // // // //     //   }
// // // // //     (error, result) => {
// // // // //   console.log("ERROR =", JSON.stringify(error, null, 2));

// // // // //   if (error) {
// // // // //     reject(error);
// // // // //     return;
// // // // //   }

// // // // //   resolve(result!.secure_url);
// // // // // }
// // // // //     );

// // // // //     stream.end(buffer);
// // // // //   });
// // // // // }
// // // // "use server";

// // // // import cloudinary from "@/app/lib/cloudinary";

// // // // export async function uploadImageAction(file: File) {
// // // //     const result = await cloudinary.api.ping();

// // // //   console.log("cloudinary.api.ping==================>",result);

// // // //   const bytes = await file.arrayBuffer();
// // // //   const buffer = Buffer.from(bytes);

// // // //   try {
// // // //     const result = await new Promise<any>((resolve, reject) => {
// // // //       const stream = cloudinary.uploader.upload_stream(
// // // //         {
// // // //           folder: "friday-ai",
// // // //         },
// // // //         (error, result) => {
// // // //           if (error) {
// // // //             console.log("FULL ERROR", JSON.stringify(error, null, 2));
// // // //             reject(error);
// // // //             return;
// // // //           }

// // // //           resolve(result);
// // // //         }
// // // //       );

// // // //       stream.end(buffer);
// // // //     });

// // // //     console.log("UPLOAD SUCCESS", result);

// // // //     return result.secure_url;
// // // //   } catch (e) {
// // // //     console.log(e);
// // // //     throw e;
// // // //   }
// // // // }

// // // "use server";

// // // import cloudinary from "@/app/lib/cloudinary";

// // // export async function uploadImageAction(file: File) {
// // //   const arrayBuffer = await file.arrayBuffer();

// // //   const buffer = Buffer.from(arrayBuffer);

// // //   try {
// // //     const result = await new Promise<any>((resolve, reject) => {
// // //       const stream = cloudinary.uploader.upload_stream(
// // //         {
// // //           folder: "friday-ai",
// // //           resource_type: "image",
// // //         },
// // //         (error, result) => {
// // //           if (error) return reject(error);

// // //           resolve(result);
// // //         }
// // //       );

// // //       stream.end(buffer);
// // //     });

// // //     console.log("UPLOAD SUCCESS =", result);

// // //     return result.secure_url;
// // //   } catch (err) {
// // //     console.log("UPLOAD ERROR =", JSON.stringify(err, null, 2));
// // //     throw err;
// // //   }
// // // }
// // "use server";

// // import cloudinary from "@/app/lib/cloudinary";

// // export async function uploadFileAction(
// //   file: File
// // ): Promise<{
// //   url: string;
// //   type: string;
// // }> {
// //   const bytes = await file.arrayBuffer();

// //   const buffer = Buffer.from(bytes);

// //   return new Promise((resolve, reject) => {
// //     const stream = cloudinary.uploader.upload_stream(
// //       {
// //         folder: "friday-ai",
// //         resource_type: "auto",
// //       },
// //       (error, result) => {
// //         if (error) {
// //           reject(error);
// //           return;
// //         }

// //         resolve({
// //           url: result!.secure_url,
// //           type: result!.resource_type,
// //         });
// //       }
// //     );

// //     stream.end(buffer);
// //   });
// // }
// "use server";

// import cloudinary from "@/app/lib/cloudinary";

// export async function uploadFileAction(file: File) {
//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   const isPdf = file.type === "application/pdf";

//   return new Promise<{
//     url: string;
//     type: "image" | "pdf";
//   }>((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       {
//         folder: "friday-ai",
//         resource_type: isPdf ? "raw" : "image",
//       },
//       (error, result) => {
//         if (error || !result) {
//           reject(error);
//           return;
//         }

//         resolve({
//           url: result.secure_url,
//           type: isPdf ? "pdf" : "image",
//         });
//       }
//     );

//     stream.end(buffer);
//   });
// }
"use server";

import cloudinary from "@/app/lib/cloudinary";

export async function uploadFileAction(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const isPdf = file.type === "application/pdf";

  return new Promise<{
    fileUrl: string;
    fileType: "image" | "pdf";
  }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "friday-ai",
        resource_type: isPdf ? "raw" : "image",
      },
      (error, result) => {
        if (error || !result) {
          reject(error);
          return;
        }

        resolve({
          fileUrl: result.secure_url,
          fileType: isPdf ? "pdf" : "image",
        });
      }
    );

    stream.end(buffer);
  });
}