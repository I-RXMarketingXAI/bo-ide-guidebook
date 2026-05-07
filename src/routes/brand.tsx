import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Placeholder } from "@/components/page";

export const Route = createFileRoute("/brand")({
  head: () => ({
    meta: [
      { title: "Brand background — Bo & Ide" },
      { name: "description", content: "Bo & Ide brand story, mission, values and tone of voice." },
    ],
  }),
  component: BrandPage,
});

function BrandPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="01 — Background"
        title="The Bo & Ide story"
        lead="Who we are, what we believe in, and how we speak. This section anchors every other decision in the manual."
      />

      <section className="space-y-10">
        <div>
          <h2 className="text-2xl">Mission</h2>
          <Placeholder>
            Add the official Bo &amp; Ide mission statement here. Send the final wording in chat
            and we’ll drop it in.
          </Placeholder>
        </div>

        <div>
          <h2 className="text-2xl">Values</h2>
          <Placeholder>
            List 3–5 core brand values with a short paragraph each.
          </Placeholder>
        </div>

        <div>
          <h2 className="text-2xl">Tone of voice</h2>
          <Placeholder>
            Describe how Bo &amp; Ide sounds — adjectives, do’s &amp; don’ts, and example sentences.
          </Placeholder>
        </div>
      </section>
    </PageShell>
  );
}
