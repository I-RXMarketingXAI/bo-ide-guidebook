import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/klammer")({
  head: () => ({
    meta: [
      { title: "Klammer — Bog & idé" },
      { name: "description", content: "Klammerne er Bog & idés vigtigste grafiske brand asset." },
    ],
  }),
  component: KlammerPage,
});

function KlammerPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="02 — Visuel identitet"
        title="Klammerne"
        lead='Klammerne binder kommunikationen sammen på tværs af alle formater og kanaler — og optræder altid med sign-off’en "Altid en god idé".'
      />

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="flex h-64 items-center justify-center bg-white p-8">
            <img src={A.klammerDemo} alt="Klammer — rød version" className="max-h-full w-auto" />
          </div>
          <div className="p-5">
            <h3 className="text-xl">Rød version — standard</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Anvendes som udgangspunkt på alle brand-flader.
            </p>
            <Button asChild size="sm" variant="outline" className="mt-4">
              <a href={A.klammerDemo} download="klammer-rod.svg">
                <Download className="mr-2 h-4 w-4" /> Download SVG
              </a>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="flex h-64 items-center justify-center p-8" style={{ backgroundColor: "#e02e31" }}>
            <img src={A.klammerHvid} alt="Klammer — hvid version" className="max-h-full w-auto" />
          </div>
          <div className="p-5">
            <h3 className="text-xl">Hvid version</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Bruges når rød allerede dominerer materialet.
            </p>
            <Button asChild size="sm" variant="outline" className="mt-4">
              <a href={A.klammerHvid} download="klammer-hvid.svg">
                <Download className="mr-2 h-4 w-4" /> Download SVG
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg">✓ Bruges til</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Brandkampagner</li>
            <li>Lancering af nye tiltag</li>
            <li>CSR-aktiviteter</li>
            <li>Servicebudskaber</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg">✕ Bruges ikke til</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Taktisk priskommunikation</li>
            <li>Prisskilte og prissplash</li>
            <li>Rene produktlister</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { kpi: "5%", label: "Størrelse", text: "af formatets smalleste side. Eks.: 120 mm → klammer = 6 mm." },
          { kpi: "75%", label: "Afstand til kant", text: "af klammens størrelse. Eks.: 6 mm klammer → 4,5 mm afstand." },
          { kpi: "Rød", label: "Farve", text: "Rød som udgangspunkt. Hvid hvis rød allerede dominerer." },
          { kpi: "Ensartet", label: "Outdoor-regel", text: "Klammer på vinduer side om side skal have ens størrelse." },
        ].map((m) => (
          <div key={m.label} className="rounded-lg border bg-card p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.label}</p>
            <p className="mt-2 text-4xl text-primary" style={{ fontFamily: "var(--font-display)" }}>{m.kpi}</p>
            <p className="mt-3 text-sm text-muted-foreground">{m.text}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
