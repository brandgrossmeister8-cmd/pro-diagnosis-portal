import { BookOpen, Shield, Sparkles, Heart, FileText, HelpCircle } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Образовательные курсы", desc: "Открытые программы для понимания анализов" },
  { icon: Heart, title: "Для пациентов", desc: "Понятные материалы о лабораторных исследованиях" },
  { icon: Shield, title: "Доказательный подход", desc: "Только проверенная экспертная информация" },
  { icon: Sparkles, title: "Просветительство", desc: "Простые объяснения сложных медицинских тем" },
  { icon: FileText, title: "База знаний", desc: "Статьи и материалы о показателях анализов" },
  { icon: HelpCircle, title: "FAQ и поддержка", desc: "Ответы на популярные вопросы об анализах" },
];

const FeaturesSection = () => (
  <section className="bg-muted/50 py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Возможности портала</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Всё для грамотного понимания лабораторной диагностики
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
