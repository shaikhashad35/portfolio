import { memo, useCallback, useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { withPerformanceTracking } from '../../utils/performance';
import { Theme } from '../../styles/theme';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: ${({ theme }) => theme.mode === 'dark' ? 0.1 : 0.15};
  transition: opacity 0.4s ease;
`;

const CodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const theme = useTheme() as Theme;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    
    ctx.fillStyle = theme.colors.codeBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = theme.colors.codeColor;
    ctx.font = '15px Consolas';

    const symbols = '01アイウエオカキクケコサシスセソタチツテト';
    const raindrops = new Array(columns).fill(1);

    const matrix = () => {
      ctx.fillStyle = theme.mode === 'dark' 
        ? 'rgba(10, 25, 47, 0.05)' 
        : 'rgba(248, 249, 252, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme.mode === 'dark'
        ? theme.colors.codeColor
        : '#3b82f6';
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
  }, [theme]);

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