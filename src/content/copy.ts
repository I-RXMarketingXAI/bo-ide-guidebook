// ============================================================================
// Bog & idé — Design Guide content
// ----------------------------------------------------------------------------
// All user-facing copy lives here. Edit text in this file rather than the
// individual route files (src/routes/*.tsx). The page layouts read from
// these objects.
//
// Structure: one key per page (matches the route filename), each with:
//   - meta.title / meta.description          → <head>
//   - header.eyebrow / header.title / header.lead → PageHeader
//   - any data arrays, list items, sentences used on the page
//
// HTML/markup is NOT stored here — only plain text. Where a string contains
// inline emphasis, it's noted in a comment next to the field.
// ============================================================================

import { A } from "@/lib/brand-assets";

export const copy = {
  // --------------------------------------------------------------------------
  // Home / Index
  // --------------------------------------------------------------------------
  index: {
    meta: {
      title: "Bog & idé — Design Guide",
      description: "Vores visuelle og verbale identitet — samlet ét sted.",
    },
    kicker: "Bog & idé Design og Brand Guide",
    title: "Vores brand identitet",
    lead:
      "Alt hvad du skal bruge for at producere, godkende eller briefe kommunikation fra Bog & idé. Farver, typografi, logo, tone of voice og materialer - samlet ét sted.",
    signOff: "Bog & idé - Altid en god idé",
    sections: [
      { to: "/brand", num: "00", title: "Brand", desc: "Vores løfte, purpose, position og sign-off." },
      { to: "/tone", num: "01", title: "Tone of Voice", desc: "Hvordan vi taler - passioneret, vidende, inspirerende." },
      { to: "/logo", num: "02", title: "Logo", desc: "Varianter, respektafstand, do & don't, downloads." },
      { to: "/klammer", num: "02", title: "Klammer", desc: "Vores grafiske brand asset." },
      { to: "/colors", num: "02", title: "Farver", desc: "5 farver med HEX & RGB - klik for at kopiere." },
      { to: "/typography", num: "02", title: "Typografi", desc: "Velo Serif Display og Muller." },
      { to: "/imagery", num: "02", title: "Billedstil", desc: "Nærvær, varme & autenticitet." },
      { to: "/kundeklub", num: "02", title: "Kundeklub", desc: "Eget visuelt system og tre fordele." },
      { to: "/services", num: "03", title: "Services", desc: "Service-Ikoner samt korte og lange beskrivelser." },
      { to: "/pricing", num: "04", title: "Priskommunikation", desc: "Taktisk system - hvid baggrund, sort tekst." },
      { to: "/concepts", num: "05", title: "Koncepter", desc: "Prismatch, Marthaprisen, Årets Spil og mere" },
      { to: "/pos", num: "06", title: "POS & Materialer", desc: "Butiks- og digitale formater." },
      { to: "/children", num: "07", title: "Børneunivers", desc: "Illustrationer, Font, baggrund." },
      { to: "/campaign", num: "08", title: "Kampagneskabelon", desc: "Fem elementer i hver kampagne." },
    ] as const,
    cardCta: "Åbn",
  },

  // --------------------------------------------------------------------------
  // Brand (00)
  // --------------------------------------------------------------------------
  brand: {
    meta: {
      title: "Brand — Bog & idé",
      description: "Bog & idé som brand: løfte, purpose, position og sign-off.",
    },
    header: {
      eyebrow: "00 — Bog & idé som brand",
      title: "Vores brand løfte",
      lead: "Bog & idé er ikke det billigste sted at handle produkter. Det er det bedste sted at vælge dem.",
    },
    // Inline <strong> on "kuratering og vejledning" is kept in the page.
    promiseIntro:
      "Vi konkurrerer ikke på pris. Vi konkurrerer på kuratering, vejledning og inspiration, og det er svært at kopiere. Vores styrke er evnen til at hjælpe kunden med at vælge rigtigt - i en tid med alt for mange muligheder og for lidt vejledning.",
    promiseStrongPhrase: "kuratering og vejledning",
    tags: ["Kuratering", "Vejledning", "Nærvær", "Læselyst"],
    signOff: "Altid en god idé",
    signOffNote:
      "Altid en god idé er vores brand sign-off. Den afslutter al kommunikation og optræder altid med klammerne. Må aldrig stå alene.",
    purpose: {
      label: "Purpose",
      title: "Vi beriger mennesker med nærvær, fordybelse og samvær",
      text: "Vi lever i en hverdag der er fuld af krav, valg, støj og hastighed. I den kontekst tager Bog & idé aktivt ansvar for at skabe rum til det der giver livet dybde: at fordybe sig i en bog, at give en gave der viser man kender modtageren, at lære noget nyt, at skabe kvalitetstid med dem man holder af.",
    },
    position: {
      label: "Position",
      title: "Vi hjælper dig med at vælge rigtigt",
      text: "Position er den plads Bog & idé ønsker at indtage i kundens bevidsthed, ikke i forhold til hvem vi selv synes vi er, men i forhold til alternativerne. Når en kunde overvejer at købe en bog, hvad er det så der gør, at hun vælger os, frem for andre?",
    },
    signOffLevels: [
      {
        title: "Sign-off — purpose-niveau",
        text: "Refererer til vores grundlæggende overbevisning: gode valg, bøger, gaver og kreative produkter skaber nærvær og mening i hverdagen.",
      },
      {
        title: "Sign-off — positions-niveau",
        // Inline <em> on "altid en god idé" kept in page.
        text: "Er konklusionen på vores løfte til kunden: vi hjælper dig med at vælge rigtigt - og det valg du tager med hjem er altid en god idé.",
      },
    ],
    filter: {
      kicker: "Kommunikationsfilter",
      lead: "Al kommunikation fra Bog & idé skal kunne svare ja til mindst ét af:",
      items: [
        "Understøtter det læsning, leg, læring eller nærvær?",
        "Viser det inspiration, kuratering eller personlig vejledning?",
      ],
    },
  },

  // --------------------------------------------------------------------------
  // Tone of Voice (01)
  // --------------------------------------------------------------------------
  tone: {
    meta: {
      title: "Tone of Voice — Bog & idé",
      description: "Bog & idé taler som en passioneret og vidende ven - ikke som en institution.",
    },
    header: {
      eyebrow: "01 — Tone of Voice",
      title: "Som en passioneret og vidende ven",
      lead: "Bog & idé taler ikke som en institution. Vi er talkshow-værten der finder de mest interessante vinkler og gør emner spændende, man ikke troede man interesserede sig for.",
    },
    pillars: [
      { title: "Passionerede", text: "Vi elsker vores produkter og brænder for at skabe læselyst og fremme kreativiteten. Vores begejstring er ægte og smittende, når vi har noget på hjerte." },
      { title: "Vidende", text: "Vi ved meget, fordi vi er nysgerrige og suger til os. Vi lytter og deler viden uden at kloge os — aldrig belærende eller bedrevidende." },
      { title: "Inspirerende", text: "Vi lytter og giver nye perspektiver frem for at fortælle folk hvad de skal mene. Vi finder den vinkel der fanger — frem for den der blot beskriver." },
      { title: "Godt selskab", text: "Vi byder alle varmt velkommen og går op i, at alle føler sig set. Vi underholder, motiverer og giver nye perspektiver til at kaste sig ud i nye bøger og projekter." },
    ],
    style:
      "Vi er ligefremme og hverdagsagtige. Vi siger tingene ligeud og skriver som vi taler med gode venner. Vi er ikke i undervisningsbranchen — vi er i underholdningsbranchen. Vi bruger gerne bydeform fordi vi så gerne vil skabe handling.",
    tipLabel: "Tip:",
    tip: 'Tænk: "Hvordan ville B.T. sælge denne historie?" Det er ikke en opfordring til tabloidjournalistik, men til at finde den vinkel der fanger.',
    examplesHeading: "Vi siger / Vi siger ikke",
    examplesYesLabel: "✓ Vi siger",
    examplesNoLabel: "✕ Vi siger ikke",
    examples: [
      ["Spil mere. Har du glemt, hvor sjovt det er?", "Vidste du at du træner din hjerne, når du spiller brætspil med dine børn?"],
      ["Send mand og børn på forlænget weekend: Mr. Grey is back!", "Sidste bind i Fifty Shades-trilogien."],
      ["Mere til fantasien. En stribe tusser, men også en duftende blomstereng.", "Produktbeskrivelse uden vinkel."],
      ["Til alle jer, der siger, I ikke læser.", "Bøger til ikke-læsere."],
      ["Personalets favorit denne uge. Ingen alternativ.", "Ugens udvalgte titler."],
      ["Kan du lide sudoku, vil du elske kakuro.", "Relaterede produkter."],
      ["Spar 20% på psykopater og seriemordere.", "Spar 20% på krimier."],
      ["Kom i godt selskab med snigmordere, voldsforbrydere og fallerede efterforskere.", "Generisk krimikampagne."],
    ] as [string, string][],
    channelsHeading: "Tone per kanal",
    channels: [
      { name: "POS i butik", desc: "Kort, kontant og stemningsskabende. Kunden er fysisk til stede og skal fanges på et sekund. Ingen lange forklaringer.", example: '"Regn udenfor. Kaffe indenfor. En god bog." — "Spørg os, vi har en mening."' },
      { name: "Organisk SoMe", desc: "Plads til personlighed og redaktionel stemme. Tag stilling, stil spørgsmål og involver. Undgå produktgrid uden kontekst.", example: '"Vi har valgt tre bøger til din ferie. Du behøver ikke vælge selv." — "Trump hader den. Gør du?"' },
      { name: "Annoncer (betalt)", desc: "Mere direkte og handlingsorienteret end organisk, men stadig forankret i en situation eller et behov.", example: '"Ferielæsning: let, spændende, umulig at lægge fra sig." — "Tre sikre valg under 200 kr."' },
      { name: "E-mail & nyhedsbrev", desc: "Den mest personlige kanal. Varm, direkte og uden kampagnesprog. Skriv som om boghandleren selv sender mailen.", example: 'Emnefelt: "Fordi du læste [titel], tror vi du vil elske denne." — Preheader: "Vi har gjort valget nemt."' },
    ],
  },

  // --------------------------------------------------------------------------
  // Logo (02)
  // --------------------------------------------------------------------------
  logo: {
    meta: {
      title: "Logo — Bog & idé",
      description: "Logoet er Bog & idés primære identitetsmarkør.",
    },
    header: {
      eyebrow: "02 — Visuel identitet",
      title: "Logo",
      lead: "Logoet er Bog & idés primære identitetsmarkør og bruges konsekvent på tværs af alle materialer.",
    },
    variants: [
      { name: "Sort", url: A.logoSort, bg: "#feede0", description: "Til lys baggrund." },
      { name: "Hvid", url: A.logoHvid, bg: "#00375c", description: "Til mørk baggrund." },
    ],
    downloadLabel: "Download SVG",
    respect: {
      heading: "Respektafstand",
      lead: "Respektafstanden er styret af O'ets mål i logoet. Brug altid frirum svarende til O'ets højde på alle sider — medmindre logoet bruges som en aktiv del af et grafisk design, fx i grafik for services og kompetencer.",
      // First word is bold ("✓ Minimumsstørrelse:" / "✕ Ingen omfarvning:")
      minSize: "Logoet bruges aldrig mindre end 10 mm i den smalleste dimension ved print.",
      minSizeLabel: "✓ Minimumsstørrelse:",
      noRecolor: "Kun sort på lys, hvid på mørk eller hvid på rød facade-version.",
      noRecolorLabel: "✕ Ingen omfarvning:",
    },
    dosHeading: "Do & Don't",
    dos: [
      { src: A.logoDoClearspace, label: "✓ Korrekt frirum", ok: true },
      { src: A.logoDontStretch, label: "✕ Må ikke forvrænges", ok: false },
      { src: A.logoDontColor, label: "✕ Må ikke omfarves", ok: false },
      { src: A.logoDontRotate, label: "✕ Må ikke roteres", ok: false },
    ],
    facade: {
      heading: "Logo — Facade",
      // "ikke" is bold in original.
      lead: "Det kvadratiske logo bruges udelukkende til facader og butiksafmelding. Det er altid hvid på rød baggrund i denne version, og må ikke erstatte det horisontale logo i andre sammenhænge.",
      useLabel: "✓ Bruges til:",
      use: "Facadeskilte, butiksafmelding, badges og steder der kræver kvadratisk format.",
      dontLabel: "✕ Bruges ikke til:",
      dont: "Erstatter ikke det horisontale logo i tryksager, digitale flader eller kampagner.",
      download: "Download facadelogo (SVG)",
    },
  },

  // --------------------------------------------------------------------------
  // Klammer (02)
  // --------------------------------------------------------------------------
  klammer: {
    meta: {
      title: "Klammer — Bog & idé",
      description: "Klammerne er Bog & idés vigtigste grafiske brand asset.",
    },
    header: {
      eyebrow: "02 — Visuel identitet",
      title: "Klammerne",
      lead: 'Klammerne binder kommunikationen sammen på tværs af alle formater og kanaler — og optræder altid med sign-off’en "Altid en god idé".',
    },
    versions: {
      redTitle: "Rød version — standard",
      redDesc: "Anvendes som udgangspunkt på alle brand-flader.",
      whiteTitle: "Hvid version",
      whiteDesc: "Bruges når rød allerede dominerer materialet.",
    },
    downloadLabel: "Download SVG",
    useTitle: "✓ Bruges til",
    use: ["Brandkampagner", "Lancering af nye tiltag", "CSR-aktiviteter", "Servicebudskaber"],
    dontTitle: "✕ Bruges ikke til",
    dont: ["Taktisk priskommunikation", "Prisskilte og prissplash", "Rene produktlister"],
    metrics: [
      { kpi: "5%", label: "Størrelse", text: "af formatets smalleste side. Eks.: 120 mm → klammer = 6 mm." },
      { kpi: "75%", label: "Afstand til kant", text: "af klammens størrelse. Eks.: 6 mm klammer → 4,5 mm afstand." },
      { kpi: "Rød", label: "Farve", text: "Rød som udgangspunkt. Hvid hvis rød allerede dominerer." },
      { kpi: "Ensartet", label: "Outdoor-regel", text: "Klammer på vinduer side om side skal have ens størrelse." },
    ],
  },

  // --------------------------------------------------------------------------
  // Colors (02)
  // --------------------------------------------------------------------------
  colors: {
    meta: {
      title: "Farver — Bog & idé",
      description: "Bog & idés farvepalette: én primær brandfarve og fire støttefarver.",
    },
    header: {
      eyebrow: "02 — Visuel identitet",
      title: "Farvepaletten",
      lead: "Paletten er bygget op om én primær brandfarve og fire støttefarver. Den røde farve er brandfarven og bærer identiteten på tværs af alle formater. \nKlik en farve for at kopiere værdien.",
    },
    categoryLabels: {
      primary: "Primær · Brandfarve",
      background: "Baggrundsfarve",
      secondary: "Sekundær",
    } as const,
    toastCopied: (label: string) => `${label} kopieret`,
    toastFailed: "Kunne ikke kopiere",
  },

  // --------------------------------------------------------------------------
  // Typography (02)
  // --------------------------------------------------------------------------
  typography: {
    meta: {
      title: "Typografi — Bog & idé",
      description: "Velo Serif Display og Muller. To skrifttyper, ét princip.",
    },
    header: {
      eyebrow: "02 — Visuel identitet",
      title: "Typografi",
      lead: "To skrifttyper. Ét princip: Velo sætter tonen, Muller leverer indholdet.",
    },
    principleKicker: "Grundprincippet",
    // "Bland dem aldrig på samme tekstniveau." is bold in the page.
    principle:
      "Velo Serif Display Bold bruges udelukkende til overskrifter, kampagnebudskaber og salgstekster. Muller bruges til alt indhold der skal læses.",
    principleStrong: "Bland dem aldrig på samme tekstniveau.",
    note:
      "Note: Velo Serif Display og Muller er licenserede fonts. Online vises de her med tilnærmede fallbacks (DM Serif Display og Manrope) — brug altid de licenserede filer i produktion.",
  },

  // --------------------------------------------------------------------------
  // Imagery (02)
  // --------------------------------------------------------------------------
  imagery: {
    meta: {
      title: "Billedstil — Bog & idé",
      description: "Bog & idés billedstil: nærvær, varme, autenticitet.",
    },
    header: {
      eyebrow: "02 — Visuel identitet",
      title: "Billedstil",
      lead: "Billeder skal kommunikere nærvær, varme og menneskelighed. De skal virke autentiske og have kontrast og farveidentitet der bidrager til et markant visuelt udtryk med tyngde.",
    },
    motifs: [
      { src: A.fotoFordybelse, title: "Fordybelse og ro", desc: "En person der læser alene, opslugt af en bog." },
      { src: A.fotoSamvaer, title: "Samvær og nærvær", desc: "Forælder der læser højt for barn, venner der deler en bog." },
      { src: A.fotoKreativitet, title: "Kreativitet i gang", desc: "Familie der tegner, maler eller bygger sammen." },
      { src: A.fotoHverdag, title: "Hverdagsstemning", desc: "Bogen på natbordet, koppen kaffe ved siden af." },
    ],
    doTitle: "✓ Vi bruger",
    dos: [
      "Autentiske, ikke-opstillede motiver",
      "Billeder med nærvær og menneskelig varme",
      "Stærk kontrast og tydelig farveidentitet",
      "Naturligt lys og ægte stemning",
    ],
    dontTitle: "✕ Vi undgår",
    donts: [
      "Intetsigende eller generiske stockfotos",
      "Kunstige eller for opstillede motiver",
      "Billeder der kunne tilhøre enhver anden retailer",
      "Emotionsløse flatlay-opstillinger",
    ],
  },

  // --------------------------------------------------------------------------
  // Kundeklub (02)
  // --------------------------------------------------------------------------
  kundeklub: {
    meta: {
      title: "Kundeklub — Bog & idé",
      description: "Kundeklubben er gratis og har sit eget visuelle system.",
    },
    header: {
      eyebrow: "02 — Visuel identitet",
      title: "Kundeklub",
      lead: "Kundeklubben er gratis at være medlem af og giver adgang til eksklusive fordele. Det visuelle system er defineret og adskiller sig bevidst fra den generelle brand-kommunikation.",
    },
    hero: {
      welcomePrefix: "VELKOMMEN I",
      welcomeAccent: "KLUBBEN",
      tagline: "Det koster ikke noget, og du får masser af medlemsfordele. Se mere og meld dig ind på bog-ide.dk",
    },
    fordele: [
      { icon: A.iconFriFragt, title: "Fri Fragt", desc: "Altid fri fragt til nærmeste pakkeshop eller Bog & idés butikker ved handel i webshoppen." },
      { icon: A.iconGaranti, title: "90 Dages Tilfredshedsgaranti", desc: "På alle børne- og ungdomsbøger. Rammer bogen ikke plet, kan du bytte den inden 90 dage." },
      { icon: A.iconReturpant, title: "Giv din Bestseller Videre", desc: "Aflever din bestseller inden 3 måneder og få et tilgodebevis på 25% af bogens pris." },
    ],
    rules: [
      { t: "Rød ramme — beige boks", d: "Rød ramme (#e02e31) om en beige boks (#feede0) med hvide klammer indeni. Kombinationen bruges udelukkende til Kundeklub-materiale." },
      { t: '"KLUBBEN" altid i rød', d: 'Ordet KLUBBEN skrives altid med rød farve i overskriften. "VELKOMMEN I" er i sort/neutral.' },
      { t: "Hvide klammer", d: "Klammerne inde i Kundeklub-designet er altid hvide — placeret på beige baggrund uden \"Altid en god idé\" sign-off’en." },
      { t: "Kun til klubben", d: "Ikonerne for klubfordele bruges udelukkende i Kundeklub-kommunikation. Farverne tilpasses farvepaletten." },
    ],
    benefitsHeading: "De tre eksklusive klubfordele",
  },

  // --------------------------------------------------------------------------
  // Services (03)
  // --------------------------------------------------------------------------
  services: {
    meta: {
      title: "Services — Bog & idé",
      description: "Bog & idés services med ikoner og tekstversioner.",
    },
    header: {
      eyebrow: "03 — Services",
      title: "Services",
      lead: "Hvert service-element har et dedikeret ikon og to tekstversioner — en lang og en kort.",
    },
    clubBadge: "Klub-eksklusiv",
    items: [
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
        icon: A.iconKlikHent, title: "Klik og Hent i Butik", club: false,
        long: "Få hele vores online-udvalg i din lokale Bog & idé: Bestil på bog-ide.dk og vælg levering til din butik. Det er både nemt og gratis!",
        short: "Det er nemt og gratis at bestille online og hente i butikken.",
      },
      {
        icon: A.iconBytte, title: "365 Dages Byttegaranti", club: false,
        long: "Alt, hvad du køber hos os, kan byttes i alle vores butikker i hele landet — i helt op til et år. Gælder også varer købt i vores webshop.",
        short: "365 dages byttegaranti i mere end 130 butikker. Gælder også webshop.",
      },
      {
        icon: A.iconSendGave, title: "Send en Gave", club: false,
        long: "Send en lille opmærksomhed eller gaven til fødselsdagen: Vælg blandt populære bøger og brætspil i vores web-gaveshop, så er din gave fremme samme dag eller dagen efter.",
        short: "Bøger og spil er ALTID gode gaver! Få leveret samme dag eller dagen efter.",
      },
      {
        icon: A.iconFriFragt, title: "Fri Fragt", club: true,
        long: "Som medlem af vores kundeklub får du altid fri fragt til nærmeste pakkeshop eller Bog & idés butikker, når du handler i vores webshop. Og det koster ikke noget at være med.",
        short: "Få fri fragt til nærmeste pakkeshop — som gratis klubmedlem.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Pricing (04)
  // --------------------------------------------------------------------------
  pricing: {
    meta: {
      title: "Priskommunikation — Bog & idé",
      description: "Taktisk priskommunikation — hvid baggrund, sort tekst, ingen klammer.",
    },
    header: {
      eyebrow: "04 — Priskommunikation",
      title: "Pris er taktisk",
      lead: "Priskommunikation adskiller sig bevidst fra brandkommunikation. Den er rent taktisk og følger et stramt visuelt system — ingen klammer, hvid baggrund, sort tekst.",
    },
    examples: {
      standardLabel: "Standard pris",
      offerLabel: "Tilbud",
      freeChoiceLabel: "Frit valg",
      freeChoiceBig: "FRIT VALG",
      author: "Anna Jansson",
      bookTitle: "Skyggebarn",
      basePriceMain: "199",
      basePriceCents: "95",
      offerOldPrice: "199,95",
      offerPriceMain: "149",
      offerPriceCents: "95",
      offerSave: "SPAR 50.–",
      freePriceMain: "69",
      freePriceCents: "95",
      freeExtra: "2 bøger: 150.–",
      freeSave: "SPAR 30.–",
    },
    principles: [
      ["Hvid baggrund — sort tekst", "Prisskilte og prissplash bruger altid hvid baggrund og sort tekst. Klammerne bruges ikke."],
      ["Normalpris vises tydeligt", "Når en vare er nedsat, angives normalpris tydeligt ved siden af kampagneprisen."],
      ["SPAR frem for procent", '"SPAR [beløb]" foretrækkes frem for procentsatser — medmindre procenten er særligt fordelagtig.'],
      ["Kampagnefarver tilpasses", "Farverne på prissplash tilpasses de aktuelle kampagnefarver fra paletten."],
    ] as [string, string][],
  },

  // --------------------------------------------------------------------------
  // Concepts (05)
  // --------------------------------------------------------------------------
  concepts: {
    meta: {
      title: "Koncepter — Bog & idé",
      description: "Prismatch, Månedens Læseoplevelse, Bestsellerlisten, Årets Spil og Marthaprisen.",
    },
    header: {
      eyebrow: "05 — Koncepter",
      title: "Koncepter",
      lead: "Bag Bog & idés kommunikation ligger en række faste koncepter med egne regler, ikoner og visuelle systemer.",
    },
    items: [
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
        tags: [] as string[],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // POS (06)
  // --------------------------------------------------------------------------
  pos: {
    meta: {
      title: "POS & Materialer — Bog & idé",
      description: "Butiks- og digitale formater. Hvert format har en specifik opgave.",
    },
    header: {
      eyebrow: "06 — Assets & Materialer",
      title: "POS & Materialer",
      lead: "Hvert kommunikationsformat har en specifik opgave. Når vi forstår hvad hvert format er bedst til, undgår vi materialer der forsøger at løse to opgaver på én gang.",
    },
    levels: [
      { n: "Niveau 1", t: "Emotionel indgang", d: "Uro · Gadestander (A2) · Vindue" },
      { n: "Niveau 2", t: "Kuratering & anbefaling", d: "Profilskilt (A4) · Podie" },
      { n: "Niveau 3", t: "Konvertering & taktik", d: "Prisskilt · Kampagneskilt · Hyldemarkør · Hyldesvirper · Topskilt · Lysdug" },
    ],
    fieldLabels: { register: "Register", task: "Opgave", content: "Indhold", rules: "Regler" },
    butikHeading: "Butikskommunikation",
    butik: [
      {
        img: A.posUro, title: "Uro", size: "A1 · 594 × 841 mm",
        register: "Emotionelt og atmosfærisk",
        task: "Skaber den overordnede stemning og etablerer kampagnens univers.",
        content: 'Key visual · Kampagnebudskab · Klammer · "Altid en god idé"',
        rules: "Ingen produktpriser. Ingen produktlister.",
        quote: '"Sommerferie, endelig tid til fordybelse."',
      },
      {
        img: A.posProfilskilt, title: "Profilskilt", size: "A4 · 210 × 297 mm",
        register: "Situationelt og redaktionelt",
        task: "Kuratering og anbefaling — hænger tematisk sammen med uroen.",
        content: "Key visual · Inspirationstekst · Konkrete titler med kort beskrivelse · Klammer",
        rules: "Ingen priser.",
        quote: '"Lette bøger til kufferten. Tre vi ikke kan holde op med at anbefale."',
      },
      {
        img: A.posGadestander, title: "Gadestander / Plakat", size: "A2 · 420 × 594 mm",
        register: "Emotionelt og atmosfærisk",
        task: "Brandbudskab og stemningsskaber — bruges primært ved indgang og i vinduer.",
        content: 'Stort atmosfærisk billede · Ét budskab · Klammer · "Altid en god idé"',
        rules: "Ét budskab per plakat.",
        quote: '"Din perfekte strandbog venter her."',
      },
      {
        img: A.posPrisskilt, title: "Prisskilt", size: "A4 · 210 × 297 mm",
        register: "Handlingsorienteret — rent taktisk",
        task: "Produkt- og prisinformation direkte koblet til konkrete produkter.",
        content: "Produktnavn · Normalpris · Tilbudspris · SPAR beløb",
        rules: "Hvid baggrund. Ingen klammer. Ingen kampagnebudskaber.",
        quote: undefined as string | undefined,
      },
    ],
    otherStoreLabel: "Øvrige butiksformater:",
    otherStore:
      "Hyldemarkør (stor/lille) — genre- og nummermarkering på bestseller-reolen · Hyldesvirper — opmærksomhedsskabende fra siden af reolen · Topskilt — markerer bestseller-reolen i loftet (mørkeblå baggrund) · Lysdug (90×65 cm) — til bestsellerlisten på bord eller podie · Podie — redaktionel scene for kuraterede opstillinger.",
    digitalHeading: "Digitale formater",
    digital: [
      {
        img: A.digitalBanner, title: "Bannerad (display)", size: "300×250 · 728×90 · 160×600 px",
        register: "Handlingsorienteret",
        task: "Konverterer eksisterende interesse til handling.",
        content: undefined as string | undefined,
        rules: "Ét budskab · Tydelig CTA · Læses på under 2 sekunder.",
        quote: '"Find din strandbog. 3 anbefalinger fra vores boghandlere."',
      },
      {
        img: A.digitalSocialFeed, title: "Annonce, betalt social", size: "1080×1080 · 1080×1920 px",
        register: "Situationelt og præcist",
        task: "Skaber efterspørgsel ved at møde kunden i en konkret situation.",
        content: undefined as string | undefined,
        rules: "Tag udgangspunkt i en situation. Undgå generiske slogans.",
        quote: '"Ferielæsning: let, spændende, umulig at lægge fra sig."',
      },
      {
        img: A.digitalSocialStory, title: "Organisk SoMe", size: "1080×1080 · 1080×1350 · 1080×1920 px",
        register: "Redaktionelt og personligt",
        task: "Bygger relation, personlighed og mental tilgængelighed over tid.",
        content: undefined as string | undefined,
        rules: "Tag stilling. Involver og skab dialog.",
        quote: '"Vi har valgt tre bøger til din ferie. Du behøver ikke vælge selv."',
      },
      {
        img: A.digitalEmail, title: "E-mail, kundeklub", size: "600 px bred · variabel højde",
        register: "Personligt og relationelt",
        task: "Styrker relationen og skaber gentagende adfærd baseret på kundekendskab.",
        content: undefined as string | undefined,
        rules: "Skriv som om boghandleren selv sender mailen. Personaliser på baggrund af adfærd.",
        quote: 'Emnefelt: "Fordi du læste [titel], tror vi du vil elske denne."',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Children (07)
  // --------------------------------------------------------------------------
  children: {
    meta: {
      title: "Børneunivers — Bog & idé",
      description: "Børneuniverset har sit eget visuelle sprog, font og tilpassede palette.",
    },
    header: {
      eyebrow: "07 — Børneunivers",
      title: "Børneunivers",
      lead: "Børneuniverset har sit eget visuelle sprog med dedikerede illustrationer, en særlig skrifttype og et tilpasset farvepalette. Det giver Bog & idé et genkendeligt og legende udtryk i børnevendt kommunikation.",
    },
    tiles: [
      { src: A.bornIllu, alt: "Børneillustration", caption: "Illustrationer — sæsonbestemte" },
      { src: A.bornFont, alt: "Verveine font", caption: "Verveine — Børnefont" },
      { src: A.bornBaggrund, alt: "Baggrundsillustration", caption: "Baggrundsillustration" },
    ],
    illustrations: {
      heading: "Illustrationer",
      text: "Vores illustrationer er vores egne og giver særkende, skaber liv og sætter fokus på en anledning eller et produkt. De bruges med tilrettede farver og som baggrundsillustration. Det er vigtigt, at der ikke er for mange produkter på siden, og at baggrunden ikke stjæler opmærksomheden.",
    },
    font: {
      heading: "Verveine — Børnefont",
      text: "Verveine bruges på grafiske materialer med børneillustrationer. Den bruges til at fremhæve budskaber der knytter sig til børnedesignet.",
      sample: "Kom og leg med!",
    },
    callout: {
      label: "Bruges kun som overskrifter:",
      text: "Verveine bruges udelukkende til opmærksomhedsskabende tekster og overskrifter i børnematerialer — aldrig til brødtekst.",
    },
  },

  // --------------------------------------------------------------------------
  // Campaign (08)
  // --------------------------------------------------------------------------
  campaign: {
    meta: {
      title: "Kampagneskabelon — Bog & idé",
      description: "Fem elementer der sikrer at alle assets arbejder i samme retning.",
    },
    header: {
      eyebrow: "08 — Kampagneskabelon",
      title: "Fem elementer pr. kampagne",
      lead: "En veldefineret kampagnestruktur sikrer at alle assets arbejder i den samme retning. Enhver kampagne tager udgangspunkt i disse fem elementer.",
    },
    steps: [
      { n: 1, title: "Entry point", text: 'Hvilken situation aktiverer kampagnen? Ét entry point per kampagne. Eksempler: "Jeg skal finde en gave" · "Jeg vil i gang med at læse" · "Jeg vil koble af i ferien" · "Mit barn skal starte i skole".' },
      { n: 2, title: "Budskab", text: 'Hvad er det ene budskab kampagnen kommunikerer? Det skal kunne siges i én sætning. Eksempel: "Vi hjælper dig med at vælge den perfekte julegave — udvalgt af vores boghandlere."' },
      { n: 3, title: "Register", text: "Emotionelt, situationelt eller handlingsorienteret? Afgøres af de kanaler kampagnen lever i. Upper funnel = emotionelt. Mid funnel = situationelt. Lower funnel = handlingsorienteret." },
      { n: 4, title: "Assets", text: "Hvilke formater produceres? Hvert format beskrives med budskab og billedretning. Husk: uro + profilskilt hænger altid sammen. Ingen uro = ingen emotionel indgang." },
      { n: 5, title: "Genbrug", text: "Hvilke elementer kan genbruges på tværs af formater og i fremtidige kampagner? Key visuals, tekstelementer og kuraterede produktlister bør designes med genbrug i mente." },
    ],
    footnoteLabel: "Årshjul og sæsonspecifikke paletter:",
    footnote:
      "Kampagneperioder og fuldt briefingformat dokumenteres løbende og tilføjes her. Kontakt Marketing for seneste version.",
  },

  // --------------------------------------------------------------------------
  // Elements overview
  // --------------------------------------------------------------------------
  elements: {
    meta: {
      title: "Brand elementer — Bog & idé",
      description: "Oversigt over Bog & idés grafiske brand-elementer.",
    },
    header: {
      eyebrow: "Oversigt",
      title: "Brand elementer",
      lead: "Genveje til de grafiske byggesten der udgør Bog & idés visuelle identitet.",
    },
    links: [
      { to: "/klammer", title: "Klammerne", desc: "Vores vigtigste grafiske brand asset." },
      { to: "/colors", title: "Farver", desc: "Brandfarve og fire støttefarver." },
      { to: "/typography", title: "Typografi", desc: "Velo Serif Display og Muller." },
      { to: "/imagery", title: "Billedstil", desc: "Nærvær, varme, autenticitet." },
      { to: "/kundeklub", title: "Kundeklub-system", desc: "Rød ramme, beige boks, hvide klammer." },
      { to: "/children", title: "Børneunivers", desc: "Illustrationer, Verveine, baggrund." },
    ] as const,
  },
} as const;
