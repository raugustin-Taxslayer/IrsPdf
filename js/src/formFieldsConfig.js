// Default form field values for IRS Form 1040
// This file contains all the form fields found in the PDF with their default values
// Checkbox fields are marked with comments for easy identification

export const defaultFormValues = {
  // === PAGE 1 - PERSONAL INFORMATION ===

  // Name and Address
  "topmostSubform[0].Page1[0].f1_01[0]": "John", // First name
  "topmostSubform[0].Page1[0].f1_02[0]": "M", // Middle initial
  "topmostSubform[0].Page1[0].f1_03[0]": "Doe", // Last name
  "topmostSubform[0].Page1[0].f1_04[0]": "123-45-6789", // SSN

  // Spouse information (if filing jointly)
  "topmostSubform[0].Page1[0].f1_05[0]": "Jane", // Spouse first name
  "topmostSubform[0].Page1[0].f1_06[0]": "A", // Spouse middle initial
  "topmostSubform[0].Page1[0].f1_07[0]": "Doe", // Spouse last name
  "topmostSubform[0].Page1[0].f1_08[0]": "987-65-4321", // Spouse SSN

  // Address
  "topmostSubform[0].Page1[0].f1_09[0]": "123 Main Street", // Home address
  "topmostSubform[0].Page1[0].f1_10[0]": "Apt 4B", // Apt/Suite number
  "topmostSubform[0].Page1[0].f1_11[0]": "Anytown", // City
  "topmostSubform[0].Page1[0].f1_12[0]": "NY", // State
  "topmostSubform[0].Page1[0].f1_13[0]": "12345", // ZIP code

  // Foreign country name and postal code (if applicable)
  "topmostSubform[0].Page1[0].f1_14[0]": "", // Foreign country
  "topmostSubform[0].Page1[0].f1_15[0]": "", // Foreign postal code

  // === FILING STATUS CHECKBOXES ===
  // NOTE: These are CHECKBOX fields - only one should be selected
  "topmostSubform[0].Page1[0].c1_1[0]": false, // Single - CHECKBOX
  "topmostSubform[0].Page1[0].c1_1[1]": true, // Married filing jointly - CHECKBOX
  "topmostSubform[0].Page1[0].c1_1[2]": false, // Married filing separately - CHECKBOX
  "topmostSubform[0].Page1[0].c1_1[3]": false, // Head of household - CHECKBOX
  "topmostSubform[0].Page1[0].c1_1[4]": false, // Qualifying widow(er) - CHECKBOX

  // If married filing separately, spouse's name
  "topmostSubform[0].Page1[0].f1_16[0]": "", // Spouse's name if filing separately

  // === DEPENDENTS INFORMATION ===
  // Dependent 1
  "topmostSubform[0].Page1[0].f1_17[0]": "Emily Doe", // Dependent 1 name
  "topmostSubform[0].Page1[0].f1_18[0]": "111-22-3333", // Dependent 1 SSN
  "topmostSubform[0].Page1[0].f1_19[0]": "Daughter", // Dependent 1 relationship

  // Dependent 2
  "topmostSubform[0].Page1[0].f1_20[0]": "Michael Doe", // Dependent 2 name
  "topmostSubform[0].Page1[0].f1_21[0]": "444-55-6666", // Dependent 2 SSN
  "topmostSubform[0].Page1[0].f1_22[0]": "Son", // Dependent 2 relationship

  // === INCOME SECTION ===

  // Wages, salaries, tips (Line 1)
  "topmostSubform[0].Page1[0].f1_23[0]": "75000", // Wages amount

  // Interest income (Line 2a)
  "topmostSubform[0].Page1[0].f1_24[0]": "250", // Taxable interest

  // Tax-exempt interest (Line 2b)
  "topmostSubform[0].Page1[0].f1_25[0]": "0", // Tax-exempt interest

  // Ordinary dividends (Line 3a)
  "topmostSubform[0].Page1[0].f1_26[0]": "500", // Ordinary dividends

  // Qualified dividends (Line 3b)
  "topmostSubform[0].Page1[0].f1_27[0]": "400", // Qualified dividends

  // IRA distributions (Line 4a)
  "topmostSubform[0].Page1[0].f1_28[0]": "0", // IRA distributions

  // Taxable IRA distributions (Line 4b)
  "topmostSubform[0].Page1[0].f1_29[0]": "0", // Taxable IRA distributions

  // Pensions and annuities (Line 5a)
  "topmostSubform[0].Page1[0].f1_30[0]": "0", // Pensions total

  // Taxable pensions (Line 5b)
  "topmostSubform[0].Page1[0].f1_31[0]": "0", // Taxable pensions

  // Social security benefits (Line 6a)
  "topmostSubform[0].Page1[0].f1_32[0]": "0", // Social security total

  // Taxable social security (Line 6b)
  "topmostSubform[0].Page1[0].f1_33[0]": "0", // Taxable social security

  // Capital gain or loss (Line 7) - Special field with anchor tag
  "topmostSubform[0].Page1[0].f1_34[0]": "1200", // Capital gains (will be rendered as clickable link)

  // Additional income (Line 8)
  "topmostSubform[0].Page1[0].f1_35[0]": "0", // Other income

  // Total income (Line 9)
  "topmostSubform[0].Page1[0].f1_36[0]": "76950", // Total income (calculated)

  // === ADJUSTMENTS TO INCOME ===

  // Educator expenses (Line 10)
  "topmostSubform[0].Page1[0].f1_37[0]": "0", // Educator expenses

  // Business expenses (Line 11)
  "topmostSubform[0].Page1[0].f1_38[0]": "0", // Business expenses

  // Health savings account deduction (Line 12)
  "topmostSubform[0].Page1[0].f1_39[0]": "0", // HSA deduction

  // Moving expenses (Line 13)
  "topmostSubform[0].Page1[0].f1_40[0]": "0", // Moving expenses

  // Deductible part of self-employment tax (Line 14)
  "topmostSubform[0].Page1[0].f1_41[0]": "0", // SE tax deduction

  // Self-employed retirement plan contributions (Line 15)
  "topmostSubform[0].Page1[0].f1_42[0]": "0", // SEP/SIMPLE contributions

  // Self-employed health insurance (Line 16)
  "topmostSubform[0].Page1[0].f1_43[0]": "0", // Self-employed health insurance

  // Penalty on early withdrawal of savings (Line 17)
  "topmostSubform[0].Page1[0].f1_44[0]": "0", // Early withdrawal penalty

  // Alimony paid (Line 18)
  "topmostSubform[0].Page1[0].f1_45[0]": "0", // Alimony paid

  // IRA deduction (Line 19)
  "topmostSubform[0].Page1[0].f1_46[0]": "5000", // IRA deduction

  // Student loan interest deduction (Line 20)
  "topmostSubform[0].Page1[0].f1_47[0]": "1200", // Student loan interest

  // Tuition and fees (Line 21)
  "topmostSubform[0].Page1[0].f1_48[0]": "0", // Tuition and fees

  // Domestic production activities deduction (Line 22)
  "topmostSubform[0].Page1[0].f1_49[0]": "0", // Domestic production

  // Total adjustments (Line 23)
  "topmostSubform[0].Page1[0].f1_50[0]": "6200", // Total adjustments

  // Adjusted Gross Income (Line 24)
  "topmostSubform[0].Page1[0].f1_51[0]": "70750", // AGI

  // === CHECKBOXES FOR VARIOUS OPTIONS ===

  // Presidential Election Campaign checkboxes - CHECKBOX fields
  "topmostSubform[0].Page1[0].c1_2[0]": false, // You - Presidential campaign - CHECKBOX
  "topmostSubform[0].Page1[0].c1_2[1]": false, // Spouse - Presidential campaign - CHECKBOX

  // Digital Assets checkbox - CHECKBOX
  "topmostSubform[0].Page1[0].c1_3[0]": false, // Digital assets question - CHECKBOX

  // Standard deduction checkboxes - CHECKBOX fields
  "topmostSubform[0].Page1[0].c1_4[0]": false, // Someone can claim you as dependent - CHECKBOX
  "topmostSubform[0].Page1[0].c1_4[1]": false, // Spouse can be claimed as dependent - CHECKBOX
  "topmostSubform[0].Page1[0].c1_4[2]": false, // You were born before Jan 2, 1958 - CHECKBOX
  "topmostSubform[0].Page1[0].c1_4[3]": false, // You are blind - CHECKBOX
  "topmostSubform[0].Page1[0].c1_4[4]": false, // Spouse born before Jan 2, 1958 - CHECKBOX
  "topmostSubform[0].Page1[0].c1_4[5]": false, // Spouse is blind - CHECKBOX

  // === PAGE 2 FIELDS (if exists) ===
  // Note: Add Page 2 fields here when they are detected

  // === SIGNATURE SECTION ===
  "topmostSubform[0].Page2[0].f2_01[0]": "", // Your signature date
  "topmostSubform[0].Page2[0].f2_02[0]": "", // Your occupation
  "topmostSubform[0].Page2[0].f2_03[0]": "", // Spouse signature date
  "topmostSubform[0].Page2[0].f2_04[0]": "", // Spouse occupation
  "topmostSubform[0].Page2[0].f2_05[0]": "", // Preparer's name
  "topmostSubform[0].Page2[0].f2_06[0]": "", // Preparer's signature
  "topmostSubform[0].Page2[0].f2_07[0]": "", // Date
  "topmostSubform[0].Page2[0].f2_08[0]": "", // PTIN

  // Self-employed checkbox - CHECKBOX
  "topmostSubform[0].Page2[0].c2_1[0]": false, // Preparer self-employed - CHECKBOX
};

