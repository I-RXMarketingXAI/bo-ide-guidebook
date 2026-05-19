import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/pos")({
  head: () => ({
    meta: [
      { title: "POS & Materialer — Bog & idé" },
      { name: "description", content: "Butiks- og digitale formater. Hvert format har en specifik opgave." },
    ],
  }),
  component: PosPage,
});

const butik = [
  {
    img: A.posUro, title: "Uro", size: "A1 · 594 × 841 mm",
    register: "Emotionelt og atmosfærisk",
    task: "Skaber den overordnede stemning og etablerer kampagnens univers.",
    content: 'Key visual · Kampagnebudskab · Klammer · "Altid en god idé"',
    rules: "Ingen produktpriser. Ingen produktlister.",
    quote: "\"Sommerferie, endelig tid til fordybelse.\"",
  },
  {
    img: A.posProfilskilt, title: "Profilskilt", size: "A4 · 210 × 297 mm",
    register: "Situationelt og redaktionelt",
    task: "Kuratering og anbefaling — hænger tematisk sammen med uroen.",
    content: "Key visual · Inspirationstekst · Konkrete titler med kort beskrivelse · Klammer",
    rules: "Ingen priser.",
    quote: "\"Lette bøger til kufferten. Tre vi ikke kan holde op med at anbefale.\"",
  },
  {
    img: A.posGadestander, title: "Gadestander / Plakat", size: "A2 · 420 × 594 mm",
    register: "Emotionelt og atmosfærisk",
    task: "Brandbudskab og stemningsskaber — bruges primært ved indgang og i vinduer.",
    content: 'Stort atmosfærisk billede · Ét budskab · Klammer · "Altid en god idé"',
    rules: "Ét budskab per plakat.",
    quote: "\"Din perfekte strandbog venter her.\"",
  },
  {
    img: A.posPrisskilt, title: "Prisskilt", size: "A4 · 210 × 297 mm",
    register: "Handlingsorienteret — rent taktisk",
    task: "Produkt- og prisinformation direkte koblet til konkrete produkter.",
    content: "Produktnavn · Normalpris · Tilbudspris · SPAR beløb",
    rules: "Hvid baggrund. Ingen klammer. Ingen kampagnebudskaber.",
  },
];

const digital = [
  {
    img: A.digitalBanner, title: "Bannerad (display)", size: "300×250 · 728×90 · 160×600 px",
    register: "Handlingsorienteret",
    task: "Konverterer eksisterende interesse til handling.",
    rules: "Ét budskab · Tydelig CTA · Læses på under 2 sekunder.",
    quote: "\"Find din strandbog. 3 anbefalinger fra vores boghandlere.\"",
  },
  {
    img: A.digitalSocialFeed, title: "Annonce, betalt social", size: "1080×1080 · 1080×1920 px",
    register: "Situationelt og præcist",
    task: "Skaber efterspørgsel ved at møde kunden i en konkret situation.",
    rules: "Tag udgangspunkt i en situation. Undgå generiske slogans.",
    quote: "\"Ferielæsning: let, spændende, umulig at lægge fra sig.\"",
  },
  {
    img: A.digitalSocialStory, title: "Organisk SoMe", size: "1080×1080 · 1080×1350 · 1080×1920 px",
    register: "Redaktionelt og personligt",
    task: "Bygger relation, personlighed og mental tilgængelighed over tid.",
    rules: "Tag stilling. Involver og skab dialog.",
    quote: "\"Vi har valgt tre bøger til din ferie. Du behøver ikke vælge selv.\"",
  },
  {
    img: A.digitalEmail, title: "E-mail, kundeklub", size: "600 px bred · variabel højde",
    register: "Personligt og relationelt",
    task: "Styrker relationen og skaber gentagende adfærd baseret på kundekendskab.",
    rules: "Skriv som om boghandleren selv sender mailen. Personaliser på baggrund af adfærd.",
    quote: "Emnefelt: \"Fordi du læste [titel], tror vi du vil elske denne.\"",
  },
];

type Item = typeof butik[number] & { content?: string };

function Card({ item }: { item: Item }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className="flex aspect-[4/3] items-center justify-center bg-secondary/40 p-6">
        <img src={item.img} alt={item.title} className="max-h-full w-auto" />
      </div>
      <div className="space-y-3 p-5 text-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl">{item.title}</h3>
          <span className="text-xs text-muted-foreground">{item.size}</span>
        </div>
        <Field label="Register" value={item.register} />
        <Field label="Opgave" value={item.task} />
        {item.content && <Field label="Indhold" value={item.content} />}
        <Field label="Regler" value={item.rules} />
        {item.quote && <p className="border-l-2 border-primary pl-3 italic">{item.quote}</p>}
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-sm">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <br />
      <span>{value}</span>
    </p>
  );
}

function PosPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="06 — Assets & Materialer"
        title="POS & Materialer"
        lead="Hvert kommunikationsformat har en specifik opgave. Når vi forstår hvad hvert format er bedst til, undgår vi materialer der forsøger at løse to opgaver på én gang."
      />

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {[
          { n: "Niveau 1", t: "Emotionel indgang", d: "Uro · Gadestander (A2) · Vindue" },
          { n: "Niveau 2", t: "Kuratering & anbefaling", d: "Profilskilt (A4) · Podie" },
          { n: "Niveau 3", t: "Konvertering & taktik", d: "Prisskilt · Kampagneskilt · Hyldemarkør · Hyldesvirper · Topskilt · Lysdug" },
        ].map((l) => (
          <div key={l.n} className="rounded-lg border bg-card p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary">{l.n}</p>
            <h3 className="mt-1 text-lg">{l.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
          </div>
        ))}
      </section>

      <h2 className="text-2xl">Butikskommunikation</h2>
      <section className="mt-4 grid gap-5 sm:grid-cols-2">
        {butik.map((b) => <Card key={b.title} item={b} />)}
      </section>

      <div className="mt-6 rounded-lg border-l-4 border-primary bg-secondary/40 p-5 text-sm">
        <strong>Øvrige butiksformater:</strong> Hyldemarkør (stor/lille) — genre- og nummermarkering
        på bestseller-reolen · Hyldesvirper — opmærksomhedsskabende fra siden af reolen ·
        Topskilt — markerer bestseller-reolen i loftet (mørkeblå baggrund) · Lysdug (90×65 cm) —
        til bestsellerlisten på bord eller podie · Podie — redaktionel scene for kuraterede opstillinger.
      </div>

      <h2 className="mt-14 text-2xl">Digitale formater</h2>
      <section className="mt-4 grid gap-5 sm:grid-cols-2">
        {digital.map((d) => <Card key={d.title} item={d as Item} />)}
      </section>
    </PageShell>
  );
}
