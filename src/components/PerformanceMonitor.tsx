import { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    pageLoad: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.performance) return;

    const measurePerformance = () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');

      const fcp = paintEntries.find(
        (entry): entry is PerformanceEntry => entry.name === 'first-contentful-paint'
      );

      setMetrics({
        pageLoad: Math.round(perfData.loadEventEnd - perfData.fetchStart),
        domContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
        firstContentfulPaint: fcp ? Math.round(fcp.startTime) : 0,
        largestContentfulPaint: 0 // Will be measured with PerformanceObserver
      });
    };

    // Measure LCP using PerformanceObserver
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          setMetrics((prev) => ({
            ...prev,
            largestContentfulPaint: Math.round(lastEntry.startTime)
          }));
        });

        try {
          observer.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {
          console.warn('LCP measurement not supported');
        }
      }
    };

    // Initial measurements
    if (document.readyState === 'complete') {
      measurePerformance();
      measureLCP();
    } else {
      window.addEventListener('load', () => {
        measurePerformance();
        measureLCP();
      });
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Log performance metrics in development
  useEffect(() => {
    if (import.meta.env.DEV && metrics.pageLoad > 0) {
      console.group('🚀 Performance Metrics');
      console.log('Page Load Time:', metrics.pageLoad + 'ms');
      console.log('DOM Content Loaded:', metrics.domContentLoaded + 'ms');
      console.log('First Contentful Paint:', metrics.firstContentfulPaint + 'ms');
      console.log('Largest Contentful Paint:', metrics.largestContentfulPaint + 'ms');
      console.groupEnd();
    }
  }, [metrics]);

  return null; // This component doesn't render anything visible
}