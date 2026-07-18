export function DeadlineBanner() {
  return (
    <div className="sticky top-0 z-40 bg-brand-red px-3 py-2.5 text-white sm:px-8 sm:py-3">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-3">
        <p className="min-w-0 truncate text-center text-xs font-black uppercase tracking-[0.04em] sm:text-sm sm:tracking-[0.08em]">
          <span className="sm:hidden">Submissions closed · July 17</span>
          <span className="hidden sm:inline">
            Submissions are now closed{" "}
            <span className="text-white/80">· Closed July 17, 11:59 PM Eastern Time</span>
          </span>
        </p>
      </div>
    </div>
  );
}
