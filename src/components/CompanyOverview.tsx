"use client";

import { Section } from "@/components/ui/Section";
import { companyOverview } from "@/data/site";
import { motion } from "framer-motion";

export function CompanyOverview() {
  return (
    <Section id={companyOverview.id} className="bg-slate-50">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {companyOverview.title}
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          {companyOverview.description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {companyOverview.stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100"
          >
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
