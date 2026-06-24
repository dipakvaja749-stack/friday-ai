// // // // // import { GoogleGenAI } from "@google/genai";

// // // // // const ai = new GoogleGenAI({
// // // // //   apiKey: process.env.GEMINI_API_KEY!,
// // // // // });

// // // // // export class GeminiProvider {
// // // // //   async generate(prompt: string) {
// // // // //     const response = await ai.models.generateContent({
// // // // //       model: "gemini-2.5-flash",
// // // // //       contents: prompt,
// // // // //     });

// // // // //     return response.text;
// // // // //   }
// // // // // }

// // // // import { GoogleGenAI } from "@google/genai";

// // // // const ai = new GoogleGenAI({
// // // //   apiKey: process.env.GEMINI_API_KEY!,
// // // // });
// // // // console.log("api_key ::->",process.env.GEMINI_API_KEY);
// // // // export class GeminiProvider {
// // // //   async generate(prompt: string) {
// // // //     try {
// // // //       const response = await ai.models.generateContent({
// // // //         model: "gemini-2.5-flash",
// // // //         contents: prompt,
// // // //       });

// // // //       return response.text ?? "No response generated.";
// // // //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // // //     } catch (error: any) {
// // // //       console.error("Gemini Error:", error);

// // // //       return "AI service is temporarily unavailable. Please try again later.";
// // // //     }
// // // //   }
// // // // }

// // // // import { GoogleGenAI } from "@google/genai";

// // // // const ai = new GoogleGenAI({
// // // //   apiKey: process.env.GEMINI_API_KEY!,
// // // // });

// // // // export class GeminiProvider {
// // // //   async generate(prompt: string) {
// // // //     try {
// // // //       const response = await ai.models.generateContent({
// // // //         model: "gemini-2.5-flash",
// // // //         contents: prompt,
// // // //       });

// // // //       return response.text ?? "No response";
// // // //     } catch (error) {
// // // //       console.error("Gemini Error:", error);
// // // //       return "AI service temporarily unavailable.";
// // // //     }
// // // //   }
// // // // }

// // // import { GoogleGenAI } from "@google/genai";

// // // const ai = new GoogleGenAI({
// // //   apiKey: process.env.GEMINI_API_KEY!,
// // // });

// // // export class GeminiProvider {
// // //   async generate(prompt: string) {
// // //     try {
// // //       const response = await ai.models.generateContent({
// // //         model: "gemini-2.5-flash",
// // //         contents: prompt,
// // //       });

// // //       return response.text;
// // //     } catch (error: any) {
// // //       console.error("Gemini Error:", error);

// // //       return "Sorry, AI service is currently busy. Please try again after a few seconds.";
// // //     }
// // //   }
// // // }
// // import Groq from "groq-sdk";

// // const groq = new Groq({
// //   apiKey: process.env.GROQ_API_KEY,
// // });

// // export class GroqProvider {
// //   async generate(prompt: string) {
// //     const response = await groq.chat.completions.create({
// //       model: "llama-3.3-70b-versatile",
// //       messages: [
// //         {
// //           role: "user",
// //           content: prompt,
// //         },
// //       ],
// //     });

// //     return response.choices[0].message.content;
// //   }
// // }
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(
//   process.env.GEMINI_API_KEY!
// );

// export class GeminiProvider {
//   async generate(prompt: string) {
//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.5-flash",
//     });

//     let retries = 3;

//     while (retries > 0) {
//       try {
//         const result = await model.generateContent(prompt);

//         return result.response.text();
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       } catch (error: any) {
//         if (error?.status === 503) {
//           retries--;

//           if (retries === 0) {
//             return "AI is busy right now. Please try again in a few seconds.";
//           }

//           await new Promise((resolve) =>
//             setTimeout(resolve, 2000)
//           );
//         } else {
//           throw error;
//         }
//       }
//     }

//     return "No response";
//   }
// }

import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export class GeminiProvider {
  async generate(prompt: string) {
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const result = await model.generateContent(prompt);

      return result.response.text();
    } catch (error) {
      console.log(
        "Gemini failed, switching to Groq..."
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