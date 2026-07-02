"use client";

import {
  useEffect,
  useId,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

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
  description = "This opens another site in a new tab.",
  ...props
}: ExternalPrizeLinkProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const confirmId = useId();

  useEffect(() => {
    const closeOtherConfirmations = (event: Event) => {
      const nextId = (event as CustomEvent<string>).detail;

      if (nextId !== confirmId) {
        setIsConfirming(false);
      }
    };

    window.addEventListener(
      "thingondesk:external-link-confirm",
      closeOtherConfirmations,
    );

    return () => {
      window.removeEventListener(
        "thingondesk:external-link-confirm",
        closeOtherConfirmations,
      );
    };
  }, [confirmId]);

  useEffect(() => {
    if (!isConfirming) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsConfirming(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isConfirming]);

  const openLink = () => {
    setIsConfirming(false);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
        onClick={(event) => {
          event.preventDefault();
          window.dispatchEvent(
            new CustomEvent("thingondesk:external-link-confirm", {
              detail: confirmId,
            }),
          );
          setIsConfirming(true);
        }}
      >
        {children}
      </a>

      {isConfirming ? (
        <div
          className="fixed inset-0 z-[1000] grid place-items-center bg-[#251605]/36 px-5 py-8 backdrop-blur-[2px]"
          role="presentation"
          onClick={() => setIsConfirming(false)}
        >
          <div
            className="w-full max-w-md rounded-lg border border-[#251605]/15 bg-[#ded6c4] p-4 text-center text-[#251605] shadow-[0_24px_70px_rgba(37,22,5,0.24)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${confirmId}-title`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="rounded-md border border-[#251605]/10 bg-[#f6e8ea]/62 p-5">
              <div className="mx-auto h-1.5 w-24 rounded-full bg-[#ef626c]" />
              <p className="mt-4 text-sm font-black uppercase tracking-[0.14em] text-[#ef626c]">
                Leaving thingondesk
              </p>
              <p
                id={`${confirmId}-title`}
                className="mt-3 text-2xl font-black leading-tight"
              >
                Open this in a new tab?
              </p>
              <p className="mx-auto mt-3 max-w-sm text-base font-semibold leading-7 text-[#251605]/72">
                {description}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setIsConfirming(false)}
                  className="rounded-lg border border-[#251605]/14 bg-[#ded6c4] px-4 py-3 text-sm font-black uppercase text-[#251605] transition hover:border-[#251605]/28 hover:bg-[#efe5d0]"
                >
                  Stay here
                </button>
                <button
                  type="button"
                  onClick={openLink}
                  className="rounded-lg bg-[#ef626c] px-4 py-3 text-sm font-black uppercase text-white shadow-[0_12px_24px_rgba(239,98,108,0.22)] transition hover:bg-[#d94f5a]"
                >
                  Open link
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
