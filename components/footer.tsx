import Link from "next/link";
import { ArrowUpRight, Instagram } from "@/components/icons";
import { BOOKING_URL } from "@/data/treatments";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="footer-kicker">The Aesthetic Way</p>
          <h2>
            Your features.
            <br />
            Your story.
          </h2>
        </div>
        <div className="footer-links">
          <div>
            <p>Explore</p>
            <Link href="/treatments">Treatments</Link>
            <Link href="/#about">Meet Chelsey</Link>
            <Link href="/#results">Client results</Link>
            <Link href="/policies">Booking policies</Link>
          </div>
          <div>
            <p>Connect</p>
            <a href="https://www.instagram.com/aestheticwayuk/" target="_blank" rel="noreferrer">
              Instagram <Instagram />
            </a>
            <a href="https://wa.me/447419742978" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="tel:+447419742978">07419 742978</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Aesthetic Way</p>
        <p>Appointments only · Individual results vary</p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer">
          Book online <ArrowUpRight />
        </a>
      </div>
    </footer>
  );
}
