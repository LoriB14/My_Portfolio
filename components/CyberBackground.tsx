
import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { LIGHTNING_EVENT } from './LightningEffect';

/**
 * The site's ambient "cyberspace" atmosphere: faint drifting code/binary,
 * soft glowing particles that occasionally connect, gentle scan waves and
 * micro-glitches, and a handful of rare easter eggs. Everything lives on one
 * canvas so the DOM stays light and 60fps is easy to hold. Intensity is
 * deliberately restrained — it should be felt, not stared at — so it never
 * competes with the actual content sitting in front of it.
 */

const CODE_SNIPPETS = [
  '010101001101', '0xAF34D2', '0x9C3F1A', '11000101', '0xFF00FF',
  'const', 'while()', 'if', 'return', 'class', '{ }', '<>', '=>',
  'async', 'await', 'import', 'export', 'null', 'true', 'false',
  'AI', 'ML', 'GPU', 'API', 'LLM', 'Python', 'C++', 'React', 'TypeScript', 'Node.js',
];

const GLOW_COLORS = ['232,121,249', '196,140,255', '129,140,248']; // pink / purple / blue-violet

type Vec = { x: number; y: number };

interface CodeToken {
  text: string;
  x: number; y: number;
  vy: number;
  depth: number; // 0..1 — closer = bigger, sharper, faster
  rotation: number;
  rotationSpeed: number;
  born: number;
  life: number;
  burst?: boolean;
  revealUntil?: number;
}

interface GlowParticle {
  x: number; y: number; vx: number; vy: number;
  color: string; radius: number; baseAlpha: number; boost: number;
}

interface WireframeEgg {
  cx: number; cy: number; scale: number;
  ax: number; ay: number; avx: number; avy: number;
  born: number; life: number;
}

const CUBE_VERTS: [number, number, number][] = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
];
const CUBE_EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const REVEAL_MS = 550;

const CyberBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let rafId = 0;
    let cancelled = false;
    let lastTime = performance.now();

    const mouse: Vec & { active: boolean } = { x: w / 2, y: h / 2, active: false };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) { mouse.x = t.clientX; mouse.y = t.clientY; mouse.active = true; }
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleTouch, { passive: true });

    // ---------------- pools (sized to viewport, capped for perf) ----------------
    const area = w * h;
    const tokenCount = Math.round(clamp(area / 46000, 8, 22));
    const particleCount = Math.round(clamp(area / 62000, 6, 14));

    const makeToken = (spawnAnywhereY: boolean): CodeToken => {
      const depth = rand(0.25, 1);
      return {
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        x: rand(0, w),
        y: spawnAnywhereY ? rand(-60, h + 60) : rand(h * 0.6, h + 60),
        vy: -rand(6, 16) * (0.4 + depth * 0.8),
        depth,
        rotation: 0,
        rotationSpeed: Math.random() < 0.4 ? rand(-0.08, 0.08) : 0,
        born: performance.now(),
        life: rand(9000, 16000),
      };
    };

    const tokens: CodeToken[] = Array.from({ length: tokenCount }, () => makeToken(true));
    let burstTokens: CodeToken[] = [];

    const makeParticle = (): GlowParticle => ({
      x: rand(0, w),
      y: rand(0, h),
      vx: rand(-6, 6),
      vy: rand(-6, 6),
      color: GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)],
      radius: rand(1, 2.4),
      baseAlpha: rand(0.2, 0.34),
      boost: 0,
    });
    const particles: GlowParticle[] = Array.from({ length: particleCount }, makeParticle);

    // ---------------- ambient scan wave + micro-glitch (Layer 4) ----------------
    let nextScanAt = performance.now() + rand(14000, 26000);
    let scanStart = -1;
    const SCAN_DURATION = 1700;

    let nextGlitchAt = performance.now() + rand(9000, 18000);
    let glitchUntil = -1;

    // ---------------- easter eggs ----------------
    let nextEggAt = performance.now() + rand(40000, 70000);
    let lastEggType = -1;
    let binaryRainUntil = -1;
    let binaryColumns: { x: number; y: number; speed: number }[] = [];
    let wireframe: WireframeEgg | null = null;
    let attractUntil = -1;
    const attractPoint: Vec = { x: 0, y: 0 };

    const startBinaryRain = (now: number) => {
      const colCount = Math.min(Math.round(w / 26), 46);
      binaryColumns = Array.from({ length: colCount }, (_, i) => ({
        x: i * (w / colCount) + rand(-6, 6),
        y: rand(-h, 0),
        speed: rand(220, 420),
      }));
      binaryRainUntil = now + 3200;
    };

    const startCodeBurst = (now: number) => {
      const ox = rand(w * 0.15, w * 0.85);
      const oy = rand(h * 0.2, h * 0.8);
      burstTokens = Array.from({ length: 14 }, () => ({
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        x: ox + rand(-80, 80),
        y: oy + rand(-80, 80),
        vy: -rand(24, 46),
        depth: rand(0.7, 1),
        rotation: rand(-0.3, 0.3),
        rotationSpeed: rand(-0.05, 0.05),
        born: now,
        life: rand(1500, 2200),
        burst: true,
      }));
    };

    const startWireframe = (now: number) => {
      wireframe = {
        cx: rand(w * 0.15, w * 0.85),
        cy: rand(h * 0.15, h * 0.6),
        scale: rand(50, 95),
        ax: rand(0, Math.PI * 2),
        ay: rand(0, Math.PI * 2),
        avx: rand(0.15, 0.35) * (Math.random() < 0.5 ? -1 : 1),
        avy: rand(0.1, 0.28) * (Math.random() < 0.5 ? -1 : 1),
        born: now,
        life: rand(7000, 10000),
      };
    };

    const startCursorGather = (now: number) => {
      attractPoint.x = mouse.active ? mouse.x : w / 2;
      attractPoint.y = mouse.active ? mouse.y : h / 2;
      attractUntil = now + 2200;
    };

    const triggerEgg = (now: number) => {
      const options = [0, 1, 2, 3].filter((o) => o !== lastEggType);
      const type = options[Math.floor(Math.random() * options.length)];
      lastEggType = type;
      if (type === 0) startBinaryRain(now);
      else if (type === 1) startCodeBurst(now);
      else if (type === 2) startWireframe(now);
      else startCursorGather(now);
    };

    // Fifth egg, tied to the existing lightning system: occasionally the
    // flash briefly illuminates a nearby cluster of code at full brightness.
    const handleLightning = () => {
      if (Math.random() > 0.35) return;
      const now = performance.now();
      const px = rand(w * 0.2, w * 0.8);
      const py = rand(h * 0.15, h * 0.7);
      tokens
        .map((t) => ({ t, d: Math.hypot(t.x - px, t.y - py) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 6)
        .forEach(({ t }) => { t.revealUntil = now + REVEAL_MS; });
    };
    window.addEventListener(LIGHTNING_EVENT, handleLightning);

    // ---------------- draw helpers ----------------
    const drawToken = (t: CodeToken, now: number) => {
      const age = now - t.born;
      const lifeT = age / t.life;
      if (lifeT >= 1) return false;
      let fade = 1;
      if (lifeT < 0.2) fade = lifeT / 0.2;
      else if (lifeT > 0.75) fade = 1 - (lifeT - 0.75) / 0.25;

      let dx = 0, dy = 0, cursorBoost = 0;
      if (mouse.active) {
        const d = Math.hypot(t.x - mouse.x, t.y - mouse.y);
        const radius = 160;
        if (d < radius) {
          const p = 1 - d / radius;
          dx = ((t.x - mouse.x) / (d || 1)) * p * 10;
          dy = ((t.y - mouse.y) / (d || 1)) * p * 10;
          cursorBoost = p * 0.5;
        }
      }

      let reveal = 0;
      if (t.revealUntil && now < t.revealUntil) {
        reveal = 0.55 * ((t.revealUntil - now) / REVEAL_MS);
      }

      const baseAlpha = t.burst ? 0.2 + t.depth * 0.26 : 0.06 + t.depth * 0.09;
      const alpha = clamp((baseAlpha + cursorBoost * 0.06 + reveal) * fade, 0, t.burst ? 0.5 : 0.55);
      if (alpha <= 0.004) return true;

      ctx.save();
      ctx.translate(t.x + dx, t.y + dy);
      if (t.rotation) ctx.rotate(t.rotation);
      ctx.font = `${(t.burst ? 13 : 10) + t.depth * 6}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.fillStyle = `rgba(${t.burst || reveal > 0.1 ? '255,255,255' : '210,190,255'},${alpha})`;
      ctx.fillText(t.text, 0, 0);
      ctx.restore();
      return true;
    };

    // Ambient atmosphere doesn't need 60fps — running the full update+draw
    // pass on every other animation frame halves the main-thread cost (and
    // halves how much this layer competes with scroll/compositing) while
    // staying visually smooth for slow-drifting elements.
    let skipFrame = false;

    const frame = (now: number) => {
      if (cancelled) return;
      skipFrame = !skipFrame;
      if (skipFrame) {
        rafId = requestAnimationFrame(frame);
        return;
      }
      const dt = Math.min(now - lastTime, 64);
      lastTime = now;
      ctx.clearRect(0, 0, w, h);

      // Layer 1 — ambient code tokens
      for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        t.y += t.vy * (dt / 1000);
        t.rotation += t.rotationSpeed * (dt / 1000);
        const alive = drawToken(t, now);
        if (!alive || t.y < -80) tokens[i] = makeToken(false);
      }

      if (burstTokens.length) {
        burstTokens = burstTokens.filter((t) => {
          t.y += t.vy * (dt / 1000);
          t.rotation += t.rotationSpeed * (dt / 1000);
          return drawToken(t, now);
        });
      }

      // Layer 2 — glow particles + connecting lines
      const attracting = now < attractUntil;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (attracting) {
          const ddx = attractPoint.x - p.x, ddy = attractPoint.y - p.y;
          const d = Math.hypot(ddx, ddy) || 1;
          p.vx += (ddx / d) * 18 * (dt / 1000);
          p.vy += (ddy / d) * 18 * (dt / 1000);
          p.boost = clamp(p.boost + dt / 400, 0, 1);
        } else if (mouse.active) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          const radius = 130;
          if (d < radius) {
            const push = (1 - d / radius) * 40 * (dt / 1000);
            const nx = (p.x - mouse.x) / (d || 1);
            const ny = (p.y - mouse.y) / (d || 1);
            p.vx += nx * push;
            p.vy += ny * push;
            p.boost = clamp(p.boost + dt / 500, 0, 1);
          } else {
            p.boost = clamp(p.boost - dt / 800, 0, 1);
          }
        } else {
          p.boost = clamp(p.boost - dt / 800, 0, 1);
        }

        p.x += p.vx * (dt / 1000);
        p.y += p.vy * (dt / 1000);
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        // Soft glow without shadowBlur (very expensive per-call) — a larger,
        // fainter halo circle underneath a small bright core reads the same
        // at a fraction of the cost.
        const alpha = p.baseAlpha + p.boost * 0.4;
        const r = p.radius + p.boost * 1.2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color},${clamp(alpha * 0.35, 0, 0.3)})`;
        ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.color},${clamp(alpha, 0, 0.7)})`;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          const connectDist = 120;
          if (d < connectDist) {
            const alpha = (1 - d / connectDist) * 0.1 * (1 + Math.max(a.boost, b.boost));
            ctx.strokeStyle = `rgba(210,180,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Layer 4 — ambient scan wave
      if (scanStart < 0 && now >= nextScanAt) scanStart = now;
      if (scanStart >= 0) {
        const t = now - scanStart;
        if (t <= SCAN_DURATION) {
          const y = -100 + (h + 200) * (t / SCAN_DURATION);
          const fadeIn = t < 200 ? t / 200 : 1;
          const fadeOut = t > SCAN_DURATION - 300 ? (SCAN_DURATION - t) / 300 : 1;
          const fade = Math.min(fadeIn, fadeOut);
          const grad = ctx.createLinearGradient(0, y - 60, 0, y + 60);
          grad.addColorStop(0, 'rgba(196,140,255,0)');
          grad.addColorStop(0.5, `rgba(210,190,255,${0.05 * fade})`);
          grad.addColorStop(1, 'rgba(196,140,255,0)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, y - 60, w, 120);
        } else {
          scanStart = -1;
          nextScanAt = now + rand(16000, 30000);
        }
      }

      // Layer 4 — micro digital glitch
      if (glitchUntil < 0 && now >= nextGlitchAt) {
        glitchUntil = now + rand(60, 130);
        nextGlitchAt = now + rand(10000, 20000);
      }
      if (now < glitchUntil) {
        const gy = rand(0, h);
        const gh = rand(14, 34);
        ctx.fillStyle = 'rgba(232,121,249,0.07)';
        ctx.fillRect(rand(-6, 6), gy, w, gh);
        ctx.fillStyle = 'rgba(129,180,255,0.06)';
        ctx.fillRect(rand(-6, 6), gy, w, gh);
      }

      // Easter eggs (rare, one of four, rotating; a fifth lives on the lightning listener above)
      if (now >= nextEggAt) {
        triggerEgg(now);
        nextEggAt = now + rand(50000, 100000);
      }

      if (now < binaryRainUntil) {
        const fadeIn = Math.min(1, (3200 - (binaryRainUntil - now)) / 300);
        const fadeOut = binaryRainUntil - now < 400 ? (binaryRainUntil - now) / 400 : 1;
        const alpha = 0.16 * Math.min(fadeIn, fadeOut);
        ctx.font = '13px ui-monospace, monospace';
        binaryColumns.forEach((c) => {
          c.y += c.speed * (dt / 1000);
          if (c.y > h + 40) c.y = rand(-h * 0.4, -20);
          ctx.fillStyle = `rgba(220,195,255,${alpha})`;
          ctx.fillText(Math.random() < 0.5 ? '0' : '1', c.x, c.y);
          ctx.fillStyle = `rgba(220,195,255,${alpha * 0.5})`;
          ctx.fillText(Math.random() < 0.5 ? '0' : '1', c.x, c.y - 22);
        });
      }

      if (wireframe) {
        const wf = wireframe;
        const age = now - wf.born;
        if (age > wf.life) {
          wireframe = null;
        } else {
          wf.ax += wf.avx * (dt / 1000);
          wf.ay += wf.avy * (dt / 1000);
          const lifeT = age / wf.life;
          const fade = lifeT < 0.15 ? lifeT / 0.15 : lifeT > 0.8 ? (1 - lifeT) / 0.2 : 1;
          const alpha = 0.14 * fade;
          const projected = CUBE_VERTS.map(([x, y, z]) => {
            const y1 = y * Math.cos(wf.ax) - z * Math.sin(wf.ax);
            const z1 = y * Math.sin(wf.ax) + z * Math.cos(wf.ax);
            const x2 = x * Math.cos(wf.ay) + z1 * Math.sin(wf.ay);
            const z2 = -x * Math.sin(wf.ay) + z1 * Math.cos(wf.ay);
            const persp = 1 / (1 + (z2 + 2.4) * 0.12);
            return [wf.cx + x2 * wf.scale * persp, wf.cy + y1 * wf.scale * persp];
          });
          ctx.save();
          ctx.strokeStyle = `rgba(210,180,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.shadowColor = 'rgba(210,180,255,0.6)';
          ctx.shadowBlur = 6;
          CUBE_EDGES.forEach(([a, b]) => {
            ctx.beginPath();
            ctx.moveTo(projected[a][0], projected[a][1]);
            ctx.lineTo(projected[b][0], projected[b][1]);
            ctx.stroke();
          });
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener(LIGHTNING_EVENT, handleLightning);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 z-[2] pointer-events-none"
    />
  );
};

export default CyberBackground;
