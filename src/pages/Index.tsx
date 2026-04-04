import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import BranchSelector from "@/components/sections/BranchSelector";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ExpertsPreview from "@/components/sections/ExpertsPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, ArrowRight, Zap, Gift, Star, TrendingUp, Award } from "lucide-react";
import MedicalBackground from "@/components/decorations/MedicalBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import analisaImg from "@/assets/analisa.png";
import aureliaImg from "@/assets/aurelia.png";
import analytiaImg from "@/assets/analytia.png";

const fairies = [
  {
    name: "Аналиса",
    role: "Главный проводник портала",
    img: analisaImg,
    color: "from-primary to-[hsl(200,80%,50%)]",
    glow: "group-hover:shadow-[0_0_30px_hsl(174,80%,45%,0.2)]",
    description:
      "Я — старшая из трёх лабораторных фей. Встречаю всех на портале, помогаю найти нужный раздел и направляю к моим сёстрам.",
  },
  {
    name: "Аурелия",
    role: "Помощница для пациентов",
    img: aureliaImg,
    color: "from-patient to-[hsl(35,90%,60%)]",
    glow: "group-hover:shadow-[0_0_30px_hsl(15,90%,60%,0.2)]",
    description:
      "Я помогу вам разобраться в анализах простым языком. Объясню, что означают показатели, и буду рядом на каждом шаге.",
  },
  {
    name: "Аналития",
    role: "Помощница для специалистов",
    img: analytiaImg,
    color: "from-specialist to-[hsl(225,55%,55%)]",
    glow: "group-hover:shadow-[0_0_30px_hsl(230,80%,60%,0.2)]",
    description:
      "Я сопровождаю врачей и специалистов. Помогу освоить AI-инструменты расшифровки анализов и развить клиническое мышление.",
  },
];

const MarqueeBar = () => {
  const items = [
    "Лабораторная диагностика", "AI-расшифровка", "Клиническая биохимия",
    "Гематология", "Иммунология", "Эндокринология", "PRO Club",
    "Сертификация", "База знаний", "Экспертное обучение",
  ];
  return (
    <div className="relative overflow-hidden py-4 border-y border-border/50">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-medium text-muted-foreground/60 flex items-center gap-2">
            <Zap className="w-3 h-3 text-primary/40" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
};

const Index = () => {
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const ctaScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <Layout>
      <HeroSection />

      <MarqueeBar />

      {/* Meet the Fairies */}
      <section className="relative container py-14 overflow-hidden">
        <MedicalBackground density="medium" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-2">
            Ваши <span className="text-gradient-hero">лабораторные феи</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Три сестры-феи помогут вам на каждом шаге
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {fairies.map((fairy, i) => (
            <motion.div
              key={fairy.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`group glass rounded-2xl p-5 text-center transition-all duration-300 hover:scale-[1.03] ${fairy.glow}`}
            >
              <div className="relative inline-block mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${fairy.color} rounded-full blur-xl opacity-20 scale-110`} />
                <img
                  src={fairy.img}
                  alt={fairy.name}
                  className="relative w-24 h-24 mx-auto object-contain character-float"
                  loading="lazy"
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="font-display text-lg font-black text-foreground mb-0.5">{fairy.name}</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{fairy.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{fairy.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <BranchSelector />

      <FeaturesSection />

      <ExpertsPreview />

      {/* Loyalty program */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-2">
              Программа <span className="text-gradient-gold">лояльности</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Зарабатывайте баллы за активность на портале и обменивайте их на скидки, курсы и персональные консультации
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
            {[
              { icon: Zap, name: "Стажёр", desc: "Регистрация и первые шаги", color: "text-muted-foreground", bg: "bg-muted" },
              { icon: Star, name: "Практик", desc: "500+ баллов, скидки на курсы", color: "text-specialist", bg: "bg-specialist/10" },
              { icon: TrendingUp, name: "Эксперт", desc: "1 500+ баллов, AI-доступ", color: "text-primary", bg: "bg-primary/10" },
              { icon: Award, name: "Мастер", desc: "3 500+ баллов, VIP-привилегии", color: "text-gold", bg: "bg-gold/10" },
            ].map((level, i) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 text-center transition-all hover:scale-[1.03]"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl ${level.bg} flex items-center justify-center mb-3`}>
                  <level.icon className={`w-6 h-6 ${level.color}`} />
                </div>
                <h4 className={`font-display font-bold ${level.color}`}>{level.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{level.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                className="flex items-center gap-3 glass rounded-lg p-4"
              >
                <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.text}</p>
                  <p className="text-xs text-gold">+{item.points}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        ref={ctaRef}
        style={{ scale: ctaScale, opacity: ctaOpacity }}
        className="container py-14"
      >
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative text-center px-6 py-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-black text-white mb-3"
            >
              Начните свой путь в мире диагностики
            </motion.h2>
            <p className="text-white/70 mb-8 text-sm max-w-md mx-auto">
              Выберите свой маршрут и откройте доступ к экспертному контенту
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/specialists">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 w-full sm:w-auto gap-2 font-bold shadow-lg hover:scale-[1.02] transition-transform">
                  <Stethoscope className="w-5 h-5" />
                  Я специалист
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/patients">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto gap-2 font-bold hover:scale-[1.02] transition-transform">
                  <Heart className="w-5 h-5" />
                  Я пациент
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
