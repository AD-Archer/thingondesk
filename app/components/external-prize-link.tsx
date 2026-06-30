"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { toast } from "sonner";

type ExternalPrizeLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "onClick"
> & {
  children: ReactNode;
  href: string;
  description?: string;
};

export function ExternalPrizeLink({
  children,
  href,
  className,
  description = "Click Okay to open this link in a new tab.",
  ...props
}: ExternalPrizeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
      onClick={(event) => {
        event.preventDefault();

        toast("You are leaving ChronoGrowth.", {
          description,
          action: {
            label: "Okay",
            onClick: () => {
              window.open(href, "_blank", "noopener,noreferrer");
            },
          },
        });
      }}
    >
      {children}
    </a>
  );
}
