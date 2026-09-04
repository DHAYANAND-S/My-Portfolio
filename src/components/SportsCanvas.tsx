'use client';

import React, { useEffect, useRef } from 'react';

export default function SportsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight || 450;
      }
    };

    window.addEventListener('resize', handleResize);

    let progress = 0;
    const trackLanes = 4;
    const laneHeight = 24;

    const codeSnippets = ['import { Speed, Discipline }', 'const run = () => 400m', 'athletics.push("200m_PB")', 'secretary.lead()', 'system.sync()'];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      progress += 0.006;
      if (progress > 1) progress = 0;

      const startY = height * 0.4;
      const totalWidth = width * 0.85;
      const startX = width * 0.075;

      // Render 4 Curved Track Lanes on Left side -> Transitioning into straight data lines -> Transforming into Code Matrix Nodes
      for (let i = 0; i < trackLanes; i++) {
        const yOffset = (i - (trackLanes - 1) / 2) * laneHeight;

        ctx.beginPath();
        // Track curve section
        const curveX = startX + totalWidth * 0.35;
        const midX = startX + totalWidth * 0.65;
        const endX = startX + totalWidth;

        ctx.moveTo(startX, startY + yOffset);
        ctx.lineTo(curveX, startY + yOffset);

        // Transition zone into neural data wave
        const waveAmp = Math.sin(progress * Math.PI * 4 + i) * 12;
        ctx.bezierCurveTo(
          curveX + 40,
          startY + yOffset + waveAmp,
          midX - 40,
          startY + yOffset - waveAmp,
          midX,
          startY + yOffset
        );

        ctx.lineTo(endX, startY + yOffset);

        // Gradient line from track red/amber to cyan/electric blue
        const grad = ctx.createLinearGradient(startX, 0, endX, 0);
        grad.addColorStop(0, '#f59e0b');
        grad.addColorStop(0.35, '#ef4444');
        grad.addColorStop(0.7, '#06b6d4');
        grad.addColorStop(1, '#8b5cf6');

        ctx.strokeStyle = grad;
        ctx.lineWidth = i === 0 ? 3 : 2;
        ctx.setLineDash(i === 0 ? [] : [10, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated Runner Pulse along track line
        const pulsePos = (progress + i * 0.22) % 1;
        let pulseX = startX;
        let pulseY = startY + yOffset;

        if (pulsePos < 0.35) {
          pulseX = startX + (pulsePos / 0.35) * (curveX - startX);
        } else if (pulsePos < 0.65) {
          const t = (pulsePos - 0.35) / 0.3;
          pulseX = curveX + t * (midX - curveX);
          pulseY = startY + yOffset + Math.sin(t * Math.PI * 2) * 12;
        } else {
          pulseX = midX + ((pulsePos - 0.65) / 0.35) * (endX - midX);
        }

        // Draw Runner / Energy Core Particle
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 5, 0, Math.PI * 2);
        ctx.fillStyle = pulsePos > 0.5 ? '#06b6d4' : '#fbbf24';
        ctx.shadowColor = pulsePos > 0.5 ? '#06b6d4' : '#ef4444';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Code snippet floats up when pulse reaches digital stage (pulsePos > 0.65)
        if (pulsePos > 0.65 && i < codeSnippets.length) {
          ctx.font = '11px monospace';
          ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
          ctx.fillText(codeSnippets[i], pulseX - 20, pulseY - 16);
        }
      }

      // Draw Neural Connectors at the digital transition end
      const transitionX = startX + totalWidth * 0.7;
      for (let j = 0; j < 5; j++) {
        const ny = startY + (j - 2) * 35;
        ctx.beginPath();
        ctx.arc(transitionX, ny, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#8b5cf6';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(transitionX, ny, 10, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative w-full h-[220px] md:h-[300px] overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/80 backdrop-blur-md p-4 my-6">
      <div className="absolute top-3 left-4 flex items-center gap-2 text-xs font-mono text-cyan-400">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        SPORTS METRICS → DIGITAL NEURAL STREAM
      </div>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
