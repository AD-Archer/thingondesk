import Image from "next/image";
import type { ReactNode } from "react";
import { ExternalPrizeLink } from "./components/external-prize-link";
import { PrizeGrid } from "./components/prize-grid";

const buildPrompts = [
  {
    title: "Track time",
    copy: "A timer, calendar, focus display, or Hackatime dashboard that makes minutes visible.",
  },
  {
    title: "Show growth",
    copy: "A plant, river, skyline, creature, garden, or anything that changes as work stacks up or is completed.",
  },
  {
    title: "Keep it desk ready",
    copy: "Make something you would actually leave open beside on your desk.",
  },
];

const faqItems: Array<{ question: string; answer: ReactNode }> = [
  {
    question: "What is thingondesk?",
    answer: (
      <>
        thingondesk is a build challenge where you make a small project that
        lives on or beside your desk and shows time, progress, growth, or work
        in motion. Ship the project, document it, and you can earn something
        desk-related back.
      </>
    ),
  },
  {
    question: "How do I submit?",
    answer: (
      <>
        Finish your project, collect a short demo or a few photos, and follow
        the submission instructions posted with the challenge. Your project
        should be open source, functional, and include a README.
      </>
    ),
  },
  {
    question: "Who can participate?",
    answer: (
      <>
        Teens ages 13-18 can join. thingondesk is hosted by Hack Club, and
        everything is free.
      </>
    ),
  },
  {
    question: "How do I join the community and ask questions?",
    answer: (
      <>
        Jump into the Hack Club Slack and use the links in the footer to get
        there. Share progress, ask questions, and post updates as you build.
      </>
    ),
  },
  {
    question: "What should I build?",
    answer: (
      <>
        Build anything that makes work feel more visible: a clock, tracker,
        timer, calendar, growing plant, snow falling onto a street, status
        display, or some other desk companion.
      </>
    ),
  },

  {
    question: "How do I track my hours?",
    answer: (
      <>
        If you are building software, use{" "}
        <ExternalPrizeLink
          href="https://hackatime.hackclub.com/"
          className="font-black text-[#ddd92a] underline decoration-[#ddd92a]/70 decoration-2 underline-offset-4 transition hover:text-white"
          description="Click Okay to open Hackatime in a new tab."
        >
          Hackatime
        </ExternalPrizeLink>{" "}
        to track your hours. For hardware projects, use{" "}
        <ExternalPrizeLink
          href="https://docs.hackclub.com/handbook/public-infrastructure/hackatime-lapse-and-lookout"
          className="font-black text-[#ddd92a] underline decoration-[#ddd92a]/70 decoration-2 underline-offset-4 transition hover:text-white"
          description="Click Okay to open the Hackatime, Lapse, and Lookout docs in a new tab."
        >
          Lapse and Lookout docs
        </ExternalPrizeLink>{" "}
        for recording timelapses and validating work.
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-brand-dark px-5 py-5 text-brand-light sm:px-8 lg:px-12">
        <video
          className="absolute inset-0 -z-30 h-full w-full scale-[1.02] object-cover blur-[0.5px] saturate-105"
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
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_25%,rgba(246,232,234,0.12),transparent_32%),linear-gradient(180deg,rgba(16,34,24,0.12),rgba(11,29,21,0.82)_78%,rgba(16,43,28,0.9))]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-[#b9f2f8]" />
        <div className="absolute inset-x-0 top-1.5 -z-10 h-1.5 bg-[#45c84b]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-[linear-gradient(180deg,transparent,rgba(16,43,28,0.2))]" />

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

        <main className="mx-auto my-auto grid w-full max-w-7xl items-center gap-10 py-20 md:grid-cols-12 md:py-24">
          <div className="z-10 flex flex-col items-start text-left md:col-span-8">
            <h1 className="max-w-5xl text-4xl font-black leading-[0.95] text-brand-light drop-shadow-[0_5px_24px_rgba(0,0,0,0.56)] sm:text-7xl lg:text-8xl 2xl:text-9xl">
              thingondesk
            </h1>

            <p className="mt-5 max-w-3xl text-3xl font-black leading-tight text-brand-light drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
              Make something to put on your desk we’ll give you something for
              your desk
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#prizes"
                className="inline-flex items-center justify-center rounded-lg bg-[#ef626c] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_14px_26px_rgba(17,24,39,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d94f5a]"
              >
                See the prizes
              </a>
              <a
                href="#brief"
                className="inline-flex items-center justify-center rounded-lg bg-[#ddd92a] px-7 py-4 text-sm font-black uppercase text-brand-dark shadow-[0_14px_26px_rgba(17,24,39,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0ec38]"
              >
                What to build
              </a>
            </div>
          </div>

          <div className="z-10 hidden justify-center md:col-span-4 md:flex">
            <div
              className="relative aspect-square w-full max-w-[26rem] rotate-2 rounded-3xl border border-white/12 bg-[#050505] p-6 text-brand-light shadow-[0_26px_70px_rgba(0,0,0,0.42)]"
              aria-label="Tablet prize shown inside a thingondesk display"
              role="img"
            >
              <div className="absolute -bottom-7 left-1/2 h-5 w-56 -translate-x-1/2 rounded-full bg-black/24 blur-md" />
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-[#ddd92a] sm:text-sm">
                    thingondesk
                  </div>
                  <div className="mt-3 h-px w-full bg-white/10" />
                </div>

                <div className="space-y-3">
                  <div className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-brand-light/55 sm:text-xs">
                    featured reward
                  </div>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-[#eee6d8]">
                    <Image
                      src="https://m.media-amazon.com/images/I/713r2sAaC+L._AC_SL1500_.jpg"
                      alt="Tablet prize"
                      fill
                      sizes="(min-width: 768px) 320px, 280px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
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

        <section
          id="hack-club"
          className="relative isolate overflow-hidden border-y border-[#251605]/15 bg-[#ded6c4] px-5 py-20 text-[#251605] sm:px-8 lg:py-28"
        >
          <div className="pointer-events-none absolute -right-16 bottom-[-4rem] -z-10 h-56 w-56 rounded-full border-[2rem] border-[#7f796d]/18" />
          <div className="pointer-events-none absolute left-0 top-0 -z-10 h-2 w-full bg-[#ef626c]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ef626c]">
                What is thingondesk?
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-none sm:text-6xl lg:text-7xl">
                Make something for your desk. Get something for your desk.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#251605]/72 sm:text-lg">
                Build a small project that sits on or beside your desk and
                makes time, progress, or growth visible while you work. It can
                be useful, strange, pretty, hardware, software, or both.
              </p>
              <a
                href="#faq"
                className="mt-7 inline-flex rounded-lg bg-[#ef626c] px-5 py-3 text-sm font-black uppercase text-white shadow-[0_14px_26px_rgba(37,22,5,0.14)] transition hover:-translate-y-0.5 hover:bg-[#d94f5a]"
              >
                Read the FAQ
              </a>
            </div>

            <div id="faq" className="grid gap-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-lg border border-[#251605]/12 bg-[#f6e8ea]/72 shadow-[0_14px_32px_rgba(37,22,5,0.1)] transition hover:-translate-y-0.5 hover:border-[#ef626c]/45 open:border-[#ef626c]/55 open:bg-[#f6e8ea]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-base font-black leading-tight marker:hidden [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span
                      className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-[#ddd92a] text-2xl leading-none text-[#251605] transition group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-base font-medium leading-7 text-[#251605]/72">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-brand">thingondesk</p>
          <p className="footer-tagline">
            A{" "}
            <a href="https://hackclub.com" target="_blank" rel="noreferrer">
              Hack Club
            </a>{" "}
            program
          </p>
          <div className="footer-links">
            <a
              href="https://hackclub.enterprise.slack.com/archives/C0BEDRYH6AX"
              target="_blank"
              rel="noreferrer"
            >
              Slack
            </a>
            <a
              href="https://github.com/hackclub"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://hackclub.com/privacy-and-terms/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
          </div>
        </div>
        <p className="footer-love">
          made with{" "}
          <a
            href="https://hackclub.com/philosophy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &lt;3
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/ad-archer"
            target="_blank"
            rel="noopener noreferrer"
          >
            teens
          </a>{" "}
          for{" "}
          <a
            href="https://hackclub.enterprise.slack.com/archives/C0BEDRYH6AX"
            target="_blank"
            rel="noopener noreferrer"
          >
            teens
          </a>
        </p>
        <svg
          className="footer-cog gear-cw"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g fill="#7f796d">
            <circle cx="50" cy="50" r="30" />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(0 50 50)"
            />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(45 50 50)"
            />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(90 50 50)"
            />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(135 50 50)"
            />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(180 50 50)"
            />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(225 50 50)"
            />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(270 50 50)"
            />
            <rect
              x="43"
              y="4"
              width="14"
              height="22"
              rx="3"
              transform="rotate(315 50 50)"
            />
          </g>
          <circle cx="50" cy="50" r="12" fill="#000" />
        </svg>
      </footer>
    </div>
  );
}
