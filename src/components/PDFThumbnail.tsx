import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { R2_BASE } from "../lib/r2";

// Set up PDF.js worker using unpkg CDN which will serve the exact npm
// package version (avoids missing versions on cdnjs). This is a safe
// fallback for environments where bundling the worker is complex.
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

interface PDFThumbnailProps {
  pdfPath: string;
  alt?: string;
  fallbackSrc?: string;
  className?: string;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({
  pdfPath,
  alt = "",
  fallbackSrc,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderedOnce, setRenderedOnce] = useState(false);

  useEffect(() => {
    const generateThumbnail = async () => {
      if (!canvasRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        // Check cache first
        const cacheKey = `pdf-thumb-${pdfPath}`;
        const cachedThumbnail = localStorage.getItem(cacheKey);

        if (cachedThumbnail) {
          // Load from cache
          const img = new Image();
          img.onload = () => {
            const ctx = canvasRef.current?.getContext("2d");
            if (ctx && canvasRef.current) {
              canvasRef.current.width = img.width;
              canvasRef.current.height = img.height;
              ctx.drawImage(img, 0, 0);
              setIsLoading(false);
            }
          };
          img.src = cachedThumbnail;
          return;
        }

        // Load PDF from R2 storage. Use fetch + arrayBuffer and encode the URI
        // to handle spaces and non-ASCII filenames. Fall back to URL method
        // if fetch fails.
        const pdfUrl = `${R2_BASE}${pdfPath}`;
        const encodedUrl = encodeURI(pdfUrl);
        let loadingTask: any;
        try {
          const resp = await fetch(encodedUrl);
          if (!resp.ok) throw new Error(`Fetch failed ${resp.status}`);
          const arrayBuffer = await resp.arrayBuffer();
          loadingTask = pdfjsLib.getDocument({
            data: arrayBuffer,
            cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/",
            cMapPacked: true,
          });
        } catch (fetchErr) {
          console.warn(
            "Fetch->arrayBuffer failed, falling back to URL getDocument()",
            fetchErr,
          );
          loadingTask = pdfjsLib.getDocument({
            url: encodedUrl,
            cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/",
            cMapPacked: true,
          });
        }
        const pdf = await loadingTask.promise;

        // Render first page
        const page = await pdf.getPage(1);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        } as any;

        await page.render(renderContext).promise;

        // Cache the thumbnail
        try {
          const thumbnailData = canvas.toDataURL("image/jpeg", 0.7);
          localStorage.setItem(cacheKey, thumbnailData);
        } catch (cacheError) {
          console.warn("Failed to cache thumbnail:", cacheError);
        }

        setIsLoading(false);
        setRenderedOnce(true);
      } catch (err) {
        console.error("Failed to generate PDF thumbnail:", err);
        setError(String(err));
        setIsLoading(false);
      }
    };

    generateThumbnail();
    // safety timeout: if not rendered in 8s, show fallback
    const timeout = setTimeout(() => {
      if (!renderedOnce) {
        setError("Timeout generating thumbnail");
        setIsLoading(false);
      }
    }, 8000);

    return () => clearTimeout(timeout);
  }, [pdfPath]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin h-8 w-8 text-[#b35b28]"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-xs text-gray-500 mt-2">Loading PDF...</span>
          </div>
        </div>
      )}

      {error ? (
        <div className={`relative ${className}`}>
          {fallbackSrc ? (
            <img
              src={fallbackSrc}
              alt={alt || "PDF thumbnail fallback"}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="text-center">
                <svg
                  className="h-8 w-8 text-red-500 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77 1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-xs text-red-500">PDF Unavailable</span>
                <div className="text-xs text-gray-500 mt-2">{error}</div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-cover rounded-lg ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity`}
        />
      )}
    </div>
  );
};

export default PDFThumbnail;
