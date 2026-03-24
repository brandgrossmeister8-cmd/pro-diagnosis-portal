import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Stethoscope, Heart, ArrowRight, BookOpen, Brain, Shield, Sparkles, Search } from "lucide-react";
import analytiaImg from "@/assets/analytia.png";
import aureliaImg from "@/assets/aurelia.png";
import MedicalBackground from "@/components/decorations/MedicalBackground";

const BranchSelector = () => (
  <section className="relative container py-20 overflow-hidden">
    <MedicalBackground density="light" />
    <div className="relative">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Выберите свой маршрут</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Портал «ПРО диагностику» предлагает уникальный контент для каждой аудитории
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Specialists */}
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <Link to="/specialists" className="block group">
            <div className="rounded-2xl border-2 border-specialist/20 hover:border-specialist/50 bg-specialist-accent p-8 transition-all h-full">
              <div className="flex items-center gap-4 mb-6">
                <img src={analytiaImg} alt="Аналития" className="w-16 h-16 object-contain" loading="lazy" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Специалистам</h3>
                  <p className="text-sm text-muted-foreground">Аналития — ваш экспертный проводник</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: BookOpen, text: "Курсы и программы обучения" },
                  { icon: Brain, text: "AI-расшифровка анализов" },
                  { icon: Shield, text: "PRO Club — профессиональное сообщество" },
                  { icon: Sparkles, text: "Азбука лабораторных анализов" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <item.icon className="w-4 h-4 text-specialist flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-specialist group-hover:gap-3 transition-all">
                Перейти в раздел <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Patients */}
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <Link to="/patients" className="block group">
            <div className="rounded-2xl border-2 border-patient/20 hover:border-patient/50 bg-patient-accent p-8 transition-all h-full">
              <div className="flex items-center gap-4 mb-6">
                <img src={aureliaImg} alt="Аурелия" className="w-16 h-16 object-contain" loading="lazy" />
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Пациентам</h3>
                  <p className="text-sm text-muted-foreground">Аурелия — ваш добрый помощник</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { icon: BookOpen, text: "Понятные материалы об анализах" },
                  { icon: Search, text: "База знаний простым языком" },
                  { icon: Sparkles, text: "Простые объяснения сложных тем" },
                  { icon: Shield, text: "Проверенная экспертная информация" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <item.icon className="w-4 h-4 text-patient flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-patient group-hover:gap-3 transition-all">
                Перейти в раздел <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BranchSelector;
