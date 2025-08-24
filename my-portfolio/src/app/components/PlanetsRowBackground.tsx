"use client";

import { motion, useMotionValue, useSpring, useTransform, useAnimationControls, type MotionValue } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Simple mouse parallax helper
function useParallax(strength = 10) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 60, damping: 20 });
  const y = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // -1..1
      const dy = (e.clientY - cy) / cy; // -1..1
      mx.set(dx * strength);
      my.set(dy * strength);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my, strength]);

  return { x, y };
}

function Earth({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 1.2);
  const ty = useTransform(y, (v: number) => v * 1.2);
  return (
    <motion.svg
      style={{ x: tx, y: ty }}
      width="240"
      height="240"
      viewBox="0 0 240 240"
      className="drop-shadow-[0_0_30px_rgba(80,200,255,0.25)]"
    >
      <defs>
        <radialGradient id="earthGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#a6e7ff" />
          <stop offset="70%" stopColor="#3da9f5" />
          <stop offset="100%" stopColor="#1b4e89" />
        </radialGradient>
        <radialGradient id="earthShadow" cx="55%" cy="50%" r="60%">
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="110" fill="url(#earthGlow)" />
      {/* Simple landmasses */}
      <path d="M40,120 C60,90 110,80 130,110 C145,130 110,150 85,155 C65,160 50,145 40,120 Z" fill="#68d391" opacity="0.9" />
      <path d="M150,70 C175,80 200,100 195,120 C190,140 165,150 150,140 C135,130 140,90 150,70 Z" fill="#68d391" opacity="0.85" />
      {/* gloss */}
      <circle cx="95" cy="90" r="55" fill="white" opacity="0.08" />
      {/* cloud swirls */}
      <path d="M60,85 C80,75 110,80 130,70" stroke="#fff" strokeWidth="4" opacity="0.25" strokeLinecap="round" />
      <path d="M70,110 C95,100 140,108 165,98" stroke="#fff" strokeWidth="3" opacity="0.22" strokeLinecap="round" />
      {/* limb shadow */}
      <circle cx="120" cy="120" r="110" fill="url(#earthShadow)" />
    </motion.svg>
  );
}

function Saturn({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 0.9);
  const ty = useTransform(y, (v: number) => v * 0.9);
  return (
    <motion.svg
      style={{ x: tx, y: ty }}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="drop-shadow-[0_0_30px_rgba(255,210,130,0.22)]"
    >
      <defs>
        <radialGradient id="saturnBody" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffe7a3" />
          <stop offset="70%" stopColor="#f3c76a" />
          <stop offset="100%" stopColor="#c08c3a" />
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#eae0c9" />
          <stop offset="50%" stopColor="#bfae8d" />
          <stop offset="100%" stopColor="#eae0c9" />
        </linearGradient>
        <linearGradient id="ringStripes" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d6c6aa" />
          <stop offset="50%" stopColor="#b19c7b" />
          <stop offset="100%" stopColor="#d6c6aa" />
        </linearGradient>
        <radialGradient id="ringShadow" cx="50%" cy="50%" r="60%">
          <stop offset="70%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <g transform="translate(100,100)">
        {/* Rings with subtle stripes */}
        <g transform="rotate(-18)">
          <ellipse rx="110" ry="36" fill="url(#ringGrad)" opacity="0.8" />
          <g opacity="0.35">
            <ellipse rx="105" ry="34" fill="none" stroke="url(#ringStripes)" strokeWidth="2" />
            <ellipse rx="95" ry="31" fill="none" stroke="url(#ringStripes)" strokeWidth="2" />
            <ellipse rx="85" ry="28" fill="none" stroke="url(#ringStripes)" strokeWidth="2" />
          </g>
        </g>
        {/* Body with ring shadow */}
        <circle r="60" fill="url(#saturnBody)" />
        <ellipse rx="70" ry="20" fill="url(#ringShadow)" opacity="0.25" transform="rotate(-18) translate(0,8)" />
      </g>
    </motion.svg>
  );
}

function Mars({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 0.7);
  const ty = useTransform(y, (v: number) => v * 0.7);
  return (
    <motion.svg
      style={{ x: tx, y: ty }}
      width="160"
      height="160"
      viewBox="0 0 160 160"
      className="drop-shadow-[0_0_24px_rgba(255,140,100,0.2)]"
    >
      <defs>
        <radialGradient id="marsBody" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffb199" />
          <stop offset="70%" stopColor="#e06b4f" />
          <stop offset="100%" stopColor="#8c2b23" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="80" r="70" fill="url(#marsBody)" />
      <circle cx="60" cy="60" r="18" fill="#7a2a21" opacity="0.6" />
      <circle cx="95" cy="95" r="12" fill="#7a2a21" opacity="0.6" />
    </motion.svg>
  );
}

