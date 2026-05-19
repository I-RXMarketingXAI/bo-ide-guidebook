import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bog & idé — Design Guide 2026" },
      { name: "description", content: "Vores visuelle og verbale identitet — samlet ét sted." },
    ],
  }),
  component: Index,
});

const sections = [
  { to: "/brand", num: "00", title: "Brand", desc: "Vores løfte, purpose, position og sign-off." },
  { to: "/tone", num: "01", title: "Tone of Voice", desc: "Hvordan vi taler — passioneret, vidende, inspirerende." },
  { to: "/logo", num: "02", title: "Logo", desc: "Varianter, respektafstand, do & don't, downloads." },
  { to: "/klammer", num: "02", title: "Klammer", desc: "Vores vigtigste grafiske brand asset." },
  { to: "/colors", num: "02", title: "Farver", desc: "5 farver med HEX & RGB — klik for at kopiere." },
  { to: "/typography", num: "02", title: "Typografi", desc: "Velo Serif Display og Muller." },
  { to: "/imagery", num: "02", title: "Billedstil", desc: "Nærvær, varme, autenticitet." },
  { to: "/kundeklub", num: "02", title: "Kundeklub", desc: "Eget visuelt system og tre fordele." },
  { to: "/services", num: "03", title: "Services", desc: "Ikoner, korte og lange tekstversioner." },
  { to: "/pricing", num: "04", title: "Priskommunikation", desc: "Taktisk system — hvid baggrund, sort tekst." },
  { to: "/concepts", num: "05", title: "Koncepter", desc: "Prismatch, Marthaprisen, Årets Spil m.fl." },
  { to: "/pos", num: "06", title: "POS & Materialer", desc: "Butiks- og digitale formater." },
  { to: "/children", num: "07", title: "Børneunivers", desc: "Illustrationer, Verveine, baggrund." },
  { to: "/campaign", num: "08", title: "Kampagneskabelon", desc: "Fem elementer i hver kampagne." },
] as const;

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Design Guide · 2026</p>
        <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
          Vores visuelle og verbale identitet
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Alt hvad du skal bruge for at producere, godkende eller briefe kommunikation
          fra Bog &amp; idé. Farver, typografi, logo, tone of voice og materialer
          — samlet ét sted.
        </p>
        <p
          className="mt-10 text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          [ Altid en god idé ]
        </p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.to + s.title}
            to={s.to}
            className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/50"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.num}</p>
            <h2 className="mt-2 text-2xl">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-foreground">
              Åbn <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
