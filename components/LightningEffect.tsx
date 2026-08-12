
import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Fired on every strike so other components (e.g. CursorSpotlight) can react. */
export const LIGHTNING_EVENT = 'portfolio:lightning-strike';

type Point = [number, number];

/**
 * Classic midpoint-displacement fractal — the same technique used to fake
 * terrain/coastlines, applied to a single line segment. Each pass halves the
 * segment length and roughly halves the displacement, so the result reads as
 * a jagged, organic bolt rather than a smooth curve or a sawtooth zig-zag.
 */
function subdivide(points: Point[], displace: number, roughness: number): Point[] {
  if (displace < 1.4 || points.length > 160) return points;
  const next: Point[] = [points[0]];
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * displace;
    const my = (y1 + y2) / 2 + (Math.random() - 0.5) * displace * 0.5;
    next.push([mx, my], [x2, y2]);
  }
  return subdivide(next, displace * roughness, roughness);
}

interface Branch {
  path: Point[];
  phase: number; // per-branch random offset so branches don't fade in lockstep
}

interface Bolt {
  path: Point[];
  branches: Branch[];
  glowX: number;
  glowY: number;
}

function generateBolt(width: number, height: number): Bolt {
  const originX = width * (0.12 + Math.random() * 0.76);
  const endY = height * (0.4 + Math.random() * 0.45);
  const endX = originX + (Math.random() - 0.5) * width * 0.35;
  const path = subdivide([[originX, -30], [endX, endY]], 80 + Math.random() * 40, 0.55 + Math.random() * 0.08);

  const branches: Branch[] = [];
  const branchCount = 2 + Math.floor(Math.random() * 4);
  for (let b = 0; b < branchCount; b++) {
    const idx = Math.floor(path.length * (0.2 + Math.random() * 0.55));
    const [bx, by] = path[idx];
    const dx = (Math.random() - 0.5) * 220;
    const dy = 50 + Math.random() * 160;
    const branchPath = subdivide([[bx, by], [bx + dx, by + dy]], 36 + Math.random() * 20, 0.58);
    branches.push({ path: branchPath, phase: Math.random() });
  }

  return { path, branches, glowX: originX, glowY: endY * 0.3 };
}

/** Piecewise timeline: instant rise, a couple of realistic flickers, then an eased fade. */
function strikeIntensity(t: number, fadeDuration: number): number {
  if (t < 16) return t / 16;
  if (t < 48) return 1;
  if (t < 82) return 1 - ((t - 48) / 34) * 0.72;
  if (t < 120) return 0.28 + ((t - 82) / 38) * 0.62;
  if (t < 155) return 0.9 - ((t - 120) / 35) * 0.32;
  const decay = Math.max(0, 1 - (t - 155) / fadeDuration);
  return 0.58 * decay * decay;
}

function strokePath(ctx: CanvasRenderingContext2D, path: Point[], width: number, color: string, blur: number, alpha: number) {
  if (path.length < 2 || alpha <= 0.002) return;
  ctx.save();
  ctx.globalAlpha = Math.min(1, alpha);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.beginPath();
  ctx.moveTo(path[0][0], path[0][1]);
  for (let i = 1; i < path.length; i++) ctx.lineTo(path[i][0], path[i][1]);
  ctx.stroke();
  ctx.restore();
}

function drawBolt(ctx: CanvasRenderingContext2D, w: number, h: number, bolt: Bolt, intensity: number) {
  if (intensity <= 0.002) return;

  // Whole-page glow — the canvas is composited with mix-blend-mode: screen,
  // so this radial burst optically brightens every gradient/shadow already
  // on the page instead of just sitting on top of it.
  const radius = Math.max(w, h) * 0.95;
  const grad = ctx.createRadialGradient(bolt.glowX, bolt.glowY, 0, bolt.glowX, bolt.glowY, radius);
  grad.addColorStop(0, `rgba(232,214,255,${0.5 * intensity})`);
  grad.addColorStop(0.35, `rgba(192,132,252,${0.22 * intensity})`);
  grad.addColorStop(1, 'rgba(192,132,252,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Main bolt: soft purple halo, mid violet-white, thin hot-white core.
  strokePath(ctx, bolt.path, 18, 'rgba(196,140,255,1)', 20, 0.5 * intensity);
  strokePath(ctx, bolt.path, 5, 'rgba(232,204,255,1)', 10, 0.85 * intensity);
  strokePath(ctx, bolt.path, 1.6, 'rgba(255,255,255,1)', 0, intensity);

  bolt.branches.forEach(({ path, phase }) => {
    const bi = intensity * (0.4 + phase * 0.4);
    strokePath(ctx, path, 8, 'rgba(196,140,255,1)', 14, 0.5 * bi);
    strokePath(ctx, path, 2.4, 'rgba(232,204,255,1)', 6, 0.8 * bi);
    strokePath(ctx, path, 1, 'rgba(255,255,255,1)', 0, bi);
  });
}

/**
 * Cinematic lightning — canvas-rendered fractal bolts, each generated fresh
 * so no two strikes look alike. Fires a single bolt roughly every 10-15s —
 * rare enough to read as a subtle accent rather than a constant effect.
 * Respects prefers-reduced-motion (skips entirely). Silent by design — no
 * audio.
 */
const LightningEffect: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let cancelled = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    interface ActiveStrike { bolt: Bolt; start: number; fadeDuration: number; totalLife: number }
    let activeStrikes: ActiveStrike[] = [];

    const spawnStrike = (now: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const fadeDuration = 260 + Math.random() * 170;
      activeStrikes.push({
        bolt: generateBolt(w, h),
        start: now,
        fadeDuration,
        totalLife: 155 + fadeDuration,
      });
      window.dispatchEvent(new CustomEvent(LIGHTNING_EVENT));
    };

    // One bolt at a time, roughly every 10-15s.
    const randomInterval = () => 10000 + Math.random() * 5000;
    let nextSpawnAt = performance.now() + randomInterval();

    const loop = (now: number) => {
      if (cancelled) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      activeStrikes = activeStrikes.filter((s) => {
        const t = now - s.start;
        if (t >= s.totalLife) return false;
        drawBolt(ctx, w, h, s.bolt, strikeIntensity(t, s.fadeDuration));
        return true;
      });

      if (now >= nextSpawnAt) {
        spawnStrike(now);
        nextSpawnAt = now + randomInterval();
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelled = true;
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 z-[90] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default LightningEffect;