// Jupiter with bands and Great Red Spot
function Jupiter({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 0.6);
  const ty = useTransform(y, (v: number) => v * 0.6);
  return (
    <motion.svg style={{ x: tx, y: ty }} width="220" height="220" viewBox="0 0 220 220">
      <defs>
        <radialGradient id="jupShade" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f7e2c6" />
          <stop offset="70%" stopColor="#d9b899" />
          <stop offset="100%" stopColor="#a88366" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="98" fill="url(#jupShade)" />
      {/* bands */}
      <g opacity="0.9">
        <rect x="10" y="58" width="200" height="10" fill="#d7b494" rx="5" />
        <rect x="12" y="70" width="196" height="16" fill="#caa07f" rx="8" />
        <rect x="8" y="92" width="204" height="12" fill="#e9d8c7" rx="6" />
        <rect x="16" y="108" width="188" height="14" fill="#b88e6c" rx="7" />
        <rect x="10" y="126" width="200" height="12" fill="#e7cdb7" rx="6" />
        <rect x="14" y="142" width="192" height="8" fill="#c9b39b" rx="4" />
      </g>
      {/* Great Red Spot */}
      <ellipse cx="158" cy="123" rx="18" ry="12" fill="#c96d4e" opacity="0.9" />
      <ellipse cx="158" cy="123" rx="10" ry="7" fill="#e9a088" opacity="0.85" />
    </motion.svg>
  );
}

// Venus: creamy/yellow with subtle streaks
function Venus({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 0.8);
  const ty = useTransform(y, (v: number) => v * 0.8);
  return (
    <motion.svg style={{ x: tx, y: ty }} width="180" height="180" viewBox="0 0 180 180">
      <defs>
        <radialGradient id="venusBody" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ffe8b3" />
          <stop offset="70%" stopColor="#f0c56a" />
          <stop offset="100%" stopColor="#c48b3a" />
        </radialGradient>
      </defs>
      <circle cx="90" cy="90" r="80" fill="url(#venusBody)" />
      <path d="M20,70 C60,55 120,65 160,55" stroke="#f7d79b" strokeWidth="8" opacity="0.6" fill="none" />
      <path d="M18,95 C60,85 120,95 162,85" stroke="#eebc70" strokeWidth="6" opacity="0.5" fill="none" />
    </motion.svg>
  );
}

// Neptune: deep blue with faint horizontal bands
function Neptune({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 0.65);
  const ty = useTransform(y, (v: number) => v * 0.65);
  return (
    <motion.svg style={{ x: tx, y: ty }} width="170" height="170" viewBox="0 0 170 170">
      <defs>
        <radialGradient id="nepBody" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#a5d3ff" />
          <stop offset="70%" stopColor="#3b76d4" />
          <stop offset="100%" stopColor="#1e3d7a" />
        </radialGradient>
      </defs>
      <circle cx="85" cy="85" r="75" fill="url(#nepBody)" />
      <rect x="20" y="76" width="130" height="8" fill="#5ea0ff" opacity="0.5" rx="4" />
      <rect x="25" y="96" width="120" height="6" fill="#7bb6ff" opacity="0.45" rx="3" />
      {/* dark spot */}
      <ellipse cx="62" cy="88" rx="9" ry="6" fill="#274b8c" opacity="0.6" />
    </motion.svg>
  );
}

// Mercury: gray with craters
function Mercury({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 0.85);
  const ty = useTransform(y, (v: number) => v * 0.85);
  return (
    <motion.svg style={{ x: tx, y: ty }} width="140" height="140" viewBox="0 0 140 140">
      <defs>
        <radialGradient id="merBody" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#e2e2e2" />
          <stop offset="70%" stopColor="#9a9a9a" />
          <stop offset="100%" stopColor="#5e5e5e" />
        </radialGradient>
      </defs>
      <circle cx="70" cy="70" r="64" fill="url(#merBody)" />
      <circle cx="50" cy="48" r="10" fill="#6a6a6a" opacity="0.7" />
      <circle cx="90" cy="78" r="8" fill="#6a6a6a" opacity="0.7" />
      <circle cx="75" cy="55" r="6" fill="#6a6a6a" opacity="0.7" />
      {/* crater highlights */}
      <circle cx="46" cy="45" r="4" fill="#bdbdbd" opacity="0.6" />
      <circle cx="86" cy="76" r="3" fill="#bdbdbd" opacity="0.6" />
    </motion.svg>
  );
}

