"use client";

import type { ReactNode } from "react";
import { toast } from "sonner";

type ExternalPrizeLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function ExternalPrizeLink({
  children,
  href,
  className,
}: ExternalPrizeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={(event) => {
        event.preventDefault();

        toast("You are leaving ChronoGrowth.", {
          description: "Click Okay to open the prize link in a new tab.",
          action: {
            label: "Okay",
            onClick: () => {
              window.open(href, "_blank", "noreferrer");
            },
          },
        });
      }}
    >
      {children}
    </a>
  );
}
