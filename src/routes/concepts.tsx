import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/concepts")({
  head: () => ({
    meta: [
      { title: "Koncepter — Bog & idé" },
      { name: "description", content: "Prismatch, Månedens Læseoplevelse, Bestsellerlisten, Årets Spil og Marthaprisen." },
    ],
  }),
  component: ConceptsPage,
});

const concepts = [
  {
    icon: A.conceptPrismatch, title: "Prismatch",
    text: "Vi garanterer at du ikke får vores produkter billigere andre steder. Gælder på identiske produkter inden for Danmarks grænser og skal dokumenteres inden for 14 dage efter købet. Undtaget er køtilbud, ophørsudsalg og timetilbud.",
    tags: ["Ikon", "Vilkår og betingelser"],
  },
  {
    icon: A.conceptManed, title: "Månedens Læseoplevelse",
    text: "Hver måned kårer Bog & idés medarbejdere Månedens Læseoplevelse for voksne, unge og børn — den bog de vil anbefale, hvis du kun skal læse én bog den måned. Ikke nødvendigvis en nyhed, men altid en bog der giver en særlig oplevelse.",
    tags: ["Voksne", "Unge", "Børn"],
  },
  {
    icon: A.conceptBestseller, title: "Bestsellerlisten",
    text: "Bestsellerlisterne fra Bog & idé bygger på salg af bøger i alle butikker i hele Danmark og opdateres hver mandag. En titel er en bestseller, når den fremgår af listen i en af de seks genrer.",
    tags: ["Skønlitteratur", "Krimi", "Biografi", "Børn", "Ungdom", "Faglitteratur"],
  },
  {
    icon: A.conceptSpil, title: "Årets Spil",
    text: "Kåring af de bedste spil på tværs af fire kategorier. Alle indsendte spil vurderes af et forbrugerpanel der passer til kategorien og gives 1–6 point. Vinderen må bruge Årets Spil-logoet i sin markedsføring.",
    tags: ["Hele familien", "Børn", "Voksne", "Årets nyhed"],
  },
  {
    icon: A.conceptMartha, title: "Marthaprisen",
    text: "Hos Bog & idé elsker vi bøger — og alle der læser dem. Marthaprisen er læsernes egen forfatterpris, stiftet af Bog & idé. Det er den eneste danske litteraturpris, hvor det udelukkende er læsere der bestemmer, hvem der skal vinde. 8 forfattere nomineres hvert år — 4 af medarbejderne og 4 af læserne. Nomineringer løber over forår og sommer, afstemning sker til og med september. Vinderen offentliggøres i oktober. Prisen er opkaldt efter den første prismodtager, Martha Christensen, og uddeles siden 1989.",
    tags: [],
  },
];

function ConceptsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="05 — Koncepter"
        title="Koncepter"
        lead="Bag Bog & idés kommunikation ligger en række faste koncepter med egne regler, ikoner og visuelle systemer."
      />
      <div className="space-y-5">
        {concepts.map((c) => (
          <div key={c.title} className="rounded-lg border bg-card p-6">
            <div className="flex flex-wrap items-start gap-6">
              <img src={c.icon} alt="" className="h-20 w-20 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
                {c.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-0.5 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
