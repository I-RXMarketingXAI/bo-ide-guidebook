import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.services;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />
      <div className="grid gap-5 md:grid-cols-2">
        {C.items.map((s) => (
          <div key={s.title} className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4">
              <img src={s.icon} alt="" className="h-14 w-14 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-xl">{s.title}</h3>
                  {s.club && (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                      {C.clubBadge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.long}</p>
                <p className="mt-3 border-l-2 border-primary pl-3 text-sm italic">{s.short}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
