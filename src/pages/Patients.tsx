import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, HelpCircle, Shield, ArrowRight, Search, Sparkles } from "lucide-react";
import aureliaImg from "@/assets/aurelia.png";

const popularTopics = [
  "Общий анализ крови", "Биохимия крови", "Гормоны щитовидной железы",
  "Сахар крови и гликированный гемоглобин", "Общий анализ мочи", "Холестерин и липидограмма",
  "Витамин D", "Железо и ферритин",
];

const Patients = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-patient-accent py-16 lg:py-24">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="bg-patient/10 text-patient border-0 mb-4">Для пациентов</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Понимайте свои анализы
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Простые и понятные объяснения лабораторных исследований.
            Узнайте, что означают ваши результаты, без сложной терминологии.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/knowledge/patients"><Button size="lg" className="bg-patient hover:bg-patient/90 text-patient-foreground gap-2"><Search className="w-5 h-5" />База знаний</Button></Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={aureliaImg} alt="Аурелия" className="character-float w-56 h-56 lg:w-72 lg:h-72 object-contain" loading="lazy" width={288} height={288} />
        </div>
      </div>
    </section>

    <CharacterMessage character="aurelia" message="Привет! Я Аурелия 🌸 Помогу вам разобраться в ваших анализах простым и понятным языком." className="container -mt-6 max-w-2xl" />

    {/* What you get */}
    <section className="container py-16">
      <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Что вы найдёте на портале</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: BookOpen, title: "Понятные материалы", desc: "Статьи и уроки, написанные простым языком без сложной медицинской терминологии" },
          { icon: HelpCircle, title: "Ответы на вопросы", desc: "Что означают показатели, какие нормы, когда стоит обратиться к врачу" },
          { icon: Shield, title: "Проверенная информация", desc: "Все материалы подготовлены врачами-экспертами с многолетним опытом" },
        ].map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-patient/10 flex items-center justify-center">
              <f.icon className="w-6 h-6 text-patient" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Popular topics */}
    <section className="bg-muted/50 py-16">
      <div className="container">
        <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Популярные темы</h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {popularTopics.map((t, i) => (
            <Link key={i} to={`/knowledge/patients?topic=${encodeURIComponent(t)}`}>
              <Badge variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">{t}</Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="container py-16">
      <div className="bg-muted rounded-xl p-6 text-center">
        <Shield className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Материалы портала носят исключительно информационно-образовательный характер и не заменяют
          консультацию квалифицированного врача. При любых вопросах о здоровье обратитесь к специалисту.
        </p>
      </div>
    </section>
  </Layout>
);

export default Patients;
