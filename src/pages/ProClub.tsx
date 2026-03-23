import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Crown, Users, BookOpen, MessageSquare, Calendar, ArrowRight, Check } from "lucide-react";

const benefits = [
  "Еженедельные разборы клинических кейсов",
  "Закрытые экспертные материалы",
  "Нетворкинг с коллегами",
  "Доступ к записям вебинаров",
  "Экспертная поддержка и менторство",
  "Telegram-сообщество",
];

const ProClub = () => (
  <Layout>
    <section className="bg-specialist-accent py-16 lg:py-20">
      <div className="container text-center max-w-3xl">
        <Badge className="bg-gold/10 text-gold border-0 mb-4"><Crown className="w-3 h-3 inline mr-1" />PRO Club</Badge>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Профессиональное сообщество</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Закрытый клуб для врачей, стремящихся к экспертному уровню в лабораторной диагностике.
          Еженедельные кейсы, экспертная поддержка и профессиональный нетворкинг.
        </p>
        <Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2">
          Присоединиться <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>

    <CharacterMessage character="analytia" message="PRO Club — это место, где специалисты растут вместе. Каждую неделю мы разбираем реальные кейсы." className="container -mt-4 max-w-2xl" />

    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Что входит в PRO Club</h2>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-specialist flex-shrink-0" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">Подписка PRO</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-specialist">4 900 ₽</span>
            <span className="text-muted-foreground"> / мес</span>
          </div>
          <Button size="lg" className="w-full bg-specialist hover:bg-specialist/90 text-specialist-foreground mb-3">Оформить подписку</Button>
          <p className="text-xs text-muted-foreground">Отмена в любое время. Доступ прекращается при неоплате.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProClub;
