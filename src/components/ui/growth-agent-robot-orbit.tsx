"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  MailCheck,
  Megaphone,
  Search,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { SplineScene } from "@/components/ui/splite";

type AgentTone = "teal" | "blue" | "purple" | "orange" | "green";

type AgentConfig = {
  id: string;
  label: string;
  status: string;
  description: string;
  x: number;
  y: number;
  icon: LucideIcon;
  tone: AgentTone;
  targetView: string;
  actionLabel: string;
};

const AGENTS: AgentConfig[] = [
  {
    id: "lead-research",
    label: "Lead Research Agent",
    status: "Ready",
    description: "Targets prospects by business profile, industry, location, and intent.",
    x: -360,
    y: -250,
    icon: Search,
    tone: "teal",
    targetView: "Research",
    actionLabel: "Open Research",
  },
  {
    id: "data-enrichment",
    label: "Data Enrichment Agent",
    status: "0 Waiting",
    description: "Finds contact pages, emails, source URLs, and lead fit signals.",
    x: 0,
    y: -330,
    icon: Activity,
    tone: "teal",
    targetView: "Leads",
    actionLabel: "Open Leads",
  },
  {
    id: "personalization",
    label: "Personalization Agent",
    status: "0 Waiting",
    description: "Turns lead context into brand-safe outreach drafts.",
    x: 360,
    y: -250,
    icon: Sparkles,
    tone: "purple",
    targetView: "Leads",
    actionLabel: "Open Leads",
  },
  {
    id: "outreach",
    label: "Outreach Agent",
    status: "Ready",
    description: "Prepares approved email for manual review when sender setup is safe.",
    x: 480,
    y: 10,
    icon: Megaphone,
    tone: "blue",
    targetView: "Campaigns",
    actionLabel: "Open Campaigns",
  },
  {
    id: "review-orchestrator",
    label: "Review Orchestrator",
    status: "Ready",
    description: "Plans the safest next action across research, drafting, replies, and meetings.",
    x: 360,
    y: 270,
    icon: Workflow,
    tone: "teal",
    targetView: "Home",
    actionLabel: "Open Control Room",
  },
  {
    id: "meeting-scheduler",
    label: "Meeting Scheduler",
    status: "0 Waiting",
    description: "Moves interested replies into meeting-ready opportunities.",
    x: 0,
    y: 330,
    icon: CalendarDays,
    tone: "green",
    targetView: "Meetings",
    actionLabel: "Open Meetings",
  },
  {
    id: "crm",
    label: "CRM Agent",
    status: "Ready",
    description: "Keeps lead status, messages, suppressions, and audit history synced.",
    x: -360,
    y: 270,
    icon: Users,
    tone: "teal",
    targetView: "Leads",
    actionLabel: "Open Leads",
  },
  {
    id: "reply",
    label: "Reply Agent",
    status: "Ready",
    description: "Captures replies and pauses follow-ups before the next response.",
    x: -480,
    y: 10,
    icon: MailCheck,
    tone: "orange",
    targetView: "Inbox",
    actionLabel: "Open Inbox",
  },
];

const TONE_STYLE: Record<
  AgentTone,
  {
    color: string;
    border: string;
    glow: string;
    iconBg: string;
  }
> = {
  teal: {
    color: "#5eead4",
    border: "rgba(45, 212, 191, 0.76)",
    glow: "rgba(45, 212, 191, 0.28)",
    iconBg: "rgba(20, 184, 166, 0.16)",
  },
  blue: {
    color: "#7dd3fc",
    border: "rgba(56, 189, 248, 0.76)",
    glow: "rgba(56, 189, 248, 0.24)",
    iconBg: "rgba(14, 165, 233, 0.16)",
  },
  purple: {
    color: "#d8b4fe",
    border: "rgba(216, 180, 254, 0.78)",
    glow: "rgba(168, 85, 247, 0.24)",
    iconBg: "rgba(126, 34, 206, 0.16)",
  },
  orange: {
    color: "#fdba74",
    border: "rgba(253, 186, 116, 0.76)",
    glow: "rgba(249, 115, 22, 0.22)",
    iconBg: "rgba(194, 65, 12, 0.16)",
  },
  green: {
    color: "#86efac",
    border: "rgba(134, 239, 172, 0.76)",
    glow: "rgba(34, 197, 94, 0.22)",
    iconBg: "rgba(22, 163, 74, 0.16)",
  },
};

