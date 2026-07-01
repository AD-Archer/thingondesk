import Image from "next/image";
import { ExternalPrizeLink } from "./components/external-prize-link";
import { PrizeGrid } from "./components/prize-grid";

const buildPrompts = [
  {
    title: "Track time",
    copy: "A timer, calendar, focus display, or Hackatime dashboard that makes minutes visible.",
  },
  {
    title: "Show growth",
    copy: "A plant, river, skyline, creature, garden, or world that changes as work stacks up.",
  },
  {
    title: "Keep it desk-ready",
    copy: "Make something you would actually leave open beside your keyboard while you build.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-brand-dark px-5 py-5 text-brand-light sm:px-8 lg:px-12">
        <video
          className="absolute inset-0 -z-30 h-full w-full scale-105 object-cover blur-[3px] saturate-125"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(18,43,28,0.82)_0%,rgba(31,71,42,0.64)_42%,rgba(226,111,88,0.34)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_25%,rgba(246,232,234,0.22),transparent_32%),linear-gradient(180deg,rgba(16,34,24,0.16),rgba(11,29,21,0.76)_78%,rgba(226,246,247,0.94))]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-[#b9f2f8]" />
        <div className="absolute inset-x-0 top-1.5 -z-10 h-1.5 bg-[#45c84b]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-[linear-gradient(180deg,transparent,rgba(226,246,247,0.58))]" />

        <ExternalPrizeLink
          href="https://hackclub.com"
          className="absolute left-0 top-0 z-30 block w-24 transition-transform duration-300 hover:-translate-y-0.5 sm:w-32 lg:w-40"
          description="Click Okay to open Hack Club in a new tab."
          aria-label="Hack Club"
        >
          <Image
            src="/Hack%20Club%20Branding%202020/flag-standalone.png"
            alt="Hack Club Logo"
            width={526}
            height={184}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.24)]"
          />
        </ExternalPrizeLink>

        <header className="mx-auto flex w-full max-w-7xl items-center justify-end border-b border-brand-light/10 pb-5">
          <ExternalPrizeLink
            href="https://www.antonioarcher.com"
            className="text-xs font-bold uppercase text-brand-light/80 underline decoration-brand-sky/80 decoration-2 underline-offset-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-colors duration-200 hover:text-brand-sky hover:decoration-brand-sky"
            description="Click Okay to open Archer YSWS in a new tab."
          >
            Archer YSWS
          </ExternalPrizeLink>
        </header>

        <main className="mx-auto my-auto flex w-full max-w-7xl items-center py-24 md:py-28">
          <div className="z-10 flex max-w-4xl flex-col items-start text-left">
            <p className="mb-5 inline-flex rounded-md border border-brand-light/25 bg-brand-dark/28 px-3 py-2 text-xs font-black uppercase tracking-wide text-brand-sky shadow-[0_12px_28px_rgba(0,0,0,0.16)] backdrop-blur-md">
              thingondesk
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-brand-light drop-shadow-[0_5px_22px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl 2xl:text-8xl">
              Build a thing on your desk. <br />Win an iPad.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-brand-light/90 drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)]">
              Make a clock, tracker, timer, calendar, a tree growing, river, or any small tool that helps show progress. Ship something real, then trade hours for something for your desk.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#prizes"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-[#ef626c] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_16px_34px_rgba(239,98,108,0.42)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d94f5a]"
              >
                See the prizes
              </a>
              <a
                href="#brief"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-[#ddd92a] px-7 py-4 text-sm font-black uppercase text-brand-dark shadow-[0_16px_34px_rgba(221,217,42,0.34)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0ec38]"
              >
                What to build
              </a>
            </div>
          </div>
        </main>
      </section>

      <main>
        <section
          id="brief"
          className="relative overflow-hidden border-y border-brand-dark/10 bg-brand-light px-5 py-20 sm:px-8 bg-grid-light"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl text-4xl font-black leading-tight text-brand-dark sm:text-5xl">
                Build something people would keep on their desk.
              </h2>
              <p className="max-w-xl text-base font-medium leading-7 text-brand-dark/74 sm:text-lg">
                It can be practical, weird, calm, flashy, analog-inspired, or
                fully digital. The only rule is visible progress.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {buildPrompts.map((item, index) => (
                <div
                  key={item.title}
                  className="paper-surface soft-shadow rounded-lg border border-brand-dark/12 p-5 transition duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-red text-sm font-black text-white">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-brand-dark/14" />
                  </div>
                  <h3 className="text-xl font-black text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/72">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prizes" className="bg-brand-cream px-5 py-20 sm:px-8">
          <PrizeGrid />
        </section>
      </main>

      <footer className="border-t border-brand-dark/15 bg-brand-dark px-5 py-8 text-center text-sm font-semibold text-brand-light">
        <span>
          &copy; {new Date().getFullYear()} Hack Club made by kids for kids.
        </span>{" "}
        <span>thingondesk by Archer YSWS.</span>
      </footer>
    </div>
  );
}
