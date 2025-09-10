import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="space-y-8">
        <header className="space-y-3 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            Answers to the most common questions about usage, pricing, and rights.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="usage">
            <AccordionTrigger>How does AI Ads Creator work?</AccordionTrigger>
            <AccordionContent>
              Upload a product image, choose a style and AI actor, customize a short script, then generate a platform-ready video in minutes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pricing">
            <AccordionTrigger>How is pricing structured?</AccordionTrigger>
            <AccordionContent>
              We offer flexible plans with a free trial. Paid tiers unlock higher resolution exports, faster rendering, and commercial usage rights.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rights">
            <AccordionTrigger>What rights do I have to the generated videos?</AccordionTrigger>
            <AccordionContent>
              You own the videos you generate, including commercial usage, subject to our acceptable use policy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tech">
            <AccordionTrigger>What are the technical requirements?</AccordionTrigger>
            <AccordionContent>
              A modern browser and stable internet connection are sufficient. Exports are optimized for TikTok, Instagram Reels, and YouTube Shorts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ownership">
            <AccordionTrigger>Who owns the content and data I upload?</AccordionTrigger>
            <AccordionContent>
              You retain ownership of your uploaded assets. We process them to create your video and do not claim ownership over your content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}


