import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-shell hero-shell">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--bright hero-enter">
            <span className="eyebrow-dot" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-title">
            <span>{hero.titleFirst}</span>
            <span className="hero-title__accent">{hero.titleSecond}</span>
          </h1>
          <p className="hero-subtitle hero-enter hero-enter--three">{hero.subtitle}</p>
          <div className="hero-actions hero-enter hero-enter--four">
            <Button asChild size="lg">
              <a href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label} <span aria-hidden="true">↗</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={hero.ctaSecondary.href}>
                {hero.ctaSecondary.label} <span aria-hidden="true">→</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art__halo" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--outer" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--inner" aria-hidden="true" />
          <span className="hero-art__node hero-art__node--one" aria-hidden="true" />
          <span className="hero-art__node hero-art__node--two" aria-hidden="true" />
          <span className="hero-art__node hero-art__node--three" aria-hidden="true" />
          <span className="hero-art__signal hero-art__signal--top" aria-hidden="true">
            <span className="hero-art__signal-light" /> IDEA / 01
          </span>
          <span className="hero-art__signal hero-art__signal--bottom" aria-hidden="true">
            IN PROGRESS <span className="hero-art__signal-bars">▂ ▄ ▆</span>
          </span>
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={1200}
            height={960}
            priority
            sizes="(min-width: 1100px) 560px, (min-width: 700px) 46vw, 90vw"
            className="hero-art__mascot"
          />
        </div>
      </div>
      <div className="site-shell hero-bottom" aria-hidden="true">
        <span>
          PRODUCT THINKING <b>·</b> DESIGN <b>·</b> ENGINEERING
        </span>
        <span className="hero-bottom__scroll">
          SCROLL TO EXPLORE <span>↓</span>
        </span>
      </div>
    </section>
  );
}
