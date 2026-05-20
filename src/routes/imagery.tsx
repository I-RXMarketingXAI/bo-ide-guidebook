import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.imagery;

export const Route = createFileRoute("/imagery")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: ImageryPage,
});

function ImageryPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="grid gap-6 sm:grid-cols-2">
        {C.motifs.map((m) => (
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
          <h3 className="text-lg">{C.doTitle}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {C.dos.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg">{C.dontTitle}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {C.donts.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
