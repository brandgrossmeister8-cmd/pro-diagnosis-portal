import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Search, Tag, ArrowRight } from "lucide-react";
import { useState } from "react";

const specialistArticles = [
  { id: 1, title: "Интерпретация лейкоцитарной формулы", category: "Гематология", tags: ["кровь", "лейкоциты"], desc: "Клинический подход к оценке лейкоцитарной формулы и дифференциальной диагностике." },
  { id: 2, title: "Биохимические маркеры повреждения миокарда", category: "Биохимия", tags: ["сердце", "тропонин"], desc: "Современные подходы к интерпретации кардиоспецифических маркеров." },
  { id: 3, title: "Тиреоидный профиль: алгоритм интерпретации", category: "Эндокринология", tags: ["щитовидная железа", "ТТГ"], desc: "Пошаговый алгоритм оценки функции щитовидной железы." },
  { id: 4, title: "Коагулограмма: клиническое значение", category: "Гематология", tags: ["свёртывание", "коагулограмма"], desc: "Принципы интерпретации показателей свёртывающей системы." },
];

const patientArticles = [
  { id: 1, title: "Что такое общий анализ крови и зачем он нужен", category: "Основы", tags: ["кровь", "ОАК"], desc: "Простое объяснение того, что показывает общий анализ крови." },
  { id: 2, title: "Как правильно подготовиться к сдаче анализов", category: "Подготовка", tags: ["подготовка", "правила"], desc: "Практические советы для получения точных результатов." },
  { id: 3, title: "Холестерин: когда нужно волноваться", category: "Биохимия", tags: ["холестерин", "липиды"], desc: "Что означают разные виды холестерина и какие нормы." },
  { id: 4, title: "Витамин D: почему о нём все говорят", category: "Витамины", tags: ["витамин D", "дефицит"], desc: "Всё, что нужно знать о витамине D простым языком." },
];

const KnowledgeBase = () => {
  const { audience } = useParams<{ audience: string }>();
  const isSpecialist = audience === "specialists";
  const articles = isSpecialist ? specialistArticles : patientArticles;
  const [search, setSearch] = useState("");
  const filtered = articles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.tags.some(t => t.toLowerCase().includes(search.toLowerCase())));

  return (
    <Layout>
      <section className={`py-12 ${isSpecialist ? "bg-specialist-accent" : "bg-patient-accent"}`}>
        <div className="container">
          <Badge className={`border-0 mb-3 ${isSpecialist ? "bg-specialist/10 text-specialist" : "bg-patient/10 text-patient"}`}>
            {isSpecialist ? "Для специалистов" : "Для пациентов"}
          </Badge>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">База знаний</h1>
          <p className="text-muted-foreground max-w-2xl">
            {isSpecialist ? "Экспертные материалы по лабораторной диагностике" : "Понятные материалы о лабораторных исследованиях"}
          </p>
        </div>
      </section>

      <CharacterMessage
        character={isSpecialist ? "analytia" : "aurelia"}
        message={isSpecialist ? "Здесь собраны экспертные статьи и разборы. Используйте поиск для быстрого доступа." : "Я подобрала для вас понятные материалы. Начните с того, что вам интересно!"}
        className="container -mt-4 max-w-2xl"
      />

      <section className="container py-8">
        <div className="max-w-md mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск по материалам..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(a => (
            <div key={a.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow group cursor-pointer">
              <Badge variant="secondary" className="mb-3">{a.category}</Badge>
              <h3 className={`font-display font-semibold text-foreground mb-2 group-hover:${isSpecialist ? "text-specialist" : "text-patient"} transition-colors`}>{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{a.desc}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {a.tags.map(t => (
                  <span key={t} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    <Tag className="w-3 h-3" />{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <CharacterMessage
            character={isSpecialist ? "analytia" : "aurelia"}
            message="По вашему запросу ничего не найдено. Попробуйте другие ключевые слова."
            className="max-w-lg mx-auto"
          />
        )}
      </section>
    </Layout>
  );
};

export default KnowledgeBase;
