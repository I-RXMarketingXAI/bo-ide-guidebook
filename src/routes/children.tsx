import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.children;

export const Route = createFileRoute("/children")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: ChildrenPage,
});

function ChildrenPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="grid gap-5 md:grid-cols-3">
        {C.tiles.map((t) => (
          <div key={t.caption} className="overflow-hidden rounded-lg border bg-card">
            <div className="flex aspect-[4/3] items-center justify-center bg-secondary/40 p-4">
              <img src={t.src} alt={t.alt} className="max-h-full w-auto" />
            </div>
            <p className="p-4 text-sm">{t.caption}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl">{C.illustrations.heading}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{C.illustrations.text}</p>
        </div>
        <div>
          <h2 className="text-2xl">{C.font.heading}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{C.font.text}</p>
          <p className="mt-4 text-5xl" style={{ fontFamily: "var(--font-handwriting)" }}>
            {C.font.sample}
          </p>
        </div>
        <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-5 text-sm">
          <strong>{C.callout.label}</strong> {C.callout.text}
        </div>
      </section>
    </PageShell>
  );
}
