import * as React from "react";
import { cn } from "@/lib/utils";

/** Small pill used for skill / tech tags. */
function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-accent-soft bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-strong transition-colors hover:border-accent/40",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
