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
const Projects = lazy(() => import('./components/Projects'));
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

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
                  <Projects />
                  <Skills />
                  <Education />
                  <Certificates />
                  <Blogs />
                  <Contact />
                </MainContainer>
              </Suspense>
              <ScrollToTop />
            </>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;