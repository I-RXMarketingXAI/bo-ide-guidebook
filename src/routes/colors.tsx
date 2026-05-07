import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page";
import { brandColors } from "@/lib/brand";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: "Colors — Bo & Ide" },
      { name: "description", content: "Bo & Ide color palette with HEX, RGB and CMYK values." },
    ],
  }),
  component: ColorsPage,
});

function Swatch({ color }: { color: typeof brandColors[number] }) {
  const [copied, setCopied] = useState(false);

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied`, { description: value });
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("Couldn’t copy to clipboard");
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <button
        type="button"
        onClick={() => copy(color.hex, color.name)}
        className="group relative block h-32 w-full"
        style={{ backgroundColor: color.hex }}
        aria-label={`Copy ${color.name} hex value`}
      >
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/40 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div className="space-y-3 p-4">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-lg">{color.name}</h3>
            <span className="text-xs text-muted-foreground">{color.role}</span>
          </div>
        </div>
        <dl className="space-y-1 text-sm">
          <Row label="HEX" value={color.hex} onCopy={() => copy(color.hex, `${color.name} HEX`)} />
          <Row label="RGB" value={color.rgb} onCopy={() => copy(color.rgb, `${color.name} RGB`)} />
          <Row label="CMYK" value={color.cmyk} onCopy={() => copy(color.cmyk, `${color.name} CMYK`)} />
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
      className="flex w-full items-center justify-between rounded px-1 py-0.5 text-left transition-colors hover:bg-muted"
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
        eyebrow="03 — Colors"
        title="Color palette"
        lead="Click any swatch or value to copy it to your clipboard. Values shown are placeholders — replace with the official Bo & Ide palette."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brandColors.map((c) => (
          <Swatch key={c.hex} color={c} />
        ))}
      </div>
    </PageShell>
  );
}
