import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/imagery")({
  head: () => ({
    meta: [
      { title: "Billedstil — Bog & idé" },
      { name: "description", content: "Bog & idés billedstil: nærvær, varme, autenticitet." },
    ],
  }),
  component: ImageryPage,
});

const motifs = [
  { src: A.fotoFordybelse, title: "Fordybelse og ro", desc: "En person der læser alene, opslugt af en bog." },
  { src: A.fotoSamvaer, title: "Samvær og nærvær", desc: "Forælder der læser højt for barn, venner der deler en bog." },
  { src: A.fotoKreativitet, title: "Kreativitet i gang", desc: "Familie der tegner, maler eller bygger sammen." },
  { src: A.fotoHverdag, title: "Hverdagsstemning", desc: "Bogen på natbordet, koppen kaffe ved siden af." },
];

function ImageryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="02 — Visuel identitet"
        title="Billedstil"
        lead="Billeder skal kommunikere nærvær, varme og menneskelighed. De skal virke autentiske og have kontrast og farveidentitet der bidrager til et markant visuelt udtryk med tyngde."
      />

      <section className="grid gap-6 sm:grid-cols-2">
        {motifs.map((m) => (
          <div key={m.title} className="overflow-hidden rounded-lg border bg-card">
            <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
              <img src={m.src} alt={m.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl">{m.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg">✓ Vi bruger</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Autentiske, ikke-opstillede motiver</li>
            <li>Billeder med nærvær og menneskelig varme</li>
            <li>Stærk kontrast og tydelig farveidentitet</li>
            <li>Naturligt lys og ægte stemning</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg">✕ Vi undgår</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Intetsigende eller generiske stockfotos</li>
            <li>Kunstige eller for opstillede motiver</li>
            <li>Billeder der kunne tilhøre enhver anden retailer</li>
            <li>Emotionsløse flatlay-opstillinger</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
