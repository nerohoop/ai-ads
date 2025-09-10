import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import KeyFeatures from "@/components/KeyFeatures";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <ProblemSolution />
      <FAQ />
    </>
  );
}
