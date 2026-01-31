import { footer, siteConfig } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-bold text-white tracking-tight">
              {siteConfig.logoText}
            </span>
            <p className="mt-4 text-sm">
              {siteConfig.description}
            </p>
          </div>
          
          <div className="col-span-1">
             {/* Spacer or additional columns if needed */}
          </div>

          <div className="col-span-1">
             {/* Links column example */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800">
          <p className="text-sm">
            {footer.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
