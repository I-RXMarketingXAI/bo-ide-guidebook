import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { A } from "@/lib/brand-assets";
import { copy } from "@/content/copy";

const C = copy.logo;

export const Route = createFileRoute("/logo")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: LogoPage,
});

function LogoCard({ v }: { v: typeof C.variants[number] }) {
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
            <Download className="mr-2 h-4 w-4" /> {C.downloadLabel}
          </a>
        </Button>
      </div>
    </div>
  );
}

function LogoPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="grid gap-6 sm:grid-cols-2">
        {C.variants.map((v) => <LogoCard key={v.name} v={v} />)}
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">{C.respect.heading}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{C.respect.lead}</p>
        <div className="mt-6 overflow-hidden rounded-lg border bg-card p-8">
          <img src={A.logoRespektafstand} alt={C.respect.heading} className="mx-auto max-h-72 w-auto" />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-4">
            <p className="text-sm"><strong>{C.respect.minSizeLabel}</strong> {C.respect.minSize}</p>
          </div>
          <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-4">
            <p className="text-sm"><strong>{C.respect.noRecolorLabel}</strong> {C.respect.noRecolor}</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">{C.dosHeading}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {C.dos.map((d) => (
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
        <h2 className="text-2xl">{C.facade.heading}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{C.facade.lead}</p>
        <div className="mt-6 overflow-hidden rounded-lg border bg-card">
          <div className="flex h-64 items-center justify-center" style={{ backgroundColor: "#e02e31" }}>
            <img src={A.logoFacade} alt="Bog & idé facadelogo" className="h-40 w-auto" />
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <div>
              <p className="text-sm"><strong>{C.facade.useLabel}</strong> {C.facade.use}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground"><strong>{C.facade.dontLabel}</strong> {C.facade.dont}</p>
            </div>
          </div>
          <div className="border-t p-5">
            <Button asChild size="sm" variant="outline">
              <a href={A.logoFacade} download="boi-logo-facade.svg">
                <Download className="mr-2 h-4 w-4" /> {C.facade.download}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