// Helper function to get all checkbox fields
export const getCheckboxFields = () => {
  const checkboxFields = [];

  Object.entries(defaultFormValues).forEach(([fieldName, value]) => {
    // Check if the field name suggests it's a checkbox (starts with 'c' and has array notation)
    // or if the value is boolean
    if (fieldName.includes("[0].c") || typeof value === "boolean") {
      checkboxFields.push(fieldName);
    }
  });

  return checkboxFields;
};

// Helper function to get all text fields
export const getTextFields = () => {
  const textFields = [];

  Object.entries(defaultFormValues).forEach(([fieldName, value]) => {
    // Text fields typically start with 'f' and have string values
    if (fieldName.includes("[0].f") && typeof value === "string") {
      textFields.push(fieldName);
    }
  });

  return textFields;
};

// Fields that should be rendered as clickable links
export const LINK_FIELDS = {
  "topmostSubform[0].Page1[0].f1_34[0]": {
    type: "link",
    href: "#capital-gains-details", // You can customize the href
    title: "Click to view capital gains details",
    onClick: (value) => {
      console.log(`Capital gains clicked: $${value}`);
      // Add custom behavior here
      alert(
        `Capital gains amount: $${value}\n\nClick OK to view Schedule D details.`
      );
    },
  },
  // Add more link fields as needed
};

