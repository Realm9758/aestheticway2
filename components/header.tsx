"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/data/treatments";
import { ArrowUpRight, Close, Menu } from "@/components/icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/#results", label: "Results" },
  { href: "/policies", label: "Policies" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="The Aesthetic Way home">
          <span>The</span>
          <strong>Aesthetic Way</strong>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Book now
          <ArrowUpRight />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} style={{ "--index": index } as React.CSSProperties}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <p>Luxury results. Personal approach.</p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book your appointment <ArrowUpRight />
          </a>
        </div>
      </div>
    </>
  );
}
