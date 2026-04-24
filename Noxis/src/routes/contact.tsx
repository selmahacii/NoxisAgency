import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { Reveal } from "@/components/Reveal";
import contactHeroImg from "@/assets/image copy 7.png";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Noxis Tech Agency" },
      {
        name: "description",
        content:
          "Parlez-nous de votre projet. Nous répondons sous 24h avec une vision claire.",
      },
      { property: "og:title", content: "Contact — Noxis Tech Agency" },
      {
        property: "og:description",
        content: "Démarrez un projet avec nous. Réponse sous 24 heures.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6 lg:px-16 max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
              Contactez-nous
            </div>
            <h1 className="text-5xl md:text-7xl font-heading italic text-foreground tracking-tight leading-[0.9] mb-6">
              Discutons de votre projet.
            </h1>
            <p className="text-foreground/60 font-body font-light text-base md:text-lg max-w-xl mx-auto mb-12">
              Parlez-nous de votre idée. Nous revenons vers vous sous 24h avec une proposition claire.
            </p>

            <div className="max-w-4xl mx-auto liquid-glass rounded-3xl overflow-hidden aspect-[21/9] mb-8 relative">
              <img 
                src={contactHeroImg} 
                alt="Contact Noxis" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal className="lg:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="liquid-glass rounded-3xl p-8 md:p-10 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Nom" name="name" />
                <Field label="Entreprise" name="company" />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Budget estimé" name="budget" placeholder="ex. 200.000 DZD – 1.000.000 DZD" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 font-body mb-2">
                  Détails du projet
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-foreground/5 border border-foreground/15 rounded-2xl px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium hover:opacity-90 transition"
              >
                {sent ? "Merci — nous vous recontacterons" : "Envoyer le message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="space-y-6">
            <div className="liquid-glass rounded-2xl p-6">
              <Mail className="h-5 w-5 text-foreground mb-3" />
              <div className="text-xs uppercase tracking-widest text-foreground/40 font-body mb-1">Email</div>
              <a href="mailto:selmaahacii@gmail.com" className="text-foreground font-body text-sm">selmaahacii@gmail.com</a>
            </div>
            <div className="liquid-glass rounded-2xl p-6">
              <MapPin className="h-5 w-5 text-foreground mb-3" />
              <div className="text-xs uppercase tracking-widest text-foreground/40 font-body mb-1">Téléphone</div>
              <a href="tel:+213780125700" className="text-foreground font-body text-sm">+213 (0) 780 12 57 00</a>
            </div>
            <div className="liquid-glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-widest text-foreground/40 font-body mb-1">Délai de réponse</div>
              <div className="text-foreground font-body text-sm">Sous 24 heures</div>
            </div>
          </Reveal>
        </div>
      </div>
      <Reveal><CtaFooter /></Reveal>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-foreground/50 font-body mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-foreground/5 border border-foreground/15 rounded-full px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition"
      />
    </div>
  );
}
