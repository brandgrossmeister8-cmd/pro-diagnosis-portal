import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Stethoscope, Heart, Sparkles, ArrowDown, Brain, BookOpen, Shield } from "lucide-react";
import analisaImg from "@/assets/analisa.png";
import chemistryBg from "@/assets/chemistry-bg.webp";
import MedicalBackground from "@/components/decorations/MedicalBackground";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2400, suffix: "+", label: "Студентов" },
  { value: 50, suffix: "+", label: "Курсов" },
  { value: 15, suffix: "", label: "Экспертов" },
  { value: 98, suffix: "%", label: "Довольных" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 1500 / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}{suffix}</span>;
}

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Chemistry background photo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${chemistryBg})`, y: bgY, opacity: 0.07 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(170,65%,40%,0.08)] via-background/80 to-[hsl(215,80%,50%,0.08)]" />
      <MedicalBackground density="heavy" />

      {/* Bright floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animated-gradient" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-specialist/10 blur-[100px] animated-gradient" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-[60%] left-[50%] w-64 h-64 rounded-full bg-patient/5 blur-[80px]" />
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${8 + (i * 6.1) % 84}%`,
              top: `${8 + (i * 7.3) % 84}%`,
              width: 3 + (i % 3) * 2,
              height: 3 + (i % 3) * 2,
              background: i % 3 === 0 ? "hsl(170,65%,40%,0.4)" : i % 3 === 1 ? "hsl(215,80%,50%,0.3)" : "hsl(348,70%,56%,0.25)",
            }}
            animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </div>

      <motion.div className="container relative z-10 py-10 lg:py-14" style={{ y: textY, opacity }}>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Образовательный медицинский портал
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.05] mb-4 md:mb-5">
              <span className="text-gradient-hero">ПРО</span>{" "}
              <span className="relative">
                диагностику
                <motion.span
                  className="absolute -bottom-1.5 left-0 h-1 bg-gradient-hero rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-7 max-w-lg leading-relaxed">
              Экспертный портал по лабораторной диагностике. Обучение, AI-инструменты
              и просветительские материалы для врачей и пациентов.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link to="/specialists">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-specialist hover:opacity-90 text-white font-semibold shadow-lg shadow-specialist/20 transition-all hover:shadow-specialist/30 hover:scale-[1.02]">
                  <Stethoscope className="w-5 h-5" />
                  Я специалист
                </Button>
              </Link>
              <Link to="/patients">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-patient hover:opacity-90 text-white font-semibold shadow-lg shadow-patient/20 transition-all hover:shadow-patient/30 hover:scale-[1.02]">
                  <Heart className="w-5 h-5" />
                  Я пациент
                </Button>
              </Link>
            </div>

            {/* Stats with colored accents */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center bg-white/60 backdrop-blur-sm rounded-xl py-3 px-2 border border-border/50">
                  <div className={`font-display text-xl sm:text-2xl md:text-3xl font-black ${i === 0 ? "text-primary" : i === 1 ? "text-specialist" : i === 2 ? "text-patient" : "text-gold"}`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side — mascot with decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center relative"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 rounded-full border-2 border-dashed border-primary/15 pulse-glow" />
              <div className="absolute w-36 sm:w-48 md:w-56 lg:w-64 h-36 sm:h-48 md:h-56 lg:h-64 rounded-full border border-specialist/10" />
            </div>

            {/* Floating feature badges */}
            <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
              <div className="orbit">
                <div className="w-9 h-9 rounded-xl bg-gradient-specialist flex items-center justify-center shadow-lg shadow-specialist/25">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
              <div className="orbit-reverse">
                <div className="w-9 h-9 rounded-xl bg-gradient-patient flex items-center justify-center shadow-lg shadow-patient/25">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <motion.div
              className="absolute top-4 right-4 sm:top-8 sm:right-8 hidden md:flex"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-md border border-border/50">
                <BookOpen className="w-4 h-4 text-specialist" />
                <span className="text-xs font-semibold text-foreground">50+ курсов</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-0 sm:left-4 hidden md:flex"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-md border border-border/50">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">Экспертный контент</span>
              </div>
            </motion.div>

            <div className="relative z-10">
              <img
                src={analisaImg}
                alt="Аналиса — ваш проводник по порталу"
                className="character-float w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 object-contain drop-shadow-2xl"
                width={256}
                height={256}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-2.5 shadow-lg border border-border/50"
              >
                <p className="text-sm text-foreground font-bold whitespace-nowrap">Привет! Я Аналиса</p>
                <p className="text-xs text-muted-foreground">Помогу найти то, что вам нужно</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
