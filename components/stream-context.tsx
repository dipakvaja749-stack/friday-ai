"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface StreamContextType {
  streamingMessage: string;
  setStreamingMessage: React.Dispatch<
    React.SetStateAction<string>
  >;

  isStreaming: boolean;
  setIsStreaming: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const StreamContext = createContext<
  StreamContextType | undefined
>(undefined);

export function StreamProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [streamingMessage, setStreamingMessage] =
    useState("");

  const [isStreaming, setIsStreaming] =
    useState(false);

  return (
    <StreamContext.Provider
      value={{
        streamingMessage,
        setStreamingMessage,
        isStreaming,
        setIsStreaming,
      }}
    >
      {children}
    </StreamContext.Provider>
  );
}

export function useStreamContext() {
  const context = useContext(StreamContext);

  if (!context) {
    throw new Error(
      "useStreamContext must be used inside StreamProvider"
    );
  }

  return context;
}