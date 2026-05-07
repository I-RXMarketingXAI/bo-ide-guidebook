import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Placeholder } from "@/components/page";

export const Route = createFileRoute("/imagery")({
  head: () => ({
    meta: [
      { title: "Imagery — Bo & Ide" },
      { name: "description", content: "Bo & Ide photography style and sample gallery." },
    ],
  }),
  component: ImageryPage,
});

function ImageryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="05 — Imagery"
        title="Photography &amp; imagery"
        lead="Mood, composition and treatment guidelines for all visual content."
      />
      <section>
        <h2 className="text-2xl">Style</h2>
        <Placeholder>Describe lighting, composition, color treatment and subject matter.</Placeholder>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl">Sample gallery</h2>
        <Placeholder>Upload reference imagery and we’ll lay it out as a gallery here.</Placeholder>
      </section>
    </PageShell>
  );
}
