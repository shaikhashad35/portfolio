const baseTheme = {
  fonts: {
    heading: "'JetBrains Mono', monospace",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  transitions: {
    default: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
};

export const lightTheme = {
  ...baseTheme,
  mode: 'light' as 'light' | 'dark',
  colors: {
    primary: '#f8f9fc',
    secondary: '#ffffff',
    tertiary: '#eef1f6',
    accent: '#0ea5e9',
    accentAlt: '#6366f1',
    accentGradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    accentGradientText: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)',
    text: '#64748b',
    textLight: '#1e293b',
    white: '#0f172a',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    cardBorder: 'rgba(14, 165, 233, 0.12)',
    cardHoverBorder: 'rgba(14, 165, 233, 0.4)',
    glowGreen: '0 4px 24px rgba(14, 165, 233, 0.12)',
    glowBlue: '0 4px 24px rgba(99, 102, 241, 0.12)',
    glowPurple: '0 4px 24px rgba(168, 85, 247, 0.12)',
    navBg: 'rgba(248, 249, 252, 0.85)',
    codeBg: '#f8f9fc',
    codeColor: '#0ea5e9',
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.6)',
    border: '1px solid rgba(14, 165, 233, 0.1)',
    backdropFilter: 'blur(12px)',
    borderRadius: '12px',
  },
};

export const darkTheme: Theme = {
  ...baseTheme,
  mode: 'dark',
  colors: {
    primary: '#0a192f',
    secondary: '#112240',
    tertiary: '#1a3a5c',
    accent: '#64ffda',
    accentAlt: '#57cbff',
    accentGradient: 'linear-gradient(135deg, #64ffda, #57cbff)',
    accentGradientText: 'linear-gradient(135deg, #64ffda 0%, #57cbff 50%, #a78bfa 100%)',
    text: '#8892b0',
    textLight: '#ccd6f6',
    white: '#e6f1ff',
    cardBg: 'rgba(17, 34, 64, 0.6)',
    cardBorder: 'rgba(100, 255, 218, 0.08)',
    cardHoverBorder: 'rgba(100, 255, 218, 0.3)',
    glowGreen: '0 0 20px rgba(100, 255, 218, 0.15)',
    glowBlue: '0 0 20px rgba(87, 203, 255, 0.15)',
    glowPurple: '0 0 20px rgba(167, 139, 250, 0.15)',
    navBg: 'rgba(10, 25, 47, 0.85)',
    codeBg: '#0a192f',
    codeColor: '#64ffda',
  },
  glass: {
    background: 'rgba(17, 34, 64, 0.5)',
    border: '1px solid rgba(100, 255, 218, 0.08)',
    backdropFilter: 'blur(12px)',
    borderRadius: '12px',
  },
};

// Default to light theme
export const theme = lightTheme;

export type Theme = typeof lightTheme;