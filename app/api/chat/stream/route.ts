// import { NextResponse } from "next/server";

// export async function POST() {
//   const encoder = new TextEncoder();

//   const stream = new ReadableStream({
//     async start(controller) {
//       const words = [
//         "Hello",
//         "this",
//         "is",
//         "Friday",
//         "AI",
//         "streaming",
//         "response.",
//       ];

//       for (const word of words) {
//         controller.enqueue(
//           encoder.encode(`data: ${word}\n\n`)
//         );

//         await new Promise((r) =>
//           setTimeout(r, 300)
//         );
//       }

//       controller.close();
//     },
//   });

//   return new Response(stream, {
//     headers: {
//       "Content-Type": "text/event-stream",
//       "Cache-Control": "no-cache",
//       Connection: "keep-alive",
//     },
//   });
// }
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  console.log("STREAM PROMPT:", prompt);

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const words = [
        "Hello,",
        "this",
        "is",
        "Friday",
        "AI.",
        "I'm",
        "streaming",
        "my",
        "response",
        "just",
        "like",
        "ChatGPT!",
      ];

      for (const word of words) {
        controller.enqueue(
          encoder.encode(`data: ${word}\n\n`)
        );

        await new Promise((resolve) =>
          setTimeout(resolve, 200)
        );
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}