import Image from "next/image";
import { whatWeDo } from "@/data/site";

export function WhatWeDo() {
  return (
    <section id={whatWeDo.id} className="work" aria-labelledby="work-title">
      <div className="site-shell">
        <div className="work-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {whatWeDo.eyebrow}
            </p>
            <h2 id="work-title" className="section-title">
              {whatWeDo.title}
            </h2>
          </div>
          <p className="section-description">{whatWeDo.subtitle}</p>
        </div>

        <div className="work-list">
          {whatWeDo.groups.map((group) => (
            <article className={`work-row work-row--${group.id}`} key={group.id}>
              <div className="work-visual">
                <span
                  className="work-visual__cross work-visual__cross--one"
                  aria-hidden="true"
                >
                  +
                </span>
                <span
                  className="work-visual__cross work-visual__cross--two"
                  aria-hidden="true"
                >
                  +
                </span>
                <span className="work-visual__orbit" aria-hidden="true" />
                <span className="work-visual__label" aria-hidden="true">
                  CG / {group.number}
                </span>
                <Image
                  src={group.image}
                  alt={group.imageAlt}
                  width={960}
                  height={768}
                  sizes="(min-width: 1000px) 460px, (min-width: 700px) 42vw, 90vw"
                  className="work-visual__image"
                />
              </div>
              <div className="work-row__copy">
                <p className="work-row__meta">
                  <span>{group.number}</span> / {group.label}
                </p>
                <h3>{group.title}</h3>
                <p className="work-row__description">{group.description}</p>
                <ul className="capability-list">
                  {group.capabilities.map((capability) => (
                    <li key={capability.title}>
                      <span className="capability-list__point" aria-hidden="true" />
                      <div>
                        <h4>{capability.title}</h4>
                        <p>{capability.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
