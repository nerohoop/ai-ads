import {Users, FileText, Mic, Package} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function KeyFeatures() {
  const features = [
    {
      icon: Users,
      title: "Diverse AI actor library",
      description: "Choose from thousands of on-screen talent across different styles, demographics, and vibes to perfectly match your brand identity. Our AI actors can represent any age, ethnicity, or personality type you need for your campaign.",
    },
    {
      icon: FileText,
      title: "Script generation and customization",
      description: "Auto-generate compelling hooks, creative angles, and powerful CTAs using advanced AI. Then easily customize the copy to match your unique brand voice and messaging strategy for maximum impact.",
    },
    {
      icon: Mic,
      title: "Voice selection and personalization",
      description: "Pick from hundreds of natural-sounding voices in multiple languages and emotional tones. Add custom pronunciations for your brand and product names to ensure perfect delivery every time.",
    },
    {
      icon: Package,
      title: "Product-in-hand video creation",
      description: "Place your product in realistic scenes and hands without any filming required. Our AI technology creates photorealistic product demonstrations that showcase your items in the best possible light.",
    },
  ];

  return (
    <section id="features" className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto space-y-10 md:space-y-14">
        <header className="space-y-3 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Key Features</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            Everything you need to produce high-performing ads — fast, on-brand, and at scale.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground text-background shrink-0">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <CardTitle className="text-xl">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-foreground/80 leading-relaxed">{description}</p>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </section>
  );
}


