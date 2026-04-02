import { BookOpen, Brain, Users, Shield, Heart, Sparkles, Search, Award } from "lucide-react";
import { motion } from "framer-motion";
import MedicalBackground from "@/components/decorations/MedicalBackground";

const specialistFeatures = [
  { icon: BookOpen, title: "Курсы и программы", desc: "От базовых до углублённых программ по лабораторной диагностике" },
  { icon: Brain, title: "AI-расшифровка", desc: "Интеллектуальный анализ лабораторных данных для специалистов" },
  { icon: Users, title: "PRO Club", desc: "Профессиональное сообщество с разборами кейсов" },
  { icon: Award, title: "Сертификация", desc: "Подтверждение компетенций после обучения" },
];

const patientFeatures = [
  { icon: Heart, title: "Понятные материалы", desc: "Статьи о лабораторных исследованиях простым языком" },
  { icon: Search, title: "База знаний", desc: "Объяснение показателей анализов без сложной терминологии" },
  { icon: Shield, title: "Проверенная информация", desc: "Все материалы подготовлены врачами-экспертами" },
  { icon: Sparkles, title: "Популярные темы", desc: "Ответы на частые вопросы об анализах и здоровье" },
];

const FeatureCard = ({ icon: Icon, title, desc, index, variant }: {
  icon: typeof BookOpen; title: string; desc: string; index: number; variant: "specialist" | "patient";
}) => {
  const colorClass = variant === "specialist" ? "text-specialist" : "text-patient";
  const bgClass = variant === "specialist" ? "bg-specialist/10" : "bg-patient/10";
  const glowClass = variant === "specialist"
    ? "group-hover:shadow-[0_0_30px_hsl(210,65%,55%,0.15)]"
    : "group-hover:shadow-[0_0_30px_hsl(350,60%,62%,0.15)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group flex items-start gap-3 glass rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] ${glowClass}`}
    >
      <div className={`w-10 h-10 rounded-lg ${bgClass} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${colorClass}`} />
      </div>
      <div>
        <h4 className="font-display font-bold text-foreground text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => (
  <section className="relative py-14 overflow-hidden">
    <MedicalBackground density="light" />
    <div className="absolute inset-0 dot-pattern opacity-20" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-2">
          Возможности <span className="text-gradient-hero">портала</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Что найдёт для себя каждый на портале «ПРО диагностику»
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <h3 className="font-display text-base font-bold text-specialist mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-specialist flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </span>
            Для специалистов
          </h3>
          <div className="space-y-3">
            {specialistFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} index={i} variant="specialist" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-patient mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-patient flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </span>
            Для пациентов
          </h3>
          <div className="space-y-3">
            {patientFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} index={i} variant="patient" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
