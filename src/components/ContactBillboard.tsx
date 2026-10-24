"use client";
import React from "react";
import Image from "next/image";
import { MessageSquare, Code2, Box, Users } from "lucide-react";
import styles from "./ContactBillboard.module.css";

/* 12 Tech Stack SVG Logos */
function NextJsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-label="Next.js">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="1.2" />
      <path
        d="M9 7.5v9M9 8l6.2 8.5M15.2 7.5v5.5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="React">
      <circle cx="12" cy="12" r="2.2" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1.3">
        <ellipse cx="12" cy="12" rx="9" ry="3.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-label="TypeScript">
      <rect width="24" height="24" rx="4.5" fill="#3178c6" />
      <path
        d="M5.5 9h6m-3 0v8M14 15.5c.8.6 1.8.8 2.7.5.8-.3 1.3-1 1.3-1.8 0-1.5-2.2-1.6-2.2-2.7 0-.5.4-.9 1-.9.7 0 1.4.3 1.9.7M14 9"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function NodeJsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="Node.js">
      <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" fill="#339933" />
      <path d="M9 16V9l6 7V9" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="Python">
      <path
        d="M11.9 2.5c-3.1 0-2.9 1.3-2.9 1.3l.01 1.4h2.9v.4H6.2S4 5.3 4 8.5c0 3.2 1.9 3.1 1.9 3.1h1.1V10c0-1.8 1.6-1.7 1.6-1.7h2.8c1.5 0 1.5-1.5 1.5-1.5V4.9c0-1.2-.9-2.4-1-2.4zm-1.6 1a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z"
        fill="#387eb8"
      />
      <path
        d="M12.1 21.5c3.1 0 2.9-1.3 2.9-1.3l-.01-1.4h-2.9v-.4h5.7s2.2.3 2.2-2.9c0-3.2-1.9-3.1-1.9-3.1h-1.1v1.6c0 1.8-1.6 1.7-1.6 1.7h-2.8c-1.5 0-1.5 1.5-1.5 1.5v1.9c0 1.2.9 2.4 1 2.4zm1.6-1a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z"
        fill="#ffe052"
      />
    </svg>
  );
}

function OpenAIIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="#10a37f"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="OpenAI"
    >
      <path d="M20.5 10.5a5 5 0 0 0-.4-3.5 5.2 5.2 0 0 0-4.3-2.6 5 5 0 0 0-3.3-1.4 5.2 5.2 0 0 0-4.9 3.3 5 5 0 0 0-3.3 1.5 5.2 5.2 0 0 0-.7 5 5 5 0 0 0 .4 3.5 5.2 5.2 0 0 0 4.3 2.6 5 5 0 0 0 3.3 1.4 5.2 5.2 0 0 0 4.9-3.3 5 5 0 0 0 3.3-1.5 5.2 5.2 0 0 0 .7-5z" />
      <path d="M12 8.5v7m-3-5 6 3.5m-6 0 6-3.5" />
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="AWS">
      <path d="M4 16c4 2.8 11.5 3.2 16-1.5" stroke="#ff9900" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 12.8l2.2 1.7-1 2.5" fill="#ff9900" />
      <text x="3.5" y="11.5" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">
        aws
      </text>
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="Vercel">
      <path d="M12 3l10 17H2L12 3z" fill="#ffffff" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#2496ed" aria-label="Docker">
      <path d="M2 13.5c.5-1.5 2-2 3.5-1.8.5-.8 1.5-1.2 2.5-1.2h.5V8h3v2.5h2.5V8h3v2.5h2.5V8h3v2.5h1c2.5 0 4.5 1.5 5 3.5-1 .5-2.2.5-3.5 0-1.5-.5-3-.5-4.5.5-1.5 1-3.5 1-5 0-1.5-1-3.5-1-5 0-1.5 1-3 1-4.5 0-.5-.3-1-.7-1.5-.5z" />
      <rect x="8.5" y="5" width="2.4" height="2.2" rx=".3" fill="#2496ed" />
      <rect x="11.5" y="5" width="2.4" height="2.2" rx=".3" fill="#2496ed" />
      <rect x="14.5" y="5" width="2.4" height="2.2" rx=".3" fill="#2496ed" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="PostgreSQL">
      <path
        d="M12 3c-4.5 0-8 3.5-8 8 0 3 1.5 5.5 4 7l1-3c-1.5-.8-2.5-2.2-2.5-4 0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5c0 1.8-1 3.2-2.5 4l1 3c2.5-1.5 4-4 4-7 0-4.5-3.5-8-8-8z"
        fill="#336791"
      />
      <path d="M12 9v5m-2-2h4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MongoDbIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="MongoDB">
      <path
        d="M12 2C12 2 6 7.5 6 13.5c0 3.5 2.5 6.5 6 8.5 3.5-2 6-5 6-8.5C18 7.5 12 2 12 2z"
        fill="#13aa52"
      />
      <path d="M12 2v20" stroke="#ffffff" strokeWidth="1.2" opacity="0.65" />
    </svg>
  );
}

function FirebaseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-label="Firebase">
      <path d="M4.5 17.5L7 4l3.5 6-6 7.5z" fill="#ffa000" />
      <path d="M19.5 17.5L16 8l-2 3.5 5.5 6z" fill="#f57c00" />
      <path d="M12 21.5l7.5-4L14 11.5 12 21.5z" fill="#ffca28" />
      <path d="M12 21.5l-7.5-4 6-7.5 1.5 11.5z" fill="#ff8f00" />
    </svg>
  );
}

