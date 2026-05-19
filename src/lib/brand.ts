export type BrandColor = {
  name: string;
  hex: string;
  rgb: string;
  role: string;
  category: "primary" | "background" | "secondary";
  textOnDark?: boolean;
};

// Official Bog & idé palette
export const brandColors: BrandColor[] = [
  {
    name: "Bog & idé Rød",
    hex: "#e02e31",
    rgb: "224, 46, 49",
    role: "Primær brandfarve. Dominerende i brand-kommunikation.",
    category: "primary",
    textOnDark: true,
  },
  {
    name: "Bog & idé Beige",
    hex: "#feede0",
    rgb: "254, 237, 224",
    role: "Baggrundsfarve. Dynamik og variation. Kundeklub-design.",
    category: "background",
  },
  {
    name: "Bog & idé Lys Rød",
    hex: "#f7c3c7",
    rgb: "247, 195, 199",
    role: "Sekundær kampagnefarve.",
    category: "background",
  },
  {
    name: "Bog & idé Lys Blå",
    hex: "#b4dcf6",
    rgb: "180, 220, 246",
    role: "Sekundær kampagnefarve.",
    category: "background",
  },
  {
    name: "Bog & idé Blå",
    hex: "#00375c",
    rgb: "0, 55, 92",
    role: "Topskilt (Bestseller) og sekundær accent.",
    category: "secondary",
    textOnDark: true,
  },
];

export const brandFonts = [
  {
    name: "Velo Serif Display",
    role: "Brand-font · Budskaber",
    weights: "Bold 700, Medium 500",
    usage:
      "Bruges på grafiske materialer til budskaber om branding, salg og kampagner. Kun på overskriftsniveau — aldrig til brødtekst.",
    sample: "Altid en god idé",
    cssFamily: "'DM Serif Display', 'Velo Serif Display', Georgia, serif",
  },
  {
    name: "Muller",
    role: "Brand-font · Information",
    weights: "Light 300, Regular 400, Bold 700",
    usage:
      "Bruges på materialer med et informativt niveau — brødtekster, wayfinding, etiketter og steder med meget tekst.",
    sample: "Bog & idé står for kuratering, vejledning og læselyst.",
    cssFamily: "'Manrope', 'Muller', Inter, sans-serif",
  },
  {
    name: "Verveine",
    role: "Børne-font · Overskrifter",
    weights: "Regular",
    usage:
      "Bruges udelukkende til opmærksomhedsskabende tekster og overskrifter i børnematerialer — aldrig til brødtekst.",
    sample: "Kom og leg med!",
    cssFamily: "'Caveat', 'Verveine', cursive",
  },
];
