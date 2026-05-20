import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { copy } from "@/content/copy";

const C = copy.index;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: C.meta.title },
      { name: "description", content: C.meta.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{C.kicker}</p>
        <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">{C.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">{C.lead}</p>
        <p className="mt-10 text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          {C.signOff}
        </p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {C.sections.map((s) => (
          <Link
            key={s.to + s.title}
            to={s.to}
            className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/50"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.num}</p>
            <h2 className="mt-2 text-2xl">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-foreground">
              {C.cardCta} <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
