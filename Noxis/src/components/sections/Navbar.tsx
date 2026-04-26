import { ArrowUpRight, Menu, X, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/noxis-logo.png";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

  const links = [
    { to: "/" as const, label: t("nav.home") },
    { to: "/services" as const, label: t("nav.services") },
    { to: "/work" as const, label: t("nav.work") },
    { to: "/process" as const, label: t("nav.process") },
    { to: "/contact" as const, label: t("nav.contact") },
  ];

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
        <Link to="/" className="flex items-center pointer-events-auto">
          <img src={logo} alt="Noxis" className="h-7 md:h-8 w-auto" height={32} />
        </Link>

        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1 items-center gap-1 pointer-events-auto">
          {/* ... existing links ... */}
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/70 font-body hover:text-foreground transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ className: "px-3 py-2 text-sm font-medium text-foreground font-body" }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className="ml-1 inline-flex items-center gap-1 text-foreground/70 hover:text-foreground px-2.5 py-2 text-xs font-medium font-body uppercase tracking-wider transition"
            aria-label="Switch language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "fr" ? "AR" : "FR"}
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-planner"))}
            className="ml-1 inline-flex items-center gap-1 liquid-glass rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground hover:bg-foreground/5 transition"
          >
            {t("nav.quote")}
          </button>
          <Link
            to="/contact"
            className="ml-1 inline-flex items-center gap-1 bg-primary text-primary-foreground rounded-full px-3.5 py-1.5 text-sm font-medium hover:bg-primary/90 transition"
          >
            {t("nav.cta")} <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-foreground pointer-events-auto"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden bg-background/95 backdrop-blur-md flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setOpen(false)}
              className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center text-foreground"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-3xl font-heading italic text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent("open-planner"));
              }}
              className="mt-4 bg-primary text-primary-foreground rounded-full px-6 py-3 text-base font-medium font-body"
            >
              {t("nav.quote")}
            </button>
            <button
              onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
              className="mt-4 liquid-glass rounded-full px-4 py-2 text-sm text-foreground font-body inline-flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {lang === "fr" ? "العربية" : "Français"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
