import React, { useEffect, useRef, useState } from "react";
import type { PDFDocumentLoadingTask, PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

interface PDFPageCanvasProps {
  document: PDFDocumentProxy;
  pageNumber: number;
  scrollRoot: HTMLDivElement | null;
  onFirstPageRendered: () => void;
}

const PDFPageCanvas: React.FC<PDFPageCanvasProps> = ({
  document,
  pageNumber,
  scrollRoot,
  onFirstPageRendered,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(pageNumber === 1);
  const [isRendered, setIsRendered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pageNumber === 1) {
      setIsNearViewport(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;
    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { root: scrollRoot, rootMargin: "1000px 0px" },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [pageNumber, scrollRoot]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!isNearViewport || !container || !canvas) return;

    let cancelled = false;
    let renderTask: ReturnType<PDFPageProxy["render"]> | null = null;

    const renderPage = async () => {
      try {
        const page = await document.getPage(pageNumber);
        if (cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const availableWidth = Math.max(container.clientWidth - 32, 1);
        const scale = Math.min(availableWidth / baseViewport.width, 1.5);
        const viewport = page.getViewport({ scale });
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        renderTask = page.render({
          canvas,
          viewport,
          transform:
            outputScale === 1
              ? undefined
              : [outputScale, 0, 0, outputScale, 0, 0],
        });
        await renderTask.promise;

        if (!cancelled) {
          setIsRendered(true);
          if (pageNumber === 1) onFirstPageRendered();
        }
      } catch (renderError) {
        if (cancelled) return;
        console.error(`Failed to render PDF page ${pageNumber}:`, renderError);
        setError(
          renderError instanceof Error
            ? renderError.message
            : String(renderError),
        );
      }
    };

    void renderPage();
    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [document, isNearViewport, onFirstPageRendered, pageNumber]);

  return (
    <div
      ref={containerRef}
      className="flex min-h-[60vh] w-full max-w-full shrink-0 items-center justify-center bg-gray-200 p-4"
    >
      {error ? (
        <p className="text-center text-sm text-red-700">
          Unable to render page {pageNumber}: {error}
        </p>
      ) : (
        <canvas
          ref={canvasRef}
          className={`max-w-full bg-white shadow-md ${isRendered ? "opacity-100" : "opacity-0"}`}
          aria-label={`PDF page ${pageNumber}`}
        />
      )}
    </div>
  );
};

interface PDFModalProps {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
  previewSrc: string;
  onClose: () => void;
}

const PDFModal: React.FC<PDFModalProps> = ({
  isOpen,
  pdfUrl,
  title,
  previewSrc,
  onClose,
}) => {
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [isPageRendered, setIsPageRendered] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const handleFirstPageRendered = React.useCallback(() => {
    setIsPageRendered(true);
  }, []);

  useEffect(() => {
    setPdfDocument(null);
    setIsPageRendered(false);
    setError(null);

    if (!isOpen || !pdfUrl) return;

    let cancelled = false;
    let loadingTask: PDFDocumentLoadingTask | null = null;

    const loadPdf = async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        if (cancelled) return;
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
        loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          rangeChunkSize: 64 * 1024,
        });
        const document = await loadingTask.promise;
        if (!cancelled) setPdfDocument(document);
      } catch (loadError) {
        if (!cancelled) {
          console.error("Failed to load PDF:", loadError);
          setError(
            loadError instanceof Error ? loadError.message : String(loadError),
          );
        }
      }
    };

    void loadPdf();

    return () => {
      cancelled = true;
      if (loadingTask) void loadingTask.destroy();
    };
  }, [isOpen, pdfUrl]);

  if (!isOpen) return null;

  // Handle backdrop click to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 lg:p-8 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[92vh] flex flex-col animate-in fade-in zoom-in duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Optimized height */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 sm:px-6 sm:py-5 bg-gradient-to-r from-gray-50 to-white rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#b35b28]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#b35b28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 flex items-center justify-center transition-all duration-200 shrink-0"
            aria-label="Close PDF"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative flex-1 min-h-0 bg-gray-100">
          <div
            ref={viewerRef}
            className="absolute inset-0 flex flex-col items-center gap-4 overflow-y-auto overflow-x-hidden py-4"
          >
            {pdfDocument &&
              Array.from({ length: pdfDocument.numPages }, (_, index) => (
                <PDFPageCanvas
                  key={`${pdfUrl}-${index + 1}`}
                  document={pdfDocument}
                  pageNumber={index + 1}
                  scrollRoot={viewerRef.current}
                  onFirstPageRendered={handleFirstPageRendered}
                />
              ))}
          </div>
          {!isPageRendered && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <img
                src={previewSrc}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/30">
                <div className="flex flex-col items-center gap-4">
                  {!error && (
                    <div className="w-12 h-12 border-4 border-[#b35b28] border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <p className="max-w-lg text-center text-sm text-gray-700">
                    {error ? `Unable to load PDF: ${error}` : "Loading PDF..."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Compact and optimized */}
        <div className="border-t border-gray-200 px-5 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-gray-50 to-white flex flex-col sm:flex-row items-center justify-between gap-3 rounded-b-2xl shrink-0">
          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View and download the PDF
          </p>
          <a
            href={pdfUrl}
            download
            className="px-5 py-2.5 bg-[#b35b28] text-white rounded-lg font-semibold hover:bg-[#a04d20] active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">Download</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFModal;
