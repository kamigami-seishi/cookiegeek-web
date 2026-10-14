import { footer, siteConfig } from "@/data/site";

function FooterLink({ href, label }: { href: string; label: string }) {
  // Plain anchors: every href is either an in-page #hash or an external/mailto
  // target, so next/link would only contribute client runtime.
  return (
    <a href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-3 md:col-span-1">
            <span className="text-xl font-bold text-white tracking-tight">
              {siteConfig.logoText}
            </span>
            <p className="mt-4 text-sm">{siteConfig.tagline}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800">
          <p className="text-sm">{footer.copyright(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
}
