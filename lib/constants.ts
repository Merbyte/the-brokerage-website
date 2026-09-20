/**
 * Approved business facts, CTA wording and compliance copy.
 * Source of truth: CLAUDE.md and docs/master-website-brief.md.
 * Do not edit values here without an approved documentation change first.
 */

export const PRIMARY_CTA_LABEL = "Get a Free Financing Assessment";

export const SECONDARY_CTA_LABELS = [
  "See How We Work",
  "Discuss Your Situation",
  "Discuss Your Project",
  "Discuss Cash Flow",
  "Speak to a Specialist",
  "Contact Us",
  "Submit Enquiry",
] as const;

export const CONTACT = {
  phoneDisplay: "+65 8011 8194",
  phoneHref: "tel:+6580118194",
  whatsappHref: "https://wa.me/6580118194",
  whatsappPrefill: "Hi, I would like to get a free financing assessment.",
  email: "admin@thebrokerage-advisory.com",
  addressLine: "31A Lowland Road, Singapore 547424",
  walkInNote: "Walk-in visits are welcome by arrangement.",
} as const;

export const ASSESSMENT_FORM_DISCLAIMER =
  "A free financing assessment is an initial discussion only. It is not a financing approval, offer, commitment or guarantee. Any financing route depends on the information provided and the relevant financier's assessment.";

export const ASSESSMENT_FORM_CONSENT =
  "By submitting this form, you agree that The Brokerage Advisory may use the information provided to respond to your enquiry. Please review our Privacy Policy.";

export const CALCULATOR_DISCLAIMER =
  "This calculator provides an illustrative estimate only. It is not a quotation, financing offer, approval or guarantee. Actual repayment amounts, interest, fees, tenure and availability depend on the relevant financier's assessment and final facility terms.";

export const NETWORK_WORDING = "banks and financiers in our local and overseas network";

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
  { label: "Disclaimer", href: "/disclaimer/" },
] as const;
