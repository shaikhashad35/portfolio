import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { ReactNode } from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;