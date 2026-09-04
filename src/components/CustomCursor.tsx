'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

interface ClickPulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pulsesRef = useRef<ClickPulse[]>([]);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device is touch-based or reduced motion
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchQuery.matches || motionQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      // Spawn trail particle
      if (Math.random() > 0.4) {
        particlesRef.current.push({
          x: clientX + (Math.random() - 0.5) * 6,
          y: clientY + (Math.random() - 0.5) * 6,
          size: Math.random() * 2.5 + 1,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.5,
          alpha: 0.8,
          color: Math.random() > 0.5 ? '#06b6d4' : '#3b82f6'
        });
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Add click ripple pulse
      pulsesRef.current.push({
        x: clientX,
        y: clientY,
        radius: 4,
        maxRadius: 36,
        alpha: 1
      });

      // Burst particles on click
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        const speed = Math.random() * 2.5 + 1;
        particlesRef.current.push({
          x: clientX,
          y: clientY,
          size: Math.random() * 3 + 1.5,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: i % 2 === 0 ? '#06b6d4' : '#8b5cf6'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Canvas animation render loop
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      };

      window.addEventListener('resize', handleResize);

      const ctx = canvas.getContext('2d');
      const render = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Update & Draw Pulses
          for (let i = pulsesRef.current.length - 1; i >= 0; i--) {
            const p = pulsesRef.current[i];
            p.radius += 1.8;
            p.alpha -= 0.04;

            if (p.alpha <= 0 || p.radius >= p.maxRadius) {
              pulsesRef.current.splice(i, 1);
              continue;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(6, 182, 212, ${p.alpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Holographic outer ring
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.3, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(139, 92, 246, ${p.alpha * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          // Update & Draw Trail Particles
          for (let i = particlesRef.current.length - 1; i >= 0; i--) {
            const part = particlesRef.current[i];
            part.x += part.vx;
            part.y += part.vy;
            part.alpha -= 0.025;

            if (part.alpha <= 0) {
              particlesRef.current.splice(i, 1);
              continue;
            }

            ctx.beginPath();
            ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
            ctx.fillStyle = part.color;
            ctx.globalAlpha = part.alpha;
            ctx.fill();
            ctx.globalAlpha = 1.0;
          }
        }
        animFrameRef.current = requestAnimationFrame(render);
      };

      render();

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      };
    }

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      {/* Outer target reticle */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 border rounded-full ${
          isHovered
            ? 'w-10 h-10 border-cyan-400 bg-cyan-500/10 scale-125 shadow-[0_0_15px_rgba(6,182,212,0.6)] border-dashed animate-spin'
            : 'w-7 h-7 border-cyan-500/60 bg-transparent scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      {/* Inner core pointer */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#06b6d4]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
}
