import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Stethoscope, Heart, ArrowRight, BookOpen, Brain, Shield, Sparkles, Search } from "lucide-react";
import analytiaImg from "@/assets/analytia.png";
import aureliaImg from "@/assets/aurelia.png";

const BranchSelector = () => (
  <section className="relative container py-10 md:py-14 overflow-hidden">
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-2">
          Выберите свой <span className="text-gradient-hero">маршрут</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Уникальный контент для каждой аудитории
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {/* Specialists */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25 }}
        >
          <Link to="/specialists" className="block group">
            <div className="relative rounded-2xl glass p-4 sm:p-6 transition-all h-full overflow-hidden hover:shadow-[0_0_40px_hsl(210,65%,55%,0.15)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-specialist/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-5 relative">
                <img src={analytiaImg} alt="Аналития" className="w-14 h-14 object-contain" loading="lazy" />
                <div>
                  <h3 className="font-display text-xl font-black text-foreground">Специалистам</h3>
                  <p className="text-xs text-muted-foreground">Аналития — ваш экспертный проводник</p>
                </div>
              </div>
              <ul className="space-y-2.5 mb-5 relative">
                {[
                  { icon: BookOpen, text: "Курсы и программы обучения" },
                  { icon: Brain, text: "AI-расшифровка анализов" },
                  { icon: Shield, text: "PRO Club — профессиональное сообщество" },
                  { icon: Sparkles, text: "Азбука лабораторных анализов" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-7 h-7 rounded-md bg-specialist/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-specialist" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-specialist group-hover:gap-3 transition-all">
                Перейти в раздел <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Patients */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25 }}
        >
          <Link to="/patients" className="block group">
            <div className="relative rounded-2xl glass p-4 sm:p-6 transition-all h-full overflow-hidden hover:shadow-[0_0_40px_hsl(350,60%,62%,0.15)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-patient/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-5 relative">
                <img src={aureliaImg} alt="Аурелия" className="w-14 h-14 object-contain" loading="lazy" />
                <div>
                  <h3 className="font-display text-xl font-black text-foreground">Пациентам</h3>
                  <p className="text-xs text-muted-foreground">Аурелия — ваш добрый помощник</p>
                </div>
              </div>
              <ul className="space-y-2.5 mb-5 relative">
                {[
                  { icon: BookOpen, text: "Понятные материалы об анализах" },
                  { icon: Search, text: "База знаний простым языком" },
                  { icon: Sparkles, text: "Простые объяснения сложных тем" },
                  { icon: Shield, text: "Проверенная экспертная информация" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-7 h-7 rounded-md bg-patient/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-patient" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-patient group-hover:gap-3 transition-all">
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
