import { useState } from "react";

import { Link } from "@tanstack/react-router";

import { Menu, X, ArrowUpRight } from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navigationLinks = navLinks.filter((link) => link.to !== "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main Navbar */}
      <div className="border-b border-[#2C2925]/10 bg-[#F5F1E8]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[92px] max-w-[1380px] items-center justify-between px-7 lg:px-12">
          
          {/* Brand */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex shrink-0 items-center"
          >
            <span className="font-serif text-[29px] font-normal leading-none tracking-[-0.025em] text-[#292622] transition-opacity duration-300 group-hover:opacity-65">
              {site.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex">
            <div className="flex items-center gap-8 lg:gap-11">
              
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: true }}
                  className="group relative py-3 text-[12px] font-normal uppercase tracking-[0.15em] text-[#625D55] transition-colors duration-300 hover:text-[#292622]"
                  activeProps={{
                    className:
                      "group relative py-3 text-[12px] font-normal uppercase tracking-[0.15em] text-[#292622]",
                  }}
                >
                  {link.label}

                  {/* Underline */}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#292622] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              {/* Divider */}
              <span
                aria-hidden="true"
                className="mx-1 h-5 w-px bg-[#292622]/15"
              />

              {/* Start a Project */}
              <Link
                to="/contact"
                className="group flex items-center gap-2 py-3 text-[12px] font-normal uppercase tracking-[0.14em] text-[#292622] transition-opacity duration-300 hover:opacity-60"
              >
                <span>Start a Project</span>

                <ArrowUpRight
                  className="h-[15px] w-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.4}
                />
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center text-[#292622] md:hidden"
          >
            {open ? (
              <X
                className="h-[22px] w-[22px]"
                strokeWidth={1.4}
              />
            ) : (
              <Menu
                className="h-[22px] w-[22px]"
                strokeWidth={1.4}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-b border-[#2C2925]/10 bg-[#F5F1E8]/96 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto max-w-[1380px] px-7 pb-6 pt-2">
              
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  className="block border-b border-[#292622]/10 py-5 text-[13px] font-normal uppercase tracking-[0.15em] text-[#625D55] transition-colors hover:text-[#292622]"
                  activeProps={{
                    className:
                      "block border-b border-[#292622]/10 py-5 text-[13px] font-normal uppercase tracking-[0.15em] text-[#292622]",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-6 text-[13px] font-normal uppercase tracking-[0.14em] text-[#292622]"
              >
                <span>Start a Project</span>

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.4}
                />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}