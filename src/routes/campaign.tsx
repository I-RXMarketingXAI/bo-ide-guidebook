import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";

export const Route = createFileRoute("/campaign")({
  head: () => ({
    meta: [
      { title: "Kampagneskabelon — Bog & idé" },
      { name: "description", content: "Fem elementer der sikrer at alle assets arbejder i samme retning." },
    ],
  }),
  component: CampaignPage,
});

const steps = [
  { n: 1, title: "Entry point", text: 'Hvilken situation aktiverer kampagnen? Ét entry point per kampagne. Eksempler: "Jeg skal finde en gave" · "Jeg vil i gang med at læse" · "Jeg vil koble af i ferien" · "Mit barn skal starte i skole".' },
  { n: 2, title: "Budskab", text: 'Hvad er det ene budskab kampagnen kommunikerer? Det skal kunne siges i én sætning. Eksempel: "Vi hjælper dig med at vælge den perfekte julegave — udvalgt af vores boghandlere."' },
  { n: 3, title: "Register", text: "Emotionelt, situationelt eller handlingsorienteret? Afgøres af de kanaler kampagnen lever i. Upper funnel = emotionelt. Mid funnel = situationelt. Lower funnel = handlingsorienteret." },
  { n: 4, title: "Assets", text: "Hvilke formater produceres? Hvert format beskrives med budskab og billedretning. Husk: uro + profilskilt hænger altid sammen. Ingen uro = ingen emotionel indgang." },
  { n: 5, title: "Genbrug", text: "Hvilke elementer kan genbruges på tværs af formater og i fremtidige kampagner? Key visuals, tekstelementer og kuraterede produktlister bør designes med genbrug i mente." },
];

function CampaignPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="08 — Kampagneskabelon"
        title="Fem elementer pr. kampagne"
        lead="En veldefineret kampagnestruktur sikrer at alle assets arbejder i den samme retning. Enhver kampagne tager udgangspunkt i disse fem elementer."
      />
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-6 rounded-lg border bg-card p-6">
            <div
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-2xl"
              style={{ backgroundColor: "#e02e31", color: "#fff", fontFamily: "var(--font-display)" }}
            >
              {s.n}
            </div>
            <div>
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 rounded-lg border-l-4 border-primary bg-secondary/40 p-5 text-sm">
        <strong>Årshjul og sæsonspecifikke paletter:</strong> Kampagneperioder og fuldt
        briefingformat dokumenteres løbende og tilføjes her. Kontakt Marketing for seneste version.
      </p>
    </PageShell>
  );
}
