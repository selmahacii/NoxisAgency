import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Globe, 
  Smartphone, 
  Cpu, 
  Layers, 
  Send,
  Clock,
  Coins
} from "lucide-react";

interface ProjectPlannerProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    id: "services",
    title: "Quel type de projet avez-vous ?",
    subtitle: "Sélectionnez un ou plusieurs domaines d'expertise.",
  },
  {
    id: "budget",
    title: "Quel est votre budget estimé ?",
    subtitle: "Cela nous aide à calibrer la meilleure équipe pour vous.",
  },
  {
    id: "timeline",
    title: "Quel est votre délai ?",
    subtitle: "Quand souhaiteriez-vous lancer le projet ?",
  },
  {
    id: "contact",
    title: "Parlons de vous",
    subtitle: "Comment pouvons-nous vous recontacter ?",
  },
];

const serviceOptions = [
  { id: "web", label: "Site Web & Plateforme", icon: Globe },
  { id: "mobile", label: "Application Mobile", icon: Smartphone },
  { id: "saas", label: "Logiciel SaaS / ERP", icon: Layers },
  { id: "ai", label: "Intelligence Artificielle", icon: Cpu },
];

const budgetOptions = [
  { id: "starter", label: "5k - 15k DZD", desc: "MVP ou projet ciblé" },
  { id: "growth", label: "15k - 50k DZD", desc: "Produit complet" },
  { id: "enterprise", label: "50k+ DZD", desc: "Écosystème complexe" },
];

const timelineOptions = [
  { id: "asap", label: "Dès que possible", desc: "Urgent" },
  { id: "3months", label: "1 à 3 mois", desc: "Planning standard" },
  { id: "flexible", label: "Flexible", desc: "Exploration" },
];

export function ProjectPlanner({ isOpen, onClose }: ProjectPlannerProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    services: [] as string[],
    budget: "",
    timeline: "",
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id) 
        ? prev.services.filter(s => s !== id) 
        : [...prev.services, id]
    }));
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={onClose} />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-background border border-foreground/5 rounded-[32px] overflow-hidden shadow-2xl shadow-primary/10"
          onClick={e => e.stopPropagation()}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-foreground/5">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-foreground/40 hover:text-foreground transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-8 md:p-12">
            {!isSuccess ? (
              <div className="space-y-10">
                <header className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                    Étape {step + 1} sur {steps.length}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading italic text-foreground tracking-tight">
                    {steps[step].title}
                  </h2>
                  <p className="text-foreground/50 font-body font-light text-sm">
                    {steps[step].subtitle}
                  </p>
                </header>

                <main className="min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step === 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {serviceOptions.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => toggleService(opt.id)}
                              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                                formData.services.includes(opt.id)
                                  ? "bg-primary/5 border-primary text-foreground"
                                  : "bg-foreground/[0.02] border-foreground/5 text-foreground/60 hover:bg-foreground/[0.05]"
                              }`}
                            >
                              <div className={`p-2 rounded-lg ${formData.services.includes(opt.id) ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`}>
                                <opt.icon className="h-4 w-4" />
                              </div>
                              <span className="font-body font-medium text-sm">{opt.label}</span>
                              {formData.services.includes(opt.id) && <Check className="ml-auto h-4 w-4 text-primary" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {step === 1 && (
                        <div className="space-y-3">
                          {budgetOptions.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setFormData({ ...formData, budget: opt.id })}
                              className={`flex items-center gap-4 w-full p-6 rounded-2xl border transition-all text-left ${
                                formData.budget === opt.id
                                  ? "bg-primary/5 border-primary text-foreground"
                                  : "bg-foreground/[0.02] border-foreground/5 text-foreground/60 hover:bg-foreground/[0.05]"
                              }`}
                            >
                              <div className={`p-2 rounded-lg ${formData.budget === opt.id ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`}>
                                <Coins className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-body font-medium text-sm">{opt.label}</div>
                                <div className="text-[10px] text-foreground/40">{opt.desc}</div>
                              </div>
                              {formData.budget === opt.id && <Check className="ml-auto h-4 w-4 text-primary" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-3">
                          {timelineOptions.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setFormData({ ...formData, timeline: opt.id })}
                              className={`flex items-center gap-4 w-full p-6 rounded-2xl border transition-all text-left ${
                                formData.timeline === opt.id
                                  ? "bg-primary/5 border-primary text-foreground"
                                  : "bg-foreground/[0.02] border-foreground/5 text-foreground/60 hover:bg-foreground/[0.05]"
                              }`}
                            >
                              <div className={`p-2 rounded-lg ${formData.timeline === opt.id ? "bg-primary text-primary-foreground" : "bg-foreground/5 text-foreground"}`}>
                                <Clock className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-body font-medium text-sm">{opt.label}</div>
                                <div className="text-[10px] text-foreground/40">{opt.desc}</div>
                              </div>
                              {formData.timeline === opt.id && <Check className="ml-auto h-4 w-4 text-primary" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-widest text-foreground/40 px-1">Nom Complet</label>
                              <input 
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Jean Dupont"
                                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary/40 transition"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-widest text-foreground/40 px-1">Email Business</label>
                              <input 
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                placeholder="jean@entreprise.com"
                                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary/40 transition"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] uppercase tracking-widest text-foreground/40 px-1">Détails optionnels</label>
                            <textarea 
                              value={formData.message}
                              onChange={e => setFormData({ ...formData, message: e.target.value })}
                              placeholder="Parlez-nous brièvement de votre vision..."
                              rows={3}
                              className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-xl px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-primary/40 transition resize-none"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </main>

                <footer className="flex items-center justify-between pt-6 border-t border-foreground/5">
                  <button
                    onClick={handleBack}
                    disabled={step === 0}
                    className={`flex items-center gap-2 text-sm font-medium transition ${step === 0 ? "opacity-0 pointer-events-none" : "text-foreground/40 hover:text-foreground"}`}
                  >
                    <ChevronLeft className="h-4 w-4" /> Retour
                  </button>
                  
                  {step < steps.length - 1 ? (
                    <button
                      onClick={handleNext}
                      disabled={
                        (step === 0 && formData.services.length === 0) ||
                        (step === 1 && !formData.budget) ||
                        (step === 2 && !formData.timeline)
                      }
                      className="bg-foreground text-background px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:opacity-90 transition disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Continuer <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.email || isSubmitting}
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-primary/90 transition disabled:opacity-30"
                    >
                      {isSubmitting ? "Envoi..." : "Envoyer ma demande"} <Send className="h-4 w-4" />
                    </button>
                  )}
                </footer>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-heading italic text-foreground tracking-tight">Demande reçue !</h2>
                  <p className="text-foreground/50 font-body font-light text-base max-w-xs mx-auto">
                    Nous analysons vos besoins et reviendrons vers vous sous 24h avec une vision claire.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
                >
                  Fermer
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
