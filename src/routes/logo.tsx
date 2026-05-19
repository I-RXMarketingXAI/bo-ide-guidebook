import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/logo")({
  head: () => ({
    meta: [
      { title: "Logo — Bog & idé" },
      { name: "description", content: "Logoet er Bog & idés primære identitetsmarkør." },
    ],
  }),
  component: LogoPage,
});

const variants = [
  { name: "Sort", url: A.logoSort, bg: "#feede0", description: "Til lys baggrund." },
  { name: "Hvid", url: A.logoHvid, bg: "#00375c", description: "Til mørk baggrund." },
];

function LogoCard({ v }: { v: typeof variants[number] }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className="flex h-56 items-center justify-center" style={{ backgroundColor: v.bg }}>
        <img src={v.url} alt={`Bog & idé logo — ${v.name}`} className="h-20 w-auto" />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-xl">{v.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
        </div>
        <Button asChild size="sm" variant="outline">
          <a href={v.url} download={`boi-logo-${v.name.toLowerCase()}.svg`}>
            <Download className="mr-2 h-4 w-4" /> Download SVG
          </a>
        </Button>
      </div>
    </div>
  );
}

function LogoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="02 — Visuel identitet"
        title="Logo"
        lead="Logoet er Bog & idés primære identitetsmarkør og bruges konsekvent på tværs af alle materialer."
      />

      <section className="grid gap-6 sm:grid-cols-2">
        {variants.map((v) => <LogoCard key={v.name} v={v} />)}
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">Respektafstand</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Respektafstanden er styret af O'ets mål i logoet. Brug altid frirum svarende til O'ets
          højde på alle sider — medmindre logoet bruges som en aktiv del af et grafisk design,
          fx i grafik for services og kompetencer.
        </p>
        <div className="mt-6 overflow-hidden rounded-lg border bg-card p-8">
          <img src={A.logoRespektafstand} alt="Respektafstand" className="mx-auto max-h-72 w-auto" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-4">
            <p className="text-sm"><strong>✓ Minimumsstørrelse:</strong> Logoet bruges aldrig mindre end 10 mm i den smalleste dimension ved print.</p>
          </div>
          <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-4">
            <p className="text-sm"><strong>✕ Ingen omfarvning:</strong> Kun sort på lys, hvid på mørk eller hvid på rød facade-version.</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">Do &amp; Don't</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: A.logoDoClearspace, label: "✓ Korrekt frirum", ok: true },
            { src: A.logoDontStretch, label: "✕ Må ikke forvrænges", ok: false },
            { src: A.logoDontColor, label: "✕ Må ikke omfarves", ok: false },
            { src: A.logoDontRotate, label: "✕ Må ikke roteres", ok: false },
          ].map((d) => (
            <div key={d.label} className="overflow-hidden rounded-lg border bg-card">
              <div className="flex h-32 items-center justify-center bg-secondary/40 p-4">
                <img src={d.src} alt={d.label} className="max-h-full w-auto" />
              </div>
              <p className={`p-3 text-xs ${d.ok ? "text-foreground" : "text-muted-foreground"}`}>{d.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">Logo — Facade</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Det kvadratiske logo bruges udelukkende til facader og butiksafmelding. Det er altid hvid
          på rød baggrund i denne version, og må <strong>ikke</strong> erstatte det horisontale
          logo i andre sammenhænge.
        </p>
        <div className="mt-6 overflow-hidden rounded-lg border bg-card">
          <div className="flex h-64 items-center justify-center" style={{ backgroundColor: "#e02e31" }}>
            <img src={A.logoFacade} alt="Bog & idé facadelogo" className="h-40 w-auto" />
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <div>
              <p className="text-sm"><strong>✓ Bruges til:</strong> Facadeskilte, butiksafmelding, badges og steder der kræver kvadratisk format.</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground"><strong>✕ Bruges ikke til:</strong> Erstatter ikke det horisontale logo i tryksager, digitale flader eller kampagner.</p>
            </div>
          </div>
          <div className="border-t p-5">
            <Button asChild size="sm" variant="outline">
              <a href={A.logoFacade} download="boi-logo-facade.svg">
                <Download className="mr-2 h-4 w-4" /> Download facadelogo (SVG)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
