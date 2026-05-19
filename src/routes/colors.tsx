import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { brandColors, type BrandColor } from "@/lib/brand";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: "Farver — Bog & idé" },
      { name: "description", content: "Bog & idés farvepalette: én primær brandfarve og fire støttefarver." },
    ],
  }),
  component: ColorsPage,
});

function Swatch({ color }: { color: BrandColor }) {
  const [copied, setCopied] = useState(false);

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} kopieret`, { description: value });
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("Kunne ikke kopiere");
    }
  };

  const categoryLabel = {
    primary: "Primær · Brandfarve",
    background: "Baggrundsfarve",
    secondary: "Sekundær",
  }[color.category];

  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <button
        type="button"
        onClick={() => copy(color.hex, color.name)}
        className="group relative block h-40 w-full"
        style={{ backgroundColor: color.hex }}
        aria-label={`Kopiér ${color.name} hex`}
      >
        <span
          className="pointer-events-none absolute right-3 top-3 rounded-full p-1.5 opacity-0 transition-opacity group-hover:opacity-100"
          style={{ backgroundColor: color.textOnDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.15)", color: color.textOnDark ? "#fff" : "#000" }}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{categoryLabel}</p>
          <h3 className="mt-1 text-xl">{color.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{color.role}</p>
        <dl className="space-y-1 pt-1">
          <Row label="HEX" value={color.hex} onCopy={() => copy(color.hex, `${color.name} HEX`)} />
          <Row label="RGB" value={color.rgb} onCopy={() => copy(color.rgb, `${color.name} RGB`)} />
        </dl>
      </div>
    </div>
  );
}

function Row({ label, value, onCopy }: { label: string; value: string; onCopy: () => void }) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className="flex w-full items-center justify-between rounded px-1 py-1 text-left transition-colors hover:bg-muted"
    >
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="font-mono text-xs">{value}</span>
    </button>
  );
}

function ColorsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="02 — Visuel identitet"
        title="Farvepaletten"
        lead="Paletten er bygget op om én primær brandfarve og fire støttefarver. Den røde farve er brandfarven og bærer identiteten på tværs af alle formater. Klik en farve for at kopiere værdien."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {brandColors.map((c) => (
          <Swatch key={c.hex} color={c} />
        ))}
      </div>
    </PageShell>
  );
}
