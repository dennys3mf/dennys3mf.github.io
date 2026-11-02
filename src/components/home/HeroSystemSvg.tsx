"use client";

import React, { useState } from "react";
import styles from "./HeroSystemSvg.module.css";

export default function HeroSystemSvg() {
  const [activeNode, setActiveNode] = useState<string>("core");

  return (
    <div className={styles.svgWrapper} role="region" aria-label="Digital Systems Blueprint">
      <div className={styles.systemHeader}>
        <div className={styles.systemTitle}>
          <span className={styles.statusDot} />
          <span>System Topology · v2.4</span>
        </div>
        <div className={styles.systemMeta}>Latency &lt; 250ms</div>
      </div>

      <svg
        className={styles.svgCanvas}
        viewBox="0 0 460 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="sysGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDF0EC" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="460" height="270" fill="url(#sysGrid)" rx="12" />

        {/* Connection Pipelines */}
        <path
          d="M 90 90 L 170 90 L 230 135"
          stroke="#087F72"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M 90 180 L 170 180 L 230 135"
          stroke="#DFE4E0"
          strokeWidth="2"
        />
        <path
          d="M 230 135 L 340 85"
          stroke="#087F72"
          strokeWidth="2.5"
        />
        <path
          d="M 230 135 L 340 185"
          stroke="#E97C59"
          strokeWidth="2"
        />

        {/* Node 1: Client Layer */}
        <g
          transform="translate(20, 60)"
          onClick={() => setActiveNode("client")}
          style={{ cursor: "pointer" }}
        >
          <rect
            width="120"
            height="55"
            rx="8"
            fill="#FFFFFF"
            stroke={activeNode === "client" ? "#087F72" : "#DFE4E0"}
            strokeWidth={activeNode === "client" ? "2" : "1"}
          />
          <text x="12" y="24" fill="#52636B" fontSize="10" fontFamily="var(--font-mono)">CLIENT TIER</text>
          <text x="12" y="42" fill="#182128" fontSize="13" fontWeight="bold" fontFamily="var(--font-heading)">React / Next.js</text>
        </g>

        {/* Node 2: Mobile / Edge */}
        <g
          transform="translate(20, 150)"
          onClick={() => setActiveNode("mobile")}
          style={{ cursor: "pointer" }}
        >
          <rect
            width="120"
            height="55"
            rx="8"
            fill="#FFFFFF"
            stroke={activeNode === "mobile" ? "#087F72" : "#DFE4E0"}
            strokeWidth={activeNode === "mobile" ? "2" : "1"}
          />
          <text x="12" y="24" fill="#52636B" fontSize="10" fontFamily="var(--font-mono)">MOBILE / IOT</text>
          <text x="12" y="42" fill="#182128" fontSize="13" fontWeight="bold" fontFamily="var(--font-heading)">Flutter &amp; C++</text>
        </g>

        {/* Node 3: Core API Engine (Central) */}
        <g
          transform="translate(180, 100)"
          onClick={() => setActiveNode("core")}
          style={{ cursor: "pointer" }}
        >
          <rect
            width="100"
            height="70"
            rx="12"
            fill="#FFFFFF"
            stroke={activeNode === "core" ? "#087F72" : "#DFE4E0"}
            strokeWidth={activeNode === "core" ? "2.5" : "1"}
          />
          <circle cx="85" cy="18" r="4" fill="#087F72" />
          <text x="12" y="24" fill="#087F72" fontSize="9" fontWeight="bold" fontFamily="var(--font-mono)">CORE ENGINE</text>
          <text x="12" y="44" fill="#182128" fontSize="14" fontWeight="800" fontFamily="var(--font-heading)">Python API</text>
          <text x="12" y="58" fill="#52636B" fontSize="9" fontFamily="var(--font-mono)">Type-Safe</text>
        </g>

        {/* Node 4: Persistence Database */}
        <g
          transform="translate(320, 55)"
          onClick={() => setActiveNode("data")}
          style={{ cursor: "pointer" }}
        >
          <rect
            width="120"
            height="55"
            rx="8"
            fill="#FFFFFF"
            stroke={activeNode === "data" ? "#087F72" : "#DFE4E0"}
            strokeWidth={activeNode === "data" ? "2" : "1"}
          />
          <text x="12" y="24" fill="#52636B" fontSize="10" fontFamily="var(--font-mono)">PERSISTENCE</text>
          <text x="12" y="42" fill="#182128" fontSize="13" fontWeight="bold" fontFamily="var(--font-heading)">PostgreSQL</text>
        </g>

        {/* Node 5: Integration / Payments */}
        <g
          transform="translate(320, 155)"
          onClick={() => setActiveNode("integration")}
          style={{ cursor: "pointer" }}
        >
          <rect
            width="120"
            height="55"
            rx="8"
            fill="#FFFFFF"
            stroke={activeNode === "integration" ? "#E97C59" : "#DFE4E0"}
            strokeWidth={activeNode === "integration" ? "2" : "1"}
          />
          <text x="12" y="24" fill="#E97C59" fontSize="10" fontFamily="var(--font-mono)">FINTECH / TAX</text>
          <text x="12" y="42" fill="#182128" fontSize="13" fontWeight="bold" fontFamily="var(--font-heading)">Culqi + SUNAT</text>
        </g>
      </svg>

      <div className={styles.systemFooter}>
        <div className={styles.metricBadge}>
          <span className={styles.metricKey}>Architecture</span>
          <span className={styles.metricVal}>Modular SSR</span>
        </div>
        <div className={styles.metricBadge}>
          <span className={styles.metricKey}>Security</span>
          <span className={styles.metricVal}>RBAC &amp; Idempotent</span>
        </div>
        <div className={styles.metricBadge}>
          <span className={styles.metricKey}>Reliability</span>
          <span className={styles.metricVal}>99.9% Uptime</span>
        </div>
      </div>
    </div>
  );
}
