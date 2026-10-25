"use client";

interface RotatingBadgeProps {
  size?: number;
  className?: string;
  text?: string;
}

export default function RotatingBadge({
  size = 130,
  className = "",
  text = "✦ DENNYS MARQUEZ • FULL STACK DEVELOPER • PYTHON & AI",
}: RotatingBadgeProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer spinning SVG text */}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{
          animation: "spinSlow 18s linear infinite",
          transformOrigin: "center center",
          overflow: "visible",
        }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="textCircle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="9.2"
          fontWeight="700"
          letterSpacing="0.18em"
          style={{ textTransform: "uppercase", fontFamily: "var(--font-heading)" }}
        >
          <textPath href="#textCircle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Icon: Moddo-style Spark / Eye */}
      <div
        style={{
          position: "absolute",
          width: size * 0.38,
          height: size * 0.38,
          borderRadius: "50%",
          backgroundColor: "var(--accent-blue)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(39, 53, 206, 0.35)",
          transition: "transform 0.3s ease",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
