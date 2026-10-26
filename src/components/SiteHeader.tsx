"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

// Shared responsive navigation. The mobile menu closes after each selection.
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/archive/live", label: "Live history" },
    { href: "/archive/vinyl", label: "Vinyl vault" },
    { href: "/archive/festivals", label: "Festivals" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Incinerator home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">I</span>
        <span className="brand-word">INCINERATOR<span className="brand-dot">.</span></span>
      </Link>

      <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/archive/vinyl" onClick={() => setMenuOpen(false)}>
          Enter archive <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </nav>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
