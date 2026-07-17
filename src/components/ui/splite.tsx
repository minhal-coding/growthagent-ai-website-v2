"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Box } from "lucide-react";

type SplineApplication = { load: (scene: string) => Promise<unknown>; dispose: () => void };
type SceneStatus = "consent" | "reduced" | "loading" | "ready" | "error";

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState<SceneStatus>("consent");
  const [loadRequested, setLoadRequested] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setStatus("reduced");
  }, []);

  useEffect(() => {
    if (!loadRequested || !canvasRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStatus("reduced");
      setLoadRequested(false);
      return;
    }

    let cancelled = false;
    let app: SplineApplication | undefined;
    let timeoutId: number | undefined;
    setStatus("loading");

    const timeout = new Promise<never>((_, reject) => {
      timeoutId = window.setTimeout(() => reject(new Error("Spline scene load timed out")), 10000);
    });

    void Promise.race([import("@splinetool/runtime"), timeout])
      .then(({ Application }) => {
        if (cancelled || !canvasRef.current) return;
        app = new Application(canvasRef.current, { renderMode: "continuous" });
        return Promise.race([app.load(scene), timeout]);
      })
      .then(() => {
        if (!cancelled) {
          if (timeoutId) window.clearTimeout(timeoutId);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) {
          if (timeoutId) window.clearTimeout(timeoutId);
          app?.dispose();
          setStatus("error");
          setLoadRequested(false);
        }
      });

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
      app?.dispose();
    };
  }, [loadRequested, scene]);

  function requestLoad() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStatus("reduced");
      return;
    }
    setLoadRequested(true);
  }

  return (
    <div data-spline-state={status} className={`relative overflow-hidden ${className ?? ""}`}>
      <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${status === "ready" ? "opacity-100" : "opacity-0"}`} />
      {status !== "ready" ? (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,rgba(66,214,199,0.12),transparent_52%)] p-6 text-center">
          <div className="max-w-sm rounded-2xl border border-white/12 bg-[#070a10]/95 p-6 shadow-2xl">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl border border-[#42d6c7]/35 text-[#42d6c7]">
              {status === "loading" ? <Box className="size-6" aria-hidden="true" /> : <Bot className="size-7" aria-hidden="true" />}
            </span>
            <p className="mt-4 font-extrabold text-white">Optional 3D review-assistant illustration</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {status === "loading" && "Loading the optional scene. The local explanation remains available."}
              {status === "error" && "The optional scene could not be loaded. This local fallback contains the complete product explanation."}
              {status === "reduced" && "The optional scene is not loaded because reduced motion is enabled. This local fallback contains the complete product explanation."}
              {status === "consent" && "This local fallback contains the complete product explanation without contacting the third-party scene host."}
            </p>
            {status === "consent" || status === "error" ? (
              <div className="mt-5">
                <button type="button" onClick={requestLoad} className="ga-button mx-auto justify-center">Load optional 3D scene</button>
                <p className="mt-3 text-sm leading-6 text-slate-300">Loading the optional scene connects to Spline, a third-party service.</p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
