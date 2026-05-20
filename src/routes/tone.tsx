import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.tone;

export const Route = createFileRoute("/tone")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: TonePage,
});

function TonePage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="grid gap-4 sm:grid-cols-2">
        {C.pillars.map((p) => (
          <div key={p.title} className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-lg border bg-card p-6">
        <p className="text-base">{C.style}</p>
        <p className="mt-4 rounded border-l-4 border-primary bg-secondary/40 p-3 text-sm">
          <strong>{C.tipLabel}</strong> {C.tip}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">{C.examplesHeading}</h2>
        <div className="mt-4 overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">{C.examplesYesLabel}</th>
                <th className="px-4 py-3 font-medium">{C.examplesNoLabel}</th>
              </tr>
            </thead>
            <tbody>
              {C.examples.map(([yes, no], i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3 align-top">{yes}</td>
                  <td className="px-4 py-3 align-top text-muted-foreground">{no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">{C.channelsHeading}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {C.channels.map((c) => (
            <div key={c.name} className="rounded-lg border bg-card p-6">
              <h3 className="text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-4 border-l-2 border-primary pl-3 text-sm italic">{c.example}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
