import { TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3" aria-label="Samrik Solutions home">
      <span className={inverse ? "grid size-9 place-items-center rounded-md bg-accent-strong text-accent-strong-foreground" : "grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"}>
        <TrendingUp className="size-5" aria-hidden="true" />
      </span>
      <span className={inverse ? "font-display text-lg font-bold text-hero-foreground" : "font-display text-lg font-bold text-foreground"}>Samrik Solutions</span>
    </Link>
  );
}
