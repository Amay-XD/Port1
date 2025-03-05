import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, X, Download, ExternalLink } from 'lucide-react';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = () => {
    setError(true);
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    if (numPages) {
      setPageNumber(prev => Math.min(prev + 1, numPages));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-xl font-bold text-cyan-400 truncate">{title}</h3>
          <div className="flex items-center space-x-4">
            <a 
              href={pdfUrl} 
              download 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </a>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button 
              onClick={onClose}
              className="text-gray-300 hover:text-red-400 transition-colors"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* PDF Content */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
          {loading && (
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-300">Loading PDF...</p>
            </div>
          )}
          
          {error && (
            <div className="text-center text-red-400">
              <p>Error loading PDF. Please try again later.</p>
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
              >
                Open PDF directly
              </a>
            </div>
          )}
          
          {!loading && !error && (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="pdf-document"
            >
              <Page 
                pageNumber={pageNumber} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="pdf-page"
                width={Math.min(window.innerWidth * 0.8, 800)}
              />
            </Document>
          )}
        </div>
        
        {/* Footer with navigation */}
        {!loading && !error && numPages && (
          <div className="p-4 border-t border-gray-700 flex justify-between items-center">
            <button 
              onClick={goToPrevPage} 
              disabled={pageNumber <= 1}
              className={`flex items-center ${pageNumber <= 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300 hover:text-cyan-400'} transition-colors`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </button>
            
            <p className="text-gray-300">
              Page <span className="font-medium text-cyan-400">{pageNumber}</span> of <span className="font-medium">{numPages}</span>
            </p>
            
            <button 
              onClick={goToNextPage} 
              disabled={pageNumber >= numPages}
              className={`flex items-center ${pageNumber >= numPages ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300 hover:text-cyan-400'} transition-colors`}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;