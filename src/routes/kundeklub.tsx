import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/kundeklub")({
  head: () => ({
    meta: [
      { title: "Kundeklub — Bog & idé" },
      { name: "description", content: "Kundeklubben er gratis og har sit eget visuelle system." },
    ],
  }),
  component: KundeklubPage,
});

const fordele = [
  { icon: A.iconFriFragt, title: "Fri Fragt", desc: "Altid fri fragt til nærmeste pakkeshop eller Bog & idés butikker ved handel i webshoppen." },
  { icon: A.iconGaranti, title: "90 Dages Tilfredshedsgaranti", desc: "På alle børne- og ungdomsbøger. Rammer bogen ikke plet, kan du bytte den inden 90 dage." },
  { icon: A.iconReturpant, title: "Giv din Bestseller Videre", desc: "Aflever din bestseller inden 3 måneder og få et tilgodebevis på 25% af bogens pris." },
];

function KundeklubPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="02 — Visuel identitet"
        title="Kundeklub"
        lead="Kundeklubben er gratis at være medlem af og giver adgang til eksklusive fordele. Det visuelle system er defineret og adskiller sig bevidst fra den generelle brand-kommunikation."
      />

      <section className="rounded-lg border-4 p-2" style={{ borderColor: "#e02e31" }}>
        <div className="rounded p-10 text-center" style={{ backgroundColor: "#feede0" }}>
          <p className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)", color: "#1a1a1a" }}>
            VELKOMMEN I <span style={{ color: "#e02e31" }}>KLUBBEN</span>
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#3a3a3a" }}>
            Det koster ikke noget, og du får masser af medlemsfordele.
            Se mere og meld dig ind på bog-ide.dk
          </p>
          <div className="mt-6 flex justify-center gap-6">
            {fordele.map((f) => (
              <img key={f.title} src={f.icon} alt={f.title} className="h-14 w-14" />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          { t: "Rød ramme — beige boks", d: "Rød ramme (#e02e31) om en beige boks (#feede0) med hvide klammer indeni. Kombinationen bruges udelukkende til Kundeklub-materiale." },
          { t: '"KLUBBEN" altid i rød', d: 'Ordet KLUBBEN skrives altid med rød farve i overskriften. "VELKOMMEN I" er i sort/neutral.' },
          { t: "Hvide klammer", d: "Klammerne inde i Kundeklub-designet er altid hvide — placeret på beige baggrund uden \"Altid en god idé\" sign-off’en." },
          { t: "Kun til klubben", d: "Ikonerne for klubfordele bruges udelukkende i Kundeklub-kommunikation. Farverne tilpasses farvepaletten." },
        ].map((r) => (
          <div key={r.t} className="rounded-lg border bg-card p-5">
            <h3 className="text-lg">{r.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">De tre eksklusive klubfordele</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {fordele.map((f) => (
            <div key={f.title} className="rounded-lg border bg-card p-6 text-center">
              <img src={f.icon} alt="" className="mx-auto h-16 w-16" />
              <h3 className="mt-4 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
