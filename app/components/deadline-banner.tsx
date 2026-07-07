import { ExternalPrizeLink } from "./external-prize-link";

const SUBMIT_FORM_URL = "https://forms.hackclub.com/t/t29rbw4xmRus";

export function DeadlineBanner() {
  return (
    <div className="sticky top-0 z-40 bg-brand-red px-3 py-2.5 text-white sm:px-8 sm:py-3">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        <p className="min-w-0 truncate text-xs font-black uppercase tracking-[0.04em] sm:text-sm sm:tracking-[0.08em]">
          <span className="sm:hidden">Closes July 17 · 11:59 PM ET</span>
          <span className="hidden sm:inline">
            Submissions close July 17{" "}
            <span className="text-white/80">· 11:59 PM Eastern Time</span>
          </span>
        </p>
        <ExternalPrizeLink
          href={SUBMIT_FORM_URL}
          description="The thingondesk submission form will open in a new tab."
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-dark px-4 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-white shadow-[0_10px_20px_rgba(16,43,28,0.3)] transition duration-200 hover:-translate-y-0.5 hover:bg-black sm:px-5 sm:py-2"
        >
          Submit
        </ExternalPrizeLink>
      </div>
    </div>
  );
}
