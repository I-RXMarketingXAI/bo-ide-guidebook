import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";

export const Route = createFileRoute("/elements")({
  head: () => ({
    meta: [
      { title: "Brand elementer — Bog & idé" },
      { name: "description", content: "Oversigt over Bog & idés grafiske brand-elementer." },
    ],
  }),
  component: ElementsPage,
});

const links = [
  { to: "/klammer", title: "Klammerne", desc: "Vores vigtigste grafiske brand asset." },
  { to: "/colors", title: "Farver", desc: "Brandfarve og fire støttefarver." },
  { to: "/typography", title: "Typografi", desc: "Velo Serif Display og Muller." },
  { to: "/imagery", title: "Billedstil", desc: "Nærvær, varme, autenticitet." },
  { to: "/kundeklub", title: "Kundeklub-system", desc: "Rød ramme, beige boks, hvide klammer." },
  { to: "/children", title: "Børneunivers", desc: "Illustrationer, Verveine, baggrund." },
] as const;

function ElementsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Oversigt"
        title="Brand elementer"
        lead="Genveje til de grafiske byggesten der udgør Bog & idés visuelle identitet."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
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
