// Performance optimization utilities

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Image optimization helper
export function getOptimizedImageUrl(
  originalUrl: string,
  _width?: number,
  _quality?: number
): string {
  // This is a placeholder for image optimization
  // In production, you might use CDN services like Cloudinary or similar
  return originalUrl;
}

// Lazy load images
export function lazyLoadImage(
  imageElement: HTMLImageElement,
  src: string
): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageElement.src = src;
          observer.unobserve(imageElement);
        }
      });
    },
    { rootMargin: '50px' }
  );
  observer.observe(imageElement);
}

// Memory cleanup helper
export function cleanup<T>(...items: Array<T | null | undefined>): void {
  items.forEach((item) => {
    if (item && typeof item === 'object') {
      // Force garbage collection hint for large objects
      Object.keys(item).forEach((key) => {
        delete (item as any)[key];
      });
    }
  });
}