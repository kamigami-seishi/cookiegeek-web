"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { contactCTA } from "@/data/site";
import Link from "next/link";

export function ContactCTA() {
  return (
    <Section id={contactCTA.id} className="bg-blue-600 text-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          {contactCTA.title}
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          {contactCTA.subtitle}
        </p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
          <Link href={contactCTA.cta.href}>
            {contactCTA.cta.label}
          </Link>
        </Button>
      </div>
    </Section>
  );
}
