import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Brand — Bog & idé" },
      { name: "description", content: "Bog & idé som brand: løfte, purpose, position og sign-off." },
    ],
  }),
  component: BrandPage,
});

function BrandPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="00 — Bog & idé som brand"
        title="Vores løfte"
        lead="Bog & idé er ikke det billigste sted at købe bøger. Det er det bedste sted at vælge dem."
      />

      <section className="space-y-12">
        <div className="rounded-lg border bg-card p-8">
          <p className="text-lg leading-relaxed">
            Vi konkurrerer ikke på pris — SAXO og SallingGroup kan strukturelt matche os der.
            Vi konkurrerer på <strong>kuratering og vejledning</strong>, og det er svært at kopiere.
            Vores styrke er evnen til at hjælpe kunden med at vælge rigtigt — i en tid med for
            mange muligheder og for lidt vejledning.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Kuratering", "Vejledning", "Nærvær", "Læselyst"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border-2 border-primary bg-secondary/40 p-8 text-center">
          <p
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            [ Altid en god idé ]
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Brand sign-off — ikke et claim. Afslutter al kommunikation og optræder altid med klammerne. Må aldrig stå alene.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Purpose</p>
            <h2 className="mt-2 text-2xl">Gode valg skaber nærvær i en digital tid</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Vi tror på at det rigtige valg — en bog der rammer plet, en gave der viser at man
              kender modtageren — skaber noget sjældent og værdifuldt. Det er ikke et salgsargument.
              Det er en overbevisning.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Position</p>
            <h2 className="mt-2 text-2xl">Vi hjælper dig med at vælge rigtigt</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Kunden er omgivet af overvalg. Vores opgave er at skære igennem og pege på det
              rigtige valg — ikke at præsentere alle muligheder og overlade beslutningen til hende.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl">Sign-off — purpose-niveau</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Refererer til vores grundlæggende overbevisning: gode valg, bøger, gaver og kreative
              produkter skaber nærvær og mening i hverdagen.
            </p>
          </div>
          <div>
            <h3 className="text-xl">Sign-off — positions-niveau</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Er konklusionen på vores løfte til kunden: vi hjælper dig med at vælge rigtigt — og
              det valg du tager med hjem er <em>altid en god idé</em>.
            </p>
          </div>
        </div>

        <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary">Kommunikationsfilter</p>
          <p className="mt-2 text-base">
            Al kommunikation fra Bog &amp; idé skal kunne svare ja til mindst ét af:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Understøtter det læsning, leg, læring eller nærvær?</li>
            <li>Viser det inspiration, kuratering eller personlig vejledning?</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
