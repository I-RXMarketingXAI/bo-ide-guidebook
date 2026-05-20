import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.pos;

export const Route = createFileRoute("/pos")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: PosPage,
});

type Item = {
  img: string;
  title: string;
  size: string;
  register: string;
  task: string;
  content?: string;
  rules: string;
  quote?: string;
};

function Card({ item }: { item: Item }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className="flex aspect-[4/3] items-center justify-center bg-secondary/40 p-6">
        <img src={item.img} alt={item.title} className="max-h-full w-auto" />
      </div>
      <div className="space-y-3 p-5 text-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl">{item.title}</h3>
          <span className="text-xs text-muted-foreground">{item.size}</span>
        </div>
        <Field label={C.fieldLabels.register} value={item.register} />
        <Field label={C.fieldLabels.task} value={item.task} />
        {item.content && <Field label={C.fieldLabels.content} value={item.content} />}
        <Field label={C.fieldLabels.rules} value={item.rules} />
        {item.quote && <p className="border-l-2 border-primary pl-3 italic">{item.quote}</p>}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-sm">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <br />
      <span>{value}</span>
    </p>
  );
}

function PosPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {C.levels.map((l) => (
          <div key={l.n} className="rounded-lg border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{l.n}</p>
            <h3 className="mt-1 text-lg">{l.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
          </div>
        ))}
      </section>

      <h2 className="text-2xl">{C.butikHeading}</h2>
      <section className="mt-4 grid gap-5 sm:grid-cols-2">
        {C.butik.map((b) => <Card key={b.title} item={b as Item} />)}
      </section>

      <div className="mt-6 rounded-lg border-l-4 border-primary bg-secondary/40 p-5 text-sm">
        <strong>{C.otherStoreLabel}</strong> {C.otherStore}
      </div>

      <h2 className="mt-14 text-2xl">{C.digitalHeading}</h2>
      <section className="mt-4 grid gap-5 sm:grid-cols-2">
        {C.digital.map((d) => <Card key={d.title} item={d as Item} />)}
      </section>
    </PageShell>
  );
}
