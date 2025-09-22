using iTextSharp.text.pdf;
using iTextSharp.text;

namespace IrsPdf
{
    public static class PdfFormConfigurator
    {
        public static void ConfigureFieldAppearance(AcroFields form)
        {
            var allFieldNames = form.Fields.Keys;
            foreach (var fieldName in allFieldNames)
            {
                form.SetFieldProperty(fieldName, "textcolor", BaseColor.BLACK, null);
            }
            // "letter-spacing" is not a valid property name for AcroFields.SetFieldProperty.
            // Valid property names include: "textcolor", "bgcolor", "bordercolor", "font", "fontsize", "alignment", "readonly", "visible".
            // There is no direct support for letter-spacing in AcroFields.
            form.SetFieldProperty("topmostSubform[0].Page1[0].f1_02[0]", "letter-spacing", "unset", null);
            // Note: The above line is illustrative; "letter-spacing" is not a valid property and will not have any effect.
            // Needs to be handled in the PDF design phase if required.
        }

        public static void SetFieldTextColor(AcroFields form, string fieldName, BaseColor color)
        {
            form.SetFieldProperty(fieldName, "textcolor", color, null);
        }
    }
}