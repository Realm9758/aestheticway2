import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Spark } from "@/components/icons";
import { BOOKING_URL, bookingLink } from "@/data/treatments";

const featuredTreatments = [
  {
    number: "01",
    name: "Signature Lips",
    copy: "Shape, softness and definition planned around your natural lip structure.",
    price: "from £100",
    slug: "0.5ml-signature-lips-(-no-pictures-)-0",
  },
  {
    number: "02",
    name: "Facial Balancing",
    copy: "A full-face approach to proportion, profile and considered enhancement.",
    price: "from £200",
    slug: "2ml-package-(-no-pictures-)-0",
  },
  {
    number: "03",
    name: "Skin Boosters",
    copy: "Hydration-focused treatment plans for fresher-looking, luminous skin.",
    price: "from £80",
    slug: "face-skin-booster-0",
  },
  {
    number: "04",
    name: "Microneedling",
    copy: "Collagen-supporting skin treatment for texture, clarity and radiance.",
    price: "from £60",
    slug: "microneedling-0",
  },
];

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Every appointment starts with a consultation. Chelsey will talk through your goals, assess your features and explain the most appropriate options before any treatment goes ahead.",
  },
  {
    question: "Will my result still look natural?",
    answer:
      "That is the intention. Treatment plans are tailored to your proportions, with an emphasis on balance and refinement rather than a one-size-fits-all result.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer:
      "Yes. A non-refundable deposit secures your appointment and is deducted from the final balance on the day. The deposit amount is shown beside each treatment in the booking system.",
  },
  {
    question: "Can I bring someone with me?",
    answer:
      "Appointments are strictly one-to-one, so please attend alone. This keeps the treatment space safe, calm and private.",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/hero-clinic.png"
            alt="Chelsey performing a lip enhancement treatment in The Aesthetic Way clinic"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__wash" />
        </div>
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span />
            CPD-qualified aesthetics practitioner
          </div>
          <h1>
            The art of
            <br />
            looking <em>like you.</em>
          </h1>
          <p className="hero__lead">
            Natural enhancements. Bespoke treatment plans. Exceptional,
            considered results.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book an appointment <ArrowUpRight />
            </a>
            <Link className="text-link" href="/treatments">
              Explore treatments <ArrowRight />
            </Link>
          </div>
          <div className="hero__meta">
            <div>
              <span>Approach</span>
              <strong>Personal, precise, unhurried</strong>
            </div>
            <div>
              <span>Specialising in</span>
              <strong>Lips · balancing · skin</strong>
            </div>
          </div>
        </div>
        <a className="hero__social" href="https://www.instagram.com/aestheticwayuk/" target="_blank" rel="noreferrer">
          @aestheticwayuk <ArrowUpRight />
        </a>
      </section>

      <div className="running-line" aria-hidden="true">
        <div>
          <span>Luxury results</span>
          <Spark />
          <span>Personal approach</span>
          <Spark />
          <span>Your features, elevated</span>
          <Spark />
          <span>Luxury results</span>
          <Spark />
          <span>Personal approach</span>
          <Spark />
          <span>Your features, elevated</span>
          <Spark />
        </div>
      </div>

      <section className="intro section-pad">
        <div className="intro__number" data-reveal>
          <span>01</span>
          <p>The Aesthetic Way</p>
        </div>
        <div className="intro__statement" data-reveal>
          <p className="eyebrow">A different kind of confidence</p>
          <h2>
            Results should feel <em>personal,</em>
            <br />
            never performed.
          </h2>
        </div>
        <div className="intro__copy" data-reveal>
          <p>
            Every treatment is carefully designed around your features and
            goals—whether you are looking for subtle lip enhancement, advanced
            facial balancing or more radiant skin.
          </p>
          <Link className="text-link" href="/#about">
            Our approach <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="treatment-editorial section-pad">
        <div className="editorial-grid">
          <article className="editorial-card editorial-card--tall" data-reveal>
            <div className="editorial-card__image">
              <Image
                src="/images/signature-lips.png"
                alt="Client result after a signature lip enhancement"
                fill
                sizes="(max-width: 800px) 100vw, 38vw"
              />
            </div>
            <div className="editorial-card__label">
              <span>01</span>
              <div>
                <h3>Signature lips</h3>
                <p>Soft definition · tailored volume</p>
              </div>
            </div>
          </article>

          <div className="editorial-side">
            <div className="editorial-heading" data-reveal>
              <p className="eyebrow">Bespoke by design</p>
              <h2>Not a trend. A treatment plan that belongs to you.</h2>
              <p>
                Precision, safety and proportion lead every decision—from a
                subtle first appointment to full facial balancing.
              </p>
              <Link className="button button--outline" href="/treatments">
                View the treatment menu <ArrowRight />
              </Link>
            </div>
            <article className="editorial-card editorial-card--wide" data-reveal>
              <div className="editorial-card__image">
                <Image
                  src="/images/glow-up.jpg"
                  alt="Before and after result from a 4ml Glow Up facial balancing package"
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                />
              </div>
              <div className="editorial-card__label">
                <span>02</span>
                <div>
                  <h3>Facial balancing</h3>
                  <p>Harmony · structure · proportion</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="treatment-list section-pad">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">The edit</p>
            <h2>Signature treatments</h2>
          </div>
          <Link className="text-link" href="/treatments">
            View full menu <ArrowRight />
          </Link>
        </div>
        <div className="treatment-list__rows">
          {featuredTreatments.map((treatment) => (
            <a
              href={bookingLink(treatment.slug)}
              target="_blank"
              rel="noreferrer"
              className="treatment-row"
              key={treatment.number}
              data-reveal
            >
              <span className="treatment-row__number">{treatment.number}</span>
              <h3>{treatment.name}</h3>
              <p>{treatment.copy}</p>
              <strong>{treatment.price}</strong>
              <span className="treatment-row__arrow">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="results section-pad" id="results">
        <div className="results__heading" data-reveal>
          <p className="eyebrow">Real clients · individual results</p>
          <h2>
            The result is
            <br />
            <em>still you.</em>
          </h2>
          <p>
            Every face is different. Every plan should be too. Images show
            real client work; results and healing vary by person.
          </p>
          <a
            className="text-link text-link--light"
            href="https://www.instagram.com/aestheticwayuk/"
            target="_blank"
            rel="noreferrer"
          >
            See more on Instagram <ArrowUpRight />
          </a>
        </div>
        <div className="results__gallery">
          <figure className="result-card result-card--one" data-reveal>
            <Image
              src="/images/princess-package.png"
              alt="Client result following a Princess facial balancing package"
              fill
              sizes="(max-width: 760px) 75vw, 29vw"
            />
            <figcaption>3ml Princess Package</figcaption>
          </figure>
          <figure className="result-card result-card--two" data-reveal>
            <Image
              src="/images/barbie-package.png"
              alt="Before and after facial balancing result"
              fill
              sizes="(max-width: 760px) 75vw, 29vw"
            />
            <figcaption>5ml Barbie Package</figcaption>
          </figure>
          <figure className="result-card result-card--three" data-reveal>
            <Image
              src="/images/skin-booster.jpg"
              alt="Client after skin booster treatment"
              fill
              sizes="(max-width: 760px) 75vw, 29vw"
            />
            <figcaption>Skin Booster</figcaption>
          </figure>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about__image" data-reveal>
          <Image
            src="/images/chelsey.png"
            alt="Chelsey Olawuyi, aesthetics practitioner and founder of The Aesthetic Way"
            fill
            sizes="(max-width: 800px) 100vw, 43vw"
          />
          <div className="about__stamp">
            <span>CPD</span>
            Qualified
          </div>
        </div>
        <div className="about__copy" data-reveal>
          <p className="eyebrow">Meet your practitioner</p>
          <h2>
            Chelsey
            <br />
            <em>Olawuyi.</em>
          </h2>
          <p className="about__lead">
            “I’m passionate about helping clients feel confident through
            natural, refined enhancements.”
          </p>
          <p>
            Chelsey specialises in lip filler, chin enhancement and facial
            balancing. Every treatment is tailored to the individual, with
            safety, precision and client care at the forefront.
          </p>
          <div className="about__values">
            <span>Personal</span>
            <span>Considered</span>
            <span>Refined</span>
          </div>
          <a className="button button--dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Start your journey <ArrowUpRight />
          </a>
        </div>
      </section>

      <section className="journey section-pad">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">The experience</p>
            <h2>Your appointment, the right way.</h2>
          </div>
        </div>
        <div className="journey__steps">
          <article data-reveal>
            <span>01</span>
            <h3>Choose</h3>
            <p>
              Browse the treatment menu and reserve a time through the secure
              online booking system.
            </p>
          </article>
          <article data-reveal>
            <span>02</span>
            <h3>Consult</h3>
            <p>
              Talk through your goals, suitability and a treatment plan shaped
              around your features.
            </p>
          </article>
          <article data-reveal>
            <span>03</span>
            <h3>Treat</h3>
            <p>
              Your treatment is carried out with an unhurried, precision-led
              approach and clear aftercare.
            </p>
          </article>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="faq__heading" data-reveal>
          <p className="eyebrow">Good to know</p>
          <h2>
            A little clarity
            <br />
            before you book.
          </h2>
          <p>
            Need to ask something personal? Message the clinic and Chelsey will
            point you in the right direction.
          </p>
          <a className="text-link" href="https://wa.me/447419742978" target="_blank" rel="noreferrer">
            Ask on WhatsApp <ArrowUpRight />
          </a>
        </div>
        <div className="faq__items" data-reveal>
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary>
                <span>0{index + 1}</span>
                {faq.question}
                <i />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <Image
          src="/images/hero-clinic.png"
          alt=""
          fill
          sizes="100vw"
          className="final-cta__image"
        />
        <div className="final-cta__overlay" />
        <div className="final-cta__content" data-reveal>
          <p className="eyebrow">Ready when you are</p>
          <h2>
            Your aesthetic journey.
            <br />
            <em>The right way.</em>
          </h2>
          <a className="button button--light" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book your appointment <ArrowUpRight />
          </a>
        </div>
      </section>

      <a className="mobile-book-bar" href={BOOKING_URL} target="_blank" rel="noreferrer">
        Book an appointment <ArrowUpRight />
      </a>
    </main>
  );
}
