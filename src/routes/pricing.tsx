import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { copy } from "@/content/copy";

const C = copy.pricing;
const E = C.examples;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: PricingPage,
});

function PriceTag({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "deal" | "frit" }) {
  const bg = variant === "deal" ? "#f7c3c7" : variant === "frit" ? "#b4dcf6" : "#ffffff";
  return (
    <div className="overflow-hidden rounded border bg-white p-5 text-center" style={{ background: bg, color: "#000" }}>
      {children}
    </div>
  );
}

function PricingPage() {
  return (
    <PageShell>
      <PageHeader eyebrow={C.header.eyebrow} title={C.header.title} lead={C.header.lead} />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <PriceTag>
          <p className="text-xs uppercase tracking-wider text-neutral-500">{E.standardLabel}</p>
          <p className="mt-4 text-sm">{E.author}</p>
          <p className="text-lg font-semibold">{E.bookTitle}</p>
          <p className="mt-6 text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            {E.basePriceMain}<sup className="text-2xl">{E.basePriceCents}</sup>
          </p>
        </PriceTag>

        <PriceTag variant="deal">
          <p className="text-xs uppercase tracking-wider text-neutral-700">{E.offerLabel}</p>
          <p className="mt-4 text-sm">{E.author}</p>
          <p className="text-lg font-semibold">{E.bookTitle}</p>
          <p className="mt-4 text-sm text-neutral-500 line-through">{E.offerOldPrice}</p>
          <p className="text-5xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#e02e31" }}>
            {E.offerPriceMain}<sup className="text-2xl">{E.offerPriceCents}</sup>
          </p>
          <p className="mt-2 text-sm font-bold">{E.offerSave}</p>
        </PriceTag>

        <PriceTag variant="frit">
          <p className="text-xs uppercase tracking-wider text-neutral-700">{E.freeChoiceLabel}</p>
          <p className="mt-4 text-lg font-bold">{E.freeChoiceBig}</p>
          <p className="mt-2 text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            {E.freePriceMain}<sup className="text-2xl">{E.freePriceCents}</sup>
          </p>
          <p className="mt-2 text-sm">{E.freeExtra}</p>
          <p className="mt-1 text-sm font-bold">{E.freeSave}</p>
        </PriceTag>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {C.principles.map(([t, d]) => (
          <div key={t} className="rounded-lg border bg-card p-5">
            <h3 className="text-lg">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
