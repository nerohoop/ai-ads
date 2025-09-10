"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {useState, FormEvent, useEffect, useRef} from "react";
import gsap from "gsap";

export default function Hero() {
  const [email, setEmail] = useState("");
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const cursorElement = cursorRef.current;
    if (!titleElement) return;

    const fullText = "Winning AI Ads, Made Simple";
    titleElement.textContent = "";

    const state = {chars: 0} as {chars: number};

    const tl = gsap.timeline();
    tl.to(state, {
      chars: fullText.length,
      duration: 1.5,
      ease: "none",
      onUpdate: () => {
        const count = Math.round(state.chars);
        titleElement.textContent = fullText.slice(0, count);
      },
    });

    if (cursorElement) {
      gsap.to(cursorElement, {
        opacity: 0,
        duration: 0.7,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    return () => {
      tl.kill();
      gsap.killTweensOf(cursorElement);
    };
  }, []);

  function handleJoinWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    // TODO: Connect to your backend or mailing list provider.
    // For now, just acknowledge the submission.
    alert("Thanks for joining the waitlist! We'll be in touch soon.");
    setEmail("");
  }
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        <div className="space-y-6">
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight" aria-label="Winning AI Ads, Made Simple">
            <span ref={titleRef} />
            <span ref={cursorRef} className="ml-1 inline-block align-middle w-[2px] h-[1em] bg-current" />
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-prose">
            Turn Product Images Into Scroll-Stopping UGC Videos in Minutes
          </p>
          <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-11 w-full sm:flex-1 px-4 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" className="h-11 px-6">Join waitlist</Button>
          </form>
        </div>
        <div className="relative mx-auto w-full max-w-[380px] aspect-[9/19]">
          <div className="absolute inset-0 rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-gradient-to-b from-black/5 to-black/10 dark:from-white/10 dark:to-white/5 shadow-xl overflow-hidden">
            <div className="absolute inset-[10px] rounded-[2rem] bg-background overflow-hidden">
              <Image
                src="/iphone-mock.png"
                alt="App preview"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-4 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="absolute left-0 top-20 w-1.5 h-24 rounded-r bg-black/15 dark:bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}

