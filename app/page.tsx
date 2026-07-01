import Image from "next/image";
import Ballpit from "./components/ballpit";
import { ExternalPrizeLink } from "./components/external-prize-link";
import { PrizeGrid } from "./components/prize-grid";

const buildPrompts = [
  {
    title: "Track Time",
    copy: "A timer, calendar, focus display, or Hackatime dashboard that makes minutes visible.",
  },
  {
    title: "Show Growth",
    copy: "A plant, river, skyline, creature, garden, or world that changes as work stacks up.",
  },
  {
    title: "Keep It Desk-Ready",
    copy: "Make something you would actually leave open beside your keyboard while you build.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
      <section className="relative isolate min-h-screen overflow-hidden bg-brand-dark px-6 py-6 text-white md:px-12 lg:px-20 bg-grid-pattern flex flex-col justify-between">
        {/* Hack Club Flag absolute positioned at top-left edge */}
        <ExternalPrizeLink
          href="https://hackclub.com"
          className="absolute left-0 top-0 z-30 block w-28 sm:w-36 lg:w-44 transition-transform duration-300 hover:-translate-y-1"
          description="Click Okay to open Hack Club in a new tab."
          aria-label="Hack Club"
        >
          <Image
            src="/Hack%20Club%20Branding%202020/flag-standalone.png"
            alt="Hack Club Logo"
            width={526}
            height={184}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]"
          />
        </ExternalPrizeLink>

        <Image
          src="/images/CronoGrowthFlat.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover opacity-10"
        />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_25%,rgba(239,98,108,0.18),transparent_45%),radial-gradient(circle_at_20%_60%,rgba(65,93,67,0.15),transparent_40%),linear-gradient(180deg,rgba(37,22,5,0.7),rgba(37,22,5,0.95)_60%,#f6e8ea_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-2 bg-brand-red" />
        <div className="absolute inset-x-0 top-2 -z-10 h-2 bg-brand-gold" />
        <div className="absolute inset-x-0 top-20 -z-10 h-[40rem] opacity-55 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_62%,transparent_82%)] sm:bottom-0 sm:h-auto sm:opacity-70">
          <Ballpit
            aria-hidden
            className="h-full w-full"
            count={95}
            gravity={0.16}
            friction={0.985}
            wallBounce={0.92}
            followCursor
            colors={[0x415d43, 0xddd92a, 0xef626c, 0xf6e8ea]}
            ambientIntensity={1.45}
            lightIntensity={260}
            minSize={0.16}
            maxSize={0.48}
            size0={1.15}
            maxVelocity={0.06}
          />
        </div>

        <header className="mx-auto flex w-full max-w-7xl items-center justify-end border-b border-white/5 pb-6">
          <ExternalPrizeLink
            href="https://www.antonioarcher.com"
            className="text-xs font-black uppercase tracking-widest text-brand-light/80 hover:text-brand-gold transition-colors duration-200 underline underline-offset-4 decoration-brand-red/60 decoration-2 hover:decoration-brand-gold"
            description="Click Okay to open Archer YSWS in a new tab."
          >
            Archer YSWS
          </ExternalPrizeLink>
        </header>

        <main className="mx-auto grid w-full max-w-7xl items-center gap-12 py-16 md:grid-cols-12 md:py-24 my-auto">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col items-start text-left md:col-span-7 z-10">

            <h1 className="font-sans text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
              Work hard.<br />
              <span className="bg-gradient-to-r from-brand-red via-brand-gold to-brand-red bg-clip-text text-transparent">
                Win a tablet.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-brand-light/85">
              Build a desk companion that shows time, progress, or growth. Make a clock, tracker, timer, calendar, tiny garden, river, or whatever makes work feel alive.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <a
                href="#prizes"
                className="inline-flex items-center justify-center rounded-xl bg-brand-red px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-brand-red/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-red/30 hover:bg-brand-red/90"
              >
                See the prizes
              </a>
              <a
                href="#brief"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/25"
              >
                What to build
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Visual Frame */}
          <div className="relative flex justify-center md:col-span-5 z-10 w-full">
            {/* Background Glows */}
            <div className="absolute -left-12 -top-12 -z-10 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />
            <div className="absolute -bottom-12 -right-12 -z-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />

            {/* Sunclock floating background */}
            <Image
              src="/images/sunclock.png"
              alt=""
              width={500}
              height={500}
              priority
              className="absolute -right-16 -top-24 -z-10 h-44 w-44 rotate-12 object-contain opacity-35 sm:h-56 sm:w-56"
            />

            {/* Premium visual frame containing tablet & tree */}
            <div className="relative w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[32rem] md:max-w-none flex justify-center items-center">
              {/* CronoGrowth Laptop/Tablet Banner Asset */}
              <Image
                src="/images/CronoGrowth.png"
                alt="ChronoGrowth displayed on a tablet"
                width={652}
                height={649}
                priority
                className="mx-auto h-auto w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[32rem] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Tree illustration overlay */}
              <div className="absolute -left-6 -bottom-12 group z-20">
                <div className="absolute inset-0 bg-brand-gold/10 blur-md rounded-full" />
                <Image
                  src="/images/tree.png"
                  alt="Growth Tree"
                  width={400}
                  height={400}
                  priority
                  className="h-44 w-auto object-contain invert mix-blend-screen brightness-125 drop-shadow-[0_8px_16px_rgba(221,217,42,0.3)] transition-transform duration-500 group-hover:scale-105 sm:h-52"
                />
              </div>
            </div>
          </div>
        </main>
      </section>

      <main>
        <section
          id="brief"
          className="relative overflow-hidden border-y-4 border-brand-dark bg-brand-light px-5 py-16 sm:px-8 bg-grid-light"
        >
          <div className="absolute -left-16 top-8 h-32 w-32 rounded-full border-[18px] border-brand-green/20" />
          <div className="absolute -right-10 bottom-10 h-24 w-24 rotate-12 bg-brand-red/10" />

          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="font-deepwood text-5xl leading-none text-brand-dark sm:text-6xl">
                Build Something That Moves
              </h2>
              <p className="max-w-xl text-lg font-semibold leading-7 text-brand-dark/75">
                It can be practical, weird, calm, flashy, analog-inspired, or
                fully digital. The only rule is visible progress.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {buildPrompts.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-lg border-2 border-brand-dark bg-white p-5 shadow-[6px_6px_0_#0c100d] hover:-translate-y-1 hover:shadow-[8px_8px_0_#0c100d] transition-all duration-300"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-lg font-black text-brand-dark">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-black uppercase text-brand-red">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/85">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prizes" className="px-5 py-16 sm:px-8">
          <PrizeGrid />
        </section>
      </main>

      <footer className="border-t-4 border-brand-dark bg-brand-dark px-5 py-8 text-center text-sm font-semibold text-brand-light">
        <span>
          &copy; {new Date().getFullYear()} Hack Club made by kids for kids.
        </span>{" "}
        <span>ChronoGrowth by Archer YSWS.</span>
      </footer>
    </div>
  );
}
