import { Button } from "@/components/ui/Button";
import { hero } from "@/data/site";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-rise flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg">{hero.subtitle}</p>

            <div className="space-y-2">
              {hero.points.map((point) => (
                <div key={point} className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <a href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</a>
              </Button>
            </div>
          </div>

          <div
            className="animate-rise relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[500px] bg-slate-100"
            style={{ animationDelay: "150ms" }}
          >
            {/* next/image cannot emit a srcSet while images.unoptimized is set, so the
                hero art ships as pre-encoded WebP widths served through <picture>,
                with the original PNG as the fallback for anything without WebP. */}
            <picture>
              <source
                type="image/webp"
                srcSet={hero.image.webp
                  .map((source) => `${source.src} ${source.width}w`)
                  .join(", ")}
                sizes={hero.image.sizes}
              />
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
