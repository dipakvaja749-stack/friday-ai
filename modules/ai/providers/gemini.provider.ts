// // // // // // // import { GoogleGenAI } from "@google/genai";

// // // // // // // const ai = new GoogleGenAI({
// // // // // // //   apiKey: process.env.GEMINI_API_KEY!,
// // // // // // // });

// // // // // // // export class GeminiProvider {
// // // // // // //   async generate(prompt: string) {
// // // // // // //     const response = await ai.models.generateContent({
// // // // // // //       model: "gemini-2.5-flash",
// // // // // // //       contents: prompt,
// // // // // // //     });

// // // // // // //     return response.text;
// // // // // // //   }
// // // // // // // }

// // // // // // import { GoogleGenAI } from "@google/genai";

// // // // // // const ai = new GoogleGenAI({
// // // // // //   apiKey: process.env.GEMINI_API_KEY!,
// // // // // // });
// // // // // // console.log("api_key ::->",process.env.GEMINI_API_KEY);
// // // // // // export class GeminiProvider {
// // // // // //   async generate(prompt: string) {
// // // // // //     try {
// // // // // //       const response = await ai.models.generateContent({
// // // // // //         model: "gemini-2.5-flash",
// // // // // //         contents: prompt,
// // // // // //       });

// // // // // //       return response.text ?? "No response generated.";
// // // // // //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // // // // //     } catch (error: any) {
// // // // // //       console.error("Gemini Error:", error);

// // // // // //       return "AI service is temporarily unavailable. Please try again later.";
// // // // // //     }
// // // // // //   }
// // // // // // }

// // // // // // import { GoogleGenAI } from "@google/genai";

// // // // // // const ai = new GoogleGenAI({
// // // // // //   apiKey: process.env.GEMINI_API_KEY!,
// // // // // // });

// // // // // // export class GeminiProvider {
// // // // // //   async generate(prompt: string) {
// // // // // //     try {
// // // // // //       const response = await ai.models.generateContent({
// // // // // //         model: "gemini-2.5-flash",
// // // // // //         contents: prompt,
// // // // // //       });

// // // // // //       return response.text ?? "No response";
// // // // // //     } catch (error) {
// // // // // //       console.error("Gemini Error:", error);
// // // // // //       return "AI service temporarily unavailable.";
// // // // // //     }
// // // // // //   }
// // // // // // }

// // // // // import { GoogleGenAI } from "@google/genai";

// // // // // const ai = new GoogleGenAI({
// // // // //   apiKey: process.env.GEMINI_API_KEY!,
// // // // // });

// // // // // export class GeminiProvider {
// // // // //   async generate(prompt: string) {
// // // // //     try {
// // // // //       const response = await ai.models.generateContent({
// // // // //         model: "gemini-2.5-flash",
// // // // //         contents: prompt,
// // // // //       });

// // // // //       return response.text;
// // // // //     } catch (error: any) {
// // // // //       console.error("Gemini Error:", error);

// // // // //       return "Sorry, AI service is currently busy. Please try again after a few seconds.";
// // // // //     }
// // // // //   }
// // // // // }
// // // // import Groq from "groq-sdk";

// // // // const groq = new Groq({
// // // //   apiKey: process.env.GROQ_API_KEY,
// // // // });

// // // // export class GroqProvider {
// // // //   async generate(prompt: string) {
// // // //     const response = await groq.chat.completions.create({
// // // //       model: "llama-3.3-70b-versatile",
// // // //       messages: [
// // // //         {
// // // //           role: "user",
// // // //           content: prompt,
// // // //         },
// // // //       ],
// // // //     });

// // // //     return response.choices[0].message.content;
// // // //   }
// // // // }
// // // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // const genAI = new GoogleGenerativeAI(
// // //   process.env.GEMINI_API_KEY!
// // // );

// // // export class GeminiProvider {
// // //   async generate(prompt: string) {
// // //     const model = genAI.getGenerativeModel({
// // //       model: "gemini-2.5-flash",
// // //     });

// // //     let retries = 3;

// // //     while (retries > 0) {
// // //       try {
// // //         const result = await model.generateContent(prompt);

// // //         return result.response.text();
// // //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // //       } catch (error: any) {
// // //         if (error?.status === 503) {
// // //           retries--;

// // //           if (retries === 0) {
// // //             return "AI is busy right now. Please try again in a few seconds.";
// // //           }

// // //           await new Promise((resolve) =>
// // //             setTimeout(resolve, 2000)
// // //           );
// // //         } else {
// // //           throw error;
// // //         }
// // //       }
// // //     }

// // //     return "No response";
// // //   }
// // // }

// // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // import Groq from "groq-sdk";

// // // const genAI = new GoogleGenerativeAI(
// // //   process.env.GEMINI_API_KEY!
// // // );

// // // const groq = new Groq({
// // //   apiKey: process.env.GROQ_API_KEY,
// // // });

// // // export class GeminiProvider {
// // //   async generate(prompt: string) {
// // //     try {
// // //       const model = genAI.getGenerativeModel({
// // //         model: "gemini-2.5-flash",
// // //       });

// // //       const result = await model.generateContent(prompt);

// // //       return result.response.text();
// // //     } catch (error) {
// // //       console.log(
// // //         "Gemini failed, switching to Groq..."
// // //       );

