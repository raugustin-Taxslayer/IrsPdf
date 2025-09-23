import React, { useEffect, useRef, useState, useCallback } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import {
  defaultFormValues,
  CHECKBOX_FIELDS,
  LINK_FIELDS,
} from "./formFieldsConfig";

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
  const [formFields, setFormFields] = useState({}); // Store fields by page number
  const [formData, setFormData] = useState({}); // Store field values
  const [fieldsArePermanent, setFieldsArePermanent] = useState(false); // Controls if fields are interactive or permanent

  // Function to extract form fields from a page
  const extractFormFields = useCallback(async (page, viewport) => {
    try {
      const annotations = await page.getAnnotations();
      const fields = [];

      for (const annotation of annotations) {
        if (annotation.subtype === "Widget" && annotation.fieldName) {
          // Transform coordinates from PDF space to canvas space
          const rect = annotation.rect;
          const [x1, y1, x2, y2] = rect;

          // PDF coordinates start from bottom-left, canvas from top-left
          const canvasX = x1 * viewport.scale;
          const canvasY = viewport.height - y2 * viewport.scale;
          const canvasWidth = (x2 - x1) * viewport.scale;
          const canvasHeight = (y2 - y1) * viewport.scale;

          // Determine if this is a checkbox based on type and appearance
          const isCheckbox =
            annotation.fieldType === "Btn" &&
            !annotation.pushButton &&
            annotation.checkBox !== false;

          fields.push({
            name: annotation.fieldName,
            type: annotation.fieldType || "Tx", // Tx = text, Btn = button, Ch = choice
            isCheckbox: isCheckbox,
            x: canvasX,
            y: canvasY,
            width: canvasWidth,
            height: canvasHeight,
            maxLength: annotation.maxLen,
            multiLine: annotation.multiLine,
            value: annotation.fieldValue || "",
            options: annotation.options || null,
            buttonValue: annotation.buttonValue || null,
            exportValue: annotation.exportValue || null,
          });
        }
      }

      return fields;
    } catch (err) {
      console.warn("Error extracting form fields:", err);
      return [];
    }
  }, []);

  // Separate function to render a specific page
  const renderPage = useCallback(
    async (pageNumber) => {
      if (!pdfDocument || !canvasRef.current) return;

      try {
        console.log(`Rendering page ${pageNumber}...`);

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const page = await pdfDocument.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.5 }); // Set canvas size
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

        // Extract form fields for this page
        const pageFields = await extractFormFields(page, viewport);
        console.log(
          `Found ${pageFields.length} form fields on page ${pageNumber}:`
        );
        pageFields.forEach((field) => {
          const fieldInfo = `  Field: ${field.name}, Type: ${field.type}${
            field.isCheckbox ? " (CHECKBOX)" : ""
          }, Position: (${Math.round(field.x)}, ${Math.round(
            field.y
          )}), Size: ${Math.round(field.width)}x${Math.round(field.height)}`;
          console.log(fieldInfo);
        });

        // Update form fields state
        setFormFields((prev) => ({
          ...prev,
          [pageNumber]: pageFields,
        }));

        // Add debug marker
        context.lineWidth = 1;
        context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
      } catch (err) {
        console.error(`Error rendering page ${pageNumber}:`, err);
        setError(err.message);
      }
    },
    [pdfDocument, extractFormFields]
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

  // Initialize form data with default values when form fields are available
  useEffect(() => {
    if (Object.keys(formFields).length > 0) {
      setFormData((prev) => {
        const initialData = { ...prev };

        // Use the imported default form values from configuration file

        // Apply default values to fields that don't have values yet
        Object.entries(defaultFormValues).forEach(
          ([fieldName, defaultValue]) => {
            if (!initialData[fieldName]) {
              initialData[fieldName] = defaultValue;
            }
          }
        );

        // Also initialize any detected fields with their default values from PDF
        Object.values(formFields).forEach((pageFields) => {
          pageFields.forEach((field) => {
            if (!initialData[field.name] && field.value) {
              initialData[field.name] = field.value;
            }
          });
        });

        console.log("Form data initialized:", initialData);

        // Log all detected fields for configuration file updates
        console.log("\n=== ALL DETECTED FORM FIELDS ===");
        Object.values(formFields).forEach((pageFields, pageIndex) => {
          console.log(`\n--- Page ${pageIndex + 1} ---`);
          pageFields.forEach((field) => {
            const fieldType = field.isCheckbox ? "CHECKBOX" : field.type;
            const defaultValue = field.isCheckbox ? "false" : '""';
            console.log(
              `"${field.name}": ${defaultValue}, // ${fieldType} - ${
                field.isCheckbox ? "CHECKBOX" : "Field"
              }`
            );
          });
        });
        console.log("================================\n");

        // Set fields as permanent after a short delay to allow rendering
        setTimeout(() => {
          setFieldsArePermanent(true);
          console.log(
            "Form fields are now permanent - interactive elements removed"
          );
        }, 1000);

        return initialData;
      });
    }
  }, [formFields]);

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

      {pdfLoaded && (
        <div
          style={{
            padding: "10px",
            backgroundColor: fieldsArePermanent ? "#d4edda" : "#fff3cd",
            borderRadius: "5px",
            marginBottom: "15px",
            border: `1px solid ${fieldsArePermanent ? "#c3e6cb" : "#ffeaa7"}`,
          }}
        >
          <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}>
            {fieldsArePermanent ? (
              <span style={{ color: "#155724" }}>
                🔒 Form fields are permanently filled with default values
              </span>
            ) : (
              <span style={{ color: "#856404" }}>
                ⏳ Loading default values into form fields...
              </span>
            )}
          </p>
          {!fieldsArePermanent && (
            <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#666" }}>
              Form will automatically lock after values are applied (1 second)
            </p>
          )}
        </div>
      )}

      {pdfLoaded && totalPages > 0 && (
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>
          {totalPages === 1
            ? "This PDF has 1 page"
            : `This PDF has ${totalPages} pages. Use arrow keys (← →) or buttons to navigate. Home/End keys jump to first/last page.`}
        </p>
      )}

      {pdfLoaded && formFields[currentPage] && (
        <div
          style={{ fontSize: "14px", color: "#007acc", marginBottom: "10px" }}
        >
          <p>
            📝 {formFields[currentPage].length} form fields detected on this
            page
            {fieldsArePermanent
              ? " (Values are now permanent)"
              : " (Interactive)"}
          </p>
          <p style={{ fontSize: "12px", color: "#666" }}>
            Types: {formFields[currentPage].filter((f) => f.isCheckbox).length}{" "}
            checkboxes,{" "}
            {
              formFields[currentPage].filter(
                (f) => f.type === "Tx" && !f.isCheckbox
              ).length
            }{" "}
            text fields,{" "}
            {formFields[currentPage].filter((f) => f.type === "Ch").length}{" "}
            dropdowns
          </p>
          {fieldsArePermanent && (
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => setFieldsArePermanent(false)}
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  backgroundColor: "#007acc",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                🔓 Make Fields Interactive Again
              </button>
              <button
                onClick={() => setFieldsArePermanent(true)}
                style={{
                  padding: "4px 8px",
                  fontSize: "12px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
              >
                🔒 Lock Values Permanently
              </button>
            </div>
          )}
        </div>
      )}

      {Object.keys(formData).length > 0 && (
        <details style={{ marginBottom: "20px" }}>
          <summary style={{ cursor: "pointer", color: "#666" }}>
            View Form Data (Debug)
          </summary>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "12px",
              maxHeight: "200px",
              overflow: "auto",
            }}
          >
            {JSON.stringify(formData, null, 2)}
          </pre>
        </details>
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

      <div style={{ display: "inline-block", position: "relative" }}>
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

        {/* Overlay container for form fields */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none", // Allow clicks to pass through to canvas
          }}
        >
          {/* Form fields will be rendered here */}
          {pdfLoaded &&
            formFields[currentPage] &&
            formFields[currentPage].map((field, index) => {
              const fieldValue = formData[field.name] || field.value || "";
              const isCheckboxField =
                field.isCheckbox || CHECKBOX_FIELDS.includes(field.name);

              return (
                <div
                  key={`${field.name}-${index}`}
                  style={{
                    position: "absolute",
                    left: `${field.x}px`,
                    top: `${field.y}px`,
                    width: `${field.width}px`,
                    height: `${field.height}px`,
                    pointerEvents:
                      fieldsArePermanent && !LINK_FIELDS[field.name]
                        ? "none"
                        : "auto", // Keep pointer events for link fields
                  }}
                >
                  {fieldsArePermanent ? (
                    // Permanent (static) display
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isCheckboxField
                          ? "center"
                          : "flex-start",
                        padding: isCheckboxField ? "0" : "2px 4px",
                        fontSize: "12px",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "bold",
                        color: "#000",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "2px",
                        boxSizing: "border-box",
                        pointerEvents: LINK_FIELDS[field.name]
                          ? "auto"
                          : "none", // Ensure link fields can be clicked
                      }}
                    >
                      {isCheckboxField ? (
                        // Show X for checked checkboxes
                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                          {fieldValue ? "x" : ""}
                        </span>
                      ) : // Show text value for text fields
                      LINK_FIELDS[field.name] ? (
                        // Render as clickable link for configured fields
                        <a
                          href={
                            LINK_FIELDS[field.name].href || `#${field.name}`
                          }
                          title={
                            LINK_FIELDS[field.name].title ||
                            `Click for ${field.name} details`
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            if (LINK_FIELDS[field.name].onClick) {
                              LINK_FIELDS[field.name].onClick(fieldValue);
                            } else {
                              console.log(
                                `Link field clicked: ${field.name} = ${fieldValue}`
                              );
                            }
                          }}
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: field.multiLine ? "normal" : "nowrap",
                            wordWrap: "break-word",
                            color: "#007acc",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontSize: "12px",
                            fontFamily: "Arial, sans-serif",
                            fontWeight: "bold",
                          }}
                        >
                          {fieldValue}
                        </a>
                      ) : (
                        <span
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: field.multiLine ? "normal" : "nowrap",
                            wordWrap: "break-word",
                          }}
                        >
                          {fieldValue}
                        </span>
                      )}
                    </div>
                  ) : (
                    // Interactive elements (original code)
                    <>
                      {isCheckboxField ? (
                        <input
                          type="checkbox"
                          checked={fieldValue || false}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              [field.name]: e.target.checked,
                            }))
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                          }}
                        />
                      ) : field.type === "Tx" ? (
                        field.multiLine ? (
                          <textarea
                            value={fieldValue}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                [field.name]: e.target.value,
                              }))
                            }
                            maxLength={field.maxLength}
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "1px solid #ccc",
                              borderRadius: "2px",
                              padding: "2px 4px",
                              fontSize: "12px",
                              fontFamily: "Arial, sans-serif",
                              resize: "none",
                              boxSizing: "border-box",
                            }}
                            placeholder={`Enter ${field.name}`}
                          />
                        ) : (
                          <input
                            type="text"
                            value={fieldValue}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                [field.name]: e.target.value,
                              }))
                            }
                            maxLength={field.maxLength}
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "1px solid #ccc",
                              borderRadius: "2px",
                              padding: "2px 4px",
                              fontSize: "12px",
                              fontFamily: "Arial, sans-serif",
                              boxSizing: "border-box",
                            }}
                            placeholder={`Enter ${field.name}`}
                          />
                        )
                      ) : field.type === "Ch" ? (
                        <select
                          value={fieldValue}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              [field.name]: e.target.value,
                            }))
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "1px solid #ccc",
                            borderRadius: "2px",
                            fontSize: "12px",
                            fontFamily: "Arial, sans-serif",
                            boxSizing: "border-box",
                          }}
                        >
                          <option value="">Select...</option>
                          {field.options &&
                            field.options.map((option, optIndex) => (
                              <option
                                key={optIndex}
                                value={
                                  option.exportValue || option.displayValue
                                }
                              >
                                {option.displayValue || option.exportValue}
                              </option>
                            ))}
                        </select>
                      ) : null}
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
