import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Theme } from '../../styles/theme';
import { ReactNode, createContext, useContext, useState, useCallback } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const useThemeToggle = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;