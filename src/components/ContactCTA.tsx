import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contactCTA } from "@/data/site";

export function ContactCTA() {
  return (
    <Section id={contactCTA.id} className="bg-blue-600 text-white">
      <div className="text-center max-w-2xl mx-auto">
        <SectionHeading className="mb-4">{contactCTA.title}</SectionHeading>
        <p className="text-blue-50 text-lg mb-8">{contactCTA.subtitle}</p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
          <a href={contactCTA.cta.href}>{contactCTA.cta.label}</a>
        </Button>
      </div>
    </Section>
  );
}
