"use client";

import * as React from "react";
import { clsx } from "clsx";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navbar, siteConfig } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);
    };
    // Throttle to one read per frame and stay off the main thread while scrolling.
    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Escape dismisses the drawer. Focus is only pulled back to the toggle when it
  // was actually inside the drawer, so a keyboard user is never moved elsewhere.
  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const active = document.activeElement;
      const wasInside = active instanceof Node && drawerRef.current?.contains(active);
      setIsOpen(false);
      if (wasInside) toggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-slate-200 py-2"
          : "bg-transparent border-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* This site has a single route, so next/link cannot enable any
            client-side navigation here, and importing it would pull its entire
            runtime (measured at ~3.8 kB gzip) into the client bundle. A full
            reload on logo click is the accepted trade-off. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            {siteConfig.logoText}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden md:flex items-center space-x-8">
          {navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer. It stays mounted so the row transition can animate in both
          directions, which is why `inert` is needed to keep the collapsed links
          out of the tab order and the accessibility tree. */}
      <div
        id="mobile-nav"
        ref={drawerRef}
        inert={!isOpen}
        className={clsx(
          "md:hidden grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden bg-white border-b border-slate-200">
          <nav
            aria-label="Mobile"
            className="container mx-auto px-4 py-4 flex flex-col space-y-4"
          >
            {navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
