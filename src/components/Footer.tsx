import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
          <div className="space-y-1">
            <p className="text-base font-semibold">AI Ads Creator</p>
            <p className="text-sm text-foreground/70">Turn product images into scroll-stopping UGC videos.</p>
          </div>
          <ul className="flex flex-wrap items-center gap-5 text-sm">
            <li><Link href="#how-it-works" className="hover:text-foreground">How it works</Link></li>
            <li><Link href="#pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link href="#faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link href="#help" className="hover:text-foreground">Help</Link></li>
            <li><Link href="#terms" className="hover:text-foreground">Terms</Link></li>
            <li><Link href="#privacy" className="hover:text-foreground">Privacy</Link></li>
          </ul>
        </div>
        <div className="mt-8 text-xs text-foreground/60">© {new Date().getFullYear()} AI Ads Creator. All rights reserved.</div>
      </div>
    </footer>
  );
}


