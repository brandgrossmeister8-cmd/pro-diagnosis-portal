import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import SectionDivider from "@/components/ui/SectionDivider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, HelpCircle, Shield, ArrowRight, Search,
  Calendar, Video, FileText, Headphones, Clock, ExternalLink,
} from "lucide-react";
import aureliaImg from "@/assets/aurelia.png";

const popularTopics = [
  "Общий анализ крови", "Биохимия крови", "Гормоны щитовидной железы",
  "Сахар крови и гликированный гемоглобин", "Общий анализ мочи", "Холестерин и липидограмма",
  "Витамин D", "Железо и ферритин",
];

const events = [
  { date: "17 апр", title: "Онлайн-лекция: Как читать свои анализы крови", time: "18:00 МСК", type: "lecture" },
  { date: "24 апр", title: "Q&A сессия: Ваши вопросы о гормонах", time: "19:00 МСК", type: "qa" },
  { date: "1 мая", title: "Вебинар: Что такое биохимия крови и зачем она нужна", time: "18:30 МСК", type: "webinar" },
  { date: "8 мая", title: "Онлайн-лекция: Витамины и микроэлементы — что сдавать", time: "18:00 МСК", type: "lecture" },
];

const articles = [
  { title: "Общий анализ крови: что означает каждый показатель", readTime: "6 мин", category: "Основы", date: "3 апр 2026" },
  { title: "Зачем сдавать кровь натощак и как подготовиться к анализам", readTime: "4 мин", category: "Подготовка", date: "28 мар 2026" },
  { title: "Гормоны щитовидной железы: простым языком о ТТГ, Т3 и Т4", readTime: "7 мин", category: "Гормоны", date: "22 мар 2026" },
  { title: "Холестерин: когда стоит беспокоиться и что делать", readTime: "5 мин", category: "Здоровье", date: "15 мар 2026" },
];

const podcasts = [
  { title: "Анализы крови: мифы и правда", duration: "25 мин", episode: "Эпизод 8" },
  { title: "Как часто сдавать анализы и какие", duration: "20 мин", episode: "Эпизод 7" },
  { title: "Железо, ферритин, гемоглобин — в чём разница?", duration: "22 мин", episode: "Эпизод 6" },
];

const webinars = [
  { title: "Как понять результаты анализа крови", views: "5 200", duration: "45 мин" },
  { title: "Анализы при беременности: что важно знать", views: "3 800", duration: "50 мин" },
  { title: "Детские анализы: нормы и отклонения", views: "2 900", duration: "40 мин" },
];

const eventTypeColor: Record<string, string> = {
  lecture: "bg-patient/10 text-patient",
  qa: "bg-gold/10 text-gold",
  webinar: "bg-primary/10 text-primary",
};

const eventTypeLabel: Record<string, string> = {
  lecture: "Лекция",
  qa: "Вопрос-ответ",
  webinar: "Вебинар",
};

const Patients = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-patient-accent py-12 lg:py-20">
      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <Badge className="bg-patient/10 text-patient border-0 mb-4">Для пациентов</Badge>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Понимайте свои анализы
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            Простые и понятные объяснения лабораторных исследований.
            Узнайте, что означают ваши результаты, без сложной терминологии.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/knowledge/patients"><Button size="lg" className="bg-patient hover:bg-patient/90 text-patient-foreground gap-2"><Search className="w-5 h-5" />База знаний</Button></Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={aureliaImg} alt="Аурелия" className="character-float w-44 sm:w-56 lg:w-72 h-44 sm:h-56 lg:h-72 object-contain" loading="lazy" width={288} height={288} />
        </div>
      </div>
    </section>

    <CharacterMessage character="aurelia" message="Привет! Я Аурелия. Помогу вам разобраться в ваших анализах простым и понятным языком." className="container -mt-6 max-w-2xl" />
    <SectionDivider />

    {/* What you get */}
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">Что вы найдёте на портале</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {[
          { icon: BookOpen, title: "Понятные материалы", desc: "Статьи и уроки, написанные простым языком без сложной медицинской терминологии" },
          { icon: HelpCircle, title: "Ответы на вопросы", desc: "Что означают показатели, какие нормы, когда стоит обратиться к врачу" },
          { icon: Shield, title: "Проверенная информация", desc: "Все материалы подготовлены врачами-экспертами с многолетним опытом" },
        ].map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 sm:p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-patient/10 flex items-center justify-center">
              <f.icon className="w-6 h-6 text-patient" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider />

    {/* Calendar */}
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2">
          <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-patient" /> Мероприятия для пациентов
        </h2>
        <div className="space-y-3">
          {events.map((e, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 hover:shadow-md hover:border-patient/30 transition-all">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-14 h-14 rounded-xl bg-patient/10 flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs text-muted-foreground leading-none">{e.date.split(" ")[1]}</span>
                  <span className="text-lg font-black text-patient leading-none">{e.date.split(" ")[0]}</span>
                </div>
                <Badge className={`${eventTypeColor[e.type]} border-0 sm:inline-flex`}>{eventTypeLabel[e.type]}</Badge>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">{e.title}</h4>
                <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Clock className="w-3 h-3" />{e.time}</span>
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

    {/* Articles */}
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2">
        <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-patient" /> Полезные статьи
      </h2>
      <div className="space-y-3">
        {articles.map((a, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 hover:shadow-md hover:border-patient/30 transition-all cursor-pointer group">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <Badge className="bg-patient/10 text-patient border-0 text-xs">{a.category}</Badge>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </div>
              <h4 className="font-display font-semibold text-foreground text-sm sm:text-base group-hover:text-patient transition-colors">{a.title}</h4>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
              <Clock className="w-3 h-3" />{a.readTime}
              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-patient" />
            </div>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider />

    {/* Webinars */}
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2">
          <Video className="w-6 h-6 sm:w-7 sm:h-7 text-patient" /> Видео и вебинары
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {webinars.map((w, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-patient/30 transition-all group cursor-pointer">
              <div className="aspect-video bg-patient/5 flex items-center justify-center relative">
                <Video className="w-10 h-10 text-patient/30" />
                <div className="absolute inset-0 bg-patient/0 group-hover:bg-patient/5 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-patient/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-patient transition-colors">{w.title}</h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{w.duration}</span>
                  <span>{w.views} просмотров</span>
                </div>
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
        <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-patient" /> Подкасты
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {podcasts.map((p, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-patient/30 transition-all group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-patient flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-patient font-semibold">{p.episode}</p>
                <p className="text-xs text-muted-foreground">{p.duration}</p>
              </div>
            </div>
            <h4 className="font-display font-semibold text-foreground text-sm group-hover:text-patient transition-colors">{p.title}</h4>
          </div>
        ))}
      </div>
    </section>
    <SectionDivider />

    {/* Popular topics */}
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">Популярные темы</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-3xl mx-auto">
          {popularTopics.map((t, i) => (
            <Link key={i} to={`/knowledge/patients?topic=${encodeURIComponent(t)}`}>
              <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors">{t}</Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <SectionDivider />

    {/* Disclaimer */}
    <section className="container py-12 md:py-16">
      <div className="bg-muted rounded-xl p-5 sm:p-6 text-center">
        <Shield className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
          Материалы портала носят исключительно информационно-образовательный характер и не заменяют
          консультацию квалифицированного врача. При любых вопросах о здоровье обратитесь к специалисту.
        </p>
      </div>
    </section>
  </Layout>
);

export default Patients;
