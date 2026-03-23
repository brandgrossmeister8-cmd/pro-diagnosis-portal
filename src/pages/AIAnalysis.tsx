import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Upload, FileText, MessageSquare, AlertTriangle, ArrowRight, Shield } from "lucide-react";
import { useState } from "react";

const AIAnalysis = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Layout>
      <section className="bg-specialist-accent py-12">
        <div className="container">
          <Badge className="bg-specialist/10 text-specialist border-0 mb-3">Только для специалистов</Badge>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">AI-расшифровка анализов</h1>
          <p className="text-muted-foreground max-w-2xl">
            Образовательный AI-инструмент для интерпретации лабораторных данных с выделением
            отклонений, клинических взаимосвязей и рекомендаций по дообследованию.
          </p>
        </div>
      </section>

      <CharacterMessage character="analytia" message="Я помогу вам разобраться в AI-сервисе. Загрузите анализы или введите показатели вручную." className="container -mt-4 max-w-2xl" />

      <section className="container py-12 max-w-4xl">
        {/* Disclaimer */}
        <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Важный дисклеймер</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-расшифровка носит исключительно информационно-образовательный характер.
                Результаты не являются медицинским заключением, не содержат диагнозов и назначений.
                Интерпретация предоставляется в автоматическом режиме без ручной валидации экспертом.
              </p>
              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 accent-primary" />
                <span className="text-sm text-foreground">Я подтверждаю, что являюсь медицинским специалистом и понимаю ограничения AI-сервиса</span>
              </label>
            </div>
          </div>
        </div>

        {!agreed ? (
          <div className="text-center py-12">
            <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Для доступа к AI-сервису подтвердите согласие с условиями использования выше</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Input methods */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: FileText, title: "Ввести вручную", desc: "Укажите показатели и значения" },
                { icon: Upload, title: "Загрузить PDF", desc: "Загрузите файл с результатами" },
                { icon: MessageSquare, title: "Чат с AI", desc: "Задайте вопрос об анализах" },
              ].map((m, i) => (
                <button key={i} className="bg-card border border-border rounded-xl p-6 text-center hover:border-specialist/30 hover:shadow-md transition-all">
                  <m.icon className="w-8 h-8 text-specialist mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{m.title}</h3>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </button>
              ))}
            </div>

            {/* Demo interface */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Введите показатели</h3>
              <div className="space-y-3 mb-6">
                {[
                  { name: "Гемоглобин (Hb)", unit: "г/л", placeholder: "120-160" },
                  { name: "Лейкоциты (WBC)", unit: "×10⁹/л", placeholder: "4.0-9.0" },
                  { name: "Тромбоциты (PLT)", unit: "×10⁹/л", placeholder: "180-320" },
                  { name: "СОЭ", unit: "мм/ч", placeholder: "2-15" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <label className="text-sm text-foreground w-40 flex-shrink-0">{p.name}</label>
                    <input type="number" placeholder={p.placeholder} className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm" />
                    <span className="text-xs text-muted-foreground w-20">{p.unit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2">
                <Brain className="w-4 h-4" /> Получить интерпретацию
              </Button>
            </div>

            <CharacterMessage character="analytia" message="После анализа вы получите структурированный отчёт с выделением отклонений и образовательными комментариями." size="sm" />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default AIAnalysis;
