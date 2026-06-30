

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
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
        track of time, build your own clock, a calendar. You can create whatever
        you want, only requirement is growth.
      </p>
      <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
        You must create something that shows progress, growth, or time. For
        example, a plant that grows as time progress. a small stream becoming a
        mighty river. or a fense so you can watch paint dry. If you go
        productivity route, you can create something that grows as you complete
        tasks, work on hackatime, or even a simple timer that shows how much
        time you have spent on a task. The sky is the limit, just make sure it
        shows growth.
      </p>

      <footer className="mt-8 text-center text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Hackclub made by Kids for Kids. A special thanks to DeepWoods font for the font
      </footer>
    </div>
  );
}
