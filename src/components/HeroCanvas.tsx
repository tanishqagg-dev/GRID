"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const w = mount.offsetWidth || window.innerWidth;
    const h = mount.offsetHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Particles
    const COUNT = 900;
    const positions = new Float32Array(COUNT * 3);
    const velocities: { vx: number; vy: number; phase: number }[] = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      velocities.push({ vx: 0, vy: 0, phase: Math.random() * Math.PI * 2 });
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Colour: interpolate teal → blue based on y
    const colors = new Float32Array(COUNT * 3);
    const teal = new THREE.Color("#00ffb3"); // bright teal, glows on dark
    const blue = new THREE.Color("#60a5fa"); // vivid blue, glows on dark
    for (let i = 0; i < COUNT; i++) {
      const t = (positions[i * 3 + 1] + 2.5) / 5;
      const c = teal.clone().lerp(blue, t);
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.022,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize
    const onResize = () => {
      const nw = mount.offsetWidth || window.innerWidth;
      const nh = mount.offsetHeight || window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.005;

      const pos = geo.attributes.position.array as Float32Array;

      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;

        // Drift up + sway
        pos[iy] += 0.0003;
        pos[ix] += Math.sin(time + velocities[i].phase) * 0.0002;

        // Wrap vertically
        if (pos[iy] > 2.5) pos[iy] = -2.5;

        // Cursor scatter (light interaction)
        const dx = pos[ix] - mouse.x * 4;
        const dy = pos[iy] - mouse.y * 2.5;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.5) {
          const force = (0.5 - dist) / 0.5;
          velocities[i].vx += (dx / dist) * force * 0.008;
          velocities[i].vy += (dy / dist) * force * 0.008;
        }

        // Spring back + damping
        velocities[i].vx *= 0.92;
        velocities[i].vy *= 0.92;
        pos[ix] += velocities[i].vx;
        pos[iy] += velocities[i].vy;
      }

      geo.attributes.position.needsUpdate = true;

      // Gentle rotation
      points.rotation.y = mouse.x * 0.05;
      points.rotation.x = mouse.y * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
}
