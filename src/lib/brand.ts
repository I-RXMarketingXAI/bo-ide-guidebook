export type BrandColor = {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  role: string;
};

// Placeholder palette — replace with real Bo & Ide values once supplied.
export const brandColors: BrandColor[] = [
  { name: "Ide Sand", hex: "#E8DDC9", rgb: "232, 221, 201", cmyk: "0, 5, 13, 9", role: "Primary background tone" },
  { name: "Bo Clay", hex: "#C9A77C", rgb: "201, 167, 124", cmyk: "0, 17, 38, 21", role: "Warm accent" },
  { name: "Linen White", hex: "#F6F1E7", rgb: "246, 241, 231", cmyk: "0, 2, 6, 4", role: "Surface" },
  { name: "Stone", hex: "#8C8378", rgb: "140, 131, 120", cmyk: "0, 6, 14, 45", role: "Neutral text" },
  { name: "Charcoal", hex: "#2B2622", rgb: "43, 38, 34", cmyk: "0, 12, 21, 83", role: "Primary text" },
  { name: "Forest", hex: "#3F4A3C", rgb: "63, 74, 60", cmyk: "15, 0, 19, 71", role: "Deep accent" },
  { name: "Brick", hex: "#A85B3D", rgb: "168, 91, 61", cmyk: "0, 46, 64, 34", role: "Highlight" },
];

export const brandFonts = [
  {
    name: "Cormorant Garamond",
    role: "Display / Headlines",
    weights: "Light, Regular, Medium",
    sample: "Et hjem fortæller en historie.",
  },
  {
    name: "Inter",
    role: "Body / UI",
    weights: "Regular, Medium, Semibold",
    sample: "Bo & Ide står for ærlige materialer og tidløst design.",
  },
];
