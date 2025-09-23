// Loaded form field values for IRS Form 1040
// This file contains the actual form field data that will be used to populate the PDF
// These values are permanent and will not change - they represent the final form state
// Checkbox fields are marked with comments for easy identification

export const loadedFormValues = {
  // === Page 1 ===
  "topmostSubform[0].Page1[0].f1_01[0]": "", // (Reserved/Empty field)
  "topmostSubform[0].Page1[0].f1_02[0]": "", // (Reserved/Empty field)
  "topmostSubform[0].Page1[0].f1_03[0]": "", // (Reserved/Empty field)

  // Taxpayer info
  "topmostSubform[0].Page1[0].f1_04[0]": "John A", // First name and middle initial (Taxpayer)
  "topmostSubform[0].Page1[0].f1_05[0]": "Doe", // Last name (Taxpayer)
  "topmostSubform[0].Page1[0].f1_06[0]": "123-45-6789", // SSN (Taxpayer)

  // Spouse info
  "topmostSubform[0].Page1[0].f1_07[0]": "Jane B", // First name and middle initial (Spouse)
  "topmostSubform[0].Page1[0].f1_08[0]": "Doe", // Last name (Spouse)
  "topmostSubform[0].Page1[0].f1_09[0]": "987-65-4321", // SSN (Spouse)

  // Address
  "topmostSubform[0].Page1[0].f1_10[0]": "123 Main Street", // Home address
  "topmostSubform[0].Page1[0].f1_11[0]": "Apt 4B", // Apt. no.
  "topmostSubform[0].Page1[0].f1_12[0]": "Springfield", // City
  "topmostSubform[0].Page1[0].f1_13[0]": "IL", // State
  "topmostSubform[0].Page1[0].f1_14[0]": "62704", // ZIP code
  "topmostSubform[0].Page1[0].f1_15[0]": "Canada", // Foreign country
  "topmostSubform[0].Page1[0].f1_16[0]": "Ontario", // Foreign province/state
  "topmostSubform[0].Page1[0].f1_17[0]": "A1B 2C3", // Foreign postal code

  // HOH/QSS
  "topmostSubform[0].Page1[0].f1_18[0]": "Jimmy Doe", // HOH/QSS Qualifying person
  "topmostSubform[0].Page1[0].f1_19[0]": "Nonresident Spouse", // Nonresident spouse name

  // Dependents
  "topmostSubform[0].Page1[0].f1_20[0]": "Alice", // Dep 1 – First name
  "topmostSubform[0].Page1[0].f1_21[0]": "Doe", // Dep 1 – Last name
  "topmostSubform[0].Page1[0].f1_22[0]": "111-22-3333", // Dep 1 – SSN
  "topmostSubform[0].Page1[0].f1_23[0]": "Daughter", // Dep 1 – Relationship
  "topmostSubform[0].Page1[0].f1_24[0]": "Bobby", // Dep 2 – First name
  "topmostSubform[0].Page1[0].f1_25[0]": "Doe", // Dep 2 – Last name
  "topmostSubform[0].Page1[0].f1_26[0]": "222-33-4444", // Dep 2 – SSN
  "topmostSubform[0].Page1[0].f1_27[0]": "Son", // Dep 2 – Relationship
  "topmostSubform[0].Page1[0].f1_28[0]": "Charlie", // Dep 3 – First name
  "topmostSubform[0].Page1[0].f1_29[0]": "Doe", // Dep 3 – Last name
  "topmostSubform[0].Page1[0].f1_30[0]": "333-44-5555", // Dep 3 – SSN
  "topmostSubform[0].Page1[0].f1_31[0]": "Son", // Dep 3 – Relationship
  "topmostSubform[0].Page1[0].f1_32[0]": "Daisy", // Dep 4 – First name
  "topmostSubform[0].Page1[0].f1_33[0]": "Doe", // Dep 4 – Last name
  "topmostSubform[0].Page1[0].f1_34[0]": "444-55-6666", // Dep 4 – SSN
  "topmostSubform[0].Page1[0].f1_35[0]": "Daughter", // Dep 4 – Relationship

  // Income section
  "topmostSubform[0].Page1[0].f1_36[0]": "55000", // Wages (1a)
  "topmostSubform[0].Page1[0].f1_37[0]": "2000", // Household wages (1b)
  "topmostSubform[0].Page1[0].f1_38[0]": "1500", // Tips (1c)
  "topmostSubform[0].Page1[0].f1_39[0]": "500", // Medicaid waiver (1d)
  "topmostSubform[0].Page1[0].f1_40[0]": "300", // Dep care benefits (1e)
  "topmostSubform[0].Page1[0].f1_41[0]": "1200", // Adoption benefits (1f)
  "topmostSubform[0].Page1[0].f1_42[0]": "900", // Wages Form 8919 (1g)
  "topmostSubform[0].Page1[0].f1_43[0]": "600", // Other earned income (1h)
  "topmostSubform[0].Page1[0].f1_44[0]": "0", // Combat pay (1i)
  "topmostSubform[0].Page1[0].f1_45[0]": "1000", // Tax-exempt interest (2a)
  "topmostSubform[0].Page1[0].f1_46[0]": "500", // Taxable interest (2b)
  "topmostSubform[0].Page1[0].f1_47[0]": "700", // Qualified dividends (3a)
  "topmostSubform[0].Page1[0].f1_48[0]": "1200", // Ordinary dividends (3b)
  "topmostSubform[0].Page1[0].f1_49[0]": "2500", // IRA distributions (4a)
  "topmostSubform[0].Page1[0].f1_50[0]": "2000", // IRA taxable (4b)
  "topmostSubform[0].Page1[0].f1_51[0]": "4000", // Pensions (5a)
  "topmostSubform[0].Page1[0].f1_52[0]": "3500", // Pensions taxable (5b)
  "topmostSubform[0].Page1[0].f1_53[0]": "9000", // Soc Sec benefits (6a)
  "topmostSubform[0].Page1[0].f1_54[0]": "4500", // Soc Sec taxable (6b)
  "topmostSubform[0].Page1[0].f1_55[0]": "1200", // Capital gains (7)
  "topmostSubform[0].Page1[0].f1_56[0]": "600", // Addl income (8)
  "topmostSubform[0].Page1[0].f1_57[0]": "84000", // Total income (9)
  "topmostSubform[0].Page1[0].f1_58[0]": "2000", // Adjustments (10)
  "topmostSubform[0].Page1[0].f1_59[0]": "82000", // AGI (11)
  "topmostSubform[0].Page1[0].f1_60[0]": "14600", // Std deduction (12)

  // === Page 2 ===
  "topmostSubform[0].Page2[0].f2_01[0]": "0", // QBI deduction (13)
  "topmostSubform[0].Page2[0].f2_02[0]": "14600", // Total deductions (14)
  "topmostSubform[0].Page2[0].f2_03[0]": "67400", // Taxable income (15)
  "topmostSubform[0].Page2[0].f2_04[0]": "7500", // Tax (16)
  "topmostSubform[0].Page2[0].f2_05[0]": "200", // Schedule 2 (17)
  "topmostSubform[0].Page2[0].f2_06[0]": "7700", // Total tax before credits (18)
  "topmostSubform[0].Page2[0].f2_07[0]": "2000", // Child tax credit (19)
  "topmostSubform[0].Page2[0].f2_08[0]": "500", // Other credits (20)
  "topmostSubform[0].Page2[0].f2_09[0]": "2500", // Total credits (21)
  "topmostSubform[0].Page2[0].f2_10[0]": "5200", // Subtracted credits (22)
  "topmostSubform[0].Page2[0].f2_11[0]": "800", // Other taxes (23)
  "topmostSubform[0].Page2[0].f2_12[0]": "6000", // Total tax (24)
  "topmostSubform[0].Page2[0].f2_13[0]": "4000", // Withheld W-2 (25a)
  "topmostSubform[0].Page2[0].f2_14[0]": "1000", // Withheld 1099 (25b)
  "topmostSubform[0].Page2[0].f2_15[0]": "500", // Other withheld (25c)
  "topmostSubform[0].Page2[0].f2_16[0]": "5500", // Total withholding (25d)
  "topmostSubform[0].Page2[0].f2_17[0]": "600", // Estimated payments (26)
  "topmostSubform[0].Page2[0].f2_18[0]": "1200", // EIC (27)
  "topmostSubform[0].Page2[0].f2_19[0]": "800", // Addl child tax credit (28)
  "topmostSubform[0].Page2[0].f2_20[0]": "500", // AOC (29)
  "topmostSubform[0].Page2[0].f2_21[0]": "0", // Reserved (30)
  "topmostSubform[0].Page2[0].f2_22[0]": "300", // Other credits (31)
  "topmostSubform[0].Page2[0].f2_23[0]": "2800", // Total other payments (32)
  "topmostSubform[0].Page2[0].f2_24[0]": "8900", // Total payments (33)
  "topmostSubform[0].Page2[0].f2_25[0]": "2900", // Overpaid (34)
  "topmostSubform[0].Page2[0].f2_26[0]": "2000", // Refund (35a)
  "topmostSubform[0].Page2[0].f2_27[0]": "021000021", // Routing no. (35b)
  "topmostSubform[0].Page2[0].f2_28[0]": "1234567890", // Account no. (35d)
  "topmostSubform[0].Page2[0].f2_29[0]": "900", // Applied to 2025 est tax (36)
  "topmostSubform[0].Page2[0].f2_30[0]": "0", // Amount you owe (37)
  "topmostSubform[0].Page2[0].f2_31[0]": "0", // Est tax penalty (38)
  "topmostSubform[0].Page2[0].f2_32[0]": "Mary Taxhelper", // 3rd party name
  "topmostSubform[0].Page2[0].f2_33[0]": "555-123-4567", // 3rd party phone
  "topmostSubform[0].Page2[0].f2_34[0]": "98765", // 3rd party PIN
  "topmostSubform[0].Page2[0].f2_35[0]": "Engineer", // Taxpayer occupation
  "topmostSubform[0].Page2[0].f2_36[0]": "123456", // IP PIN (Taxpayer)
  "topmostSubform[0].Page2[0].f2_37[0]": "Teacher", // Spouse occupation
  "topmostSubform[0].Page2[0].f2_38[0]": "654321", // IP PIN (Spouse)
  "topmostSubform[0].Page2[0].f2_39[0]": "555-987-6543", // Phone
  "topmostSubform[0].Page2[0].f2_40[0]": "john.doe@email.com", // Email
  "topmostSubform[0].Page2[0].f2_41[0]": "Sarah Preparer", // Preparer name
  "topmostSubform[0].Page2[0].f2_42[0]": "P12345678", // Preparer PTIN
  "topmostSubform[0].Page2[0].f2_43[0]": "Tax Prep LLC", // Firm name
  "topmostSubform[0].Page2[0].f2_44[0]": "555-321-7890", // Firm phone
  "topmostSubform[0].Page2[0].f2_45[0]": "456 Business Rd", // Firm address
  "topmostSubform[0].Page2[0].f2_46[0]": "12-3456789", // Firm EIN
  "topmostSubform[0].Page2[0].f2_47[0]": "03/01/2025", // Preparer date

  // === Checkbox fields ===
  "topmostSubform[0].Page1[0].c1_1[0]": false, // Presidential Election Campaign - You
  "topmostSubform[0].Page1[0].c1_2[0]": true, // Presidential Election Campaign - Spouse
  "topmostSubform[0].Page1[0].c1_3[0]": false, // Filing Status - Single
  "topmostSubform[0].Page1[0].c1_4[0]": true, // Filing Status - Married filing jointly
  "topmostSubform[0].Page1[0].c1_5[0]": false, // Filing Status - Married filing separately (MFS)
  "topmostSubform[0].Page1[0].c1_6[0]": false, // Filing Status - Head of household (HOH)
  "topmostSubform[0].Page1[0].c1_7[0]": false, // Filing Status - Qualifying surviving spouse (QSS)
  "topmostSubform[0].Page1[0].c1_8[0]": true, // Digital Assets - Yes
  "topmostSubform[0].Page1[0].c1_9[0]": false, // Digital Assets - No
  "topmostSubform[0].Page1[0].c1_10[0]": false, // Standard Deduction - You as a dependent
  "topmostSubform[0].Page1[0].c1_11[0]": false, // Standard Deduction - Spouse as a dependent
  "topmostSubform[0].Page1[0].c1_12[0]": false, // Standard Deduction - Spouse itemizes / dual-status alien
  "topmostSubform[0].Page1[0].c1_13[0]": false, // Age/Blindness - You born before Jan 2, 1960
  "topmostSubform[0].Page1[0].c1_14[0]": true, // Age/Blindness - You are blind
  "topmostSubform[0].Page1[0].c1_15[0]": false, // Age/Blindness - Spouse born before Jan 2, 1960
  "topmostSubform[0].Page1[0].c1_16[0]": false, // Age/Blindness - Spouse is blind
  "topmostSubform[0].Page1[0].c1_17[0]": false, // Dependents - Child tax credit
  "topmostSubform[0].Page1[0].c1_18[0]": false, // Dependents - Credit for other dependents
  "topmostSubform[0].Page1[0].c1_19[0]": false, // Income - Social Security lump-sum election
  "topmostSubform[0].Page1[0].c1_20[0]": false, // Capital gain - Not required, check here
  "topmostSubform[0].Page1[0].c1_21[0]": false, // Refund - Direct deposit (Form 8888 attached)
  "topmostSubform[0].Page1[0].c1_22[0]": true, // Third Party Designee - Yes
  "topmostSubform[0].Page1[0].c1_23[0]": false, // Third Party Designee - No
  "topmostSubform[0].Page2[0].c2_1[0]": false, // Paid Preparer - Self-employed
  "topmostSubform[0].Page2[0].c2_2[0]": false, // Direct deposit - Checking
  "topmostSubform[0].Page2[0].c2_3[0]": false, // Direct deposit - Savings
  "topmostSubform[0].Page2[0].c2_4[0]": false, // Estimated tax penalty
  "topmostSubform[0].Page2[0].c2_5[0]": false, // Identity Protection PIN - Taxpayer
  "topmostSubform[0].Page2[0].c2_6[0]": false, // Identity Protection PIN - Spouse
  "topmostSubform[0].Page2[0].c2_7[0]": false, // Preparer signature - Attestation
};

