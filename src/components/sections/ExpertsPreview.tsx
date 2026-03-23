import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const experts = [
  { id: 1, name: "Д-р Елена Соколова", role: "Клиническая биохимия", exp: "15 лет опыта", initials: "ЕС" },
  { id: 2, name: "Д-р Андрей Петров", role: "Гематология", exp: "12 лет опыта", initials: "АП" },
  { id: 3, name: "Д-р Мария Кузнецова", role: "Иммунология", exp: "10 лет опыта", initials: "МК" },
  { id: 4, name: "Д-р Игорь Волков", role: "Эндокринология", exp: "18 лет опыта", initials: "ИВ" },
];

const ExpertsPreview = () => (
  <section className="bg-muted/50 py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Наши эксперты</h2>
        <p className="text-muted-foreground">Ведущие специалисты в области лабораторной диагностики</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {experts.map((e) => (
          <Link key={e.id} to={`/experts/${e.id}`} className="group text-center">
            <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
              {e.initials}
            </div>
            <h4 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{e.name}</h4>
            <p className="text-xs text-muted-foreground">{e.role}</p>
            <p className="text-xs text-muted-foreground">{e.exp}</p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/experts"><Button variant="outline">Все эксперты</Button></Link>
      </div>
    </div>
  </section>
);

export default ExpertsPreview;
