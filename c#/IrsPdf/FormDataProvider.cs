using iTextSharp.text.pdf;

namespace IrsPdf
{
    public static class FormDataProvider
    {
        public static void FillFormData(AcroFields form)
        {
            // Personal Information
            form.SetField("topmostSubform[0].Page1[0].f1_04[0]", "Taxpayer"); // First Name
            form.SetField("topmostSubform[0].Page1[0].f1_05[0]", "Taxslayer"); // Last Name
            form.SetField("topmostSubform[0].Page1[0].f1_06[0]", "123456789"); // SSN

            // Address Information
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_10[0]", "123 Elm Street"); // Address
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_12[0]", "Augusta"); // City
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_13[0]", "GA"); // State
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_14[0]", "30901"); // ZIP

            // Filing Status
            form.SetField("topmostSubform[0].Page1[0].FilingStatus_ReadOrder[0].c1_3[0]", "1"); // Filing Status (Single)

            // Financial Information
        }

        public static void FillFormWithCustomData(AcroFields form, TaxpayerData data)
        {
            // Personal Information
            form.SetField("topmostSubform[0].Page1[0].f1_04[0]", data.FirstName);
            form.SetField("topmostSubform[0].Page1[0].f1_05[0]", data.LastName);
            form.SetField("topmostSubform[0].Page1[0].f1_06[0]", data.SSN);

            // Address Information
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_10[0]", data.Address);
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_12[0]", data.City);
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_13[0]", data.State);
            form.SetField("topmostSubform[0].Page1[0].Address_ReadOrder[0].f1_14[0]", data.ZipCode);

            // Filing Status
            form.SetField("topmostSubform[0].Page1[0].FilingStatus_ReadOrder[0].c1_3[0]", data.FilingStatus);

            // Financial Information
            form.SetField("topmostSubform[0].Page1[0].f1_06[0]", data.Wages.ToString());
            form.SetField("topmostSubform[0].Page1[0].f1_07[0]", data.TaxWithheld.ToString());
        }
    }
}