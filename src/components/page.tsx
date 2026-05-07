import { ReactNode } from "react";

export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>}
      <h1 className="mt-3 text-4xl md:text-5xl">{title}</h1>
      {lead && <p className="mt-5 text-lg text-muted-foreground">{lead}</p>}
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">{children}</div>;
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-dashed bg-muted/40 p-6 text-sm text-muted-foreground">
      {children}
    </div>
  );
}
