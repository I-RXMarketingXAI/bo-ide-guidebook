import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";

export const Route = createFileRoute("/tone")({
  head: () => ({
    meta: [
      { title: "Tone of Voice — Bog & idé" },
      { name: "description", content: "Bog & idé taler som en passioneret og vidende ven — ikke som en institution." },
    ],
  }),
  component: TonePage,
});

const pillars = [
  { title: "Passionerede", text: "Vi elsker vores produkter og brænder for at skabe læselyst og fremme kreativiteten. Vores begejstring er ægte og smittende, når vi har noget på hjerte." },
  { title: "Vidende", text: "Vi ved meget, fordi vi er nysgerrige og suger til os. Vi lytter og deler viden uden at kloge os — aldrig belærende eller bedrevidende." },
  { title: "Inspirerende", text: "Vi lytter og giver nye perspektiver frem for at fortælle folk hvad de skal mene. Vi finder den vinkel der fanger — frem for den der blot beskriver." },
  { title: "Godt selskab", text: "Vi byder alle varmt velkommen og går op i, at alle føler sig set. Vi underholder, motiverer og giver nye perspektiver til at kaste sig ud i nye bøger og projekter." },
];

const examples: [string, string][] = [
  ["Spil mere. Har du glemt, hvor sjovt det er?", "Vidste du at du træner din hjerne, når du spiller brætspil med dine børn?"],
  ["Send mand og børn på forlænget weekend: Mr. Grey is back!", "Sidste bind i Fifty Shades-trilogien."],
  ["Mere til fantasien. En stribe tusser, men også en duftende blomstereng.", "Produktbeskrivelse uden vinkel."],
  ["Til alle jer, der siger, I ikke læser.", "Bøger til ikke-læsere."],
  ["Personalets favorit denne uge. Ingen alternativ.", "Ugens udvalgte titler."],
  ["Kan du lide sudoku, vil du elske kakuro.", "Relaterede produkter."],
  ["Spar 20% på psykopater og seriemordere.", "Spar 20% på krimier."],
  ["Kom i godt selskab med snigmordere, voldsforbrydere og fallerede efterforskere.", "Generisk krimikampagne."],
];

const channels = [
  { name: "POS i butik", desc: "Kort, kontant og stemningsskabende. Kunden er fysisk til stede og skal fanges på et sekund. Ingen lange forklaringer.", example: "\"Regn udenfor. Kaffe indenfor. En god bog.\" — \"Spørg os, vi har en mening.\"" },
  { name: "Organisk SoMe", desc: "Plads til personlighed og redaktionel stemme. Tag stilling, stil spørgsmål og involver. Undgå produktgrid uden kontekst.", example: "\"Vi har valgt tre bøger til din ferie. Du behøver ikke vælge selv.\" — \"Trump hader den. Gør du?\"" },
  { name: "Annoncer (betalt)", desc: "Mere direkte og handlingsorienteret end organisk, men stadig forankret i en situation eller et behov.", example: "\"Ferielæsning: let, spændende, umulig at lægge fra sig.\" — \"Tre sikre valg under 200 kr.\"" },
  { name: "E-mail & nyhedsbrev", desc: "Den mest personlige kanal. Varm, direkte og uden kampagnesprog. Skriv som om boghandleren selv sender mailen.", example: "Emnefelt: \"Fordi du læste [titel], tror vi du vil elske denne.\" — Preheader: \"Vi har gjort valget nemt.\"" },
];

function TonePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="01 — Tone of Voice"
        title="Som en passioneret og vidende ven"
        lead="Bog & idé taler ikke som en institution. Vi er talkshow-værten der finder de mest interessante vinkler og gør emner spændende, man ikke troede man interesserede sig for."
      />

      <section className="grid gap-4 sm:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-lg border bg-card p-6">
        <p className="text-base">
          Vi er ligefremme og hverdagsagtige. Vi siger tingene ligeud og skriver som vi taler med
          gode venner. Vi er ikke i undervisningsbranchen — vi er i underholdningsbranchen.
          Vi bruger gerne bydeform fordi vi så gerne vil skabe handling.
        </p>
        <p className="mt-4 rounded border-l-4 border-primary bg-secondary/40 p-3 text-sm">
          <strong>Tip:</strong> Tænk: "Hvordan ville B.T. sælge denne historie?" Det er ikke en
          opfordring til tabloidjournalistik, men til at finde den vinkel der fanger.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">Vi siger / Vi siger ikke</h2>
        <div className="mt-4 overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">✓ Vi siger</th>
                <th className="px-4 py-3 font-medium">✕ Vi siger ikke</th>
              </tr>
            </thead>
            <tbody>
              {examples.map(([yes, no], i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3 align-top">{yes}</td>
                  <td className="px-4 py-3 align-top text-muted-foreground">{no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">Tone per kanal</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {channels.map((c) => (
            <div key={c.name} className="rounded-lg border bg-card p-6">
              <h3 className="text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-4 border-l-2 border-primary pl-3 text-sm italic">{c.example}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
