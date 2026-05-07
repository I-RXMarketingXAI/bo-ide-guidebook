# Bo & Ide — Online Design Manual (v1.0)

A clean, password-protected web version of the Bo & Ide brand guidelines. Sidebar navigation, dedicated route per section, fast lookup of colors and logos, and one-click downloads. Designed to grow iteratively — content is structured so new sections and assets can be added easily later.

## Sections (top-level navigation)

1. Brand background — story, mission, values, tone of voice
2. Logo — primary, secondary, monochrome variants, clear space, misuse, downloads (PNG / SVG / JPEG)
3. Colors — full palette with HEX / RGB / CMYK, click-to-copy
4. Typography — fonts, weights, hierarchy, font file downloads
5. Imagery — photo style guidelines + sample gallery
6. Brand elements — patterns, icons, graphic devices
7. Point of sale material — templates and POS examples

The structure supports adding more sections later without refactoring.

## Page experience

- Fixed left sidebar with the 7 sections (collapsible on mobile). Active section highlighted.
- Each section is its own route (`/brand`, `/logo`, `/colors`, `/typography`, `/imagery`, `/elements`, `/pos`) — direct linkable, e.g. share the colors page directly with a colleague.
- Home page (`/`): brief intro + section cards.
- Colors: each swatch shows HEX/RGB/CMYK; clicking copies the HEX to clipboard with a toast confirmation.
- Logo: each variant displayed on appropriate background with download buttons for SVG, PNG, JPEG. Clear-space and misuse examples shown inline.
- Typography: live previews in the actual brand fonts; download buttons for font files.
- Visual design follows Bo & Ide brand styling (colors, fonts, imagery treatment) once you upload the materials.

## Access

Single shared password gate. Visitors enter the password once; access is remembered in their browser. No per-user accounts in v1.0.

## Content workflow for v1.0

You upload what you have now (PDF + any logo files, fonts, color list). I extract and structure it into the site, marking gaps clearly so we know what still needs real content. We then iterate: you send updates in chat, I add/replace content. When the manual feels stable and complete, we revisit whether to add a CMS-style admin so your team can edit online directly.

## What I need from you to start

- The current design manual PDF (you mentioned you'd upload it)
- Logo files in the formats you have (SVG strongly preferred; PNG/JPEG also welcome)
- Brand color list (HEX values, plus RGB/CMYK if available)
- Font files (.woff2 / .ttf / .otf) or the names if they're Google Fonts / Adobe Fonts
- Any sample imagery you want shown in the Imagery section
- The password you want to use for the access gate

Anything missing is fine — I'll use placeholders and we add real content as it arrives.

## Technical details

- TanStack Start + React + Tailwind, semantic design tokens defined in `src/styles.css` so the whole site themes from one place once your real brand colors are in.
- One route file per section under `src/routes/` (e.g. `colors.tsx`, `logo.tsx`) — gives each page its own URL, SEO metadata, and fast direct access.
- Shared layout in `__root.tsx` with shadcn `Sidebar` (collapsible icon mode on small screens).
- Uploaded assets live under `src/assets/brand/` and are imported directly. Downloads use `<a download>` pointing at the asset URL — no backend needed.
- Click-to-copy uses the browser Clipboard API + a `sonner` toast.
- Password gate: a simple client-side check against a configured password, with a flag in `sessionStorage` so users only enter it once per session. (Not high-security, but appropriate for an internal brand manual; we can upgrade to real auth later if needed.)
- No database / backend required for v1.0 — keeps it fast, simple, and free to host.

After you approve, upload the PDF and any assets you have ready, and tell me the password to use.
