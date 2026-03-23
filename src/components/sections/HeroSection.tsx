import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Stethoscope, Heart } from "lucide-react";
import analisaImg from "@/assets/analisa.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-15"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
    <div className="container relative pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
            Образовательный медицинский портал
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            <span className="text-gradient-hero">ПРО</span> диагностику
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Экспертный портал по лабораторной диагностике. Обучение, интерпретация анализов,
            AI-инструменты и просветительские материалы для врачей и пациентов.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/specialists">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-specialist hover:bg-specialist/90 text-specialist-foreground">
                <Stethoscope className="w-5 h-5" />
                Я специалист
              </Button>
            </Link>
            <Link to="/patients">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-patient text-patient hover:bg-patient/10">
                <Heart className="w-5 h-5" />
                Я пациент
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />
            <img
              src={analisaImg}
              alt="Аналиса — ваш проводник по порталу"
              className="relative character-float w-64 h-64 lg:w-80 lg:h-80 object-contain"
              width={320}
              height={320}
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl px-4 py-2 shadow-md">
              <p className="text-sm text-foreground font-medium">Привет! Я Аналиса 👋</p>
              <p className="text-xs text-muted-foreground">Помогу найти то, что вам нужно</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
