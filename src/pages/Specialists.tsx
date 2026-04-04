import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import SectionDivider from "@/components/ui/SectionDivider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Brain, Users, Award, ArrowRight, Sparkles, Shield, Clock, Star,
  Calendar, Video, FileText, Headphones, ExternalLink,
} from "lucide-react";
import analytiaImg from "@/assets/analytia.png";

const courses = [
  { title: "Азбука лабораторных анализов", price: "Бесплатно", free: true, duration: "8 уроков", href: "/free-course" },
  { title: "Клиническая биохимия: от анализа к диагнозу", price: "12 900 ₽", free: false, duration: "24 урока", href: "/courses/clinical-biochemistry" },
  { title: "Гематология: клинический разбор", price: "9 900 ₽", free: false, duration: "18 уроков", href: "/courses/hematology" },
  { title: "Иммунология для клинициста", price: "14 900 ₽", free: false, duration: "20 уроков", href: "/courses/immunology" },
];

const events = [
  { date: "15 апр", title: "Вебинар: Новые маркёры воспаления в клинической практике", type: "webinar", time: "19:00 МСК", speaker: "Д-р Соколова Е.А." },
  { date: "22 апр", title: "Мастер-класс: AI в интерпретации лабораторных данных", type: "workshop", time: "18:00 МСК", speaker: "Д-р Петров А.В." },
  { date: "29 апр", title: "Конференция: Лабораторная диагностика 2026", type: "conference", time: "10:00 МСК", speaker: "Несколько спикеров" },
  { date: "6 мая", title: "Вебинар: Гормональная панель — разбор клинических случаев", type: "webinar", time: "19:00 МСК", speaker: "Д-р Кузнецова М.И." },
];

const articles = [
  { title: "Интерпретация ОАК: на что обращать внимание в первую очередь", category: "Гематология", readTime: "8 мин", date: "2 апр 2026" },
  { title: "D-димер: когда назначать и как трактовать результаты", category: "Коагулология", readTime: "12 мин", date: "28 мар 2026" },
  { title: "Тиреоидная панель: алгоритм диагностики заболеваний щитовидной железы", category: "Эндокринология", readTime: "15 мин", date: "20 мар 2026" },
];

const podcasts = [
  { title: "Лабораторные ошибки: преаналитический этап", duration: "42 мин", episode: "Эпизод 12", guest: "Д-р Волков И.С." },
  { title: "Как AI меняет лабораторную диагностику", duration: "35 мин", episode: "Эпизод 11", guest: "Д-р Петров А.В." },
  { title: "Биомаркёры сепсиса: что нового?", duration: "48 мин", episode: "Эпизод 10", guest: "Д-р Соколова Е.А." },
];

const webinars = [
  { title: "Клинические разборы: биохимия в неотложной медицине", status: "Запись", views: "1 240", duration: "1ч 20мин" },
  { title: "Иммунологические маркёры: от теории к практике", status: "Запись", views: "980", duration: "55 мин" },
  { title: "Железодефицитная анемия: лабораторная диагностика", status: "Запись", views: "2 100", duration: "1ч 05мин" },
];

const eventTypeColor: Record<string, string> = {
  webinar: "bg-specialist/10 text-specialist",
  workshop: "bg-gold/10 text-gold",
  conference: "bg-primary/10 text-primary",
};

const eventTypeLabel: Record<string, string> = {
  webinar: "Вебинар",
  workshop: "Мастер-класс",
  conference: "Конференция",
};

