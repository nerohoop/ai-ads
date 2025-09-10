import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Upload product image",
      description: "Drag and drop or paste a URL. We auto-crop and enhance for best results.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      step: 2,
      title: "Choose style and AI actor",
      description: "Pick UGC styles and an on-brand AI actor to match your audience.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
    },
    {
      step: 3,
      title: "Generate and download",
      description: "Render in minutes and export for TikTok, Reels, Shorts, and more.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section id="how-it-works" className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto space-y-10 md:space-y-14">
        <header className="space-y-3 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">How It Works</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
            Go from a single product image to a finished, scroll-stopping UGC video in minutes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {steps.map((step) => (
            <Card key={step.step} className="h-full overflow-hidden p-0">
              <div className="aspect-video overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="space-y-2">
                  <span className="text-xs font-medium uppercase text-foreground/60">Step {step.step}</span>
                  <CardTitle className="text-lg leading-tight">{step.title}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


