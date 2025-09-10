import {Check, X, Star} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto space-y-10 md:space-y-14">
        <header className="space-y-3 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Problem / Solution</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            UGC Ads Maker removes the bottlenecks of traditional video production with AI-first workflows.
          </p>
        </header>

        <div className="space-y-4">
          <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-black/10 dark:border-white/10">
                  <TableHead className="text-center font-semibold text-lg border-r border-black/10 dark:border-white/10 py-6">
                    <div className="flex items-center justify-center gap-2">
                      Pain Points
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-semibold text-lg border-r border-black/10 dark:border-white/10 py-6">
                    <div className="space-y-3">
                      <div>Traditional</div>
                    </div>
                  </TableHead>
                  <TableHead className="text-center font-semibold text-lg py-6">
                    <div className="space-y-3">
                      <div>UGC Ads Maker</div>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium border-r border-black/10 dark:border-white/10 text-center text-base py-6">Cost</TableCell>
                  <TableCell className="text-center border-r border-black/10 dark:border-white/10 text-base py-6">High upfront cost</TableCell>
                  <TableCell className="text-center text-base py-6">Affordable pricing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r border-black/10 dark:border-white/10 text-center text-base py-6">Delivery Time</TableCell>
                  <TableCell className="text-center border-r border-black/10 dark:border-white/10 text-base py-6">Weeks to deliver</TableCell>
                  <TableCell className="text-center text-base py-6">Minutes to generate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r border-black/10 dark:border-white/10 text-center text-base py-6">Production Process</TableCell>
                  <TableCell className="text-center border-r border-black/10 dark:border-white/10 text-base py-6">Complex logistics</TableCell>
                  <TableCell className="text-center text-base py-6">No shoots required</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium border-r border-black/10 dark:border-white/10 text-center text-base py-6">Iterations</TableCell>
                  <TableCell className="text-center border-r border-black/10 dark:border-white/10 text-base py-6">Limited iterations</TableCell>
                  <TableCell className="text-center text-base py-6">Unlimited variations</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

      </div>
    </section>
  );
}