// Uranus: cyan body with subtle ring
function Uranus({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const tx = useTransform(x, (v: number) => v * 0.75);
  const ty = useTransform(y, (v: number) => v * 0.75);
  return (
    <motion.svg style={{ x: tx, y: ty }} width="190" height="190" viewBox="0 0 190 190">
      <defs>
        <radialGradient id="uraBody" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#c3f3f7" />
          <stop offset="70%" stopColor="#60d2df" />
          <stop offset="100%" stopColor="#2b7f8b" />
        </radialGradient>
        <linearGradient id="uraRing" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d7f6f8" />
          <stop offset="50%" stopColor="#9adfe7" />
          <stop offset="100%" stopColor="#d7f6f8" />
        </linearGradient>
      </defs>
      <g transform="translate(95,95)">
        <ellipse rx="98" ry="28" fill="url(#uraRing)" opacity="0.55" transform="rotate(-12)" />
        <circle r="78" fill="url(#uraBody)" />
      </g>
    </motion.svg>
  );
}

export default function PlanetsRowBackground() {
  // Disable cursor parallax for planets; use static motion values instead
  const x0 = useMotionValue(0);
  const y0 = useMotionValue(0);

  // Depth-scattered composition across screen (top->bottom with depth)
  // Each item: type, top, left, depth(0=closest), floatDur, delay
  const items: Array<{
    id: string;
    type: 'earth' | 'saturn' | 'jupiter' | 'neptune' | 'mercury' | 'uranus';
    top: string;
    left: string;
    depth: number; // 0..1 (0 = closest/largest)
    floatDur: number;
    delay?: number;
  }> = [
  ];

  const renderPlanet = (item: (typeof items)[number]) => {
    // Scale and parallax strength based on depth
    const scale = 1 - item.depth * 0.55; // closer -> larger
    const opacity = 1; // keep all crisp and fully visible

    // Float animation amplitude varies a bit with depth
    const floatAmp = 6 + item.depth * 8;

    const content =
      item.type === 'earth' ? (
        <Earth x={x0} y={y0} />
      ) : item.type === 'saturn' ? (
        <Saturn x={x0} y={y0} />
      ) : item.type === 'jupiter' ? (
        <Jupiter x={x0} y={y0} />
      ) : item.type === 'neptune' ? (
        <Neptune x={x0} y={y0} />
      ) : item.type === 'mercury' ? (
        <Mercury x={x0} y={y0} />
      ) : null;

    return (
      <motion.div
        key={item.id}
        className="absolute"
        style={{ top: item.top, left: item.left, opacity }}
        initial={{ y: 0 }}
        animate={{ y: [0, -floatAmp, 0] }}
        transition={{ duration: item.floatDur, repeat: Infinity, ease: 'easeInOut', delay: item.delay || 0 }}
      >
        <div style={{ transform: `scale(${scale})` }}>
          {content}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map(renderPlanet)}

      {/* Shooting stars (diagonal streaks) */}
      {/* (Shooting stars removed as requested) */}

      {/* Single spaceship flying across on dynamic curved path (LTR only) */}
      {/* (Spaceship removed as requested) */}
      {/* Rare comet with bright tail on a curved, fast path */}
      {/* (Comet removed as requested) */}
    </div>
  );
}

// Simple shooting star: a bright head with fading tail moving linearly
function ShootingStar({ top, left, angle = -20, length = 200, duration = 3, delay = 0 }: {
  top: string; left: string; angle?: number; length?: number; duration?: number; delay?: number;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ top, left, rotate: angle as any }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ x: length, y: length * 0.25, opacity: [0, 1, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    >
      <svg width="180" height="8" viewBox="0 0 180 8">
        <defs>
          <linearGradient id="starTail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="6" cy="4" r="3" fill="#fff" />
        <rect x="10" y="2" width="170" height="4" fill="url(#starTail)" rx="2" />
      </svg>
    </motion.div>
  );
}

// Rare comet with bright long tail on a quick, curved LTR path
function CometCurve({ baseDelay = 3 }: { baseDelay?: number }) {
  const controls = useAnimationControls();
  const [path, setPath] = useState<string>('');
  const mountedRef = useRef(true);

  const makePath = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const startY = h * (0.10 + Math.random() * 0.30); // 10%..40%
    const endY = h * (0.15 + Math.random() * 0.35);
    const cp1 = { x: w * (0.20 + Math.random() * 0.20), y: h * (0.00 + Math.random() * 0.60) };
    const cp2 = { x: w * (0.55 + Math.random() * 0.25), y: h * (0.15 + Math.random() * 0.60) };
    const startX = -0.22 * w; // off-screen left
    const endX = 1.22 * w;    // off-screen right
    return `M ${startX},${startY} C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${endX},${endY}`;
  };

  useEffect(() => {
    mountedRef.current = true;
    let cancelled = false;

    async function loop() {
      await new Promise((r) => setTimeout(r, baseDelay * 1000));
      while (!cancelled && mountedRef.current) {
        // 70% chance to appear each cycle; otherwise wait and try again
        if (Math.random() < 0.7) {
          const nextPath = makePath();
          const duration = 5 + Math.random() * 3; // 5..8s quick streak
          setPath(nextPath);
          await controls.start({ offsetDistance: '0%' } as any, { type: false });
          await controls.start({ offsetDistance: '100%' } as any, { duration, ease: 'linear' });
        }
        // cooldown before next potential comet
        const cooldown = 8 + Math.random() * 12; // 8..20s
        await new Promise((r) => setTimeout(r, cooldown * 1000));
      }
    }

    loop();
    return () => { cancelled = true; mountedRef.current = false; };
  }, [baseDelay, controls]);

  return (
    <motion.div
      className="absolute"
      style={{
        top: 0,
        left: 0,
        offsetPath: path ? `path('${path}')` : undefined,
        offsetRotate: 'auto',
      } as any}
      animate={controls as any}
      initial={{ offsetDistance: '0%' } as any}
    >
      <div style={{ transform: `translate(-50%, -50%)` }}>
        <svg width="260" height="16" viewBox="0 0 260 16">
          <defs>
            <linearGradient id="cometTail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Tail should trail behind the head along the motion direction.
              Draw tail to the LEFT of the head and place head near the RIGHT. */}
          <rect x="0" y="4" width="240" height="8" fill="url(#cometTail)" rx="4" />
          <circle cx="250" cy="8" r="5" fill="#fff" />
        </svg>
      </div>
    </motion.div>
  );
}

