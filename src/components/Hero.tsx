"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/site";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg">
              {hero.subtitle}
            </p>
            
            <div className="space-y-2">
              {hero.points.map((point, index) => (
                <div key={index} className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[500px]"
          >
            {/* Using unoptimized Next.js Image for static export compatibility if needed, 
                but since we set unoptimized: true in config, standard Image component is fine. */}
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400">
               {/* Placeholder or Actual Image */}
               <Image 
                 src={hero.image.src}
                 alt={hero.image.alt}
                 fill
                 className="object-cover"
                 priority
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
