import React from 'react';
import { scroller } from 'react-scroll';
import { useEffect, useState, useCallback, useRef } from 'react';

export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const getScrollOffset = (): number => {
  const isMobile = window.innerWidth <= 768;
  return isMobile ? -60 : -70;
};

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

export const useIntersectionObserver = (threshold = 0.1) => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .map(entry => entry.target.id);
    setVisibleSections(visible);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, {
      threshold,
      rootMargin: '0px'
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, threshold]);

  return visibleSections;
};

// Optimized scroll event handler with RAF
export const useOptimizedScrollHandler = (handler: () => void, delay = 16) => {
  const rafRef = useRef<number>();
  const lastCallRef = useRef<number>(0);

  useEffect(() => {
    const optimizedHandler = () => {
      const now = Date.now();
      if (now - lastCallRef.current >= delay) {
        handler();
        lastCallRef.current = now;
      } else {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(handler);
      }
    };

    window.addEventListener('scroll', optimizedHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', optimizedHandler);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handler, delay]);
};