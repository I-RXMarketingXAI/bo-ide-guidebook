import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.elements;

export const Route = createFileRoute("/elements")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: ElementsPage,
});

function ElementsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {C.links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/50"
          >
            <h3 className="text-xl">{l.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
