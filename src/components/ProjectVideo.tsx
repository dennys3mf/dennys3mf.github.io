"use client";
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Lock, RotateCw } from "lucide-react";
import styles from "../app/page.module.css";

interface ProjectVideoProps {
  src: string;
  url: string;
  title: string;
}

export default function ProjectVideo({ src, url, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current && isPlaying) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            setIsVisible(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleReload = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className={styles.browserFrame} ref={containerRef}>
      {/* High-Definition Browser Header */}
      <div className={styles.browserHeader}>
        <div className={styles.browserDots} aria-hidden="true">
          <span className={`${styles.dot} ${styles.dot1}`} />
          <span className={`${styles.dot} ${styles.dot2}`} />
          <span className={`${styles.dot} ${styles.dot3}`} />
        </div>

        <div className={styles.browserUrlPill}>
          <Lock size={11} className={styles.browserLockIcon} />
          <span className={styles.browserUrl}>{url}</span>
        </div>

        <button
          onClick={handleReload}
          className={styles.browserReloadBtn}
          title="Reiniciar video"
          aria-label="Reiniciar demostración"
        >
          <RotateCw size={12} />
        </button>
      </div>

      {/* Video Viewport Container */}
      <div className={styles.mediaContainer}>
        {/* Subtle realistic glass sheen */}
        <div className={styles.videoGlassSheen} aria-hidden="true" />

        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={`Demostración en video de ${title}`}
          onClick={togglePlay}
          className={styles.projectVideoElement}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Interactive floating control pill */}
        <div className={styles.videoControlsOverlay}>
          <button
            onClick={togglePlay}
            className={styles.videoControlBtn}
            title={isPlaying ? "Pausar video" : "Reproducir video"}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          </button>

          <button
            onClick={toggleMute}
            className={styles.videoControlBtn}
            title={isMuted ? "Activar audio" : "Silenciar audio"}
            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        </div>
      </div>
    </div>
  );
}
