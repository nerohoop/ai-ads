import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="get-started" className="w-full bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Create your first AI ad today</h2>
            <p className="text-base sm:text-lg opacity-90 max-w-prose">
              Start free and generate a production-ready UGC ad in minutes. No credit card required.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link href="#app" className="inline-flex">
              <Button size="lg" className="h-11 px-6 text-base font-semibold">
                Start free trial
              </Button>
            </Link>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-80">Free demo available. Cancel anytime.</p>
      </div>
    </section>
  );
}


