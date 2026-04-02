import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import analisaImg from "@/assets/analisa.png";

const About = () => (
  <Layout>
    <section className="bg-accent py-12">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">О проекте</h1>
        <p className="text-muted-foreground max-w-2xl">Образовательный портал «ПРО диагностику»</p>
      </div>
    </section>

    <section className="container py-12 max-w-3xl">
      <div className="flex items-center gap-6 mb-8">
        <img src={analisaImg} alt="Аналиса" className="w-24 h-24 object-contain" loading="lazy" />
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">«ПРО диагностику»</h2>
          <p className="text-muted-foreground">Экспертный портал по лабораторной диагностике</p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground">
        <p>
          «ПРО диагностику» — это образовательная платформа, объединяющая экспертное обучение для врачей
          и просветительские материалы для пациентов. Мы помогаем специалистам развивать клиническое мышление,
          а пациентам — понимать свои анализы.
        </p>
        <p>
          Портал создан командой практикующих врачей и экспертов в области лабораторной диагностики.
          Все материалы основаны на актуальных клинических рекомендациях и доказательной медицине.
        </p>

        <h3 className="font-display text-lg font-semibold text-foreground">Наши направления</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Курсы по интерпретации лабораторных исследований для врачей</li>
          <li>AI-инструменты для образовательной расшифровки анализов</li>
          <li>PRO Club — профессиональное сообщество</li>
          <li>Просветительские материалы для пациентов</li>
          <li>Бесплатный курс «Азбука лабораторных анализов»</li>
        </ul>

        <h3 className="font-display text-lg font-semibold text-foreground">Наши помощники</h3>
        <p>Три наших помощника сопровождают пользователей по порталу:</p>
      </div>

      <div className="space-y-4 mt-6 mb-8">
        <CharacterMessage character="analisa" message="Я Аналиса — главный проводник по порталу. Помогаю ориентироваться и выбирать нужный маршрут." />
        <CharacterMessage character="aurelia" message="Я Аурелия — ваш помощник в пациентском разделе. Объясняю сложное простым языком." />
        <CharacterMessage character="analytia" message="Я Аналития — экспертный помощник для врачей. Сопровождаю обучение и работу с AI-инструментами." />
      </div>

      <div className="flex flex-wrap gap-3">
        <Link to="/specialists"><Button className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2">Для специалистов <ArrowRight className="w-4 h-4" /></Button></Link>
        <Link to="/patients"><Button className="bg-gradient-patient hover:opacity-90 text-white gap-2">Для пациентов <ArrowRight className="w-4 h-4" /></Button></Link>
      </div>
    </section>
  </Layout>
);

export default About;
