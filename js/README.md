# IrsPdf - React PDF Viewer Application

A React-based web application for viewing and interacting with IRS PDF forms. This is the frontend component of the IrsPdf project that provides an interactive PDF viewing experience with form field detection and manipulation.

## Description

This React application provides client-side functionality to:

- Load and display PDF documents in the browser
- Detect and overlay interactive form fields
- Fill form fields with default or custom data
- Navigate multi-page PDF documents
- Debug form field positions and types
- Toggle between interactive and static display modes

## Features

- **PDF Rendering**: Uses PDF.js to render PDF documents directly in the browser
- **Form Field Detection**: Automatically detects text fields, checkboxes, and dropdown fields
- **Interactive Overlays**: Places HTML form elements over PDF form fields for user interaction
- **Field Configuration**: Supports custom form field configurations and default values
- **Multi-page Navigation**: Navigate through PDF pages with keyboard shortcuts or buttons
- **Debug Mode**: View form field data and positions for development purposes
- **Field Locking**: Toggle between interactive and permanent (locked) field states

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser with PDF.js support

## Project Structure

```
js/
├── public/
│   ├── index.html              # Main HTML template
│   ├── pdf.worker.min.js       # PDF.js worker for PDF rendering
│   └── pdf/
│       └── f1040.pdf           # Sample IRS Form 1040
├── src/
│   ├── App.js                  # Main React app component
│   ├── PDFFormViewer.js        # Core PDF viewer component
│   ├── formFieldsConfig.js     # Form field configuration and defaults
│   ├── index.js                # React app entry point
│   └── [other React files]
├── package.json                # Node.js dependencies and scripts
└── README.md                   # This file
```

## Getting Started

### 1. Navigate to the JS Project Directory

```bash
cd js
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## How It Works

1. **PDF Loading**: The application loads a PDF file using PDF.js
2. **Field Detection**: Scans each page for form field annotations
3. **Overlay Creation**: Creates HTML form elements positioned over PDF fields
4. **Data Binding**: Binds form data to the detected fields using React state
5. **Interactive Mode**: Allows users to modify field values in real-time
6. **Static Mode**: Displays filled form data as permanent text overlays

## Configuration

### Form Field Defaults

Edit `src/formFieldsConfig.js` to customize:

- Default values for form fields
- Checkbox field definitions
- Link field configurations
- Field-specific behaviors

Example configuration:

```javascript
export const defaultFormValues = {
  f1_01: "John", // First name
  f1_02: "Doe", // Last name
  c1_1: true, // Checkbox field
  // ... more fields
};
```

### Adding New PDF Forms

1. Place your PDF file in the `public/pdf/` directory
2. Update the PDF path in `PDFFormViewer.js`
3. Run the application to see detected form fields in the console
4. Update `formFieldsConfig.js` with the new field names and defaults

## Navigation

- **Arrow Keys**: ← → to navigate between pages
- **Home/End**: Jump to first/last page
- **Buttons**: Use Previous/Next buttons for mouse navigation

## Development

### Key Components

- **PDFFormViewer**: Main component handling PDF rendering and form interaction
- **formFieldsConfig**: Configuration file for field defaults and behaviors
- **App**: Root application component

### Debugging

The application provides extensive console logging for:

- PDF loading progress
- Form field detection results
- Field positions and types
- Form data state changes

Open browser developer tools to view these debug messages.

### Available Scripts

- `npm start`: Run development server
- `npm build`: Build production version
- `npm test`: Run tests
- `npm eject`: Eject from Create React App (not recommended)

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari (limited support)
- Edge

## Dependencies

- **React 19.1.1**: UI framework
- **PDF.js 5.4.149**: PDF rendering engine
- **Create React App**: Build tooling and development server

## Integration with C# Backend

This React application is designed to work alongside the C# PDF processing application:

- C# app: Server-side PDF processing and form filling
- React app: Client-side PDF viewing and form interaction
- Both can work with the same PDF files and form data structures

## License

[Add your license information here]

## Contributing

[Add contributing guidelines here]
