import React, { useState, useEffect } from "react";

interface PDFModalProps {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, pdfUrl, title, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loaded state when URL changes
  useEffect(() => {
    setIsLoaded(false);
  }, [pdfUrl]);

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

        {/* PDF Viewer - Optimized with loading state */}
        <div className="flex-1 overflow-hidden bg-gray-100 relative">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#b35b28] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 text-sm">Loading PDF...</p>
              </div>
            </div>
          )}
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="absolute inset-0 w-full h-full border-none"
            title={`PDF: ${title}`}
            onLoad={() => setIsLoaded(true)}
            loading="eager"
          />
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

