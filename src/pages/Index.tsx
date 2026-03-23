import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import BranchSelector from "@/components/sections/BranchSelector";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ExpertsPreview from "@/components/sections/ExpertsPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart } from "lucide-react";
import { motion } from "framer-motion";
import analisaImg from "@/assets/analisa.png";
import aureliaImg from "@/assets/aurelia.png";
import analytiaImg from "@/assets/analytia.png";

const fairies = [
  {
    name: "Аналиса",
    role: "Главный проводник портала",
    img: analisaImg,
    color: "border-primary",
    bgColor: "bg-accent",
    description:
      "Я — старшая из трёх лабораторных фей. Встречаю всех на портале, помогаю найти нужный раздел и направляю к моим сёстрам. Я знаю всё о нашем портале!",
  },
  {
    name: "Аурелия",
    role: "Помощница для пациентов",
    img: aureliaImg,
    color: "border-patient",
    bgColor: "bg-patient-accent",
    description:
      "Я помогу вам разобраться в анализах простым языком. Объясню, что означают показатели, расскажу о популярных исследованиях и буду рядом на каждом шаге.",
  },
  {
    name: "Аналития",
    role: "Помощница для специалистов",
    img: analytiaImg,
    color: "border-specialist",
    bgColor: "bg-specialist-accent",
    description:
      "Я сопровождаю врачей и специалистов. Помогу выбрать курс, освоить AI-инструменты расшифровки анализов и развить клиническое мышление.",
  },
];

const Index = () => (
  <Layout>
    <HeroSection />

    {/* Meet the Fairies */}
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Познакомьтесь с нашими лабораторными феями
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Три сестры-феи помогут вам на каждом шаге — от первого знакомства с порталом до глубокого погружения в мир диагностики
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {fairies.map((fairy, i) => (
          <motion.div
            key={fairy.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl p-6 text-center"
          >
            <img
              src={fairy.img}
              alt={fairy.name}
              className="w-32 h-32 mx-auto mb-4 object-contain character-float"
              loading="lazy"
              width={128}
              height={128}
            />
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{fairy.name}</h3>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">{fairy.role}</p>
            <p className="text-sm text-foreground leading-relaxed">{fairy.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <BranchSelector />
    <FeaturesSection />
    <ExpertsPreview />

    {/* Final CTA */}
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Начните свой путь в мире диагностики
        </h2>
        <p className="text-muted-foreground mb-8">
          Выберите свой маршрут и откройте доступ к экспертному контенту
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/specialists">
            <Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground w-full sm:w-auto gap-2">
              <Stethoscope className="w-5 h-5" />
              Я специалист
            </Button>
          </Link>
          <Link to="/patients">
            <Button size="lg" variant="outline" className="border-patient text-patient hover:bg-patient/10 w-full sm:w-auto gap-2">
              <Heart className="w-5 h-5" />
              Я пациент
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
