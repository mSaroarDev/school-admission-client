import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import { BsPrinter } from "react-icons/bs";

export default function PDFPrint({ comp }) {
    
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = async () => {
    const input = reportTemplateRef.current;

    try {
      if (!input) {
        console.error("No content to capture.");
        return;
      }

      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate the aspect ratio
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const width = imgWidth * ratio;
      const height = imgHeight * ratio;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("application.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      <button
        onClick={handleGeneratePdf}
        className="mx-auto mt-4 bg-brand rounded-full text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center justify-center gap-2"
      >
        <BsPrinter className="w-4 h-4" />
        <span>Print</span>
      </button>

      <div ref={reportTemplateRef}>{comp}</div>
    </>
  );
}
