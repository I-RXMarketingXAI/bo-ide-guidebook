import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { A } from "@/lib/brand-assets";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bog & idé" },
      { name: "description", content: "Bog & idés services med ikoner og tekstversioner." },
    ],
  }),
  component: ServicesPage,
});

type Service = { icon: string; title: string; long: string; short: string; club?: boolean };

const services: Service[] = [
  {
    icon: A.iconGemKvit, title: "Gem Kvittering", club: true,
    long: "Er du medlem af vores kundeklub, har du altid styr på dine kvitteringer. Vi gemmer dem automatisk for dig, både når du handler online og i vores butikker.",
    short: "Er du medlem af vores kundeklub, gemmer vi automatisk dine kvitteringer, når du handler hos os.",
  },
  {
    icon: A.iconReturpant, title: "Giv din Bestseller Videre", club: true,
    long: "Lad en anden få glæde af din bestseller, når du har læst den. Er du medlem af vores kundeklub og leverer den tilbage inden 3 måneder, får du et tilgodebevis på 25% af bogens pris.",
    short: "Aflever din bestseller inden 3 mdr. og få 25% på et tilgodebevis.",
  },
  {
    icon: A.iconKlikHent, title: "Klik og Hent i Butik",
    long: "Få hele vores online-udvalg i din lokale Bog & idé: Bestil på bog-ide.dk og vælg levering til din butik. Det er både nemt og gratis!",
    short: "Det er nemt og gratis at bestille online og hente i butikken.",
  },
  {
    icon: A.iconBytte, title: "365 Dages Byttegaranti",
    long: "Alt, hvad du køber hos os, kan byttes i alle vores butikker i hele landet — i helt op til et år. Gælder også varer købt i vores webshop.",
    short: "365 dages byttegaranti i mere end 130 butikker. Gælder også webshop.",
  },
  {
    icon: A.iconSendGave, title: "Send en Gave",
    long: "Send en lille opmærksomhed eller gaven til fødselsdagen: Vælg blandt populære bøger og brætspil i vores web-gaveshop, så er din gave fremme samme dag eller dagen efter.",
    short: "Bøger og spil er ALTID gode gaver! Få leveret samme dag eller dagen efter.",
  },
  {
    icon: A.iconFriFragt, title: "Fri Fragt", club: true,
    long: "Som medlem af vores kundeklub får du altid fri fragt til nærmeste pakkeshop eller Bog & idés butikker, når du handler i vores webshop. Og det koster ikke noget at være med.",
    short: "Få fri fragt til nærmeste pakkeshop — som gratis klubmedlem.",
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="03 — Services"
        title="Services"
        lead="Hvert service-element har et dedikeret ikon og to tekstversioner — en lang og en kort."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4">
              <img src={s.icon} alt="" className="h-14 w-14 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-xl">{s.title}</h3>
                  {s.club && (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                      Klub-eksklusiv
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.long}</p>
                <p className="mt-3 border-l-2 border-primary pl-3 text-sm italic">{s.short}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
