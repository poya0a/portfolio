"use client";
import { useEffect, useRef } from "react";

export default function ShootingStarsCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const widthRef = useRef(0);
    const heightRef = useRef(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        widthRef.current = canvas.width = window.innerWidth;
        heightRef.current = canvas.height = window.innerHeight;

        const STAR_COUNT = 30;
        const SHOOT_COLORS = [200, 210, 50, 0];

        interface ShootingStar {
            x: number;
            y: number;
            len: number;
            speed: number;
            angle: number;
            opacity: number;
            hue: number;
        }

        interface TwinkleStar {
            x: number;
            y: number;
            size: number;
            alpha: number;
            speed: number;
        }

        const baseStars: ShootingStar[] = [];
        let clickStars: ShootingStar[] = [];
        const twinkles: TwinkleStar[] = [];

        const createShootingStar = (x?: number, y?: number): ShootingStar => ({
            x: x ?? widthRef.current * (0.6 + Math.random() * 0.4),
            y: y ?? heightRef.current * Math.random() * 0.1,
            len: 150 + Math.random() * 200,
            speed: 1 + Math.random() * 0.5,
            angle: Math.PI / 6 + (Math.random() - 0.5) * 0.1,
            opacity: 0.6 + Math.random() * 0.4,
            hue: SHOOT_COLORS[Math.floor(Math.random() * SHOOT_COLORS.length)],
        });

        const createTwinkleStar = (): TwinkleStar => ({
            x: Math.random() * widthRef.current,
            y: Math.random() * heightRef.current,
            size: 1 + Math.random() * 1.5,
            alpha: Math.random(),
            speed: 0.008 + Math.random() * 0.015,
        });

        const baseCount = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < baseCount; i++) baseStars.push(createShootingStar());
        for (let i = 0; i < STAR_COUNT; i++) twinkles.push(createTwinkleStar());

        const handleResize = () => {
            widthRef.current = window.innerWidth;
            heightRef.current = window.innerHeight;
            canvas.width = widthRef.current;
            canvas.height = heightRef.current;
        };
        window.addEventListener("resize", handleResize);

        const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            clickStars.push(createShootingStar(x, y));
        };
        canvas.addEventListener("click", handleClick);

        const render = () => {
        const width = widthRef.current;
        const height = heightRef.current;

        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, "#0a0c2a");
        grad.addColorStop(0.5, "#1b2763");
        grad.addColorStop(1, "#3b4b9f");
        ctx.fillStyle = grad;
        ctx.globalAlpha = 1;
        ctx.fillRect(0, 0, width, height);

        twinkles.forEach((t) => {
            t.alpha += t.speed * (Math.random() > 0.5 ? 1 : -1);
            if (t.alpha > 1) t.alpha = 1;
            if (t.alpha < 0) t.alpha = 0;
            const fade = 1 - Math.min(t.y / height, 1);
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${t.alpha * fade})`;
            ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
            ctx.fill();
        });

        const drawStar = (s: ShootingStar) => {
            s.x -= Math.cos(s.angle) * s.speed;
            s.y += Math.sin(s.angle) * s.speed;

            const fade = 1 - Math.min(s.y / height, 1);
            const gradTrail = ctx.createLinearGradient(
                s.x,
                s.y,
                s.x + Math.cos(s.angle) * s.len,
                s.y - Math.sin(s.angle) * s.len
            );
            gradTrail.addColorStop(0, `hsla(${s.hue}, 100%, 85%, ${s.opacity * fade})`);
            gradTrail.addColorStop(1, `hsla(${s.hue}, 100%, 40%, 0)`);

            ctx.strokeStyle = gradTrail;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(
                s.x + Math.cos(s.angle) * s.len,
                s.y - Math.sin(s.angle) * s.len
            );
            ctx.stroke();
        };

        baseStars.forEach((s, i) => {
            drawStar(s);
            if (s.x < -200 || s.y > height + 100) baseStars[i] = createShootingStar();
        });

        clickStars = clickStars.filter((s) => {
            drawStar(s);
            return !(s.x < -200 || s.y > height + 100);
        });

        requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            canvas.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <canvas
        ref={canvasRef}
        style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
        }}
        />
    );
}
