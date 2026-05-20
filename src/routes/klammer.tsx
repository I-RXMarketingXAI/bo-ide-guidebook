import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { A } from "@/lib/brand-assets";
import { copy } from "@/content/copy";

const C = copy.klammer;

export const Route = createFileRoute("/klammer")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: KlammerPage,
});

function KlammerPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="flex h-64 items-center justify-center bg-white p-8">
            <img src={A.klammerDemo} alt={C.versions.redTitle} className="max-h-full w-auto" />
          </div>
          <div className="p-5">
            <h3 className="text-xl">{C.versions.redTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{C.versions.redDesc}</p>
            <Button asChild size="sm" variant="outline" className="mt-4">
              <a href={A.klammerDemo} download="klammer-rod.svg">
                <Download className="mr-2 h-4 w-4" /> {C.downloadLabel}
              </a>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="flex h-64 items-center justify-center p-8" style={{ backgroundColor: "#e02e31" }}>
            <img src={A.klammerHvid} alt={C.versions.whiteTitle} className="max-h-full w-auto" />
          </div>
          <div className="p-5">
            <h3 className="text-xl">{C.versions.whiteTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{C.versions.whiteDesc}</p>
            <Button asChild size="sm" variant="outline" className="mt-4">
              <a href={A.klammerHvid} download="klammer-hvid.svg">
                <Download className="mr-2 h-4 w-4" /> {C.downloadLabel}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg">{C.useTitle}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {C.use.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg">{C.dontTitle}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {C.dont.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {C.metrics.map((m) => (
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
