import { Film, Users, FileText, Mic, Package } from "lucide-react";

export default function KeyFeatures() {
  const features = [
    {
      icon: Film,
      title: "AI-powered video generation",
      description: "Turn product images and prompts into polished UGC-style videos in minutes.",
    },
    {
      icon: Users,
      title: "Diverse AI actor library",
      description: "Choose on-screen talent across styles, demographics, and vibes to match your brand.",
    },
    {
      icon: FileText,
      title: "Script generation and customization",
      description: "Auto-generate hooks, angles, and CTAs, then tweak copy to your brand voice.",
    },
    {
      icon: Mic,
      title: "Voice selection and personalization",
      description: "Pick voices, languages, and tones. Add pronunciations for brand/product names.",
    },
    {
      icon: Package,
      title: "Product-in-hand video creation",
      description: "Place your product in realistic scenes and hands — no filming required.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      <div className="space-y-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Key Features</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Everything you need to produce high-performing ads — fast, on-brand, and at scale.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-black/10 dark:border-white/10 bg-background p-6 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background shrink-0">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1 text-left">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-foreground/80">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


