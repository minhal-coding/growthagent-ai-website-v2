"use client";

import { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

export function SplineScene({
  scene,
  className,
}: {
  scene: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (!canvasRef.current) return;

    let cancelled = false;
    const app = new Application(canvasRef.current, { renderMode: "continuous" });

    setStatus("loading");
    app
      .load(scene)
      .then(() => {
        if (!cancelled) setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      app.dispose();
    };
  }, [scene]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {status !== "ready" ? (
        <div className="absolute inset-0 grid place-items-center text-xs font-black text-white/60">
          {status === "error" ? "Robot failed to load" : "Loading robot"}
        </div>
      ) : null}
    </div>
  );
}
