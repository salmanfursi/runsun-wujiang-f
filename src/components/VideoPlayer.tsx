import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function VideoPlayer({ src, className = '', fallback }: VideoPlayerProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoad = () => {
      setLoading(false);
      setError(false);
    };

    const handleError = () => {
      setLoading(false);
      setError(true);
    };

    video.addEventListener('canplay', handleLoad);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleLoad);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  if (error) {
    return (
      <div className={className}>
        {fallback || (
          <div className="w-full h-full bg-gradient-to-br from-[#1b2b3d] to-[#b35b28] flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-sm opacity-80">Video loading failed</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      {loading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-12 h-12 border-4 border-[#b35b28]/30 border-t-[#b35b28] rounded-full"></div>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}