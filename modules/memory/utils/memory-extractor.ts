export interface ExtractedMemory {
  key: string;
  value: string;
}

export function extractMemory(
  message: string
): ExtractedMemory | null {
  const text = message.trim();

  // My name is Dipak
  let match = text.match(/^my name is (.+)$/i);
  if (match) {
    return {
      key: "name",
      value: match[1].trim(),
    };
  }

  // Call me Dipak
  match = text.match(/^call me (.+)$/i);
  if (match) {
    return {
      key: "name",
      value: match[1].trim(),
    };
  }

  // I use Next.js
  match = text.match(/^i use (.+)$/i);
  if (match) {
    return {
      key: "framework",
      value: match[1].trim(),
    };
  }

  // My favorite language is TypeScript
  match = text.match(/^my favorite language is (.+)$/i);
  if (match) {
    return {
      key: "language",
      value: match[1].trim(),
    };
  }

  // I live in India
  match = text.match(/^i live in (.+)$/i);
  if (match) {
    return {
      key: "country",
      value: match[1].trim(),
    };
  }

  // I work at Google
  match = text.match(/^i work at (.+)$/i);
  if (match) {
    return {
      key: "company",
      value: match[1].trim(),
    };
  }

  // I am a Backend Developer
  match = text.match(/^i am (.+)$/i);
  if (match) {
    return {
      key: "role",
      value: match[1].trim(),
    };
  }

  return null;
}