const NETWORK_RAISED_SURFACE = "#030303";
const NETWORK_LINE = "rgba(45, 212, 191, 0.18)";
const NETWORK_LINE_STRONG = "rgba(45, 212, 191, 0.34)";

const styles = {
  canvas: {
    position: "relative",
    minHeight: 840,
    width: "100%",
    minWidth: 0,
    overflow: "hidden",
    borderRadius: 10,
    border: `1px solid ${NETWORK_LINE}`,
    background: "#000000",
    cursor: "default",
    perspective: 1100,
    isolation: "isolate",
  },
  robotCenter: {
    pointerEvents: "auto",
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: 10,
    height: 520,
    width: 440,
    transform: "translate(-50%, -50%)",
  },
  robotLook: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  agentSlot: {
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: 20,
  },
  agentButton: {
    position: "relative",
    overflow: "visible",
    width: 260,
    minHeight: 126,
    borderRadius: 10,
    border: `1px solid ${NETWORK_LINE}`,
    background: NETWORK_RAISED_SURFACE,
    color: "rgba(255, 255, 255, 0.9)",
    padding: 14,
    textAlign: "left",
    cursor: "pointer",
    backdropFilter: "blur(14px)",
    display: "grid",
    gridTemplateRows: "38px 1fr",
    alignItems: "start",
    gap: 10,
    boxShadow: "0 18px 36px rgba(0, 0, 0, 0.62)",
    transformOrigin: "center center",
  },
  agentTopline: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    minHeight: 38,
    width: "100%",
  },
  iconBox: {
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
    borderRadius: 8,
    border: `1px solid ${NETWORK_LINE_STRONG}`,
    background: "rgba(20, 184, 166, 0.13)",
    flexShrink: 0,
  },
  statusBadge: {
    position: "absolute",
    top: -13,
    right: 14,
    zIndex: 3,
    display: "inline-flex",
    alignItems: "center",
    minHeight: 24,
    borderRadius: 999,
    border: "1px solid rgba(45, 212, 191, 0.45)",
    background: NETWORK_RAISED_SURFACE,
    padding: "0 9px",
    color: "#7dd3c7",
    fontSize: 11,
    fontWeight: 900,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.48)",
  },
  agentBody: {
    display: "block",
    minWidth: 0,
  },
  agentTitle: {
    display: "block",
    color: "#f8fafc",
    fontSize: 14,
    fontWeight: 900,
    lineHeight: 1.2,
    overflowWrap: "anywhere",
  },
  agentDescription: {
    display: "block",
    marginTop: 2,
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.45,
  },
  agentAction: {
    display: "inline-flex",
    alignItems: "center",
    marginTop: 10,
    color: "#ccfbf1",
    fontSize: 11,
    fontWeight: 900,
    lineHeight: 1.2,
    textTransform: "uppercase",
  },
} satisfies Record<string, CSSProperties>;

