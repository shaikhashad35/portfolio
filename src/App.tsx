import { FC, useState, useEffect, lazy, Suspense } from 'react';
import ThemeProvider from './components/common/ThemeProvider';
import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/common/ErrorBoundary';
import CodeBackground from './components/common/CodeBackground';
import Loading from './components/common/Loading';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/Navbar';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
// const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Blogs = lazy(() => import('./components/Blogs'));
const Contact = lazy(() => import('./components/Contact'));
const Certificates = lazy(() => import('./components/Certificates'));

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  color: ${({ theme }: any) => theme?.colors?.text || '#8892b0'};
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  opacity: 0.6;
  position: relative;
  z-index: 1;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${({ theme }: any) => theme?.colors?.accent || '#64ffda'};
    }
  }
`;

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <GlobalStyles />
        <AnimatePresence>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <CodeBackground />
              <Navbar />
              <Suspense fallback={<Loading />}>
                <MainContainer>
                  <Hero />
                  <Experience />
                  <Skills />
                  {/* <Projects /> */}
                  <Education />
                  <Certificates />
                  <Blogs />
                  <Contact />
                </MainContainer>
              </Suspense>
              <ScrollToTop />
              <Footer>
                <p>Built with React & TypeScript</p>
                <p style={{ marginTop: '0.3rem' }}>
                  <a href="https://github.com/shaikhashad35/portfolio" target="_blank" rel="noopener noreferrer">
                    Ashad Shaikh © {new Date().getFullYear()}
                  </a>
                </p>
              </Footer>
            </>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;