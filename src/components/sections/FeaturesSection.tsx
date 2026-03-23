import { BookOpen, Brain, Users, Shield, Heart, Sparkles, Search, Award } from "lucide-react";

const specialistFeatures = [
  { icon: BookOpen, title: "Курсы и программы", desc: "От базовых до углублённых программ по лабораторной диагностике" },
  { icon: Brain, title: "AI-расшифровка", desc: "Интеллектуальный анализ лабораторных данных для специалистов" },
  { icon: Users, title: "PRO Club", desc: "Профессиональное сообщество с разборами кейсов" },
  { icon: Award, title: "Сертификация", desc: "Подтверждение компетенций после обучения" },
];

const patientFeatures = [
  { icon: Heart, title: "Понятные материалы", desc: "Статьи о лабораторных исследованиях простым языком" },
  { icon: Search, title: "База знаний", desc: "Объяснение показателей анализов без сложной терминологии" },
  { icon: Shield, title: "Проверенная информация", desc: "Все материалы подготовлены врачами-экспертами" },
  { icon: Sparkles, title: "Популярные темы", desc: "Ответы на частые вопросы об анализах и здоровье" },
];

const FeaturesSection = () => (
  <section className="bg-muted/50 py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Возможности портала</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Что найдёт для себя каждый на портале «ПРО диагностику»
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Specialists column */}
        <div>
          <h3 className="font-display text-lg font-bold text-specialist mb-5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-specialist/10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-specialist" />
            </span>
            Для специалистов
          </h3>
          <div className="space-y-4">
            {specialistFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-specialist/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-specialist" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">{f.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patients column */}
        <div>
          <h3 className="font-display text-lg font-bold text-patient mb-5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-patient/10 flex items-center justify-center">
              <Heart className="w-4 h-4 text-patient" />
            </span>
            Для пациентов
          </h3>
          <div className="space-y-4">
            {patientFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-patient/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-patient" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">{f.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
