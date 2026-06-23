// // // import { GoogleGenAI } from "@google/genai";

// // // const ai = new GoogleGenAI({
// // //   apiKey: process.env.GEMINI_API_KEY!,
// // // });

// // // export class GeminiProvider {
// // //   async generate(prompt: string) {
// // //     const response = await ai.models.generateContent({
// // //       model: "gemini-2.5-flash",
// // //       contents: prompt,
// // //     });

// // //     return response.text;
// // //   }
// // // }

// // import { GoogleGenAI } from "@google/genai";

// // const ai = new GoogleGenAI({
// //   apiKey: process.env.GEMINI_API_KEY!,
// // });
// // console.log("api_key ::->",process.env.GEMINI_API_KEY);
// // export class GeminiProvider {
// //   async generate(prompt: string) {
// //     try {
// //       const response = await ai.models.generateContent({
// //         model: "gemini-2.5-flash",
// //         contents: prompt,
// //       });

// //       return response.text ?? "No response generated.";
// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     } catch (error: any) {
// //       console.error("Gemini Error:", error);

// //       return "AI service is temporarily unavailable. Please try again later.";
// //     }
// //   }
// // }

// // import { GoogleGenAI } from "@google/genai";

// // const ai = new GoogleGenAI({
// //   apiKey: process.env.GEMINI_API_KEY!,
// // });

// // export class GeminiProvider {
// //   async generate(prompt: string) {
// //     try {
// //       const response = await ai.models.generateContent({
// //         model: "gemini-2.5-flash",
// //         contents: prompt,
// //       });

// //       return response.text ?? "No response";
// //     } catch (error) {
// //       console.error("Gemini Error:", error);
// //       return "AI service temporarily unavailable.";
// //     }
// //   }
// // }

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY!,
// });

// export class GeminiProvider {
//   async generate(prompt: string) {
//     try {
//       const response = await ai.models.generateContent({
//         model: "gemini-2.5-flash",
//         contents: prompt,
//       });

//       return response.text;
//     } catch (error: any) {
//       console.error("Gemini Error:", error);

//       return "Sorry, AI service is currently busy. Please try again after a few seconds.";
//     }
//   }
// }
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export class GroqProvider {
  async generate(prompt: string) {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return response.choices[0].message.content;
  }
}