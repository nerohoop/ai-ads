import { Check, X } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      <div className="space-y-10">
        <header className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Problem / Solution</h2>
          <p className="text-foreground/80 max-w-prose">
            UGC Ads Maker removes the bottlenecks of traditional video production with AI-first workflows.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-background">
            <h3 className="text-xl font-semibold mb-4">Pain points</h3>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 text-red-500" />
                <span>Expensive video production with freelancers, studios, and editing.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 text-red-500" />
                <span>Time-consuming planning, shooting, revisions, and approvals.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 text-red-500" />
                <span>Lack of expertise in scripting, directing, and ad testing.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-background">
            <h3 className="text-xl font-semibold mb-4">How UGC Ads Maker solves this</h3>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 text-green-500" />
                <span>AI-generated scripts, voiceover, and motion — no filming required.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 text-green-500" />
                <span>Create multiple ad variations in minutes, not weeks.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 text-green-500" />
                <span>Built-in best practices for hooks, CTAs, and platform formats.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Traditional vs. UGC Ads Maker</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-b from-black/5 to-black/10 dark:from-white/10 dark:to-white/5 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg font-semibold">Traditional Production</span>
                <X className="h-5 w-5 text-red-500" />
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li>High upfront cost</li>
                <li>Weeks to deliver</li>
                <li>Complex logistics</li>
                <li>Limited iterations</li>
              </ul>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-b from-emerald-500/10 to-emerald-500/5 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg font-semibold">UGC Ads Maker</span>
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li>Affordable, usage-based pricing</li>
                <li>Minutes to generate</li>
                <li>No shoots — image to video</li>
                <li>Rapid A/B variations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


