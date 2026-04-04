import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import BranchSelector from "@/components/sections/BranchSelector";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ExpertsPreview from "@/components/sections/ExpertsPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, ArrowRight, Zap, Gift, Star, TrendingUp, Award, Sparkles, CheckCircle } from "lucide-react";
import MedicalBackground from "@/components/decorations/MedicalBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import analisaImg from "@/assets/analisa.png";
import aureliaImg from "@/assets/aurelia.png";
import analytiaImg from "@/assets/analytia.png";

const fairies = [
  {
    name: "Аналиса",
    role: "Главный проводник",
    img: analisaImg,
    gradient: "from-primary to-[hsl(190,70%,44%)]",
    borderColor: "border-primary/20 hover:border-primary/40",
    glow: "hover:shadow-[0_8px_30px_hsl(170,65%,40%,0.15)]",
    description: "Встречаю всех на портале и направляю к нужному разделу.",
  },
  {
    name: "Аурелия",
    role: "Для пациентов",
    img: aureliaImg,
    gradient: "from-patient to-[hsl(12,65%,58%)]",
    borderColor: "border-patient/20 hover:border-patient/40",
    glow: "hover:shadow-[0_8px_30px_hsl(348,70%,56%,0.15)]",
    description: "Помогу разобраться в анализах простым языком.",
  },
  {
    name: "Аналития",
    role: "Для специалистов",
    img: analytiaImg,
    gradient: "from-specialist to-[hsl(230,65%,55%)]",
    borderColor: "border-specialist/20 hover:border-specialist/40",
    glow: "hover:shadow-[0_8px_30px_hsl(215,80%,50%,0.15)]",
    description: "Помогу освоить AI-инструменты и развить клиническое мышление.",
  },
];

const MarqueeBar = () => {
  const items = [
    "Лабораторная диагностика", "AI-расшифровка", "Клиническая биохимия",
    "Гематология", "Иммунология", "Эндокринология", "PRO Club",
    "Сертификация", "База знаний", "Экспертное обучение",
  ];
  return (
    <div className="relative overflow-hidden py-3.5 bg-gradient-to-r from-primary/5 via-specialist/5 to-patient/5 border-y border-border/40">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-semibold text-foreground/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
};

const whyUs = [
  { icon: CheckCircle, text: "Контент от практикующих врачей" },
  { icon: CheckCircle, text: "AI-инструменты для анализа" },
  { icon: CheckCircle, text: "Программа лояльности" },
  { icon: CheckCircle, text: "Сертификация специалистов" },
];

const Index = () => {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const ctaScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <Layout>
      <HeroSection />

      <MarqueeBar />

      {/* Why us — compact colorful strip */}
      <section className="bg-white py-8 md:py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Fairies — on a soft teal bg */}
      <section className="relative py-10 md:py-14 bg-gradient-to-b from-primary/[0.04] to-transparent overflow-hidden">
        <MedicalBackground density="medium" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-2">
              Ваши <span className="text-gradient-hero">лабораторные феи</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Три помощника проведут вас по порталу
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {fairies.map((fairy, i) => (
              <motion.div
                key={fairy.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`group bg-white rounded-2xl p-5 text-center border-2 ${fairy.borderColor} transition-all duration-300 hover:scale-[1.02] ${fairy.glow}`}
              >
                <div className="relative inline-block mb-3">
                  <div className={`absolute inset-0 bg-gradient-to-br ${fairy.gradient} rounded-full blur-xl opacity-15 scale-125`} />
                  <img
                    src={fairy.img}
                    alt={fairy.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain character-float"
                    loading="lazy"
                    width={96}
                    height={96}
                  />
                </div>
                <h3 className="font-display text-lg font-black text-foreground mb-0.5">{fairy.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{fairy.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{fairy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BranchSelector />

      {/* Features on a blue-tinted bg */}
      <div className="bg-gradient-to-b from-specialist/[0.03] to-transparent">
        <FeaturesSection />
      </div>

      {/* Experts on white */}
      <div className="bg-white">
        <ExpertsPreview />
      </div>

      {/* Loyalty program — warm gold accent */}
      <section className="relative py-10 md:py-14 bg-gradient-to-b from-[hsl(40,90%,50%,0.04)] to-transparent overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-xs font-bold text-gold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Бонусная программа
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-2">
              Программа <span className="text-gradient-gold">лояльности</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Зарабатывайте баллы за активность и обменивайте на скидки, курсы и консультации
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-8">
            {[
              { icon: Zap, name: "Стажёр", desc: "Первые шаги", color: "text-muted-foreground", bg: "bg-muted", border: "border-border" },
              { icon: Star, name: "Практик", desc: "500+ баллов", color: "text-specialist", bg: "bg-specialist/10", border: "border-specialist/20" },
              { icon: TrendingUp, name: "Эксперт", desc: "1 500+ баллов", color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
              { icon: Award, name: "Мастер", desc: "3 500+ VIP", color: "text-gold", bg: "bg-gold/10", border: "border-gold/20" },
            ].map((level, i) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white rounded-xl p-4 sm:p-5 text-center border-2 ${level.border} transition-all hover:scale-[1.03] hover:shadow-md`}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 mx-auto rounded-xl ${level.bg} flex items-center justify-center mb-2.5`}>
                  <level.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${level.color}`} />
                </div>
                <h4 className={`font-display font-bold text-sm ${level.color}`}>{level.name}</h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{level.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              { text: "Проходите курсы", points: "до 500 баллов", icon: Gift },
              { text: "Приглашайте коллег", points: "150 баллов", icon: Heart },
              { text: "Размещайте рекламу", points: "100 баллов", icon: Star },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gold/20 hover:border-gold/40 transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{item.text}</p>
                  <p className="text-xs font-semibold text-gold">+{item.points}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — vivid gradient */}
      <motion.section
        ref={ctaRef}
        style={{ scale: ctaScale, opacity: ctaOpacity }}
        className="container py-10 md:py-14"
      >
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
          {/* Extra visual flourish */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />
          <div className="relative text-center px-4 sm:px-8 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3">
                Начните свой путь в мире диагностики
              </h2>
              <p className="text-white/70 mb-8 text-sm max-w-md mx-auto">
                Выберите свой маршрут и откройте доступ к экспертному контенту
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/specialists">
                  <Button size="lg" className="bg-white text-foreground hover:bg-white/90 w-full sm:w-auto gap-2 font-bold shadow-xl hover:scale-[1.02] transition-transform">
                    <Stethoscope className="w-5 h-5" />
                    Я специалист
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/patients">
                  <Button size="lg" className="bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 w-full sm:w-auto gap-2 font-bold hover:scale-[1.02] transition-transform">
                    <Heart className="w-5 h-5" />
                    Я пациент
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
