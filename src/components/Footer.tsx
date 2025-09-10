import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-1">
              <p className="text-base font-semibold">AI Ads Creator</p>
              <p className="text-sm text-foreground/70">Turn product images into scroll-stopping UGC videos in minutes.</p>
            </div>
            <div className="text-xs text-foreground/60">
              © {new Date().getFullYear()} AI Ads Creator. All rights reserved.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#how-it-works" className="hover:text-foreground transition-colors">How it works</Link></li>
              <li><Link href="#features" className="hover:text-foreground transition-colors">Key Features</Link></li>
              <li><Link href="#problem-solution" className="hover:text-foreground transition-colors">Problem & Solution</Link></li>
              <li><Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#help" className="hover:text-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