// Stylized spaceship following a dynamic curved path (left-to-right, path changes each pass)
function SpaceShipCurve({ size = 'small', baseDelay = 0 }: { size?: 'small' | 'large'; baseDelay?: number }) {
  const controls = useAnimationControls();
  const [path, setPath] = useState<string>('');
  const [scale] = useState<number>(size === 'large' ? 1.1 : 0.85);
  const mountedRef = useRef(true);

  // Generate a smooth cubic bezier from off-left to off-right with random control points
  const makePath = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const startY = h * (0.12 + Math.random() * 0.65); // 12%..77%
    const endY = h * (0.10 + Math.random() * 0.70);
    const cp1 = { x: w * (0.15 + Math.random() * 0.25), y: h * (0.05 + Math.random() * 0.85) };
    const cp2 = { x: w * (0.55 + Math.random() * 0.25), y: h * (0.05 + Math.random() * 0.85) };
    const startX = -0.18 * w; // off-screen left
    const endX = 1.18 * w;    // off-screen right
    return `M ${startX},${startY} C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${endX},${endY}`;
  };

  useEffect(() => {
    mountedRef.current = true;
    let cancelled = false;

    async function loop() {
      // staggered initial delay
      await new Promise((r) => setTimeout(r, baseDelay * 1000));
      while (!cancelled && mountedRef.current) {
        // new path + duration each pass
        const nextPath = makePath();
        const duration = 8 + Math.random() * 6; // 8..14s faster
        setPath(nextPath);
        // reset offsetDistance to 0 then animate to 100%
        await controls.start({
          offsetDistance: '0%'
        } as any, { type: false });

        await controls.start({
          offsetDistance: '100%'
        } as any, { duration, ease: 'linear' });
      }
    }

    loop();
    return () => { cancelled = true; mountedRef.current = false; };
  }, [baseDelay, controls]);

  return (
    <motion.div
      className="absolute"
      style={{
        top: 0,
        left: 0,
        offsetPath: path ? `path('${path}')` : undefined,
        offsetRotate: 'auto',
      } as any}
      animate={controls as any}
      initial={{ offsetDistance: '0%' } as any}
    >
      <div style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
        <svg width="120" height="60" viewBox="0 0 120 60">
          {/* body */}
          {/* flip the craft so the nose points right */}
          <g transform="scale(-1,1) translate(-120,0)">
            <path d="M10,30 C25,10 80,10 95,30 C80,50 25,50 10,30 Z" fill="#9ca3af" stroke="#e5e7eb" strokeWidth="2" />
            {/* cockpit */}
            <ellipse cx="48" cy="28" rx="12" ry="10" fill="#60a5fa" stroke="#93c5fd" strokeWidth="2" />
            {/* fins */}
            <path d="M92,22 L110,12 L102,30 Z" fill="#ef4444" />
            <path d="M92,38 L110,48 L102,30 Z" fill="#f59e0b" />
            {/* engine flame */}
            <motion.path
              d="M102,30 C112,26 118,30 112,34 C108,36 106,34 102,30 Z"
              fill="#fbbf24"
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
