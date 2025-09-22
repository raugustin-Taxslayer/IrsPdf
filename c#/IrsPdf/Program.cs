using iTextSharp.text.pdf;
using iTextSharp.text;
using System.IO;

namespace IrsPdf
{
    class Program
    {
        static void Main(string[] args)
        {
            string inputPath = "./pdf/f1040.pdf";
            string outputPath = "./pdf/filled_f1040_dummy.pdf";

            // Simple approach using the PdfProcessor
            PdfProcessor.ProcessTaxForm(inputPath, outputPath);

            Console.WriteLine($"PDF processed successfully! Output saved to: {outputPath}");
        }
    }
}