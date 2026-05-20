import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.campaign;

export const Route = createFileRoute("/campaign")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: CampaignPage,
});

function CampaignPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />
      <div className="space-y-4">
        {C.steps.map((s) => (
          <div key={s.n} className="flex gap-6 rounded-lg border bg-card p-6">
            <div
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-2xl"
              style={{ backgroundColor: "#e02e31", color: "#fff", fontFamily: "var(--font-display)" }}
            >
              {s.n}
            </div>
            <div>
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 rounded-lg border-l-4 border-primary bg-secondary/40 p-5 text-sm">
        <strong>{C.footnoteLabel}</strong> {C.footnote}
      </p>
    </PageShell>
  );
}
