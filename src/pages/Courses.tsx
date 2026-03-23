import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Filter, BookOpen } from "lucide-react";
import { useState } from "react";

const allCourses = [
  { id: "abc-lab", title: "Азбука лабораторных анализов", desc: "Бесплатный открытый курс. Основы понимания лабораторных исследований для всех.", duration: "8 уроков", students: "2 400+", rating: "4.9", price: "Бесплатно", free: true, level: "Базовый", category: "Общие", href: "/free-course" },
  { id: "clin-bio", title: "Клиническая биохимия: от анализа к диагнозу", desc: "Углублённый курс по биохимическим показателям для практикующих врачей.", duration: "24 урока", students: "850+", rating: "4.8", price: "12 900 ₽", free: false, level: "Продвинутый", category: "Биохимия", href: "/courses/clinical-biochemistry" },
  { id: "hematology", title: "Гематология: клинический разбор", desc: "Практический курс по интерпретации показателей крови с реальными кейсами.", duration: "18 уроков", students: "620+", rating: "4.7", price: "9 900 ₽", free: false, level: "Продвинутый", category: "Гематология", href: "/courses/hematology" },
  { id: "immunology", title: "Иммунология для клинициста", desc: "Современные подходы к интерпретации иммунологических показателей.", duration: "20 уроков", students: "340+", rating: "4.8", price: "14 900 ₽", free: false, level: "Экспертный", category: "Иммунология", href: "/courses/immunology" },
  { id: "hormones", title: "Гормональный профиль: разбор и интерпретация", desc: "Комплексный курс по эндокринологическим лабораторным исследованиям.", duration: "22 урока", students: "510+", rating: "4.9", price: "11 900 ₽", free: false, level: "Продвинутый", category: "Эндокринология", href: "/courses/hormones" },
];

const levels = ["Все", "Базовый", "Продвинутый", "Экспертный"];

const Courses = () => {
  const [level, setLevel] = useState("Все");
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const filtered = allCourses.filter(c => (level === "Все" || c.level === level) && (!showFreeOnly || c.free));

  return (
    <Layout>
      <section className="bg-specialist-accent py-12">
        <div className="container">
          <Badge className="bg-specialist/10 text-specialist border-0 mb-3">Для специалистов</Badge>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Каталог курсов</h1>
          <p className="text-muted-foreground max-w-2xl">Программы обучения интерпретации лабораторных исследований для врачей</p>
        </div>
      </section>

      <CharacterMessage character="analytia" message="Выберите курс, который соответствует вашему уровню. Я помогу определиться!" className="container -mt-4 max-w-2xl" />

      <section className="container py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {levels.map(l => (
            <button key={l} onClick={() => setLevel(l)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${level === l ? "bg-specialist text-specialist-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {l}
            </button>
          ))}
          <button onClick={() => setShowFreeOnly(!showFreeOnly)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${showFreeOnly ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            Только бесплатные
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <Link key={c.id} to={c.href} className="group">
              <div className={`bg-card border rounded-2xl p-6 h-full hover:shadow-lg transition-all ${c.free ? "border-primary/30 ring-1 ring-primary/10" : "border-border hover:border-specialist/30"}`}>
                <div className="flex items-center gap-2 mb-3">
                  {c.free ? <Badge className="bg-primary/10 text-primary border-0">Бесплатно</Badge> : <Badge variant="secondary">{c.price}</Badge>}
                  <Badge variant="outline" className="text-xs">{c.level}</Badge>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-specialist transition-colors">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{c.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{c.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{c.students}</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-gold" />{c.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <CharacterMessage character="analytia" message="По выбранным фильтрам курсов не найдено. Попробуйте изменить параметры поиска." />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Courses;
