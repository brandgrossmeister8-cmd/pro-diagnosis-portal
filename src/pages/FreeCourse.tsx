import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle, Users, Clock, Star, ArrowRight, Award } from "lucide-react";

const lessons = [
  "Зачем нужны лабораторные анализы",
  "Как правильно подготовиться к сдаче анализов",
  "Общий анализ крови: что показывает каждый параметр",
  "Биохимический анализ крови: основные показатели",
  "Анализ мочи: что нужно знать",
  "Гормоны: базовые понятия",
  "Когда нужно сдавать анализы повторно",
  "Как читать результаты и когда обращаться к врачу",
];

const FreeCourse = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-accent py-16 lg:py-20">
      <div className="container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-0 text-sm px-4 py-1">Бесплатно</Badge>
            <Badge variant="outline">Открытый доступ</Badge>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Азбука лабораторных анализов
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
           Базовый курс для специалистов — точка входа в лабораторную диагностику.
            Систематизируйте знания и подготовьтесь к углублённым программам.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2"><BookOpen className="w-5 h-5" />Начать обучение</Button>
            <Link to="/auth?tab=register"><Button size="lg" variant="outline">Регистрация для сохранения прогресса</Button></Link>
          </div>
          <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 уроков</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4" />2 400+ студентов</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-gold" />4.9</span>
          </div>
        </div>
      </div>
    </section>

    <div className="container grid lg:grid-cols-3 gap-8 py-12">
      <div className="lg:col-span-2 space-y-12">
        {/* About */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">О курсе</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Этот курс создан, чтобы каждый мог разобраться в основах лабораторной диагностики.
            Вы узнаете, как правильно подготовиться к анализам, что означают основные показатели
            и когда стоит обратиться к врачу.
          </p>
          <CharacterMessage character="aurelia" message="Не волнуйтесь, если раньше не понимали свои анализы. Мы разберём всё по шагам!" size="sm" />
        </section>

        {/* For whom */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Для кого</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Пациенты, которые хотят понимать свои анализы",
              "Студенты медицинских вузов",
              "Начинающие врачи",
              "Все, кто интересуется своим здоровьем",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Program */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Программа курса</h2>
          <div className="space-y-3">
            {lessons.map((l, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <span className="text-sm font-medium text-foreground">{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Result */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Что вы получите</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Понимание основных лабораторных показателей",
              "Умение правильно подготовиться к анализам",
              "Навык чтения результатов исследований",
              "Знание, когда обратиться к врачу",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2">
                <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="sticky top-24 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-primary">Бесплатно</span>
              <p className="text-sm text-muted-foreground mt-1">Без оплаты и подписок</p>
            </div>
            <Button size="lg" className="w-full mb-3">Начать обучение</Button>
            <Link to="/auth?tab=register"><Button size="lg" variant="outline" className="w-full">Зарегистрироваться</Button></Link>
          </div>

          <CharacterMessage character="analytia" message="Для специалистов: после этого курса рекомендую перейти к углублённым программам по биохимии." size="sm" />

          {/* Upsell */}
          <div className="bg-specialist-accent border border-specialist/20 rounded-2xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-2">Хотите большего?</h3>
            <p className="text-sm text-muted-foreground mb-4">Продолжите обучение на наших углублённых курсах для специалистов</p>
            <Link to="/courses"><Button variant="outline" size="sm" className="w-full gap-2">Каталог курсов <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default FreeCourse;
