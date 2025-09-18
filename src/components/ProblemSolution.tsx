import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto space-y-10 md:space-y-14">
        <header className="space-y-2 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">You're Drowning in Marketing Tasks</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">Your time, budget, and energy are limited — yet you still need consistent, high-quality video content that actually performs.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-gray-900/40">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Time Constraints</CardTitle>
              <CardDescription className="text-lg md:text-xl">No Time for Content Creation</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80">
              You're wearing CEO, marketer, and customer service hats simultaneously. Between managing operations and serving clients, there's barely time to breathe — let alone create 3–7 videos weekly for social media.
            </CardContent>
          </Card>

          <Card className="border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-gray-900/40">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Budget Limitations</CardTitle>
              <CardDescription className="text-lg md:text-xl">UGC Creators Are Too Expensive</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80">
              At $500–$2,000 per video, hiring creators would cost $6,000–$42,000 monthly. That's more than most small businesses make! Your marketing budget of $200–$2,000/month can't stretch that far.
            </CardContent>
          </Card>

          <Card className="border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-gray-900/40">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Lack of Skills</CardTitle>
              <CardDescription className="text-lg md:text-xl">Video Editing Feels Impossible</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80">
              Adobe Premiere and Final Cut Pro might as well be rocket science. You know 87% of consumers want video content, but complex editing software leaves you frustrated and stuck with static posts.
            </CardContent>
          </Card>

          <Card className="border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-gray-900/40">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Consistency Struggles</CardTitle>
              <CardDescription className="text-lg md:text-xl">Inconsistent Posting Kills Reach</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80">
              The algorithm punishes irregular posting, but creating consistent content feels impossible. You've watched your engagement plummet as competitors with steady content streams steal your audience.
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}


