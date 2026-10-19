"use client";

import * as React from "react";
import Image from "next/image";
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
        "site-header",
        scrolled && "site-header--scrolled",
        isOpen && "site-header--open",
      )}
    >
      <div className="site-shell site-header__inner">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="brand" aria-label="CookieGeek home">
          <span className="brand__mark">
            <Image src="/brand/cookie-mark.webp" alt="" width={44} height={44} />
          </span>
          <span className="brand__name">{siteConfig.logoText}</span>
        </a>

        <nav aria-label="Main" className="site-nav">
          {navbar.links.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a className="site-header__contact" href="#contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? (
            <CloseIcon width={22} height={22} />
          ) : (
            <MenuIcon width={22} height={22} />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        ref={drawerRef}
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={clsx("mobile-nav-wrap", isOpen && "mobile-nav-wrap--open")}
      >
        <div className="mobile-nav-wrap__inner">
          <nav aria-label="Mobile" className="site-shell mobile-nav">
            {navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav__link"
                onClick={() => setIsOpen(false)}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
