import Link from "next/link";
import { Plane, Smartphone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background shadow-sm">
            <Plane className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-xl font-semibold tracking-tight">AI Ads Creator</span>
        </Link>

        {/* Center: Primary nav links */}
        <ul className="hidden md:flex items-center gap-10 text-foreground font-normal">
          <li>
            <Link href="#pricing" className="text-base hover:text-foreground transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-base hover:text-foreground transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#passport" className="text-base hover:text-foreground transition-colors">
              Passport
            </Link>
          </li>
          <li>
            <Link href="#help" className="text-base hover:text-foreground transition-colors">
              Help Center
            </Link>
          </li>
        </ul>

        {/* Right: Call to action */}
        <Link
          href="#app"
          className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:opacity-80"
        >
          Get the app
          <Smartphone className="h-5 w-5" aria-hidden />
        </Link>
      </nav>
    </header>
  );
}


