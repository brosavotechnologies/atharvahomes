import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-foreground">{site.name}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A construction and interior design practice working across {site.city}.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Explore</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Services</p>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service.slug} className="text-sm text-foreground/80">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              <li>{site.contact.address}</li>
              <li>{site.contact.phone}</li>
              <li>{site.contact.email}</li>
              <li>{site.contact.hours}</li>
            </ul>
            <p className="mt-4 text-xs italic text-muted-foreground">
              Contact details are placeholders — share the real ones and we&rsquo;ll update them.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
  {/* Copyright */}
  <p className="text-xs text-muted-foreground">
    &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
  </p>

  {/* Social + Made by */}
  <div className="flex flex-wrap items-center gap-6">
    {site.social.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
      >
        {s.label}
      </a>
    ))}

    <span className="h-3 w-px bg-border" />

    <a
      href="https://www.brosavo.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      Made by{" "}
      <span className="font-medium text-foreground">
        BROSAVO
      </span>
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}
