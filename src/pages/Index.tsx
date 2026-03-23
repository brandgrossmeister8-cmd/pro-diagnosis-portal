import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import BranchSelector from "@/components/sections/BranchSelector";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CoursesPreview from "@/components/sections/CoursesPreview";
import ExpertsPreview from "@/components/sections/ExpertsPreview";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";

const Index = () => (
  <Layout>
    <HeroSection />
    <BranchSelector />
    <FeaturesSection />
    <CoursesPreview />

    {/* Free course highlight */}
    <section className="container py-16">
      <div className="bg-accent rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">Бесплатно</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Азбука лабораторных анализов</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Открытый курс для всех, кто хочет понимать свои анализы. Доступен без регистрации и оплаты.
          </p>
          <Link to="/free-course">
            <Button size="lg" className="gap-2">
              Начать обучение <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <CharacterMessage
          character="analisa"
          message="Этот курс — отличная точка входа! Подходит и для врачей, и для пациентов."
          className="md:max-w-sm"
        />
      </div>
    </section>

    {/* AI section */}
    <section className="container py-16">
      <div className="bg-specialist-accent rounded-2xl p-8 md:p-12 border border-specialist/20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-specialist flex items-center justify-center flex-shrink-0">
            <Brain className="w-8 h-8 text-specialist-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">AI-расшифровка анализов</h2>
            <p className="text-muted-foreground mb-4">
              Интеллектуальный инструмент для специалистов. Загрузите результаты анализов и получите
              образовательную интерпретацию с выделением отклонений и клинических взаимосвязей.
            </p>
            <Link to="/ai-analysis">
              <Button className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2">
                Подробнее об AI-сервисе <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <ExpertsPreview />

    {/* Final CTA */}
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Начните свой путь в мире диагностики
        </h2>
        <p className="text-muted-foreground mb-8">
          Выберите свой маршрут и откройте доступ к экспертному контенту
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/specialists">
            <Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground w-full sm:w-auto">
              Я специалист
            </Button>
          </Link>
          <Link to="/patients">
            <Button size="lg" variant="outline" className="border-patient text-patient hover:bg-patient/10 w-full sm:w-auto">
              Я пациент
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
