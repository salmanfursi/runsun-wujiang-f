import { useState, useEffect } from 'react';

interface AssetLoaderProps {
  src: string;
  type: 'image' | 'video';
  className?: string;
  alt?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  children?: React.ReactNode;
}

export default function AssetLoader({
  src,
  type,
  className = '',
  alt = '',
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  children
}: AssetLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`asset-${src.replace(/[^a-zA-Z0-9]/g, '')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (!isInView) {
    return <div id={`asset-${src.replace(/[^a-zA-Z0-9]/g, '')}`} className={className} />;
  }

  if (type === 'image') {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
        onLoad={handleLoad}
      />
    );
  }

  if (type === 'video') {
    return (
      <video
        src={src}
        className={className}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        onLoad={handleLoad}
      >
        {children}
      </video>
    );
  }

  return null;
}