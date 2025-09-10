export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="space-y-10 md:space-y-14">
        <header className="space-y-3 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How It Works</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            Go from a single product image to a finished, scroll-stopping UGC video in minutes.
          </p>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <li className="rounded-xl border border-border/60 p-6 bg-background">
            <span className="text-xs font-medium uppercase text-foreground/60">Step 1</span>
            <h3 className="mt-2 text-lg font-semibold">Upload product image</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Drag and drop or paste a URL. We auto-crop and enhance for best results.
            </p>
          </li>
          <li className="rounded-xl border border-border/60 p-6 bg-background">
            <span className="text-xs font-medium uppercase text-foreground/60">Step 2</span>
            <h3 className="mt-2 text-lg font-semibold">Choose style and AI actor</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Pick UGC styles and an on-brand AI actor to match your audience.
            </p>
          </li>
          <li className="rounded-xl border border-border/60 p-6 bg-background">
            <span className="text-xs font-medium uppercase text-foreground/60">Step 3</span>
            <h3 className="mt-2 text-lg font-semibold">Customize script and settings</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Provide key benefits, tone, hooks, and platform. We handle the rest.
            </p>
          </li>
          <li className="rounded-xl border border-border/60 p-6 bg-background">
            <span className="text-xs font-medium uppercase text-foreground/60">Step 4</span>
            <h3 className="mt-2 text-lg font-semibold">Generate and download</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Render in minutes and export for TikTok, Reels, Shorts, and more.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}


