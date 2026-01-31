"use client";

import { Section } from "@/components/ui/Section";
import { whatWeDo } from "@/data/site";
import { motion } from "framer-motion";

export function WhatWeDo() {
  return (
    <Section id={whatWeDo.id}>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {whatWeDo.title}
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          {whatWeDo.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whatWeDo.features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
