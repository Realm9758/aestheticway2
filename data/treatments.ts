export const BOOKING_URL = "https://aestheticwayuk.facesconsent.com";

export type Treatment = {
  name: string;
  price?: number;
  duration?: number;
  deposit?: number;
  slug?: string;
  detail?: string;
};

export type TreatmentGroup = {
  id: string;
  name: string;
  intro: string;
  note?: string;
  treatments: Treatment[];
};

export const treatmentGroups: TreatmentGroup[] = [
  {
    id: "lips",
    name: "Lip enhancement",
    intro:
      "Shape, definition and volume planned around your natural lip structure.",
    treatments: [
      {
        name: "0.5ml Signature Lips",
        price: 100,
        duration: 75,
        deposit: 25,
        slug: "0.5ml-signature-lips-(-no-pictures-)-0",
      },
      {
        name: "0.8ml Signature Lips",
        price: 120,
        duration: 75,
        deposit: 25,
        slug: "0.8ml-signature-lips-0",
      },
      {
        name: "1ml Signature Lips",
        price: 130,
        duration: 75,
        deposit: 25,
        slug: "1ml-signature-lips-0",
      },
      {
        name: "0.5ml Russian Lips",
        price: 100,
        duration: 75,
        deposit: 25,
        slug: "0.5ml-russian-lips-(-no-pictures-)-0",
      },
      {
        name: "0.8ml Russian Lips",
        price: 120,
        duration: 75,
        deposit: 25,
        slug: "0.8ml-russian-lips-(-no-pictures-)-0",
      },
      {
        name: "1ml Russian Lips",
        price: 130,
        duration: 75,
        deposit: 25,
        slug: "1ml-russian-lips-(-no-pictures-)-0",
      },
    ],
  },
  {
    id: "filler",
    name: "Dermal filler",
    intro:
      "Targeted enhancement designed to restore balance, definition and proportion.",
    treatments: [
      {
        name: "Chin Filler",
        price: 120,
        duration: 30,
        deposit: 40,
        slug: "chin-filler-0",
      },
      {
        name: "Cheek Filler",
        price: 200,
        duration: 90,
        deposit: 45,
        slug: "cheek-filler-0",
      },
      {
        name: "Jawline Filler",
        price: 230,
        duration: 90,
        deposit: 25,
        slug: "jawline-filler-(-no-pictures-)-0",
      },
      {
        name: "Non-Surgical Rhinoplasty",
        price: 200,
        duration: 75,
        deposit: 25,
        slug: "non-surgical-rhinoplasty-(-no-pictures-)-0",
      },
    ],
  },
  {
    id: "balancing",
    name: "Facial balancing",
    intro:
      "A considered, full-face approach that treats proportions as a whole.",
    treatments: [
      {
        name: "2ml Package",
        price: 200,
        duration: 90,
        deposit: 45,
        slug: "2ml-package-(-no-pictures-)-0",
      },
      {
        name: "Princess Package · 3ml",
        price: 300,
        duration: 105,
        deposit: 65,
        slug: "princess-package-(3ml)-(-no-pictures-)-0",
      },
      {
        name: "Glow Up Package · 4ml",
        price: 370,
        duration: 90,
        deposit: 85,
        slug: "4ml-glow-up-package-(-no-pictures-)-0",
      },
      {
        name: "Barbie Package · 5ml",
        price: 470,
        duration: 105,
        deposit: 105,
        slug: "barbie-package-(5ml)-(-no-pictures-)-0",
      },
      {
        name: "Doll Package · 7ml",
        price: 650,
        duration: 150,
        deposit: 140,
        slug: "7ml-doll-package-(-no-pictures-)-0",
      },
    ],
  },
  {
    id: "skin",
    name: "Skin",
    intro:
      "Collagen-supporting and hydration-focused treatments for texture and radiance.",
    treatments: [
      {
        name: "Face Skin Booster",
        price: 80,
        duration: 45,
        deposit: 30,
        slug: "face-skin-booster-0",
      },
      {
        name: "Under Eye Skin Booster",
        price: 80,
        duration: 45,
        deposit: 30,
        slug: "under-eye-skin-booster-0",
      },
      {
        name: "Face Skin Booster · 3 sessions",
        price: 200,
        duration: 75,
        deposit: 70,
        slug: "face-skin-booster-(-3-sessions)-0",
      },
      {
        name: "Eye Skin Booster · 3 sessions",
        price: 200,
        duration: 75,
        deposit: 70,
        slug: "eye-skin-booster-(-3-sessions-)-0",
      },
      {
        name: "Microneedling",
        price: 60,
        duration: 60,
        deposit: 20,
        slug: "microneedling-0",
      },
      {
        name: "Microneedling · 3 sessions",
        price: 150,
        duration: 45,
        deposit: 34.99,
        slug: "microneedling-(-3-sessions-)-0",
      },
      {
        name: "BioRePeel with Microneedling",
        price: 80,
        duration: 60,
        deposit: 20,
        slug: "bio-re-peel-w-microneedling-0",
      },
      {
        name: "BioRePeel · 3 sessions",
        price: 190,
        duration: 45,
        deposit: 50,
        slug: "biorepeelc3-(-3-sessions-)-0",
      },
    ],
  },
  {
    id: "contouring",
    name: "Body contouring",
    intro:
      "Non-surgical treatment plans for small, medium and larger target areas.",
    treatments: [
      {
        name: "Lemon Bottle · Small Area",
        price: 60,
        duration: 45,
        slug: "lemon-bottle-small-area-0",
      },
      {
        name: "Lemon Bottle · Medium Area",
        price: 90,
        duration: 60,
        deposit: 30,
        slug: "lemon-bottle-medium-area-0",
      },
      {
        name: "Lemon Bottle · Large Area",
        price: 120,
        duration: 90,
        deposit: 55,
        slug: "lemon-bottle-large-area-0",
      },
      {
        name: "Lemon Bottle · Small Area, 3 sessions",
        price: 160,
        duration: 75,
        deposit: 45,
        slug: "lemon-bottle-small-area-(-3-sessions)-0",
      },
      {
        name: "Lemon Bottle · Medium Area, 3 sessions",
        price: 250,
        duration: 60,
        deposit: 55,
        slug: "lemon-bottle-medium-area-0",
      },
      {
        name: "Lemon Bottle · Large Area, 3 sessions",
        price: 330,
        duration: 90,
        deposit: 105,
        slug: "lemob-bottle-large-area-(-3-sessions-)-0",
      },
    ],
  },
  {
    id: "model",
    name: "Model slots",
    intro:
      "Reduced-price appointments available when content is required for the clinic portfolio.",
    note:
      "Images may be taken and used for marketing. Choose a standard appointment if you prefer not to be photographed.",
    treatments: [
      {
        name: "0.5ml Signature Lips · Model",
        price: 90,
        duration: 75,
        deposit: 25,
        slug: "0.5ml-signature-lips-0",
      },
      {
        name: "0.8ml Signature Lips · Model",
        price: 100,
        duration: 75,
        deposit: 24.96,
        slug: "0.8ml-signature-lips-0",
      },
      {
        name: "1ml Signature Lips · Model",
        price: 120,
        duration: 75,
        deposit: 25,
        slug: "1ml-signature-lips-0",
      },
      {
        name: "0.5ml Russian Lips · Model",
        price: 90,
        duration: 60,
        deposit: 25,
        slug: "0.5ml-russian-lips-0",
      },
      {
        name: "0.8ml Russian Lips · Model",
        price: 100,
        duration: 75,
        deposit: 25,
        slug: "0.8ml-russian-lips-0",
      },
      {
        name: "1ml Russian Lips · Model",
        price: 120,
        duration: 60,
        deposit: 25,
        slug: "1ml-russian-lips-0",
      },
      {
        name: "Cheek Filler · Model",
        price: 160,
        duration: 90,
        deposit: 45,
        slug: "cheek-filler-(-pictures-)-0",
      },
      {
        name: "Non-Surgical Rhinoplasty · Model",
        price: 150,
        duration: 75,
        deposit: 25,
        slug: "non-surgical-rhinoplasty-(-pictures-)-0",
      },
      {
        name: "Jawline Filler · Model",
        price: 200,
        duration: 60,
        deposit: 65,
        slug: "jawline-filler-0",
      },
      {
        name: "2ml Package · Model",
        price: 160,
        duration: 90,
        deposit: 45,
        slug: "2ml-winter-luxe-package-0",
      },
      {
        name: "Princess Package · 3ml Model",
        price: 210,
        duration: 60,
        deposit: 65,
        slug: "princess-package-(3ml)-0",
      },
      {
        name: "Glow Up Package · 4ml Model",
        price: 310,
        duration: 90,
        deposit: 100,
        slug: "4ml-glow-up-package-(pictures)-0",
      },
      {
        name: "Barbie Package · 5ml Model",
        price: 390,
        duration: 120,
        deposit: 105,
        slug: "5ml-package-0",
      },
      {
        name: "Doll Package · 7ml Model",
        price: 500,
        duration: 150,
        deposit: 140,
        slug: "7ml-doll-package-(pictures)-0",
      },
    ],
  },
];

export const bookingLink = (slug?: string) =>
  slug ? `${BOOKING_URL}/treatment-details/${encodeURIComponent(slug)}` : BOOKING_URL;
