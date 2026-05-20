import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.kundeklub;

export const Route = createFileRoute("/kundeklub")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: KundeklubPage,
});

function KundeklubPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="rounded-lg border-4 p-2" style={{ borderColor: "#e02e31" }}>
        <div className="rounded p-10 text-center" style={{ backgroundColor: "#feede0" }}>
          <p className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
            {C.hero.welcomePrefix} <span style={{ color: "#e02e31" }}>{C.hero.welcomeAccent}</span>
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#3a3a3a" }}>
            {C.hero.tagline}
          </p>
          <div className="mt-6 flex justify-center gap-6">
            {C.fordele.map((f) => (
              <img key={f.title} src={f.icon} alt={f.title} className="h-14 w-14" />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {C.rules.map((r) => (
          <div key={r.t} className="rounded-lg border bg-card p-5">
            <h3 className="text-lg">{r.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">{C.benefitsHeading}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {C.fordele.map((f) => (
            <div key={f.title} className="rounded-lg border bg-card p-6 text-center">
              <img src={f.icon} alt="" className="mx-auto h-16 w-16" />
              <h3 className="mt-4 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
