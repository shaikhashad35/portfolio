import React from 'react';

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
  timeToInteractive?: number;
}

const metrics: PerformanceMetrics[] = [];
const METRICS_LIMIT = 100;

const logMetric = (metric: PerformanceMetrics) => {
  metrics.push(metric);
  if (metrics.length > METRICS_LIMIT) {
    metrics.shift();
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.componentName} rendered in ${metric.renderTime}ms`);
  }
};

export const getPerformanceMetrics = () => {
  return [...metrics];
};

export const usePerformanceMonitor = (): PerformanceMetrics | null => {
  const metricsRef = React.useRef<PerformanceMetrics | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.performance || !window.performance.getEntriesByType) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          const paintMetric = entry as PerformancePaintTiming;
          if (paintMetric.name === 'first-paint') {
            metricsRef.current = {
              ...metricsRef.current!,
              firstPaint: paintMetric.startTime,
              componentName: 'root',
              renderTime: 0,
              timestamp: Date.now()
            };
          } else if (paintMetric.name === 'first-contentful-paint') {
            metricsRef.current = {
              ...metricsRef.current!,
              firstContentfulPaint: paintMetric.startTime
            };
          }
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });

    return () => observer.disconnect();
  }, []);

  return metricsRef.current;
};

export function withPerformanceTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
): React.FC<P> {
  return function WithPerformanceTracking(props: P) {
    const startTime = performance.now();

    React.useEffect(() => {
      const endTime = performance.now();
      logMetric({
        componentName,
        renderTime: endTime - startTime,
        timestamp: Date.now()
      });
    });

    return React.createElement(WrappedComponent, props);
  };
}

export const measurePerformance = (componentName: string, startTime: number): void => {
  const endTime = performance.now();
  console.debug(`${componentName} render time: ${endTime - startTime}ms`);
};

export const trackInteraction = (name: string, duration: number): void => {
  if (window.performance && window.performance.mark) {
    window.performance.mark(`${name}-start`);
    setTimeout(() => {
      window.performance.mark(`${name}-end`);
      window.performance.measure(name, `${name}-start`, `${name}-end`);
    }, duration);
  }
};

export const usePerformanceTracker = (componentName: string): () => void => {
  if (process.env.NODE_ENV === 'development') {
    const startTime = performance.now();
    
    return () => measurePerformance(componentName, startTime);
  }
  return () => {};
};

export const useComponentPerformance = (componentName: string): (() => void) => {
  if (process.env.NODE_ENV === 'development') {
    const startTime = performance.now();
    
    return () => measurePerformance(componentName, startTime);
  }
  return () => {};
};