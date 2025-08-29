import { memo, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { withPerformanceTracking } from '../../utils/performance';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.1;
`;

const CodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const rows = Math.floor(canvas.height / 20);
    
    ctx.fillStyle = '#0a192f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#64ffda';
    ctx.font = '15px Consolas';

    const symbols = '01アイウエオカキクケコサシスセソタチツテト';
    const raindrops = new Array(columns).fill(1);

    const matrix = () => {
      ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#64ffda';
      ctx.textAlign = 'center';

      for (let i = 0; i < raindrops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        const x = i * 20;
        const y = raindrops[i] * 20;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          raindrops[i] = 0;
        }
        raindrops[i]++;
      }

      animationFrameRef.current = requestAnimationFrame(matrix);
    };

    matrix();
  }, []);

  useEffect(() => {
    draw();

    const handleResize = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      draw();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [draw]);

  return <Canvas ref={canvasRef} aria-hidden="true" />;
};

export default memo(withPerformanceTracking(CodeBackground, 'CodeBackground'));