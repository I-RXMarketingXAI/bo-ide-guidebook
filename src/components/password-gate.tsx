import { useState } from "react";
import { unlock } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlock(pw)) {
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form onSubmit={submit} className="w-full max-w-sm space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl">Bo &amp; Ide</h1>
          <p className="mt-2 text-sm text-muted-foreground">Design Manual — enter password to continue</p>
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
          />
          {error && <p className="text-xs text-destructive">Incorrect password.</p>}
        </div>
        <Button type="submit" className="w-full">Unlock</Button>
      </form>
    </div>
  );
}
