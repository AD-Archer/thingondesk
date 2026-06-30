import { PrizeGrid } from "./components/prize-grid";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 px-6 py-12 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
        <p>
          An <a href="https://www.antonioarcher.com">Archer</a> YSWS
        </p>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Welcome to ChronoGrowth!
        </h1>
        <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
          Create your own time tracker/productivity app for your desk and win a
          desk/tablet.
        </p>
        <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
          Idea: Create a simple desk accessory, you can build a website to keep
          track of time, build your own clock, a calendar. You can create
          whatever you want, only requirement is growth.
        </p>
        <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
          You must create something that shows progress, growth, or time. For
          example, a plant that grows as time progress. a small stream becoming
          a mighty river. or a fense so you can watch paint dry. If you go
          productivity route, you can create something that grows as you
          complete tasks, work on hackatime, or even a simple timer that shows
          how much time you have spent on a task. The sky is the limit, just
          make sure it shows growth.
        </p>

        <PrizeGrid />
      </main>

      <footer className="mx-auto mt-8 max-w-5xl text-center text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Hackclub made by Kids for Kids. A
        special thanks to DeepWoods font for the font
      </footer>
    </div>
  );
}