// Export lists for easy reference
export const CHECKBOX_FIELDS = [
  // Filing Status (only one should be selected)
  "topmostSubform[0].Page1[0].c1_1[0]", // Single
  "topmostSubform[0].Page1[0].c1_1[1]", // Married filing jointly
  "topmostSubform[0].Page1[0].c1_1[2]", // Married filing separately
  "topmostSubform[0].Page1[0].c1_1[3]", // Head of household
  "topmostSubform[0].Page1[0].c1_1[4]", // Qualifying widow(er)

  // Presidential Election Campaign
  "topmostSubform[0].Page1[0].c1_2[0]", // You
  "topmostSubform[0].Page1[0].c1_2[1]", // Spouse

  // Digital Assets
  "topmostSubform[0].Page1[0].c1_3[0]", // Digital assets question

  // Standard Deduction
  "topmostSubform[0].Page1[0].c1_4[0]", // Someone can claim you as dependent
  "topmostSubform[0].Page1[0].c1_4[1]", // Spouse can be claimed as dependent
  "topmostSubform[0].Page1[0].c1_4[2]", // You were born before Jan 2, 1958
  "topmostSubform[0].Page1[0].c1_4[3]", // You are blind
  "topmostSubform[0].Page1[0].c1_4[4]", // Spouse born before Jan 2, 1958
  "topmostSubform[0].Page1[0].c1_4[5]", // Spouse is blind

  // Preparer
  "topmostSubform[0].Page2[0].c2_1[0]", // Preparer self-employed
];

export default defaultFormValues;
