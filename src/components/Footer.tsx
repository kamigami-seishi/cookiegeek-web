import Image from "next/image";
import { footer, siteConfig } from "@/data/site";

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="footer-link">
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-shell">
        <div className="footer__top">
          <div className="footer__brand-block">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="brand" aria-label="CookieGeek home">
              <span className="brand__mark">
                <Image src="/brand/cookie-mark.webp" alt="" width={44} height={44} />
              </span>
              <span className="brand__name">{siteConfig.logoText}</span>
            </a>
            <p>{siteConfig.tagline}</p>
          </div>
          <div className="footer__columns">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <p>{footer.copyright(new Date().getFullYear())}</p>
          <span>
            Made with curiosity <span aria-hidden="true">✦</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
