import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { BOOKING_URL } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Booking Policies",
  description:
    "Appointment, deposit, payment, guest and late-arrival policies for The Aesthetic Way.",
};

const policies = [
  {
    number: "01",
    title: "Appointments",
    copy: "All bookings are by appointment only—no walk-ins. A non-refundable deposit is required to secure your slot and is deducted from your total on the day.",
  },
  {
    number: "02",
    title: "Payment",
    copy: "Deposits are taken by bank transfer or secure payment link. The remaining balance must be paid in cash on the day. No-shows and same-day cancellations lose their deposit.",
  },
  {
    number: "03",
    title: "No guests",
    copy: "Please attend your appointment alone. The no +1 policy helps protect safety, comfort and privacy in the treatment space.",
  },
  {
    number: "04",
    title: "Arriving on time",
    copy: "Please arrive promptly. If you are more than 10 minutes late, your appointment may need to be cancelled and your deposit forfeited.",
  },
];

export default function PoliciesPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--policies">
        <div>
          <p className="eyebrow">The details</p>
          <h1>
            Booking,
            <br />
            <em>made clear.</em>
          </h1>
        </div>
        <div className="page-hero__aside">
          <p>
            A few simple policies keep every appointment calm, private and
            running on time.
          </p>
          <a className="button button--dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book online <ArrowUpRight />
          </a>
        </div>
        <span className="page-hero__index">02 / POLICIES</span>
      </section>

      <section className="policies section-pad">
        <div className="policies__intro">
          <p className="eyebrow">Before your appointment</p>
          <h2>Good appointments start with good communication.</h2>
          <p>
            If you are unsure whether you can attend or need to discuss
            anything in advance, contact the clinic as early as possible.
          </p>
        </div>
        <div className="policies__list">
          {policies.map((policy) => (
            <article key={policy.number}>
              <span>{policy.number}</span>
              <div>
                <h3>{policy.title}</h3>
                <p>{policy.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-contact">
        <p>Need to change an appointment?</p>
        <a href="https://wa.me/447419742978" target="_blank" rel="noreferrer">
          Message the clinic <ArrowUpRight />
        </a>
        <a href="tel:+447419742978">07419 742978</a>
      </section>
    </main>
  );
}
