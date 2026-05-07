import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bo & Ide — Design Manual" },
      { name: "description", content: "The living brand and design manual for Bo & Ide." },
    ],
  }),
  component: Index,
});

const sections = [
  { to: "/brand", title: "Brand background", desc: "Story, mission, values and tone of voice." },
  { to: "/logo", title: "Logo", desc: "Variants, clear space, misuse and downloads." },
  { to: "/colors", title: "Colors", desc: "Palette with HEX, RGB and CMYK — click to copy." },
  { to: "/typography", title: "Typography", desc: "Typefaces, weights and hierarchy." },
  { to: "/imagery", title: "Imagery", desc: "Photography style and sample gallery." },
  { to: "/elements", title: "Brand elements", desc: "Patterns, icons and graphic devices." },
  { to: "/pos", title: "Point of sale", desc: "Templates and in-store materials." },
] as const;

function Index() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Design Manual · v1.0</p>
        <h1 className="mt-4 text-5xl leading-tight md:text-6xl">Bo &amp; Ide</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A living reference for everyone who shapes the Bo &amp; Ide brand — from logos and colors
          to tone of voice and point-of-sale material. Always up to date, always one click away.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="group rounded-lg border bg-card p-6 transition-colors hover:border-foreground/30 hover:bg-accent/30"
          >
            <h2 className="text-2xl">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-foreground">
              Open <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