// Fields that should be rendered as clickable links
export const LINK_FIELDS = {
  "topmostSubform[0].Page1[0].f1_34[0]": {
    type: "link",
    href: "#capital-gains-details", // You can customize the href
    title: "Click to view capital gains details",
    onClick: (value) => {
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
  "topmostSubform[0].Page1[0].c1_1[0]", // Presidential Election Campaign - You
  "topmostSubform[0].Page1[0].c1_2[0]", // Presidential Election Campaign - Spouse
  "topmostSubform[0].Page1[0].c1_3[0]", // Filing Status - Single
  "topmostSubform[0].Page1[0].c1_4[0]", // Filing Status - Married filing jointly
  "topmostSubform[0].Page1[0].c1_5[0]", // Filing Status - Married filing separately (MFS)
  "topmostSubform[0].Page1[0].c1_6[0]", // Filing Status - Head of household (HOH)
  "topmostSubform[0].Page1[0].c1_7[0]", // Filing Status - Qualifying surviving spouse (QSS)
  "topmostSubform[0].Page1[0].c1_8[0]", // Digital Assets - Yes
  "topmostSubform[0].Page1[0].c1_9[0]", // Digital Assets - No
  "topmostSubform[0].Page1[0].c1_10[0]", // Standard Deduction - You as a dependent
  "topmostSubform[0].Page1[0].c1_11[0]", // Standard Deduction - Spouse as a dependent
  "topmostSubform[0].Page1[0].c1_12[0]", // Standard Deduction - Spouse itemizes / dual-status alien
  "topmostSubform[0].Page1[0].c1_13[0]", // Age/Blindness - You were born before Jan 2, 1960
  "topmostSubform[0].Page1[0].c1_14[0]", // Age/Blindness - You are blind
  "topmostSubform[0].Page1[0].c1_15[0]", // Age/Blindness - Spouse born before Jan 2, 1960
  "topmostSubform[0].Page1[0].c1_16[0]", // Age/Blindness - Spouse is blind
  "topmostSubform[0].Page1[0].c1_17[0]", // Dependents - Child tax credit checkbox
  "topmostSubform[0].Page1[0].c1_18[0]", // Dependents - Other dependents checkbox
  "topmostSubform[0].Page1[0].c1_19[0]", // Income - Social Security lump-sum election
  "topmostSubform[0].Page1[0].c1_20[0]", // Capital gains - "Not required, check here"
  "topmostSubform[0].Page1[0].c1_21[0]", // Refund - Direct deposit (Form 8888 attached)
  "topmostSubform[0].Page1[0].c1_22[0]", // Third Party Designee - Yes
  "topmostSubform[0].Page1[0].c1_23[0]", // Third Party Designee - No
  "topmostSubform[0].Page2[0].c2_1[0]", // Paid Preparer - Self-employed
  "topmostSubform[0].Page2[0].c2_2[0]", // Direct deposit - Checking
  "topmostSubform[0].Page2[0].c2_3[0]", // Direct deposit - Savings
  "topmostSubform[0].Page2[0].c2_4[0]", // Estimated tax penalty (if applicable)
  "topmostSubform[0].Page2[0].c2_5[0]", // Identity Protection PIN - Taxpayer
  "topmostSubform[0].Page2[0].c2_6[0]", // Identity Protection PIN - Spouse
  "topmostSubform[0].Page2[0].c2_7[0]", // Preparer signature - Attestation
];

export default loadedFormValues;
