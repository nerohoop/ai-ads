"use client";

import Link from "next/link";
import { Plane, Smartphone } from "lucide-react";
import {smoothScrollTo} from "@/lib/utils";

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
        <ul className="hidden md:flex items-center gap-10 text-gray-500 font-normal">
          <li>
            <button
              onClick={() => smoothScrollTo('how-it-works')}
              className="text-base hover:text-black hover:bg-gray-100 hover:font-medium px-3 py-2 rounded-lg transition-all duration-200"
            >
              How It Works
            </button>
          </li>
          <li>
            <button
              onClick={() => smoothScrollTo('features')}
              className="text-base hover:text-black hover:bg-gray-100 hover:font-medium px-3 py-2 rounded-lg transition-all duration-200"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => smoothScrollTo('problem-solution')}
              className="text-base hover:text-black hover:bg-gray-100 hover:font-medium px-3 py-2 rounded-lg transition-all duration-200"
            >
              Why Choose Us
            </button>
          </li>
          <li>
            <button
              onClick={() => smoothScrollTo('faq')}
              className="text-base hover:text-black hover:bg-gray-100 hover:font-medium px-3 py-2 rounded-lg transition-all duration-200"
            >
              FAQ
            </button>
          </li>
        </ul>

        {/* Right: Call to action */}
        <button
          onClick={() => smoothScrollTo('how-it-works')}
          className="inline-flex items-center gap-2 text-base font-normal text-gray-500 hover:text-black hover:bg-gray-100 hover:font-medium px-3 py-2 rounded-lg transition-all duration-200"
        >
          Get Started
          <Smartphone className="h-5 w-5" aria-hidden />
        </button>
      </nav>
    </header>
  );
}


