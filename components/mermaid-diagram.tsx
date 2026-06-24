"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  chart: string;
}

export default function MermaidDiagram({ chart }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "-");
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            background: "#0D0D0D",
            primaryColor: "#18181b",
            primaryTextColor: "#f4f4f5",
            primaryBorderColor: "#3f3f46",
            lineColor: "#52525b",
            secondaryColor: "#10b981",
            tertiaryColor: "#27272a",
          },
          securityLevel: "strict",
        });

        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        if (isMounted) {
          setSvg(svg);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
        }
      }
    }

    render();

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="my-3 rounded-xl border border-red-900/50 bg-red-950/30 p-4 text-sm text-red-300">
        <p className="font-medium">Failed to render diagram</p>
        <pre className="mt-2 overflow-x-auto text-xs text-red-400">{error}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-3 flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 p-8 text-sm text-zinc-500">
        <Loader2 className="h-4 w-4 animate-spin" />
        Rendering diagram...
      </div>
    );
  }

  return (
    <div className="my-3 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <div ref={ref} className="flex justify-center [&_svg]:max-w-full" dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}