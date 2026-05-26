import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { brandFonts } from "@/lib/brand";
import { copy } from "@/content/copy";

const C = copy.typography;

export const Route = createFileRoute("/typography")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: TypographyPage,
});

function TypographyPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="space-y-6">
        {brandFonts.map((f) => (
          <div key={f.name} className="rounded-lg border bg-card p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-3xl">{f.name}</h2>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{f.role}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{f.weights}</p>
            <p className="mt-6 text-5xl leading-[1.05] font-bold md:text-6xl" style={{ fontFamily: f.cssFamily }}>
              {f.sample}
            </p>
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">{f.usage}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-lg border-l-4 border-primary bg-secondary/40 p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{C.principleKicker}</p>
        <p className="mt-2 text-base">
          {C.principle} <strong>{C.principleStrong}</strong>
        </p>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">{C.note}</p>
    </PageShell>
  );
}
