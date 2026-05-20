import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.brand;

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: BrandPage,
});

function BrandPage() {
  const [introBefore, introAfter] = C.promiseIntro.split(C.promiseStrongPhrase);
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="space-y-12">
        <div className="rounded-lg border bg-card p-8">
          <p className="text-lg leading-relaxed">
            {introBefore}
            <strong>{C.promiseStrongPhrase}</strong>
            {introAfter}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {C.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border-2 border-primary bg-secondary/40 p-8 text-center">
          <p className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            {C.signOff}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{C.signOffNote}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[C.purpose, C.position].map((b) => (
            <div key={b.label} className="rounded-lg border bg-card p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{b.label}</p>
              <h2 className="mt-2 text-2xl">{b.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {C.signOffLevels.map((s) => (
            <div key={s.title}>
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{C.filter.kicker}</p>
          <p className="mt-2 text-base">{C.filter.lead}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {C.filter.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
