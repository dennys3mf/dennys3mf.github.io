"use client";

import React, { useState } from "react";
import { Mic, Cloud, Cpu, Server, Database, Activity, Sparkles, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./SystemArchitectureDiagram.module.css";

interface ArchitectureNode {
  id: string;
  labelKey: "nodeUser" | "nodeEdge" | "nodeAgent" | "nodeApi" | "nodeVector";
  defaultLabel: string;
  protocol: string;
  details: string;
  tech: string;
  icon: React.ReactNode;
}

const NODES: ArchitectureNode[] = [
  {
    id: "client",
    labelKey: "nodeUser",
    defaultLabel: "Client / Voice Input",
    protocol: "Web Audio Stream",
    details: "16kHz PCM audio stream via WebSockets or typed JSON payload",
    tech: "React 18 · Web Audio API",
    icon: <Mic size={17} />,
  },
  {
    id: "edge",
    labelKey: "nodeEdge",
    defaultLabel: "Cloudflare Edge",
    protocol: "Edge Routing & Auth",
    details: "Sub-15ms regional SSL termination, rate-limiting & DDoS mitigation",
    tech: "Cloudflare Workers · V8 Isolate",
    icon: <Cloud size={17} />,
  },
  {
    id: "agent",
    labelKey: "nodeAgent",
    defaultLabel: "AI Agent Router",
    protocol: "Semantic Intent & Tools",
    details: "Tool-calling orchestration, prompt routing, and intent dispatch",
    tech: "LangChain · Function Calling",
    icon: <Cpu size={17} />,
  },
  {
    id: "api",
    labelKey: "nodeApi",
    defaultLabel: "Python API Service",
    protocol: "Typed REST / Pydantic",
    details: "Strict data validation, business logic, and transactional security",
    tech: "FastAPI / Django · Python 3.12",
    icon: <Server size={17} />,
  },
  {
    id: "db",
    labelKey: "nodeVector",
    defaultLabel: "PostgreSQL & pgvector",
    protocol: "RAG & ACID Ledger",
    details: "Cosine similarity search over official schemas + immutable logging",
    tech: "PostgreSQL 16 · pgvector · RLS",
    icon: <Database size={17} />,
  },
];

export default function SystemArchitectureDiagram() {
  const { t } = useLanguage();
  const [activeNodeId, setActiveNodeId] = useState<string>("agent");

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[2];
  const step1Labels = t.process.step1;

  return (
    <div className={styles.diagramContainer}>
      {/* Top Console Bar */}
      <div className={styles.consoleHeader}>
        <div className={styles.statusPill}>
          <span className={styles.livePulse} />
          <span className={styles.statusText}>SYS // ARCHITECTURE BLUEPRINT</span>
        </div>
        <div className={styles.telemetryTag}>
          <Activity size={13} className={styles.telemetryIcon} />
          <span>REALTIME RAG PIPELINE</span>
        </div>
      </div>

      {/* Interactive System Nodes Flow */}
      <div className={styles.flowStage}>
        {NODES.map((node, index) => {
          const isActive = activeNodeId === node.id;
          const nodeLabel = step1Labels[node.labelKey] || node.defaultLabel;

          return (
            <React.Fragment key={node.id}>
              <button
                type="button"
                onClick={() => setActiveNodeId(node.id)}
                className={`${styles.nodeCard} ${isActive ? styles.nodeActive : ""}`}
                aria-label={`Node: ${nodeLabel}`}
                aria-pressed={isActive}
              >
                <div className={styles.nodeIconBox}>
                  {node.icon}
                  {isActive && <span className={styles.activeHalo} />}
                </div>

                <div className={styles.nodeMeta}>
                  <span className={styles.nodeStepNum}>0{index + 1}</span>
                  <span className={styles.nodeTitle}>{nodeLabel}</span>
                  <span className={styles.nodeProtocol}>{node.protocol}</span>
                </div>
              </button>

              {/* Connector pipeline arrow (between nodes) */}
              {index < NODES.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg className={styles.connectorSvg} viewBox="0 0 32 12" fill="none">
                    <line
                      x1="0"
                      y1="6"
                      x2="28"
                      y2="6"
                      stroke="rgba(56, 189, 248, 0.4)"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M26 3L30 6L26 9"
                      stroke="#38BDF8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.flowingPacket} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Selected Node Inspector Pane */}
      <div className={styles.inspectorPane}>
        <div className={styles.inspectorLeft}>
          <div className={styles.inspectorBadge}>
            <Sparkles size={13} />
            <span>NODE TELEMETRY</span>
          </div>
          <span className={styles.inspectorTitle}>
            {step1Labels[activeNode.labelKey] || activeNode.defaultLabel}
          </span>
          <p className={styles.inspectorDetail}>{activeNode.details}</p>
        </div>

        <div className={styles.inspectorRight}>
          <div className={styles.techStackRow}>
            <span className={styles.techStackLabel}>Stack:</span>
            <span className={styles.techStackValue}>{activeNode.tech}</span>
          </div>
          <div className={styles.validationRow}>
            <Check size={14} className={styles.checkIcon} />
            <span>Strict Schema Contract Validated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
