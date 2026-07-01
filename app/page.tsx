import Image from "next/image";
import Ballpit from "./components/ballpit";
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

        <Image
          src="/images/CronoGrowthFlat.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(145deg,rgba(37,22,5,0.9),rgba(65,93,67,0.8)_52%,rgba(37,22,5,0.98))]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-brand-red" />
        <div className="absolute inset-x-0 top-1.5 -z-10 h-1.5 bg-brand-green" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[linear-gradient(180deg,transparent,#f6e8ea)]" />
        <div className="absolute inset-0 -z-10 opacity-35 sm:opacity-45">
          <Ballpit
            aria-hidden
            className="h-full w-full"
            count={95}
            gravity={0.16}
            friction={0.985}
            wallBounce={0.92}
            followCursor
            colors={[0x415d43, 0xef626c, 0xf6e8ea, 0x251605]}
            ambientIntensity={1.45}
            lightIntensity={260}
            minSize={0.16}
            maxSize={0.48}
            size0={1.15}
            maxVelocity={0.06}
          />
        </div>

        <header className="mx-auto flex w-full max-w-7xl items-center justify-end border-b border-brand-light/10 pb-5">
          <ExternalPrizeLink
            href="https://www.antonioarcher.com"
            className="text-xs font-bold uppercase text-brand-light/75 underline decoration-brand-red/70 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-brand-red hover:decoration-brand-red"
            description="Click Okay to open Archer YSWS in a new tab."
          >
            Archer YSWS
          </ExternalPrizeLink>
        </header>

        <main className="mx-auto my-auto grid w-full max-w-7xl items-center gap-12 py-20 md:grid-cols-12 md:py-24">
          <div className="z-10 flex flex-col items-start text-left md:col-span-7">

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] text-brand-light sm:text-6xl lg:text-7xl">
              Build a desk toy win an iPad.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-brand-light/82">
              Make a clock, tracker, timer, calendar, a tree growing, river, or any small tool that helps show progress. Ship something real, then trade hours for something for your desk.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#prizes"
                className="inline-flex items-center justify-center rounded-lg bg-brand-red px-7 py-4 text-sm font-black uppercase text-white shadow-[0_14px_30px_rgba(239,98,108,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#dc4e59]"
              >
                See the prizes
              </a>
              <a
                href="#brief"
                className="inline-flex items-center justify-center rounded-lg border border-brand-light/20 bg-brand-light/10 px-7 py-4 text-sm font-black uppercase text-brand-light backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-brand-red/50 hover:bg-brand-light/15"
              >
                What to build
              </a>
            </div>

          </div>

          <div className="z-10 flex w-full justify-center md:col-span-5">
            <div className="relative flex w-full max-w-[34rem] items-center justify-center p-0">
              <Image
                src="/images/sunclock.png"
                alt=""
                width={500}
                height={500}
                priority
                className="absolute right-3 top-3 h-24 w-24 rotate-6 object-contain opacity-55 sm:h-32 sm:w-32"
              />
              <Image
                src="/images/CronoGrowth.png"
                alt="Thing on Desk(TOD) displayed on a tablet"
                width={652}
                height={649}
                priority
                className="mx-auto h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.38)]"
              />
              <div className="absolute -bottom-8 -left-4 z-20 sm:-bottom-10">
                <Image
                  src="/images/tree.png"
                  alt="Growth Tree"
                  width={400}
                  height={400}
                  priority
                  className="h-36 w-auto object-contain invert mix-blend-screen brightness-125 drop-shadow-[0_10px_18px_rgba(239,98,108,0.18)] sm:h-48"
                />
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
      </main>

      <footer className="border-t border-brand-dark/15 bg-brand-dark px-5 py-8 text-center text-sm font-semibold text-brand-light">
        <span>
          &copy; {new Date().getFullYear()} Hack Club made by kids for kids.
        </span>{" "}
        <span>Thing on Desk(TOD) by Archer YSWS.</span>
      </footer>
    </div>
  );
}
