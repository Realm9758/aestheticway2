"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "@/components/icons";
import {
  bookingLink,
  treatmentGroups,
  type TreatmentGroup,
} from "@/data/treatments";

export function TreatmentMenu() {
  const [active, setActive] = useState("all");

  const visibleGroups = useMemo(
    () =>
      active === "all"
        ? treatmentGroups
        : treatmentGroups.filter((group) => group.id === active),
    [active],
  );

  return (
    <>
      <div className="treatment-tabs" aria-label="Filter treatments">
        <button
          type="button"
          className={active === "all" ? "is-active" : ""}
          onClick={() => setActive("all")}
        >
          All treatments
        </button>
        {treatmentGroups.map((group) => (
          <button
            type="button"
            key={group.id}
            className={active === group.id ? "is-active" : ""}
            onClick={() => setActive(group.id)}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div className="treatment-directory" aria-live="polite">
        {visibleGroups.map((group) => (
          <TreatmentSection key={group.id} group={group} />
        ))}
      </div>
    </>
  );
}

function TreatmentSection({ group }: { group: TreatmentGroup }) {
  return (
    <section className="menu-group" id={group.id}>
      <div className="menu-group__intro">
        <p className="eyebrow">Treatment collection</p>
        <h2>{group.name}</h2>
        <p>{group.intro}</p>
        {group.note && <p className="menu-group__note">{group.note}</p>}
      </div>
      <div className="menu-group__items">
        {group.treatments.map((treatment) => (
          <a
            className="menu-treatment"
            href={bookingLink(treatment.slug)}
            target="_blank"
            rel="noreferrer"
            key={`${group.id}-${treatment.name}`}
          >
            <div>
              <h3>{treatment.name}</h3>
              <p>
                {treatment.duration ? `${treatment.duration} min` : "Consultation required"}
                {typeof treatment.deposit === "number" && treatment.deposit > 0
                  ? ` · £${formatPrice(treatment.deposit)} deposit`
                  : ""}
              </p>
            </div>
            <div className="menu-treatment__price">
              {typeof treatment.price === "number" ? (
                <>
                  <span>from</span> £{formatPrice(treatment.price)}
                </>
              ) : (
                "Enquire"
              )}
              <ArrowUpRight />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(2);
}
