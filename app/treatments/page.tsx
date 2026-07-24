import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { TreatmentMenu } from "@/components/treatment-menu";
import { BOOKING_URL } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Treatments & Prices",
  description:
    "Explore lip enhancement, facial balancing, skin and contouring treatments at The Aesthetic Way.",
};

export default function TreatmentsPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--treatments">
        <div>
          <p className="eyebrow">Treatment menu · current pricing</p>
          <h1>
            Designed around
            <br />
            <em>your features.</em>
          </h1>
        </div>
        <div className="page-hero__aside">
          <p>
            Every treatment begins with a suitability assessment and a
            conversation about the result you want to achieve.
          </p>
          <a className="button button--dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book online <ArrowUpRight />
          </a>
        </div>
        <span className="page-hero__index">01 / MENU</span>
      </section>

      <section className="treatments-page section-pad">
        <TreatmentMenu />
      </section>

      <section className="consultation-strip">
        <div>
          <p className="eyebrow">Not sure where to start?</p>
          <h2>Let&apos;s find your way.</h2>
        </div>
        <p>
          Tell Chelsey what you would like to refine and get guidance before
          choosing your appointment.
        </p>
        <a href="https://wa.me/447419742978" target="_blank" rel="noreferrer">
          Ask on WhatsApp <ArrowRight />
        </a>
      </section>

      <section className="treatment-disclaimer section-pad">
        <div>
          <h2>Before you book</h2>
          <p>
            All treatments are subject to consultation and suitability.
            Outcomes, healing and longevity vary between individuals. Prices
            and availability can change; the live booking page is the final
            source of truth at checkout.
          </p>
        </div>
        <Link href="/policies" className="text-link">
          Read booking policies <ArrowRight />
        </Link>
      </section>
    </main>
  );
}
