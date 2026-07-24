import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404 · Wrong turn</p>
      <h1>
        Let&apos;s find your
        <br />
        <em>way back.</em>
      </h1>
      <Link className="button button--dark" href="/">
        Return home <ArrowRight />
      </Link>
    </main>
  );
}
