import Image from "next/image";
import { ourVision } from "@/data/site";

export function OurVision() {
  return (
    <section id={ourVision.id} className="vision" aria-labelledby="vision-title">
      <div className="vision__grid" aria-hidden="true" />
      <div className="site-shell vision__inner">
        <div className="vision__copy">
          <p className="eyebrow eyebrow--bright">
            <span className="eyebrow-dot" />
            {ourVision.eyebrow}
          </p>
          <h2 id="vision-title" className="section-title">
            {ourVision.title}
          </h2>
          <p className="section-description">{ourVision.description}</p>
        </div>
        <div className="vision__graphic" aria-hidden="true">
          <span className="vision__ring vision__ring--outer" />
          <span className="vision__ring vision__ring--inner" />
          <span className="vision__center">
            <Image src="/brand/cookie-mark.webp" alt="" width={512} height={512} />
          </span>
          <span className="vision__satellite vision__satellite--one" />
          <span className="vision__satellite vision__satellite--two" />
          <span className="vision__satellite vision__satellite--three" />
          <span className="vision__caption">{ourVision.note}</span>
        </div>
      </div>
    </section>
  );
}
