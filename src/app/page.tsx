import { Hero } from "@/components/Hero";
import { CompanyOverview } from "@/components/CompanyOverview";
import { WhatWeDo } from "@/components/WhatWeDo";
import { OurVision } from "@/components/OurVision";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <CompanyOverview />
      <WhatWeDo />
      <OurVision />
      <ContactCTA />
    </main>
  );
}
