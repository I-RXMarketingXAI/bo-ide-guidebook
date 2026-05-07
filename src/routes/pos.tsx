import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Placeholder } from "@/components/page";

export const Route = createFileRoute("/pos")({
  head: () => ({
    meta: [
      { title: "Point of sale — Bo & Ide" },
      { name: "description", content: "Bo & Ide point-of-sale templates and in-store materials." },
    ],
  }),
  component: PosPage,
});

function PosPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="07 — Point of sale"
        title="Point of sale material"
        lead="Templates, signage and in-store collateral."
      />
      <Placeholder>Upload POS templates (signage, price tags, window displays, etc.) — we’ll list them here with downloads.</Placeholder>
    </PageShell>
  );
}