const Specialists = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-specialist-accent py-12 lg:py-20">
      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <Badge className="bg-specialist/10 text-specialist border-0 mb-4">Для специалистов</Badge>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Развивайте клиническое мышление
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            Курсы, практикумы, AI-инструменты и профессиональное сообщество
            для врачей, стремящихся к экспертному уровню интерпретации анализов.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/courses"><Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2"><BookOpen className="w-5 h-5" />Каталог курсов</Button></Link>
            <Link to="/ai-analysis"><Button size="lg" variant="outline" className="gap-2"><Brain className="w-5 h-5" />AI-расшифровка</Button></Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={analytiaImg} alt="Аналития" className="character-float w-44 sm:w-56 lg:w-72 h-44 sm:h-56 lg:h-72 object-contain" loading="lazy" width={288} height={288} />
        </div>
      </div>
    </section>

    <CharacterMessage character="analytia" message="Добро пожаловать в экспертный раздел! Я Аналития — помогу вам выбрать программу обучения и освоить AI-инструменты." className="container -mt-6 max-w-2xl" />
    <SectionDivider />

    {/* Features */}
    <section className="container py-12 md:py-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[
          { icon: BookOpen, title: "Курсы и программы", desc: "От базовых до углублённых программ по лабораторной диагностике" },
          { icon: Brain, title: "AI-расшифровка", desc: "Загружайте анализы и получайте образовательную интерпретацию" },
          { icon: Users, title: "PRO Club", desc: "Профессиональное сообщество с еженедельными разборами кейсов" },
          { icon: Award, title: "Сертификаты", desc: "Подтверждение ваших компетенций после прохождения курсов" },
          { icon: Shield, title: "Доказательная база", desc: "Контент основан на актуальных клинических рекомендациях" },
          { icon: Sparkles, title: "Практические кейсы", desc: "Реальные клинические ситуации для развития навыков" },
        ].map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:shadow-md transition-shadow">
            <f.icon className="w-7 h-7 sm:w-8 sm:h-8 text-specialist mb-3" />
            <h3 className="font-display font-semibold text-foreground mb-1.5">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider />

    {/* Calendar */}
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1 flex items-center gap-2">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-specialist" /> Календарь мероприятий
            </h2>
            <p className="text-sm text-muted-foreground">Ближайшие вебинары, мастер-классы и конференции</p>
          </div>
        </div>
        <div className="space-y-3">
          {events.map((e, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 hover:shadow-md hover:border-specialist/30 transition-all">
              <div className="flex items-center gap-3 sm:gap-5 sm:min-w-[140px]">
                <div className="w-14 h-14 rounded-xl bg-specialist/10 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs text-muted-foreground leading-none">{e.date.split(" ")[1]}</span>
                  <span className="text-lg font-black text-specialist leading-none">{e.date.split(" ")[0]}</span>
                </div>
                <Badge className={`${eventTypeColor[e.type]} border-0 hidden sm:inline-flex`}>{eventTypeLabel[e.type]}</Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 sm:hidden">
                  <Badge className={`${eventTypeColor[e.type]} border-0 text-xs`}>{eventTypeLabel[e.type]}</Badge>
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">{e.title}</h4>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{e.time}</span>
                  <span>{e.speaker}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-1 self-start sm:self-center text-xs sm:text-sm flex-shrink-0">
                Записаться <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <SectionDivider />

    {/* Webinars */}
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2">
        <Video className="w-6 h-6 sm:w-7 sm:h-7 text-specialist" /> Записи вебинаров
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {webinars.map((w, i) => (
          <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-specialist/30 transition-all group">
            <div className="aspect-video bg-specialist/5 flex items-center justify-center relative">
              <Video className="w-10 h-10 text-specialist/30" />
              <div className="absolute inset-0 bg-specialist/0 group-hover:bg-specialist/5 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-specialist/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-specialist transition-colors">{w.title}</h4>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{w.duration}</span>
                <span>{w.views} просмотров</span>
                <Badge className="bg-specialist/10 text-specialist border-0 text-xs">{w.status}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider />

    {/* Articles */}
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2">
          <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-specialist" /> Статьи и материалы
        </h2>
        <div className="space-y-3">
          {articles.map((a, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 hover:shadow-md hover:border-specialist/30 transition-all cursor-pointer group">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <Badge className="bg-specialist/10 text-specialist border-0 text-xs">{a.category}</Badge>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm sm:text-base group-hover:text-specialist transition-colors">{a.title}</h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
                <Clock className="w-3 h-3" />{a.readTime}
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-specialist" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <SectionDivider />

    {/* Podcasts */}
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2">
        <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-specialist" /> Подкасты
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {podcasts.map((p, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-specialist/30 transition-all group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-specialist flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-specialist font-semibold">{p.episode}</p>
                <p className="text-xs text-muted-foreground">{p.duration}</p>
              </div>
            </div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-specialist transition-colors">{p.title}</h4>
            <p className="text-xs text-muted-foreground">Гость: {p.guest}</p>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider />

    {/* Courses */}
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">Курсы</h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {courses.map((c, i) => (
            <Link key={i} to={c.href} className="group">
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:shadow-lg hover:border-specialist/30 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-specialist transition-colors text-sm sm:text-base">{c.title}</h3>
                  <Badge className={c.free ? "bg-primary/10 text-primary border-0" : ""}>{c.price}</Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{c.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/courses"><Button variant="outline" className="gap-2">Все курсы <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </section>
    <SectionDivider />

    {/* AI */}
    <section className="container py-12 md:py-16">
      <div className="bg-specialist-accent rounded-2xl p-6 sm:p-8 md:p-12 border border-specialist/20">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-specialist flex-shrink-0" />
          <div className="flex-1">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">AI-расшифровка анализов</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
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
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container text-center max-w-3xl">
        <Badge className="bg-gold/10 text-gold border-0 mb-4">PRO Club</Badge>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Профессиональное сообщество</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-8">
          Еженедельные разборы кейсов, закрытые материалы, нетворкинг с коллегами
          и доступ к экспертной поддержке.
        </p>
        <Link to="/pro-club"><Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground gap-2">Подробнее о PRO Club <ArrowRight className="w-4 h-4" /></Button></Link>
      </div>
    </section>
    <SectionDivider />

    {/* CTA */}
    <section className="container py-12 md:py-16 text-center">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Начните обучение сегодня</h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto">Зарегистрируйтесь и получите доступ к бесплатному курсу и каталогу программ</p>
      <Link to="/auth?tab=register&role=specialist"><Button size="lg" className="bg-specialist hover:bg-specialist/90 text-specialist-foreground">Зарегистрироваться как специалист</Button></Link>
    </section>
  </Layout>
);

export default Specialists;
