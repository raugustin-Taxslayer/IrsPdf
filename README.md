# IrsPdf

A C# application for processing and filling IRS tax forms (PDF) using the iTextSharp library.

## Description

This application provides functionality to:

- Read IRS PDF forms (specifically Form 1040)
- Fill form fields with taxpayer data
- Configure field appearances
- Save processed forms with filled data
- Support both editable and flattened (non-editable) output formats

## Prerequisites

- .NET 9.0 SDK
- Windows, macOS, or Linux

## Project Structure

```
IrsPdf/
├── c#/
│   ├── IrsPdf/
│   │   ├── Program.cs              # Main entry point
│   │   ├── PdfProcessor.cs         # Core PDF processing logic
│   │   ├── FormDataProvider.cs     # Form data management
│   │   ├── PdfFormConfigurator.cs  # Field appearance configuration
│   │   ├── TaxpayerData.cs         # Data model for taxpayer information
│   │   ├── IrsPdf.csproj           # Project file
│   │   └── pdf/
│   │       ├── f1040.pdf           # Input PDF form
│   │       └── filled_f1040_dummy.pdf  # Output (generated)
│   └── IrsPdf.sln                  # Solution file
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd IrsPdf
```

### 2. Navigate to the C# Project Directory

```bash
cd c#/IrsPdf
```

### 3. Restore Dependencies

```bash
dotnet restore
```

### 4. Run the Application

```bash
dotnet run
```

## How It Works

1. The application reads an input PDF form (`f1040.pdf`)
2. Uses iTextSharp to access and modify PDF form fields
3. Fills the form with predefined or custom taxpayer data
4. Configures field appearances for better presentation
5. Saves the processed form as a new PDF file

## Features

- **Multiple Processing Options**:

  - Process with default dummy data
  - Process with custom taxpayer data
  - Process with or without form flattening

- **Form Field Management**:

  - Automatic field detection and filling
  - Configurable field appearances
  - Support for various field types

- **Output Formats**:
  - Editable forms (fields remain fillable)
  - Flattened forms (fields become non-editable)

## Dependencies

- **iTextSharp 5.5.13.4**: PDF manipulation library for .NET
- **.NET 9.0**: Target framework

## Usage Examples

The application currently processes Form 1040 with dummy data by default. The main processing happens in `Program.cs`:

```csharp
PdfProcessor.ProcessTaxForm(inputPath, outputPath);
```

### Custom Data Processing

You can also process forms with custom taxpayer data:

```csharp
var customData = new TaxpayerData { /* your data */ };
PdfProcessor.ProcessTaxFormWithCustomData(inputPath, outputPath, customData);
```

## Output

After running the application, you'll find the processed PDF in:

```
c#/IrsPdf/pdf/filled_f1040_dummy.pdf
```

## Development

To modify the application:

1. **Add new form fields**: Update `FormDataProvider.cs`
2. **Change field appearances**: Modify `PdfFormConfigurator.cs`
3. **Add new data models**: Extend `TaxpayerData.cs`
4. **Create new processing methods**: Add to `PdfProcessor.cs`

## License

[Add your license information here]

## Contributing

[Add contributing guidelines here]
