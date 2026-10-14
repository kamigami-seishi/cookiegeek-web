import { BarChart, Globe, LayoutDashboard, Shield, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatWeDo } from "@/data/site";
import type { FeatureIcon } from "@/data/site";

// Resolved here rather than in src/data/site.ts. That module is imported by the
// client-side Navbar, so icon components stored there would be pulled into the
// browser bundle even though they are only ever rendered on the server.
const FEATURE_ICONS: Record<FeatureIcon, LucideIcon> = {
  dashboard: LayoutDashboard,
  shield: Shield,
  zap: Zap,
  globe: Globe,
  chart: BarChart,
  users: Users,
};

export function WhatWeDo() {
  return (
    <Section id={whatWeDo.id}>
      <div className="text-center mb-16">
        <SectionHeading>{whatWeDo.title}</SectionHeading>
        <p className="mt-4 text-lg text-slate-600">{whatWeDo.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whatWeDo.features.map((feature) => {
          const Icon = FEATURE_ICONS[feature.icon];
          return (
            // The reveal owns `transform`, so the hover lift lives on an inner
            // element to avoid the animation overriding it.
            <div key={feature.title} className="reveal">
              <div className="h-full p-8 rounded-2xl border border-slate-200 bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
