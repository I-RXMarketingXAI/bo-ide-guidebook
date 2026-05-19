import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/children")({
  head: () => ({
    meta: [
      { title: "Børneunivers — Bog & idé" },
      { name: "description", content: "Børneuniverset har sit eget visuelle sprog, font og tilpassede palette." },
    ],
  }),
  component: ChildrenPage,
});

function ChildrenPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="07 — Børneunivers"
        title="Børneunivers"
        lead="Børneuniverset har sit eget visuelle sprog med dedikerede illustrationer, en særlig skrifttype og et tilpasset farvepalette. Det giver Bog & idé et genkendeligt og legende udtryk i børnevendt kommunikation."
      />

      <section className="grid gap-5 md:grid-cols-3">
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="flex aspect-[4/3] items-center justify-center bg-secondary/40 p-4">
            <img src={A.bornIllu} alt="Børneillustration" className="max-h-full w-auto" />
          </div>
          <p className="p-4 text-sm">Illustrationer — sæsonbestemte</p>
        </div>
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="flex aspect-[4/3] items-center justify-center bg-secondary/40 p-4">
            <img src={A.bornFont} alt="Verveine font" className="max-h-full w-auto" />
          </div>
          <p className="p-4 text-sm">Verveine — Børnefont</p>
        </div>
        <div className="overflow-hidden rounded-lg border bg-card">
          <div className="flex aspect-[4/3] items-center justify-center bg-secondary/40 p-4">
            <img src={A.bornBaggrund} alt="Baggrundsillustration" className="max-h-full w-auto" />
          </div>
          <p className="p-4 text-sm">Baggrundsillustration</p>
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl">Illustrationer</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Vores illustrationer er vores egne og giver særkende, skaber liv og sætter fokus på en
            anledning eller et produkt. De bruges med tilrettede farver og som baggrundsillustration.
            Det er vigtigt, at der ikke er for mange produkter på siden, og at baggrunden ikke
            stjæler opmærksomheden.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">Verveine — Børnefont</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Verveine bruges på grafiske materialer med børneillustrationer. Den bruges til at
            fremhæve budskaber der knytter sig til børnedesignet.
          </p>
          <p className="mt-4 text-5xl" style={{ fontFamily: "var(--font-handwriting)" }}>
            Kom og leg med!
          </p>
        </div>
        <div className="rounded-lg border-l-4 border-primary bg-secondary/40 p-5 text-sm">
          <strong>Bruges kun som overskrifter:</strong> Verveine bruges udelukkende til
          opmærksomhedsskabende tekster og overskrifter i børnematerialer — aldrig til brødtekst.
        </div>
      </section>
    </PageShell>
  );
}
