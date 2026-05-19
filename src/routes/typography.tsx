import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { brandFonts } from "@/lib/brand";

export const Route = createFileRoute("/typography")({
  head: () => ({
    meta: [
      { title: "Typografi — Bog & idé" },
      { name: "description", content: "Velo Serif Display og Muller. To skrifttyper, ét princip." },
    ],
  }),
  component: TypographyPage,
});

function TypographyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="02 — Visuel identitet"
        title="Typografi"
        lead="To skrifttyper. Ét princip: Velo sætter tonen, Muller leverer indholdet."
      />

      <section className="space-y-6">
        {brandFonts.map((f) => (
          <div key={f.name} className="rounded-lg border bg-card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-3xl">{f.name}</h2>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{f.role}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{f.weights}</p>
            <p
              className="mt-6 text-5xl leading-[1.05] md:text-6xl"
              style={{ fontFamily: f.cssFamily }}
            >
              {f.sample}
            </p>
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">{f.usage}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-lg border-l-4 border-primary bg-secondary/40 p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary">Grundprincippet</p>
        <p className="mt-2 text-base">
          Velo Serif Display Bold bruges udelukkende til overskrifter, kampagnebudskaber og
          salgstekster. Muller bruges til alt indhold der skal læses.
          <strong> Bland dem aldrig på samme tekstniveau.</strong>
        </p>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">
        Note: Velo Serif Display og Muller er licenserede fonts. Online vises de her med tilnærmede
        fallbacks (DM Serif Display og Manrope) — brug altid de licenserede filer i produktion.
      </p>
    </PageShell>
  );
}
