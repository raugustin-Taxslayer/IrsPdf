import React, { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// Configure the worker source for PDF.js
GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function PDFFormViewer() {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);

  useEffect(() => {
    const loadAndRenderPDF = async () => {
      try {
        console.log("Starting PDF load and render process...");

        // Wait for canvas to be available
        if (!canvasRef.current) {
          console.log("Canvas not ready yet, skipping this attempt...");
          return;
        }

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        console.log("Canvas and context ready:", !!canvas, !!context);

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

        console.log("Getting first page...");
        const page = await pdf.getPage(1);
        console.log("Page loaded successfully!");

        console.log("Setting up viewport...");
        const viewport = page.getViewport({ scale: 1.0 });
        console.log("Viewport:", viewport.width, "x", viewport.height);

        // Set canvas size
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        console.log("Canvas dimensions set:", canvas.width, "x", canvas.height);

        // Clear and prepare canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        console.log("Rendering PDF to canvas...");
        const renderTask = page.render({
          canvasContext: context,
          viewport: viewport,
        });

        await renderTask.promise;
        console.log("PDF RENDER COMPLETED!");

        // Add debug marker
        context.strokeStyle = "red";
        context.lineWidth = 3;
        context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

        setPdfLoaded(true);
        setIsLoading(false);
      } catch (err) {
        console.error("PDF load/render failed:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    // Use a timeout to ensure the canvas is rendered first
    const timer = setTimeout(() => {
      loadAndRenderPDF();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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

      <div style={{ border: "2px solid #000", display: "inline-block" }}>
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            background: "#f0f0f0",
            border: "1px solid #red",
            minWidth: "200px",
            minHeight: "200px"
          }}
        />
      </div>
    </div>
  );
}
