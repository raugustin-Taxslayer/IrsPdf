using iTextSharp.text.pdf;
using System.IO;

namespace IrsPdf
{
    public static class PdfProcessor
    {
        public static void ProcessTaxForm(string inputPath, string outputPath)
        {
            var reader = new PdfReader(inputPath);
            using (var fs = new FileStream(outputPath, FileMode.Create, FileAccess.Write))
            {
                var stamper = new PdfStamper(reader, fs);
                var form = stamper.AcroFields;

                // Configure field appearance
                PdfFormConfigurator.ConfigureFieldAppearance(form);

                // Fill form with data
                FormDataProvider.FillFormData(form);

                // stamper.FormFlattening = true; // Make fields non-editable
                stamper.FormFlattening = false; // Make fields editable
                stamper.Close();
            }
        }

        public static void ProcessTaxFormWithCustomData(string inputPath, string outputPath, TaxpayerData data)
        {
            var reader = new PdfReader(inputPath);
            using (var fs = new FileStream(outputPath, FileMode.Create, FileAccess.Write))
            {
                var stamper = new PdfStamper(reader, fs);
                var form = stamper.AcroFields;

                // Configure field appearance
                PdfFormConfigurator.ConfigureFieldAppearance(form);

                // Fill form with custom data
                FormDataProvider.FillFormWithCustomData(form, data);

                stamper.FormFlattening = true; // Make fields non-editable
                stamper.Close();
            }
        }

        public static void ProcessTaxFormWithoutFlattening(string inputPath, string outputPath)
        {
            var reader = new PdfReader(inputPath);
            using (var fs = new FileStream(outputPath, FileMode.Create, FileAccess.Write))
            {
                var stamper = new PdfStamper(reader, fs);
                var form = stamper.AcroFields;

                // Configure field appearance
                PdfFormConfigurator.ConfigureFieldAppearance(form);

                // Fill form with data
                FormDataProvider.FillFormData(form);

                // Keep fields editable (don't flatten)
                stamper.FormFlattening = false;
                stamper.Close();
            }
        }
    }
}