import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ourVision } from "@/data/site";
import { Quote } from "lucide-react";

export function OurVision() {
  return (
    <Section id={ourVision.id} className="bg-slate-900 text-white relative">
      {/* Background decoration. The clipping lives on this wrapper instead of on the
          section, so the scroll-driven reveal below has no nested scroll container
          to measure its view() timeline against. */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="reveal relative max-w-4xl mx-auto text-center">
        <SectionHeading className="mb-8">{ourVision.title}</SectionHeading>
        <p className="text-xl text-slate-300 leading-relaxed mb-12">
          {ourVision.description}
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <Quote className="h-8 w-8 text-blue-400 mx-auto mb-6" />
          <blockquote className="text-2xl font-medium italic text-white mb-6">
            &ldquo;{ourVision.quote}&rdquo;
          </blockquote>
          <cite className="not-italic text-slate-400 font-medium">
            — {ourVision.author}
          </cite>
        </div>
      </div>
    </Section>
  );
}
