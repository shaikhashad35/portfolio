export const theme = {
  colors: {
    primary: '#0a192f',
    secondary: '#112240',
    accent: '#64ffda',
    text: '#8892b0',
    textLight: '#ccd6f6',
    white: '#e6f1ff',
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