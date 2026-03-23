import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const experts = [
  { id: 1, name: "Д-р Елена Соколова", role: "Клиническая биохимия", exp: "15 лет опыта", initials: "ЕС", bio: "Ведущий специалист по клинической биохимии. Автор курса «Клиническая биохимия: от анализа к диагнозу»." },
  { id: 2, name: "Д-р Андрей Петров", role: "Гематология", exp: "12 лет опыта", initials: "АП", bio: "Заведующий лабораторией гематологических исследований. Эксперт по интерпретации анализов крови." },
  { id: 3, name: "Д-р Мария Кузнецова", role: "Иммунология", exp: "10 лет опыта", initials: "МК", bio: "Специалист по клинической иммунологии и аллергологии. Автор научных публикаций." },
  { id: 4, name: "Д-р Игорь Волков", role: "Эндокринология", exp: "18 лет опыта", initials: "ИВ", bio: "Профессор, доктор медицинских наук. Ведущий эксперт по лабораторной эндокринологии." },
];

const Experts = () => (
  <Layout>
    <section className="bg-muted/50 py-12">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Наши эксперты</h1>
        <p className="text-muted-foreground max-w-2xl">Ведущие специалисты в области лабораторной диагностики и клинической медицины</p>
      </div>
    </section>

    <CharacterMessage character="analisa" message="Все наши эксперты — практикующие врачи с многолетним опытом. Именно они создают курсы и материалы портала." className="container -mt-4 max-w-2xl" />

    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {experts.map(e => (
          <div key={e.id} className="bg-card border border-border rounded-2xl p-6 flex gap-6 items-start">
            <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">{e.initials}</div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">{e.name}</h3>
              <Badge variant="secondary" className="mt-1 mb-2">{e.role}</Badge>
              <p className="text-xs text-muted-foreground mb-2">{e.exp}</p>
              <p className="text-sm text-muted-foreground">{e.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Experts;
