# IrsPdf - Complete IRS PDF Processing Solution# IrsPdf

A comprehensive solution for processing, filling, and viewing IRS tax forms (PDF) with both backend processing capabilities and frontend interactive viewing. This project combines a C# console application for server-side PDF manipulation with a React web application for client-side PDF viewing and form interaction.A C# application for processing and filling IRS tax forms (PDF) using the iTextSharp library.

## Project Overview## Description

IrsPdf provides two complementary approaches to working with IRS PDF forms:This application provides functionality to:

1. **Backend Processing (C#)**: Programmatic PDF form filling and processing- Read IRS PDF forms (specifically Form 1040)

2. **Frontend Viewing (React)**: Interactive PDF viewing and form field manipulation- Fill form fields with taxpayer data

- Configure field appearances

## Architecture- Save processed forms with filled data

- Support both editable and flattened (non-editable) output formats

````

IrsPdf/## Prerequisites

├── c#/                         # C# Backend Application

│   ├── IrsPdf/                 # Main C# project- .NET 9.0 SDK

│   │   ├── Program.cs          # Console app entry point- Windows, macOS, or Linux

│   │   ├── PdfProcessor.cs     # Core PDF processing

│   │   ├── FormDataProvider.cs # Data management## Project Structure

│   │   ├── TaxpayerData.cs     # Data models

│   │   └── pdf/               # PDF files```

│   └── IrsPdf.sln             # Visual Studio solutionIrsPdf/

├── js/                         # React Frontend Application├── c#/

│   ├── src/                    # React source code│   ├── IrsPdf/

│   │   ├── PDFFormViewer.js    # Main PDF viewer component│   │   ├── Program.cs              # Main entry point

│   │   ├── formFieldsConfig.js # Form field configuration│   │   ├── PdfProcessor.cs         # Core PDF processing logic

│   │   └── App.js              # React app root│   │   ├── FormDataProvider.cs     # Form data management

│   ├── public/                 # Static assets│   │   ├── PdfFormConfigurator.cs  # Field appearance configuration

│   │   └── pdf/               # PDF files for web viewing│   │   ├── TaxpayerData.cs         # Data model for taxpayer information

│   └── package.json           # Node.js dependencies│   │   ├── IrsPdf.csproj           # Project file

└── README.md                   # This file│   │   └── pdf/

```│   │       ├── f1040.pdf           # Input PDF form

│   │       └── filled_f1040_dummy.pdf  # Output (generated)

## Components│   └── IrsPdf.sln                  # Solution file

└── README.md

### C# Backend Application```



**Purpose**: Server-side PDF processing and automation## Getting Started



**Key Features**:### 1. Clone the Repository

- Programmatic PDF form filling using iTextSharp

- Batch processing capabilities  ```bash

- Field appearance configurationgit clone <repository-url>

- Support for flattened (non-editable) outputcd IrsPdf

- Command-line interface for automation```



**Use Cases**:### 2. Navigate to the C# Project Directory

- Automated tax form generation

- Bulk PDF processing```bash

- Server-side form filling workflowscd c#/IrsPdf

- Integration with existing .NET applications```



**Technology Stack**:### 3. Restore Dependencies

- .NET 9.0

- iTextSharp for PDF manipulation```bash

- Console applicationdotnet restore

````

### React Frontend Application

### 4. Run the Application

**Purpose**: Interactive PDF viewing and form manipulation

````bash

**Key Features**:dotnet run

- Browser-based PDF rendering using PDF.js```

- Interactive form field overlays

- Real-time form field detection and editing## How It Works

- Multi-page navigation

- Debug mode for development1. The application reads an input PDF form (`f1040.pdf`)

- Configurable field defaults2. Uses iTextSharp to access and modify PDF form fields

3. Fills the form with predefined or custom taxpayer data

**Use Cases**:4. Configures field appearances for better presentation

- Interactive tax form completion5. Saves the processed form as a new PDF file

- PDF form preview and validation

- Client-side form filling## Features

- Educational and demonstration purposes

- **Multiple Processing Options**:

**Technology Stack**:

- React 19.1.1  - Process with default dummy data

- PDF.js for PDF rendering  - Process with custom taxpayer data

- Create React App for build tooling  - Process with or without form flattening



## Getting Started- **Form Field Management**:



### Prerequisites  - Automatic field detection and filling

  - Configurable field appearances

- **For C# Backend**:  - Support for various field types

  - .NET 9.0 SDK

  - Windows, macOS, or Linux- **Output Formats**:

  - Editable forms (fields remain fillable)

- **For React Frontend**:  - Flattened forms (fields become non-editable)

  - Node.js (v14+)

  - Modern web browser## Dependencies



### Quick Start - C# Backend- **iTextSharp 5.5.13.4**: PDF manipulation library for .NET

- **.NET 9.0**: Target framework

```bash

cd c#/IrsPdf## Usage Examples

dotnet restore

dotnet runThe application currently processes Form 1040 with dummy data by default. The main processing happens in `Program.cs`:

````

```csharp

The application will process the sample Form 1040 and generate `filled_f1040_dummy.pdf`.PdfProcessor.ProcessTaxForm(inputPath, outputPath);

```

### Quick Start - React Frontend

### Custom Data Processing

````bash

cd jsYou can also process forms with custom taxpayer data:

npm install

npm start```csharp

```var customData = new TaxpayerData { /* your data */ };

PdfProcessor.ProcessTaxFormWithCustomData(inputPath, outputPath, customData);

The web application will open at `http://localhost:3000` showing an interactive PDF viewer.```



## Workflow Integration## Output



The two components can work together in various workflows:After running the application, you'll find the processed PDF in:



1. **Development Workflow**:```

   - Use React app to identify and test form fieldsc#/IrsPdf/pdf/filled_f1040_dummy.pdf

   - Configure field mappings and defaults```

   - Use C# app for automated processing

## Development

2. **Production Workflow**:

   - C# backend processes PDFs server-sideTo modify the application:

   - React frontend provides user interface for form completion

   - Both components share form field configurations1. **Add new form fields**: Update `FormDataProvider.cs`

2. **Change field appearances**: Modify `PdfFormConfigurator.cs`

3. **Hybrid Workflow**:3. **Add new data models**: Extend `TaxpayerData.cs`

   - Users interact with forms via React frontend4. **Create new processing methods**: Add to `PdfProcessor.cs`

   - Form data is sent to C# backend for final processing

   - Processed PDFs are returned to users## License



## Form Field Configuration[Add your license information here]



Both applications can share form field configurations:## Contributing



- **C# Configuration**: Defined in `FormDataProvider.cs` and `TaxpayerData.cs`[Add contributing guidelines here]

- **React Configuration**: Defined in `formFieldsConfig.js`
- Field names and types should match between both applications for consistency

## PDF Files

Sample PDF files are included in both components:
- `c#/IrsPdf/pdf/f1040.pdf` - For C# processing
- `js/public/pdf/f1040.pdf` - For React viewing

Keep these files synchronized when updating forms.

## Development

### Adding New Forms

1. Add PDF file to both `c#/IrsPdf/pdf/` and `js/public/pdf/` directories
2. Run React app to identify form fields (check browser console)
3. Update form field configurations in both applications
4. Test with both C# processing and React viewing

### Debugging

- **C# Application**: Use Visual Studio debugger or console logging
- **React Application**: Use browser developer tools for extensive logging

### Testing

- **C# Backend**: Unit tests can be added for PDF processing logic
- **React Frontend**: Uses Create React App testing framework

## Use Cases

### Individual Tax Preparation
- Interactive form completion using React frontend
- Validation and preview before submission
- Final processing using C# backend

### Tax Professional Services
- Bulk client form processing using C# backend
- Client review interface using React frontend
- Automated workflow integration

### Software Integration
- Embed React component in larger tax software
- Use C# library in server applications
- API integration for form processing services

## Contributing

When contributing to this project:

1. Maintain consistency between C# and React components
2. Update both READMEs when making architectural changes
3. Test changes in both applications
4. Keep form field configurations synchronized

## Documentation

- **C# Backend**: See `c#/README.md` for detailed C# documentation
- **React Frontend**: See `js/README.md` for detailed React documentation
- **API Documentation**: [Add API docs location if applicable]

## License

[Add your license information here]

## Support

[Add support contact information here]
````
