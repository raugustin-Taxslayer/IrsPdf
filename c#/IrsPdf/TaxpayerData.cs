namespace IrsPdf
{
    public class TaxpayerData
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string SSN { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string ZipCode { get; set; } = string.Empty;
        public string FilingStatus { get; set; } = "1"; // Default to Single
        public decimal Wages { get; set; }
        public decimal TaxWithheld { get; set; }
    }
}