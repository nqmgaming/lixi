'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    color: string;
    size: number;
    decay: number;
    gravity: number;
    trail: { x: number; y: number; alpha: number }[];
}

interface Rocket {
    x: number;
    y: number;
    vy: number;
    targetY: number;
    color: string;
    exploded: boolean;
    trail: { x: number; y: number; alpha: number }[];
}

interface FireworksProps {
    /** Whether to auto-fire rockets continuously */
    autoFire?: boolean;
    /** Interval between auto firing in ms */
    interval?: number;
    /** Number of particles per explosion */
    particleCount?: number;
    /** Duration before cleanup in ms, 0 = infinite */
    duration?: number;
    className?: string;
}

const COLORS = [
    '#FF4444', '#FFD700', '#FF6B35', '#FF1493',
    '#FF8C00', '#FFE44D', '#FF69B4', '#FFA07A',
    '#FF5252', '#FFAB40', '#FFD740', '#FF6E40',
];

export function Fireworks({
    autoFire = true,
    interval = 800,
    particleCount = 80,
    duration = 0,
    className = '',
}: FireworksProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);
    const rocketsRef = useRef<Rocket[]>([]);
    const lastFireRef = useRef(0);
    const startTimeRef = useRef(0);

    const launchRocket = useCallback((canvas: HTMLCanvasElement) => {
        const x = Math.random() * canvas.width * 0.6 + canvas.width * 0.2;
        const targetY = Math.random() * canvas.height * 0.3 + canvas.height * 0.1;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];

        rocketsRef.current.push({
            x,
            y: canvas.height,
            vy: -(6 + Math.random() * 4),
            targetY,
            color,
            exploded: false,
            trail: [],
        });
    }, []);

    const explode = useCallback((x: number, y: number, color: string) => {
        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
            const speed = 2 + Math.random() * 4;
            const particleColor = Math.random() > 0.3 ? color : COLORS[Math.floor(Math.random() * COLORS.length)];

            particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                color: particleColor,
                size: 1.5 + Math.random() * 2,
                decay: 0.008 + Math.random() * 0.015,
                gravity: 0.04,
                trail: [],
            });
        }
        particlesRef.current.push(...particles);
    }, [particleCount]);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        startTimeRef.current = Date.now();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Stop after duration
            if (duration > 0 && Date.now() - startTimeRef.current > duration) {
                if (particlesRef.current.length === 0 && rocketsRef.current.length === 0) {
                    return;
                }
            }

            const now = Date.now();

            // Auto-fire rockets
            if (autoFire && now - lastFireRef.current > interval) {
                if (duration === 0 || now - startTimeRef.current < duration) {
                    launchRocket(canvas);
                    lastFireRef.current = now;
                }
            }

            // Update and draw rockets
            rocketsRef.current = rocketsRef.current.filter(rocket => {
                if (rocket.exploded) return false;

                rocket.trail.push({ x: rocket.x, y: rocket.y, alpha: 0.5 });
                if (rocket.trail.length > 8) rocket.trail.shift();

                rocket.y += rocket.vy;

                // Draw rocket trail
                rocket.trail.forEach((t, i) => {
                    ctx.beginPath();
                    ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 215, 0, ${t.alpha * (i / rocket.trail.length)})`;
                    ctx.fill();
                });

                // Draw rocket head
                ctx.beginPath();
                ctx.arc(rocket.x, rocket.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = '#FFD700';
                ctx.fill();

                // Check if reached target
                if (rocket.y <= rocket.targetY) {
                    rocket.exploded = true;
                    explode(rocket.x, rocket.y, rocket.color);
                    return false;
                }

                return true;
            });

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter(p => {
                p.trail.push({ x: p.x, y: p.y, alpha: p.alpha * 0.5 });
                if (p.trail.length > 5) p.trail.shift();

                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.vx *= 0.98;
                p.alpha -= p.decay;

                if (p.alpha <= 0) return false;

                // Draw trail
                p.trail.forEach((t, i) => {
                    ctx.beginPath();
                    ctx.arc(t.x, t.y, p.size * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = `${p.color}${Math.floor(t.alpha * (i / p.trail.length) * 255).toString(16).padStart(2, '0')}`;
                    ctx.fill();
                });

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${Math.floor(p.alpha * 255).toString(16).padStart(2, '0')}`;
                ctx.fill();

                // Glow effect
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${Math.floor(p.alpha * 50).toString(16).padStart(2, '0')}`;
                ctx.fill();

                return true;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        // Initial burst
        launchRocket(canvas);
        setTimeout(() => launchRocket(canvas), 200);
        setTimeout(() => launchRocket(canvas), 500);

        animate();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resizeCanvas);
            particlesRef.current = [];
            rocketsRef.current = [];
        };
    }, [autoFire, interval, duration, launchRocket, explode]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-10 ${className}`}
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
