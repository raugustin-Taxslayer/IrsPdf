import React, { useEffect, useRef, useState, useCallback } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// Configure the worker source for PDF.js
GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function PDFFormViewer() {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pdfDocument, setPdfDocument] = useState(null);

  // Separate function to render a specific page
  const renderPage = useCallback(
    async (pageNumber) => {
      if (!pdfDocument || !canvasRef.current) return;

      try {
        console.log(`Rendering page ${pageNumber}...`);

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const page = await pdfDocument.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.5 });

        // Set canvas size
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Clear and prepare canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Render the page
        const renderTask = page.render({
          canvasContext: context,
          viewport: viewport,
        });

        await renderTask.promise;
        console.log(`Page ${pageNumber} rendered successfully!`);

        // Add debug marker
        context.lineWidth = 1;
        context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
      } catch (err) {
        console.error(`Error rendering page ${pageNumber}:`, err);
        setError(err.message);
      }
    },
    [pdfDocument]
  );

  // Load PDF document
  useEffect(() => {
    const loadPDF = async () => {
      try {
        console.log("Starting PDF load process...");

        console.log("Testing PDF file accessibility...");
        // Test if PDF is accessible via HTTP first
        try {
          const response = await fetch("/pdf/f1040.pdf");
          console.log(
            "PDF fetch response:",
            response.status,
            response.statusText
          );
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
        } catch (fetchErr) {
          console.error("PDF file not accessible via HTTP:", fetchErr);
          throw new Error(`PDF file not accessible: ${fetchErr.message}`);
        }

        console.log("Loading PDF from /pdf/f1040.pdf...");
        const loadingTask = getDocument({
          url: "/pdf/f1040.pdf",
          verbosity: 1,
        });

        const pdf = await loadingTask.promise;
        console.log("PDF loaded successfully!");
        console.log(`PDF has ${pdf.numPages} pages`);

        setPdfDocument(pdf);
        setTotalPages(pdf.numPages);
        setPdfLoaded(true);
        setIsLoading(false);
      } catch (err) {
        console.error("PDF load failed:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      loadPDF();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Render current page when page changes or PDF loads
  useEffect(() => {
    if (pdfDocument && canvasRef.current && pdfLoaded) {
      renderPage(currentPage);
    }
  }, [currentPage, pdfDocument, pdfLoaded, renderPage]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!pdfLoaded) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
          break;
        case "ArrowRight":
          event.preventDefault();
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
          break;
        case "Home":
          event.preventDefault();
          setCurrentPage(1);
          break;
        case "End":
          event.preventDefault();
          setCurrentPage(totalPages);
          break;
        default:
          break;
      }
    };

    // Add event listener to document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, totalPages, pdfLoaded]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>PDF Form Viewer - Simplified Test</h2>

      {isLoading && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <h3>Loading PDF Form...</h3>
          <p>Please wait while we load your PDF.</p>
        </div>
      )}

      {error && (
        <div style={{ marginBottom: "20px", color: "red" }}>
          <h3>Error Loading PDF</h3>
          <p>{error}</p>
        </div>
      )}

      <p>PDF Status: {pdfLoaded ? "Loaded Successfully" : "Loading..."}</p>

      {pdfLoaded && totalPages > 0 && (
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>
          {totalPages === 1
            ? "This PDF has 1 page"
            : `This PDF has ${totalPages} pages. Use arrow keys (← →) or buttons to navigate. Home/End keys jump to first/last page.`}
        </p>
      )}

      {pdfLoaded && totalPages > 1 && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            style={{ marginRight: "10px", padding: "8px 16px" }}
          >
            Previous
          </button>
          <span style={{ margin: "0 15px", fontWeight: "bold" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage >= totalPages}
            style={{ marginLeft: "10px", padding: "8px 16px" }}
          >
            Next
          </button>
        </div>
      )}

      <div style={{ display: "inline-block" }}>
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            background: "#f0f0f0",
            // border: "1px solid #red",
            minWidth: "200px",
            minHeight: "200px",
          }}
        />
      </div>
    </div>
  );
}
