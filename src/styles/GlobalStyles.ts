import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  /* Animated gradient background overlay */
  #root {
    position: relative;
    
    &::before {
      content: '';
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: ${({ theme }) => theme.mode === 'dark' 
        ? `radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 50%),
           radial-gradient(circle at 80% 20%, rgba(87, 203, 255, 0.03) 0%, transparent 50%),
           radial-gradient(circle at 50% 80%, rgba(167, 139, 250, 0.02) 0%, transparent 50%)`
        : `radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.04) 0%, transparent 50%),
           radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.04) 0%, transparent 50%),
           radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%)`
      };
      animation: backgroundShift 20s ease-in-out infinite alternate;
      z-index: 0;
      pointer-events: none;
    }
  }

  @keyframes backgroundShift {
    0% { transform: translate(0%, 0%) rotate(0deg); }
    33% { transform: translate(2%, -2%) rotate(1deg); }
    66% { transform: translate(-1%, 1%) rotate(-0.5deg); }
    100% { transform: translate(1%, -1%) rotate(0.5deg); }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.textLight};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      opacity: 0.8;
    }
  }

  section {
    padding: 100px 0;
    position: relative;
    z-index: 1;
  }

  /* Selection highlight */
  ::selection {
    background-color: ${({ theme }) => theme.colors.accent}33;
    color: ${({ theme }) => theme.colors.textLight};
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.accent}66, ${({ theme }) => theme.colors.accentAlt}66);
    border-radius: 3px;

    &:hover {
      background: linear-gradient(180deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentAlt});
    }
  }
`;