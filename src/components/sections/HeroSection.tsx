import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Stethoscope, Heart, Sparkles, ArrowDown } from "lucide-react";
import analisaImg from "@/assets/analisa.png";
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
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}{suffix}</span>;
}

const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[100px] animated-gradient" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-specialist/8 blur-[120px] animated-gradient" style={{ animationDelay: "-3s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/30"
        style={{ left: `${10 + (i * 4.3) % 80}%`, top: `${10 + (i * 7.1) % 80}%` }}
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
        transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <motion.div className="absolute inset-0 grid-pattern opacity-30" style={{ y: bgY }} />
      <MedicalBackground density="heavy" />
      <FloatingOrbs />

      <motion.div className="container relative z-10 py-12 lg:py-16" style={{ y: textY, opacity }}>
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Образовательный медицинский портал
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-[1.05] mb-4 md:mb-5">
              <span className="text-gradient-hero">ПРО</span>{" "}
              <span className="relative">
                диагностику
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-hero rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8 max-w-lg leading-relaxed">
              Экспертный портал по лабораторной диагностике. Обучение, AI-инструменты
              и просветительские материалы для врачей и пациентов.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-10">
              <Link to="/specialists">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-specialist hover:opacity-90 text-white font-semibold shadow-md shadow-specialist/15 transition-all hover:shadow-specialist/25 hover:scale-[1.02]">
                  <Stethoscope className="w-5 h-5" />
                  Я специалист
                </Button>
              </Link>
              <Link to="/patients">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-gradient-patient hover:opacity-90 text-white font-semibold shadow-md shadow-patient/15 transition-all hover:shadow-patient/25 hover:scale-[1.02]">
                  <Heart className="w-5 h-5" />
                  Я пациент
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl sm:text-2xl md:text-3xl font-black text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 sm:w-64 md:w-72 lg:w-96 h-48 sm:h-64 md:h-72 lg:h-96 rounded-full border border-primary/20 pulse-glow" />
              <div className="absolute w-36 sm:w-48 md:w-56 lg:w-72 h-36 sm:h-48 md:h-56 lg:h-72 rounded-full border border-primary/10" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
              <div className="orbit">
                <div className="w-8 h-8 rounded-lg bg-gradient-specialist flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center hidden sm:flex">
              <div className="orbit-reverse">
                <div className="w-8 h-8 rounded-lg bg-gradient-patient flex items-center justify-center shadow-lg">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <img
                src={analisaImg}
                alt="Аналиса — ваш проводник по порталу"
                className="character-float w-40 sm:w-48 md:w-56 lg:w-72 h-40 sm:h-48 md:h-56 lg:h-72 object-contain drop-shadow-2xl"
                width={288}
                height={288}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-5 py-3 shadow-lg"
              >
                <p className="text-sm text-foreground font-semibold whitespace-nowrap">Привет! Я Аналиса</p>
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
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
