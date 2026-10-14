import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyOverview } from "@/data/site";

export function CompanyOverview() {
  return (
    <Section id={companyOverview.id} className="bg-slate-50">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <SectionHeading>{companyOverview.title}</SectionHeading>
        <p className="mt-4 text-lg text-slate-600">{companyOverview.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {companyOverview.stats.map((stat) => (
          <div
            key={stat.label}
            className="reveal text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100"
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
