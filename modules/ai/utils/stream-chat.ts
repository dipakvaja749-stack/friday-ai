export async function streamChat(
  prompt: string,
  onChunk: (chunk: string) => void
) {
  const response = await fetch("/api/chat/stream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.body) {
    throw new Error("No stream received");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value);

    const lines = chunk
      .split("\n")
      .filter((line) => line.startsWith("data:"));

    for (const line of lines) {
      onChunk(line.replace("data:", "").trim());
    }
  }
}