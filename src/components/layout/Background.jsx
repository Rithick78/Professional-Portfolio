import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, pts = [], animId;

    const cols = ["#2563EB", "#7C3AED", "#06B6D4"];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function mkStar() {
      return {
        x: Math.random() * (W || window.innerWidth),
        y: Math.random() * (H || window.innerHeight),
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.12,
        vy: Math.random() * 0.35 + 0.08,
        o: Math.random() * 0.45 + 0.15,
        c: cols[Math.floor(Math.random() * 3)],
      };
    }

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 55; i++) pts.push(mkStar());

    function draw() {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.o;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > H) {
          p.y = -4;
          p.x = Math.random() * W;
        }
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid */}
      <div className="grid-overlay" />

      {/* Stars canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.6,
        }}
      />
    </>
  );
}