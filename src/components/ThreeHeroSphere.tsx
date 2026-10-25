"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroSphere() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch {
      return; // Graceful fallback
    }

    const width = container.clientWidth || 120;
    const height = container.clientHeight || 120;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    // Group to hold all 3D objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Inner Core Metallic Sphere
    const coreGeometry = new THREE.SphereGeometry(1.05, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f6bff,
      metalness: 0.85,
      roughness: 0.18,
      emissive: 0x1d2c70,
      emissiveIntensity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // 2. Outer Geometric Icosahedron Lattice / Wireframe
    const wireGeometry = new THREE.IcosahedronGeometry(1.35, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x8a7bff,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    group.add(wireMesh);

    // 3. Floating Data Particles around sphere
    const particleCount = 28;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 1.6 + Math.random() * 0.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4f6bff,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const blueLight = new THREE.PointLight(0x4f6bff, 3.5, 10);
    blueLight.position.set(-2, -2, 2);
    scene.add(blueLight);

    const periwinkleLight = new THREE.PointLight(0x8a7bff, 2.5, 10);
    periwinkleLight.position.set(2, 2, -2);
    scene.add(periwinkleLight);

    // Check WCAG Reduced Motion Preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      group.rotation.y = 0.5;
      group.rotation.x = 0.2;
      renderer.render(scene, camera);

      return () => {
        coreGeometry.dispose();
        coreMaterial.dispose();
        wireGeometry.dispose();
        wireMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
        if (container && renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    // Mouse Tracking with smooth damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 1.8;
      mouseY = (e.clientY / innerHeight - 0.5) * 1.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = elapsedTime * 0.35 + targetX;
      group.rotation.x = Math.sin(elapsedTime * 0.25) * 0.2 + targetY * 0.5;

      wireMesh.rotation.y = -elapsedTime * 0.2;
      particles.rotation.y = elapsedTime * 0.15;

      // Subtle breathing scale
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.035;
      coreMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      title="Elemento 3D Interactivo (Three.js)"
      aria-label="Esfera 3D Interactiva con Three.js"
    />
  );
}
