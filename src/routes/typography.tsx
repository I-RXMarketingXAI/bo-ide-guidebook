import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Placeholder } from "@/components/page";
import { brandFonts } from "@/lib/brand";

export const Route = createFileRoute("/typography")({
  head: () => ({
    meta: [
      { title: "Typography — Bo & Ide" },
      { name: "description", content: "Bo & Ide typefaces, weights and hierarchy." },
    ],
  }),
  component: TypographyPage,
});

function TypographyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="04 — Typography"
        title="Typography"
        lead="The Bo & Ide type system. Confirm the official typefaces and we’ll swap the previews and add downloadable font files."
      />

      <section className="space-y-6">
        {brandFonts.map((f) => (
          <div key={f.name} className="rounded-lg border bg-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl">{f.name}</h2>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{f.role}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{f.weights}</p>
            <p
              className="mt-6 text-4xl leading-tight md:text-5xl"
              style={{ fontFamily: f.name === "Inter" ? "Inter, sans-serif" : "var(--font-display)" }}
            >
              {f.sample}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">Hierarchy</h2>
        <Placeholder>
          Document heading sizes, body sizes, line-heights and use cases here.
        </Placeholder>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">Font files</h2>
        <Placeholder>
          Upload .woff2 / .ttf / .otf files and we’ll add download buttons.
        </Placeholder>
      </section>
    </PageShell>
  );
}
