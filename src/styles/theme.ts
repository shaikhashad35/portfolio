export const theme = {
  colors: {
    primary: '#0a192f',
    secondary: '#112240',
    accent: '#64ffda',
    accentAlt: '#57cbff',
    text: '#8892b0',
    textLight: '#ccd6f6',
    white: '#e6f1ff',
    cardBorder: 'rgba(100, 255, 218, 0.1)',
    cardHoverBorder: 'rgba(100, 255, 218, 0.3)',
  },
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
  }
} as const;

export type Theme = typeof theme;