// // //       const response =
// // //         await groq.chat.completions.create({
// // //           model: "llama-3.3-70b-versatile",
// // //           messages: [
// // //             {
// // //               role: "user",
// // //               content: prompt,
// // //             },
// // //           ],
// // //         });

// // //       return (
// // //         response.choices[0].message.content ??
// // //         "No response"
// // //       );
// // //     }
// // //   }
// // // }
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// // import Groq from "groq-sdk";

// // const genAI = new GoogleGenerativeAI(
// //   process.env.GEMINI_API_KEY!
// // );

// // const groq = new Groq({
// //   apiKey: process.env.GROQ_API_KEY,
// // });

// // export class GeminiProvider {
// //   async generate(
// //     prompt: string,
// //     imageUrl?: string
// //   ) {
// //     try {
// //       const model = genAI.getGenerativeModel({
// //         model: "gemini-2.5-flash",
// //       });

// //       // -----------------------------
// //       // TEXT ONLY
// //       // -----------------------------
// //       if (!imageUrl) {
// //         const result =
// //           await model.generateContent(prompt);

// //         return result.response.text();
// //       }

// //       // -----------------------------
// //       // IMAGE + TEXT (VISION)
// //       // -----------------------------

// //       const imageResponse = await fetch(imageUrl);

// //       const arrayBuffer =
// //         await imageResponse.arrayBuffer();

// //       const base64 = Buffer.from(
// //         arrayBuffer
// //       ).toString("base64");

// //       const result =
// //         await model.generateContent([
// //           {
// //             text: prompt,
// //           },
// //           {
// //             inlineData: {
// //               mimeType: "image/jpeg",
// //               data: base64,
// //             },
// //           },
// //         ]);

// //       return result.response.text();
// //     } catch (error) {
// //       console.log(
// //         "Gemini failed, switching to Groq..."
// //       );

// //       const response =
// //         await groq.chat.completions.create({
// //           model: "llama-3.3-70b-versatile",
// //           messages: [
// //             {
// //               role: "user",
// //               content: prompt,
// //             },
// //           ],
// //         });

// //       return (
// //         response.choices[0].message.content ??
// //         "No response"
// //       );
// //     }
// //   }
// // }
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import Groq from "groq-sdk";

// const genAI = new GoogleGenerativeAI(
//   process.env.GEMINI_API_KEY!
// );

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// interface GenerateInput {
//   prompt: string;
//   imageUrl?: string;
// }

// export class GeminiProvider {
//   async generate({
//     prompt,
//     imageUrl,
//   }: GenerateInput) {
//     try {
//       const model = genAI.getGenerativeModel({
//         model: "gemini-2.5-flash",
//       });

//       // TEXT ONLY
//       if (!imageUrl) {
//         const result = await model.generateContent(
//           prompt
//         );

//         return result.response.text();
//       }

//       // IMAGE + TEXT
//       const imageResponse = await fetch(imageUrl);

//       const arrayBuffer =
//         await imageResponse.arrayBuffer();

//       const base64 = Buffer.from(
//         arrayBuffer
//       ).toString("base64");

//       const result =
//         await model.generateContent([
//           {
//             text: prompt,
//           },
//           {
//             inlineData: {
//               mimeType: "image/jpeg",
//               data: base64,
//             },
//           },
//         ]);

//       return result.response.text();
//     } catch (error) {
//       console.log(
//         "Gemini failed, switching to Groq..."
//       );

//       const response =
//         await groq.chat.completions.create({
//           model: "llama-3.3-70b-versatile",
//           messages: [
//             {
//               role: "user",
//               content: prompt,
//             },
//           ],
//         });

//       return (
//         response.choices[0].message.content ??
//         "No response"
//       );
//     }
//   }
// }
import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import { GenerateResponseInput } from "../actions/generate-response.action";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export class GeminiProvider {
  async generate({
    prompt,
    fileUrl,
    fileType,
  }: GenerateResponseInput) {
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      // -------------------------
      // TEXT ONLY
      // -------------------------
      if (!fileUrl) {
        const result = await model.generateContent(prompt);
        return result.response.text();
      }

      // -------------------------
      // IMAGE
      // -------------------------
      if (fileType === "image") {
        const imageResponse = await fetch(fileUrl);

        const arrayBuffer =
          await imageResponse.arrayBuffer();

        const base64 = Buffer.from(arrayBuffer).toString(
          "base64"
        );

        const mimeType =
          imageResponse.headers.get("content-type") ??
          "image/jpeg";

        const result = await model.generateContent([
          {
            text: prompt,
          },
          {
            inlineData: {
              mimeType,
              data: base64,
            },
          },
        ]);

        return result.response.text();
      }

      // -------------------------
      // PDF
      // -------------------------
      if (fileType === "pdf") {
        const pdfResponse = await fetch(fileUrl);

        const arrayBuffer =
          await pdfResponse.arrayBuffer();

        const base64 = Buffer.from(arrayBuffer).toString(
          "base64"
        );

        const result = await model.generateContent([
          {
            text: prompt,
          },
          {
            inlineData: {
              mimeType: "application/pdf",
              data: base64,
            },
          },
        ]);

        return result.response.text();
      }

      return "Unsupported file type.";
    } catch (error) {
      console.log(
        "Gemini failed, switching to Groq...",
        error
      );

      const response =
        await groq.chat.completions.create({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        });

      return (
        response.choices[0].message.content ??
        "No response"
      );
    }
  }
}