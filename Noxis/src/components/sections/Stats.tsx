import { HlsVideo } from "@/components/HlsVideo";

const stats = [
  { v: "35+", l: "Projets livrés" },
  { v: "8", l: "Experts Senior & Mid" },
  { v: "4 ans", l: "D'existence" },
  { v: "100%", l: "Engagement" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-[1.2] contrast-[0.8] opacity-30"
      />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to top, transparent, var(--background))" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />
      <div className="relative z-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground leading-none mb-2">
                {s.v}
              </div>
              <div className="text-foreground/60 font-body font-light text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
