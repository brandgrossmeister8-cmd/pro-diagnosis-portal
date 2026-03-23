import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import SectionDivider from "@/components/ui/SectionDivider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Users, Award, ArrowRight, Sparkles, Shield, Clock, Star } from "lucide-react";
import analytiaImg from "@/assets/analytia.png";

const courses = [
  { title: "Азбука лабораторных анализов", price: "Бесплатно", free: true, duration: "8 уроков", href: "/free-course" },
  { title: "Клиническая биохимия: от анализа к диагнозу", price: "12 900 ₽", free: false, duration: "24 урока", href: "/courses/clinical-biochemistry" },
  { title: "Гематология: клинический разбор", price: "9 900 ₽", free: false, duration: "18 уроков", href: "/courses/hematology" },
  { title: "Иммунология для клинициста", price: "14 900 ₽", free: false, duration: "20 уроков", href: "/courses/immunology" },
];

const Specialists = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-specialist-accent py-16 lg:py-24">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="bg-specialist/10 text-specialist border-0 mb-4">Для специалистов</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Развивайте клиническое мышление
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Курсы, практикумы, AI-инструменты и профессиональное сообщество
            для врачей, стремящихся к экспертному уровню интерпретации анализов.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/courses"><Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2"><BookOpen className="w-5 h-5" />Каталог курсов</Button></Link>
            <Link to="/ai-analysis"><Button size="lg" variant="outline" className="gap-2"><Brain className="w-5 h-5" />AI-расшифровка</Button></Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={analytiaImg} alt="Аналития" className="character-float w-56 h-56 lg:w-72 lg:h-72 object-contain" loading="lazy" width={288} height={288} />
        </div>
      </div>
    </section>

    <CharacterMessage character="analytia" message="Добро пожаловать в экспертный раздел! Я Аналития — помогу вам выбрать программу обучения и освоить AI-инструменты." className="container -mt-6 max-w-2xl" />
    <SectionDivider />

    {/* Features */}
    <section className="container py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: BookOpen, title: "Курсы и программы", desc: "От базовых до углублённых программ по лабораторной диагностике" },
          { icon: Brain, title: "AI-расшифровка", desc: "Загружайте анализы и получайте образовательную интерпретацию" },
          { icon: Users, title: "PRO Club", desc: "Профессиональное сообщество с еженедельными разборами кейсов" },
          { icon: Award, title: "Сертификаты", desc: "Подтверждение ваших компетенций после прохождения курсов" },
          { icon: Shield, title: "Доказательная база", desc: "Контент основан на актуальных клинических рекомендациях" },
          { icon: Sparkles, title: "Практические кейсы", desc: "Реальные клинические ситуации для развития навыков" },
        ].map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
            <f.icon className="w-8 h-8 text-specialist mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider />

    {/* Courses */}
    <section className="bg-muted/50 py-16">
      <div className="container">
        <h2 className="font-display text-3xl font-bold text-foreground mb-8">Курсы</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((c, i) => (
            <Link key={i} to={c.href} className="group">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-specialist/30 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-specialist transition-colors">{c.title}</h3>
                  <Badge className={c.free ? "bg-primary/10 text-primary border-0" : ""}>{c.price}</Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{c.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/courses"><Button variant="outline" className="gap-2">Все курсы <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* AI */}
    <section className="container py-16">
      <div className="bg-specialist-accent rounded-2xl p-8 md:p-12 border border-specialist/20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Brain className="w-16 h-16 text-specialist flex-shrink-0" />
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">AI-расшифровка анализов</h2>
            <p className="text-muted-foreground mb-4">
              Загрузите результаты анализов — получите структурированную образовательную интерпретацию
              с выделением отклонений, клинических взаимосвязей и рекомендаций по дообследованию.
            </p>
            <Link to="/ai-analysis"><Button className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2">Попробовать AI-сервис <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    {/* PRO Club */}
    <section className="bg-muted/50 py-16">
      <div className="container text-center max-w-3xl">
        <Badge className="bg-gold/10 text-gold border-0 mb-4">PRO Club</Badge>
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">Профессиональное сообщество</h2>
        <p className="text-muted-foreground mb-8">
          Еженедельные разборы кейсов, закрытые материалы, нетворкинг с коллегами
          и доступ к экспертной поддержке. Присоединяйтесь к сообществу профессионалов.
        </p>
        <Link to="/pro-club"><Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2">Подробнее о PRO Club <ArrowRight className="w-4 h-4" /></Button></Link>
      </div>
    </section>

    <SectionDivider />

    {/* CTA */}
    <section className="container py-16 text-center">
      <h2 className="font-display text-3xl font-bold text-foreground mb-4">Начните обучение сегодня</h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Зарегистрируйтесь и получите доступ к бесплатному курсу и каталогу программ</p>
      <Link to="/auth?tab=register&role=specialist"><Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground">Зарегистрироваться как специалист</Button></Link>
    </section>
  </Layout>
);

export default Specialists;
