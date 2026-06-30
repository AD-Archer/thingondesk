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
    <div className="min-h-screen bg-[#f5efe2] font-sans text-[#251407]">
      <section className="relative isolate min-h-screen overflow-hidden bg-[#2c1608] px-5 py-5 text-white sm:px-8 lg:px-10">
        <Image
          src="/images/CronoGrowthFlat.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_28%,rgba(120,217,79,0.28),transparent_34%),linear-gradient(180deg,rgba(44,22,8,0.58),rgba(44,22,8,0.92)_58%,#f5efe2_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-2 bg-[#ec3750]" />
        <div className="absolute inset-x-0 top-2 -z-10 h-2 bg-[#ffcf2e]" />
        <div className="absolute inset-x-0 top-20 -z-10 h-[40rem] opacity-55 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_62%,transparent_82%)] sm:bottom-0 sm:h-auto sm:opacity-70">
          <Ballpit
            aria-hidden
            className="h-full w-full"
            count={95}
            gravity={0.16}
            friction={0.985}
            wallBounce={0.92}
            followCursor
            colors={[0x78d94f, 0xffcf2e, 0xec3750, 0xffffff]}
            ambientIntensity={1.45}
            lightIntensity={260}
            minSize={0.16}
            maxSize={0.48}
            size0={1.15}
            maxVelocity={0.06}
          />
        </div>

        <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <ExternalPrizeLink
            href="https://hackclub.com"
            className="flex h-14 w-36 items-center justify-start sm:h-16 sm:w-44"
            description="Click Okay to open Hack Club in a new tab."
            aria-label="Hack Club"
          >
            <Image
              src="/Hack%20Club%20Branding%202020/flag-standalone.png"
              alt="Hack Club"
              width={526}
              height={184}
              priority
              className="h-full w-auto object-contain drop-shadow-[0_7px_0_rgba(0,0,0,0.28)]"
            />
          </ExternalPrizeLink>

          <ExternalPrizeLink
            href="https://www.antonioarcher.com"
            className="rounded-full border-2 border-white bg-white/95 px-4 py-2 text-sm font-black uppercase text-[#251407] shadow-[4px_4px_0_#ec3750] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#ec3750]"
            description="Click Okay to open Archer YSWS in a new tab."
          >
            Archer YSWS
          </ExternalPrizeLink>
        </header>

        <main className="mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-7xl flex-col items-center justify-center pb-12 pt-12 text-center">
          <div className="mb-7 flex items-center gap-3 rounded-full border-2 border-[#251407] bg-[#78d94f] px-4 py-2 text-[#251407] shadow-[5px_5px_0_#ec3750]">
            <Image
              src="/images/CG-brown.png"
              alt=""
              width={500}
              height={500}
              className="h-9 w-9 object-contain"
            />
            <span className="text-sm font-black uppercase text-[#241306]">
              ChronoGrowth
            </span>
          </div>

          <div className="relative w-full">
            <Image
              src="/images/sunclock.png"
              alt=""
              width={500}
              height={500}
              priority
              className="absolute -right-7 -top-20 -z-10 h-32 w-32 rotate-12 object-contain opacity-95 sm:h-44 sm:w-44 lg:right-4 lg:h-56 lg:w-56"
            />

            <h1 className="font-deepwood mx-auto max-w-6xl rotate-[-1deg] bg-[#ec3750] px-5 py-4 text-5xl leading-none text-white shadow-[10px_10px_0_#ffcf2e] outline outline-4 outline-[#251407] sm:px-8 sm:text-7xl lg:text-9xl">
              WORK HARD WIN A TABLET.
            </h1>

            <div className="relative mx-auto mt-8 w-full max-w-3xl">
              <Image
                src="/images/CronoGrowth.png"
                alt="ChronoGrowth displayed on a tablet"
                width={652}
                height={649}
                priority
                className="mx-auto h-auto w-full max-w-[36rem] drop-shadow-[0_24px_0_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-balance text-xl font-semibold leading-8 text-[#fff8dd] sm:text-2xl">
            Build a desk companion that shows time, progress, or growth. Make a
            clock, tracker, timer, calendar, tiny garden, river, or whatever
            makes work feel alive.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#prizes"
              className="rounded-full bg-[#78d94f] px-6 py-3 text-sm font-black uppercase text-[#251407] shadow-[4px_4px_0_#ec3750] transition hover:-translate-y-0.5"
            >
              See the prizes
            </a>
            <a
              href="#brief"
              className="rounded-full border-2 border-white bg-white/10 px-6 py-3 text-sm font-black uppercase text-white shadow-[4px_4px_0_#ffcf2e] backdrop-blur transition hover:-translate-y-0.5"
            >
              What to build
            </a>
          </div>
        </main>
      </section>

      <main>
        <section
          id="brief"
          className="relative overflow-hidden border-y-4 border-[#251407] bg-[#fff9e8] px-5 py-16 sm:px-8"
        >
          <div className="absolute -left-16 top-8 h-32 w-32 rounded-full border-[18px] border-[#78d94f]/45" />
          <div className="absolute -right-10 bottom-10 h-24 w-24 rotate-12 bg-[#ec3750]/15" />

          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="font-deepwood text-5xl leading-none text-[#251407] sm:text-6xl">
                Build Something That Moves
              </h2>
              <p className="max-w-xl text-lg font-semibold leading-7 text-[#5b3d24]">
                It can be practical, weird, calm, flashy, analog-inspired, or
                fully digital. The only rule is visible progress.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {buildPrompts.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-lg border-2 border-[#251407] bg-white p-5 shadow-[6px_6px_0_#251407]"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffcf2e] text-lg font-black text-[#251407]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#ec3750]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#3d2818]">
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

      <footer className="border-t-4 border-[#251407] bg-[#251407] px-5 py-8 text-center text-sm font-semibold text-white">
        <span>
          &copy; {new Date().getFullYear()} Hack Club made by kids for kids.
        </span>{" "}
        <span>ChronoGrowth by Archer YSWS.</span>
      </footer>
    </div>
  );
}
