import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.concepts;

export const Route = createFileRoute("/concepts")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: ConceptsPage,
});

function ConceptsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />
      <div className="space-y-5">
        {C.items.map((c) => (
          <div key={c.title} className="rounded-lg border bg-card p-6">
            <div className="flex flex-wrap items-start gap-6">
              <img src={c.icon} alt="" className="h-20 w-20 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
                {c.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-0.5 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
