import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Placeholder } from "@/components/page";

export const Route = createFileRoute("/elements")({
  head: () => ({
    meta: [
      { title: "Brand elements — Bo & Ide" },
      { name: "description", content: "Patterns, icons and graphic devices." },
    ],
  }),
  component: ElementsPage,
});

function ElementsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="06 — Elements"
        title="Brand elements"
        lead="Supporting graphic devices — patterns, icons, frames and motifs."
      />
      <Placeholder>Add brand patterns, iconography and graphic devices here as they’re finalised.</Placeholder>
    </PageShell>
  );
}
