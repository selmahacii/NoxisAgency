import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, Pause, ChevronRight, ChevronLeft } from "lucide-react";

// Assets
import pAtelierVideo from "@/assets/pAtelierpilates/Screen Video (35).mp4";
import pAtelierImg from "@/assets/pAtelierpilates/image.png";
import pAtelierG1 from "@/assets/pAtelierpilates/image copy.png";
import pAtelierG2 from "@/assets/pAtelierpilates/image copy 2.png";
import pAtelierG3 from "@/assets/pAtelierpilates/image copy 3.png";
import pAtelierG4 from "@/assets/pAtelierpilates/image copy 4.png";

const COLORS = {
  bg: "#F7F6F3",
  bgSecondary: "#EFEDE8",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B6B6B",
  accent: "#C2A98A",
  accentDeep: "#A78B6D",
  divider: "#E3E1DC",
};

export default function PAtelierShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className="min-h-screen font-body selection:bg-[#C2A98A]/30 selection:text-[#1A1A1A]"
      style={{ backgroundColor: COLORS.bg, color: COLORS.textPrimary }}
    >
      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <Classes />
        <Experience />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-6 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="text-xl font-heading tracking-widest uppercase">Atelier</div>
      
      <div className="hidden md:flex gap-12 items-center text-[10px] uppercase tracking-[0.2em] font-medium">
        {["Home", "About", "Classes", "Book"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="relative group overflow-hidden"
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item}</span>
            <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-[#C2A98A]">{item}</span>
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C2A98A] group-hover:w-full transition-all duration-500"
            />
          </a>
        ))}
      </div>

      <button className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-[#C2A98A] transition-colors duration-500 rounded-full">
        Reserve Now
      </button>
    </motion.nav>
  );
}

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={pAtelierVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F6F3]/20 via-transparent to-[#F7F6F3]/40" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="block text-[10px] uppercase tracking-[0.4em] mb-6 opacity-60"
        >
          Mindful Movement · Calm Luxury
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-6xl md:text-9xl font-heading italic tracking-tight leading-[0.85] mb-12"
        >
          Elevate Your <br /> 
          <span className="ml-12 md:ml-24">Practice</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="group relative px-12 py-5 overflow-hidden rounded-full border border-[#1A1A1A]/20 transition-all duration-700 hover:border-[#C2A98A]">
            <span className="relative z-10 text-[10px] uppercase tracking-widest font-medium transition-colors duration-500 group-hover:text-white">
              Discover the Studio
            </span>
            <div className="absolute inset-0 bg-[#C2A98A] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-[1px] h-16 bg-[#1A1A1A]" />
      </motion.div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="about" className="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2A98A]">01 / Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-heading italic leading-tight">
              A space designed <br /> for silent progress.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-light leading-relaxed text-[#6B6B6B] max-w-lg"
          >
            Atelier is more than a studio. It is an editorial approach to fitness. 
            We believe in the beauty of controlled movement, the power of breath, 
            and the luxury of focused time. Our method combines classical Pilates 
            with modern physiological insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-semibold group">
              Our Story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={pAtelierG1} alt="Pilates Session" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-12 -left-12 w-64 aspect-square rounded-2xl overflow-hidden border-8 border-[#F7F6F3] shadow-xl hidden md:block"
          >
            <img src={pAtelierG2} alt="Detail" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Classes() {
  const classes = [
    { title: "Reformer Core", level: "All Levels", duration: "50 min", img: pAtelierG3 },
    { title: "Sculpt & Flow", level: "Intermediate", duration: "60 min", img: pAtelierG4 },
    { title: "Foundation", level: "Beginner", duration: "45 min", img: pAtelierImg },
  ];

  return (
    <section id="classes" className="py-32 bg-[#EFEDE8]">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2A98A]">02 / The Classes</span>
            <h2 className="text-4xl md:text-6xl font-heading italic">Curated Sessions</h2>
          </div>
          <p className="text-[#6B6B6B] max-w-xs mb-2">
            Tailored movements for every body. Each session is limited to 6 guests for personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={cls.img} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest px-6 py-3 rounded-full">View Details</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-heading mb-1">{cls.title}</h3>
                  <p className="text-[10px] text-[#6B6B6B] uppercase tracking-widest">{cls.level} · {cls.duration}</p>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#C2A98A]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={pAtelierG2} alt="Atmosphere" className="w-full h-full object-cover fixed-attachment" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 px-6 lg:px-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-white"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-80">03 / The Experience</span>
          <h2 className="text-5xl md:text-7xl font-heading italic leading-tight">
            Immersion in silence <br /> and light.
          </h2>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            Our studio is designed as a sanctuary. Neutral tones, natural materials, and 
            diffused lighting create an environment where the mind can focus entirely 
            on the body's precision.
          </p>
          <button className="px-10 py-4 bg-white text-[#1A1A1A] text-[10px] uppercase tracking-widest font-semibold hover:bg-[#C2A98A] hover:text-white transition-colors duration-500 rounded-full">
            Tour the Studio
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const items = [
    { text: "The atmosphere here is unlike any other studio. It's a true retreat from the city noise. My practice has never been more focused.", author: "Elena R." },
    { text: "Sophisticated, minimal, and highly professional.  Atelier has redefined my understanding of Pilates and body awareness.", author: "Marc L." },
    { text: "Every detail is considered. From the lighting to the equipment, it's a masterpiece of wellness design.", author: "Sophia V." },
  ];

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="py-32 px-6 lg:px-16 max-w-4xl mx-auto text-center">
      <div className="mb-12 opacity-30 flex justify-center">
        <div className="w-12 h-[1px] bg-[#1A1A1A]" />
      </div>
      
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <p className="text-2xl md:text-3xl font-heading italic leading-relaxed mb-8">
              "{items[index].text}"
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C2A98A]">{items[index].author}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-8 mt-12">
        <button onClick={prev} className="p-4 rounded-full border border-[#E3E1DC] hover:border-[#1A1A1A] transition-colors duration-300">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={next} className="p-4 rounded-full border border-[#E3E1DC] hover:border-[#1A1A1A] transition-colors duration-300">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="book" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="max-w-5xl mx-auto bg-[#EFEDE8] rounded-[3rem] py-24 px-8 text-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] mb-8 block opacity-60">Begin Your Journey</span>
        <h2 className="text-5xl md:text-8xl font-heading italic tracking-tight leading-none mb-12">
          Find Your <br /> Balance.
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-[#1A1A1A] text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#C2A98A] transition-colors duration-500">
            Book a Session
          </button>
          <button className="bg-transparent border border-[#1A1A1A] text-[#1A1A1A] px-12 py-5 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors duration-500">
            View Pricing
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 px-6 lg:px-16 border-t border-[#E3E1DC]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-xl font-heading tracking-widest uppercase"> Atelier</div>
        
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] opacity-60">
          <a href="#" className="hover:text-[#C2A98A]">Instagram</a>
          <a href="#" className="hover:text-[#C2A98A]">Journal</a>
          <a href="#" className="hover:text-[#C2A98A]">Contact</a>
        </div>

        <p className="text-[10px] uppercase tracking-widest opacity-40">
          © 2026  Atelier Pilates. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