export default function ContactBillboard() {
  return (
    <div className={styles.billboard}>
      {/* 1. Raw Clean Photo of Dennys in the Car */}
      <Image
        src="/images/personal/dennys-contact-clean.webp"
        alt="Dennys Marquez — Full Stack Developer & AI Engineer con su mascota"
        fill
        sizes="(max-width: 1200px) 100vw, 1200px"
        className={styles.bgImage}
        priority={false}
      />

      {/* 2. Soft Gradient Mask for High Text Contrast */}
      <div className={styles.gradientOverlay} aria-hidden="true" />

      {/* 3. HTML/CSS Overlaid Interactive Content */}
      <div className={styles.contentGrid}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          {/* Headline */}
          <h2 className={styles.headline}>
            ¿Tienes un <span className={styles.highlightCyan}>proyecto</span>
            <br />
            <span className={styles.highlightCyan}>o vacante</span> en mente?
          </h2>

          {/* Subtitle */}
          <p className={styles.subtext}>
            Disponible para roles <strong>Full Stack</strong>, <strong>Machine Learning &amp; RAG Híbrido</strong> o{" "}
            <strong>consultoría técnica</strong>.
            <br />
            Conversemos sobre tus objetivos y cómo puedo aportar valor a tu equipo.
          </p>

          {/* Main Action Button */}
          <a
            href="https://wa.me/51922466078"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            title="Conversar con Dennys Marquez por WhatsApp"
          >
            <span className={styles.ctaBtnIcon}>
              <MessageSquare size={20} fill="currentColor" strokeWidth={0} />
            </span>
            <span>Conversemos</span>
            <span className={styles.ctaBtnArrow}>›</span>
          </a>

          {/* 3 Feature Capability Cards */}
          <div className={styles.featuresRow}>
            {/* Feature 01 */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <Code2 size={22} />
              </div>
              <h3 className={styles.featureTitle}>Full Stack Development</h3>
              <p className={styles.featureSubtitle}>Next.js · React · Node</p>
            </div>

            {/* Feature 02 */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <Box size={22} />
              </div>
              <h3 className={styles.featureTitle}>ML &amp; RAG Híbrido</h3>
              <p className={styles.featureSubtitle}>BM25 · Embeddings · Agentes</p>
            </div>

            {/* Feature 03 */}
            <div className={styles.featureCard}>
              <div className={styles.featureIconBox}>
                <Users size={22} />
              </div>
              <h3 className={styles.featureTitle}>Consultoría Técnica</h3>
              <p className={styles.featureSubtitle}>Arquitectura &amp; ROI</p>
            </div>
          </div>

          {/* Tech Stack Glass Card */}
          <div className={styles.techCard}>
            <span className={styles.techCardTitle}>Tech Stack</span>
            <div className={styles.techGrid}>
              {/* Row 1 */}
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <NextJsIcon />
                </div>
                <span className={styles.techLabel}>Next.js</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <ReactIcon />
                </div>
                <span className={styles.techLabel}>React</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <TypeScriptIcon />
                </div>
                <span className={styles.techLabel}>TypeScript</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <NodeJsIcon />
                </div>
                <span className={styles.techLabel}>Node.js</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <PythonIcon />
                </div>
                <span className={styles.techLabel}>Python</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <OpenAIIcon />
                </div>
                <span className={styles.techLabel}>OpenAI</span>
              </div>

              {/* Row 2 */}
              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <AwsIcon />
                </div>
                <span className={styles.techLabel}>AWS</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <VercelIcon />
                </div>
                <span className={styles.techLabel}>Vercel</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <DockerIcon />
                </div>
                <span className={styles.techLabel}>Docker</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <PostgresIcon />
                </div>
                <span className={styles.techLabel}>PostgreSQL</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <MongoDbIcon />
                </div>
                <span className={styles.techLabel}>MongoDB</span>
              </div>

              <div className={styles.techItem}>
                <div className={styles.techIconBox}>
                  <FirebaseIcon />
                </div>
                <span className={styles.techLabel}>Firebase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Handwritten Annotations */}
        <div className={styles.rightCol} aria-hidden="true">
          {/* Top Handwritten Note */}
          <div className={styles.noteTop}>
            <div className={styles.noteText}>
              <div>Buenas ideas</div>
              <div>Mejores productos</div>
              <div>Impacto real</div>
            </div>
            <svg
              className={styles.noteArrowTop}
              width="50"
              height="60"
              viewBox="0 0 50 60"
              fill="none"
            >
              <path
                d="M42 4 C32 16, 12 30, 14 50"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M6 44 L14 52 L22 42"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom Handwritten Note */}
          <div className={styles.noteBottom}>
            <div className={styles.noteText}>
              <div>Tecnología</div>
              <div>Personas</div>
              <div>Resultados</div>
            </div>
            <svg
              className={styles.noteArrowBottom}
              width="60"
              height="40"
              viewBox="0 0 60 40"
              fill="none"
            >
              <path
                d="M6 14 C20 12, 38 16, 50 30"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M44 33 L52 30 L50 20"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
