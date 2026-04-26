import { ArrowUpRight, Globe, Layers, BarChart3, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();

  const services: { icon: LucideIcon; title: string; body: string }[] = [
    {
      icon: Globe,
      title: t("services.1.title"),
      body: t("services.1.desc"),
    },
    {
      icon: Layers,
      title: t("services.2.title"),
      body: t("services.2.desc"),
    },
    {
      icon: BarChart3,
      title: t("services.3.title"),
      body: t("services.3.desc"),
    },
  ];

  return (
    <section className="px-6 lg:px-16 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="liquid-glass inline-block rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
          {t("services.badge")}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] max-w-3xl mx-auto">
          {t("services.title")}
        </h2>
        <p className="text-foreground/60 font-body font-light text-base max-w-xl mx-auto mt-6">
          {t("services.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, body }) => (
          <div key={title} className="liquid-glass rounded-2xl p-7 flex flex-col gap-5 group">
            <div className="flex items-center justify-between">
              <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center">
                <Icon className="h-4 w-4 text-foreground" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-foreground/40 group-hover:text-foreground transition" />
            </div>
            <div>
              <h3 className="text-foreground font-body font-medium text-lg mb-3 leading-tight">{title}</h3>
              <p className="text-foreground/60 font-body font-light text-sm leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
