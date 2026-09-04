'use client';

import React, { useEffect, useRef } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - width / 2) * 0.5;
      mouseRef.current.targetY = (e.clientY - height / 2) * 0.5;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D Neural Nodes
    const nodeCount = Math.min(Math.floor(width / 20), 75);
    const nodes: Node3D[] = [];

    const colors = ['#06b6d4', '#3b82f6', '#8b5cf6', '#a855f7'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 0.9,
        y: (Math.random() - 0.5) * height * 0.9,
        z: Math.random() * 400 - 200,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let angle = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2 + mouseRef.current.x * 0.3;
      const cy = height / 2 + mouseRef.current.y * 0.3;

      angle += 0.003;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      // Project and draw neural nodes
      const projectedNodes: { x: number; y: number; z: number; color: string; size: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Bounce back within bounds
        if (Math.abs(node.x) > width * 0.5) node.vx *= -1;
        if (Math.abs(node.y) > height * 0.5) node.vy *= -1;
        if (Math.abs(node.z) > 250) node.vz *= -1;

        // 3D Rotation transform around Y axis
        const rx = node.x * cosA - node.z * sinA;
        const rz = node.x * sinA + node.z * cosA;

        // Perspective scale factor
        const perspective = 600 / (600 + rz);
        const px = cx + rx * perspective;
        const py = cy + node.y * perspective;

        projectedNodes.push({
          x: px,
          y: py,
          z: rz,
          color: node.color,
          size: node.size * perspective
        });
      }

      // Draw Connection Lines (Edges) between close nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes & Holographic Glow
      for (let i = 0; i < projectedNodes.length; i++) {
        const n = projectedNodes[i];
        const alpha = Math.min(Math.max((n.z + 300) / 600, 0.2), 0.9);

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(n.size, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Subtle glow ring on larger nodes
        if (n.size > 2) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = n.color;
          ctx.globalAlpha = alpha * 0.3;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1.0;

      // Draw Dynamic Central Holographic Core Orb Ring
      const coreRadius = 140 + Math.sin(angle * 4) * 8;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 12]);
      ctx.stroke();
      ctx.setLineDash([]);

      const coreRadiusInner = 90 + Math.cos(angle * 3) * 6;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadiusInner, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
