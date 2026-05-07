import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Placeholder } from "@/components/page";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import logoUrl from "@/assets/brand/logo.svg?url";
import logoMonoUrl from "@/assets/brand/logo-mono.svg?url";

export const Route = createFileRoute("/logo")({
  head: () => ({
    meta: [
      { title: "Logo — Bo & Ide" },
      { name: "description", content: "Bo & Ide logo variants, clear space, misuse and downloads." },
    ],
  }),
  component: LogoPage,
});

type Variant = { name: string; url: string; bg: string; description: string };

const variants: Variant[] = [
  {
    name: "Primary",
    url: logoUrl,
    bg: "bg-[#F6F1E7]",
    description: "Use on light, warm backgrounds. Preferred wherever possible.",
  },
  {
    name: "Reversed",
    url: logoMonoUrl,
    bg: "bg-[#2B2622]",
    description: "Use on dark backgrounds and over imagery with sufficient contrast.",
  },
];

function downloadName(name: string, ext: string) {
  return `boide-logo-${name.toLowerCase()}.${ext}`;
}

function LogoCard({ v }: { v: Variant }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className={`flex h-56 items-center justify-center ${v.bg}`}>
        <img src={v.url} alt={`Bo & Ide ${v.name} logo`} className="h-16 w-auto" />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-xl">{v.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" variant="outline">
            <a href={v.url} download={downloadName(v.name, "svg")}>
              <Download className="mr-2 h-4 w-4" /> SVG
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" disabled>
            <a aria-disabled className="pointer-events-none opacity-50">
              <Download className="mr-2 h-4 w-4" /> PNG
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" disabled>
            <a aria-disabled className="pointer-events-none opacity-50">
              <Download className="mr-2 h-4 w-4" /> JPEG
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function LogoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="02 — Logo"
        title="Logo"
        lead="The Bo & Ide wordmark in its approved variants. Always use the supplied files — never recreate or distort the mark."
      />

      <section className="grid gap-6 sm:grid-cols-2">
        {variants.map((v) => (
          <LogoCard key={v.name} v={v} />
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">Clear space &amp; minimum size</h2>
        <Placeholder>
          Upload diagrams of clear space and minimum size requirements — we’ll display them here.
        </Placeholder>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">Misuse</h2>
        <Placeholder>
          Examples of incorrect use (stretching, recoloring, drop shadows, tilt, etc.) go here.
        </Placeholder>
      </section>

      <p className="mt-10 text-xs text-muted-foreground">
        PNG &amp; JPEG download buttons are placeholders — upload the official raster files and they’ll be wired up.
      </p>
    </PageShell>
  );
}
