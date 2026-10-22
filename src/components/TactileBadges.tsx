"use client";
import React from "react";

export function BadgeMove({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        color: "#f7c800",
      }}
    >
      <svg
        viewBox="0 0 189 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        <path
          d="M141.008 103.5C237.798 103.5 166.163 -21.0103 117.749 63.0879C166.144 -21.0293 22.8557 -21.0293 71.2509 63.0879C22.8557 -21.0293 -48.7981 103.5 47.9924 103.5C-48.7981 103.5 22.8367 228.01 71.2509 143.912C22.8557 228.029 166.144 228.029 117.749 143.912C166.144 228.029 237.798 103.5 141.008 103.5Z"
          fill="currentColor"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "0.75rem",
          color: "#18191b",
          textAlign: "center",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          transform: "rotate(6deg)",
        }}
      >
        MAKE IT
        <br />
        MOVE
      </span>
    </div>
  );
}

export function BadgeBold({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        color: "#80e8fa",
      }}
    >
      <svg
        viewBox="0 0 222 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        <path
          d="M221.965 92.3043C222.64 89.1138 213.332 85.1909 213.136 81.9602C212.944 78.7898 221.764 73.9087 220.786 70.7432C219.86 67.7483 209.736 68.4457 208.154 65.4959C206.673 62.7419 213.035 54.8759 211.02 52.1971C209.136 49.6938 199.687 53.4262 197.37 51.0132C195.19 48.7457 199.446 39.5554 196.907 37.3933C194.505 35.3465 185.997 40.8999 183.293 38.9635C180.714 37.1174 183.333 27.3351 180.502 25.6094C177.788 23.954 170.207 30.7113 167.276 29.1862C164.45 27.7114 165.735 17.6632 162.723 16.3188C159.806 15.0145 153.112 22.6497 150.035 21.4808C147.043 20.3421 147.169 10.2137 144.036 9.21039C140.984 8.23718 135.161 16.5446 131.983 15.7068C128.881 14.8891 127.944 4.80084 124.735 4.12361C121.527 3.45139 116.581 12.3056 113.408 11.8039C110.164 11.2922 108.205 1.34946 105.016 1.01335C101.747 0.66721 97.7533 9.98797 94.555 9.82242C91.2659 9.65186 88.2388 -0.020035 85.0405 3.11799e-05C81.7414 0.0200973 78.8402 9.7271 75.657 9.94281C72.3579 10.1635 68.1623 0.933113 65.0093 1.3545C61.7203 1.79094 60.1488 11.7989 57.0462 12.4511C53.7874 13.1333 48.257 4.63028 45.2299 5.53828C42.0316 6.49644 42.1927 16.6148 39.2815 17.8138C36.1839 19.088 29.0518 11.8691 26.3118 13.4042C23.3854 15.0446 26.0096 24.8018 23.5416 26.7231C20.8973 28.7849 11.9167 24.0744 9.85669 26.4422C7.68081 28.9454 13.7703 36.9619 12.3046 39.7812C10.8137 42.6607 0.709926 42.5051 0.0349989 45.6957C-0.639928 48.8862 8.66801 52.8091 8.86445 56.0397C9.05585 59.2102 0.236468 64.0913 1.2136 67.2567C2.14037 70.2516 12.2643 69.5543 13.8458 72.504C15.3266 75.2581 8.96518 83.124 10.9799 85.8029C12.8636 88.3061 22.3126 84.5738 24.6295 86.9868C26.8104 89.2542 22.5544 98.4446 25.0929 100.607C27.4954 102.653 36.0025 97.1001 38.7073 99.0365C41.2861 100.883 38.667 110.665 41.4977 112.391C44.2125 114.046 51.7928 107.289 54.7242 108.814C57.5498 110.289 56.2655 120.337 59.2774 121.681C62.1937 122.985 68.8876 115.35 71.9651 116.519C74.9569 117.658 74.831 127.786 77.9638 128.79C81.0161 129.763 86.8386 121.455 90.0168 122.293C93.1195 123.111 94.0563 133.199 97.2647 133.876C100.473 134.554 105.419 125.694 108.592 126.196C111.836 126.708 113.795 136.651 116.984 136.987C120.253 137.333 124.247 128.012 127.445 128.178C130.734 128.348 133.761 138.02 136.959 138C140.259 137.98 143.16 128.273 146.343 128.057C149.642 127.836 153.838 137.067 156.991 136.645C160.28 136.209 161.851 126.201 164.954 125.549C168.213 124.867 173.743 133.37 176.77 132.462C179.968 131.504 179.807 121.385 182.718 120.186C185.816 118.912 192.948 126.131 195.688 124.596C198.615 122.955 195.99 113.198 198.458 111.277C201.103 109.215 210.083 113.926 212.143 111.558C214.319 109.055 208.23 101.038 209.695 98.2188C211.186 95.3393 221.29 95.4948 221.965 92.3043Z"
          fill="currentColor"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "0.82rem",
          color: "#18191b",
          textAlign: "center",
          letterSpacing: "-0.01em",
          transform: "rotate(6deg)",
        }}
      >
        THINK BOLD
      </span>
    </div>
  );
}

export function BadgeNoise({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        color: "#b6dd30",
      }}
    >
      <svg
        viewBox="0 0 320 171"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        <path
          d="M254.867 84.9136L320 70.0043L252.843 67.5512L307.04 42.2688L239.65 52.3768L276.278 19.7106L216.777 41.1101L231.575 5.03551L187.133 35.1377L178.132 0L154.182 35.2178L122.624 5.23275L121.931 41.2765L71.5067 20.1113L94.3041 52.6419L31.1603 42.7989L74.5391 67.9334L6.27735 70.596L65.1333 85.2341L0 100.143L67.1641 102.59L12.9594 127.879L80.3567 117.765L43.7218 150.437L103.223 129.038L88.4247 165.112L132.874 135.01L141.875 170.142L165.818 134.93L197.376 164.915L198.069 128.871L248.493 150.036L225.696 117.506L288.84 127.349L245.461 102.214L313.729 99.5456L254.867 84.9136Z"
          fill="currentColor"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "0.85rem",
          color: "#18191b",
          textAlign: "center",
          letterSpacing: "-0.01em",
          transform: "rotate(3deg)",
        }}
      >
        MAKE NOISE
      </span>
    </div>
  );
}

export function BadgeCurious({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        color: "#f5c54d",
      }}
    >
      <svg
        viewBox="0 0 144 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
        aria-hidden="true"
      >
        <path
          d="M116.128 5.51202C91.073 -7.19605 60.4596 2.81639 47.7515 27.8717L0 122.031L90.7364 168.046L138.488 73.8858C151.196 48.8305 141.184 18.2171 116.128 5.509V5.51202ZM91.0639 54.9343C81.385 50.0252 77.5189 38.2025 82.4281 28.5236C87.3373 18.8447 99.16 14.9786 108.839 19.8878C118.518 24.797 122.384 36.6197 117.475 46.2985C112.565 55.9774 100.743 59.8435 91.0639 54.9343Z"
          fill="currentColor"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          fontFamily: "var(--font-heading)",
          fontWeight: 900,
          fontSize: "0.72rem",
          color: "#18191b",
          textAlign: "center",
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          transform: "translateY(22%) rotate(26deg)",
        }}
      >
        STAY
        <br />
        CURIOUS
      </span>
    </div>
  );
}