export function GrowthAgentRobotOrbit({
  onNavigate,
  toneMode = "mixed",
}: {
  onNavigate?: (targetView: string, agent: AgentConfig) => void;
  toneMode?: "mixed" | "uniform";
}) {
  const [activeAgentId, setActiveAgentId] = useState<string | null>(null);
  const [hoveredAgentId, setHoveredAgentId] = useState<string | null>(null);

  function handleCanvasClick() {
    setActiveAgentId(null);
    setHoveredAgentId(null);
  }

  function handlePointerLeave() {
    setHoveredAgentId(null);
  }

  return (
    <section className="w-full overflow-hidden rounded-xl border border-teal-300/20 bg-black p-4 text-white shadow-[0_28px_90px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.025)] sm:p-5">
      <div className="mb-4 flex min-h-9 items-center justify-between gap-4">
        <h2 className="m-0 text-lg font-black leading-tight text-white">Agent Network</h2>
        <span className="inline-flex min-h-7 items-center rounded-full border border-teal-300/30 bg-teal-400/10 px-3 text-xs font-black text-teal-200">
          Monitoring
        </span>
      </div>

      <div
        className="hidden lg:block"
        style={styles.canvas}
        onClick={handleCanvasClick}
        onPointerLeave={handlePointerLeave}
      >
        <div style={styles.robotCenter}>
          <div style={styles.robotLook}>
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>

        {AGENTS.map((agent) => {
          const Icon = agent.icon;
          const tone = toneMode === "uniform" ? TONE_STYLE.teal : TONE_STYLE[agent.tone];
          const isActive = activeAgentId === agent.id;
          const isHovered = hoveredAgentId === agent.id;
          const isLit = isActive || isHovered;

          return (
            <div
              key={agent.id}
              style={{
                ...styles.agentSlot,
                transform: `translate(calc(-50% + ${agent.x}px), calc(-50% + ${agent.y}px))`,
              }}
            >
              <motion.button
                type="button"
                onMouseEnter={() => setHoveredAgentId(agent.id)}
                onMouseLeave={() => setHoveredAgentId(null)}
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveAgentId(agent.id);
                  onNavigate?.(agent.targetView, agent);
                }}
                aria-label={`${agent.actionLabel}: ${agent.label}`}
                animate={{
                  borderColor: isLit ? tone.border : NETWORK_LINE_STRONG,
                  backgroundColor: isLit ? "#050505" : NETWORK_RAISED_SURFACE,
                  boxShadow: isLit
                    ? `0 0 0 1px ${tone.border}, 0 18px 50px ${tone.glow}, 0 18px 36px rgba(0, 0, 0, 0.62)`
                    : "0 18px 36px rgba(0, 0, 0, 0.62)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                style={styles.agentButton}
              >
                <span
                  style={{
                    ...styles.statusBadge,
                    color: tone.color,
                    borderColor: isLit ? tone.border : "rgba(45, 212, 191, 0.45)",
                    boxShadow: isLit
                      ? `0 0 0 1px ${tone.border}, 0 14px 32px ${tone.glow}`
                      : "0 12px 28px rgba(0, 0, 0, 0.48)",
                  }}
                >
                  {agent.status}
                </span>
                <span style={styles.agentTopline}>
                  <span
                    style={{
                      ...styles.iconBox,
                      color: tone.color,
                      borderColor: isLit ? tone.border : NETWORK_LINE_STRONG,
                      background: tone.iconBg,
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <span style={styles.agentTitle}>{agent.label}</span>
                </span>
                <span style={styles.agentBody}>
                  <span style={styles.agentDescription}>{agent.description}</span>
                  <span style={{ ...styles.agentAction, color: tone.color }}>{agent.actionLabel}</span>
                </span>
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 lg:hidden">
        <div className="relative mx-auto h-[440px] w-full max-w-sm overflow-hidden rounded-xl border border-teal-300/20 bg-black">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {AGENTS.map((agent) => {
            const Icon = agent.icon;
            const tone = toneMode === "uniform" ? TONE_STYLE.teal : TONE_STYLE[agent.tone];
            const isActive = activeAgentId === agent.id;

            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => {
                  setActiveAgentId(agent.id);
                  onNavigate?.(agent.targetView, agent);
                }}
                className="relative rounded-xl border bg-[#030303] p-4 text-left shadow-[0_18px_36px_rgba(0,0,0,0.62)]"
                style={{
                  borderColor: isActive ? tone.border : NETWORK_LINE_STRONG,
                  boxShadow: isActive
                    ? `0 0 0 1px ${tone.border}, 0 18px 50px ${tone.glow}`
                    : "0 18px 36px rgba(0, 0, 0, 0.62)",
                }}
              >
                <span
                  className="absolute -top-3 right-4 inline-flex min-h-6 items-center rounded-full border bg-[#030303] px-2 text-[11px] font-black"
                  style={{ color: tone.color, borderColor: tone.border }}
                >
                  {agent.status}
                </span>
                <span className="flex items-center gap-3">
                  <span
                    className="grid size-9 place-items-center rounded-lg border"
                    style={{ color: tone.color, borderColor: tone.border, background: tone.iconBg }}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-black text-white">{agent.label}</span>
                </span>
                <span className="mt-3 block text-xs font-semibold leading-5 text-slate-400">{agent.description}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
