import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Priskommunikation — Bog & idé" },
      { name: "description", content: "Taktisk priskommunikation — hvid baggrund, sort tekst, ingen klammer." },
    ],
  }),
  component: PricingPage,
});

function PriceTag({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "deal" | "frit" }) {
  const bg = variant === "deal" ? "#f7c3c7" : variant === "frit" ? "#b4dcf6" : "#ffffff";
  return (
    <div className="overflow-hidden rounded border bg-white p-5 text-center" style={{ background: bg, color: "#000" }}>
      {children}
    </div>
  );
}

function PricingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="04 — Priskommunikation"
        title="Pris er taktisk"
        lead="Priskommunikation adskiller sig bevidst fra brandkommunikation. Den er rent taktisk og følger et stramt visuelt system — ingen klammer, hvid baggrund, sort tekst."
      />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <PriceTag>
          <p className="text-xs uppercase tracking-wider text-neutral-500">Standard pris</p>
          <p className="mt-4 text-sm">Anna Jansson</p>
          <p className="text-lg font-semibold">Skyggebarn</p>
          <p className="mt-6 text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            199<sup className="text-2xl">95</sup>
          </p>
        </PriceTag>

        <PriceTag variant="deal">
          <p className="text-xs uppercase tracking-wider text-neutral-700">Tilbud</p>
          <p className="mt-4 text-sm">Anna Jansson</p>
          <p className="text-lg font-semibold">Skyggebarn</p>
          <p className="mt-4 text-sm text-neutral-500 line-through">199,95</p>
          <p className="text-5xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#e02e31" }}>
            149<sup className="text-2xl">95</sup>
          </p>
          <p className="mt-2 text-sm font-bold">SPAR 50.–</p>
        </PriceTag>

        <PriceTag variant="frit">
          <p className="text-xs uppercase tracking-wider text-neutral-700">Frit valg</p>
          <p className="mt-4 text-lg font-bold">FRIT VALG</p>
          <p className="mt-2 text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            69<sup className="text-2xl">95</sup>
          </p>
          <p className="mt-2 text-sm">2 bøger: 150.–</p>
          <p className="mt-1 text-sm font-bold">SPAR 30.–</p>
        </PriceTag>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {[
          ["Hvid baggrund — sort tekst", "Prisskilte og prissplash bruger altid hvid baggrund og sort tekst. Klammerne bruges ikke."],
          ["Normalpris vises tydeligt", "Når en vare er nedsat, angives normalpris tydeligt ved siden af kampagneprisen."],
          ["SPAR frem for procent", "\"SPAR [beløb]\" foretrækkes frem for procentsatser — medmindre procenten er særligt fordelagtig."],
          ["Kampagnefarver tilpasses", "Farverne på prissplash tilpasses de aktuelle kampagnefarver fra paletten."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-lg border bg-card p-5">
            <h3 className="text-lg">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
