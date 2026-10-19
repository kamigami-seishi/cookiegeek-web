import { Button } from "@/components/ui/Button";
import { contactCTA } from "@/data/site";

export function ContactCTA() {
  return (
    <section id={contactCTA.id} className="contact" aria-labelledby="contact-title">
      <div className="site-shell contact__inner">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {contactCTA.eyebrow}
          </p>
          <h2 id="contact-title" className="section-title">
            {contactCTA.title}
          </h2>
          <p className="section-description">{contactCTA.subtitle}</p>
        </div>
        <Button asChild variant="ink" size="lg">
          <a href={contactCTA.cta.href}>
            {contactCTA.cta.label}
            <span aria-hidden="true">↗</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
