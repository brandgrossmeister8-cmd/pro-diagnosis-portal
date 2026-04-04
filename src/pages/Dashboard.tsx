import Layout from "@/components/layout/Layout";
import { useAuth, DoctorAd } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, Mail, Phone, Briefcase, MapPin, GraduationCap, Award,
  Stethoscope, FileText, Plus, Trash2, Eye, EyeOff, LogOut,
  Save, Megaphone, Pencil, X, Link as LinkIcon, Image,
  Gift, Star, TrendingUp, Zap, CheckCircle,
} from "lucide-react";

type Tab = "profile" | "ads" | "loyalty" | "courses";

const specializations = [
  "Терапия", "Клиническая биохимия", "Гематология", "Иммунология",
  "Эндокринология", "Кардиология", "Гастроэнтерология", "Неврология",
  "Лабораторная диагностика", "Общая практика", "Педиатрия", "Другое",
];

function ProfileTab() {
  const { auth, updateProfile } = useAuth();
  const p = auth!.profile;
  const [saved, setSaved] = useState(false);

  const update = (field: string, value: string) => {
    updateProfile({ [field]: value });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Avatar and name */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-gradient-specialist flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
          {p.name ? p.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase() : "ДР"}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-xl font-bold text-foreground">{p.name || "Ваше имя"}</h2>
          <p className="text-sm text-muted-foreground">{p.specialization || "Укажите специализацию"}</p>
          {p.city && <p className="text-xs text-muted-foreground">{p.city}</p>}
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Personal info */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-specialist" /> Личная информация
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Field icon={<User className="w-4 h-4" />} label="ФИО" value={p.name} onChange={(v) => update("name", v)} placeholder="Иванов Иван Иванович" />
          <Field icon={<Mail className="w-4 h-4" />} label="Email" value={p.email} onChange={(v) => update("email", v)} placeholder="doctor@example.com" type="email" />
          <Field icon={<Phone className="w-4 h-4" />} label="Телефон" value={p.phone} onChange={(v) => update("phone", v)} placeholder="+7 (999) 123-45-67" />
          <Field icon={<MapPin className="w-4 h-4" />} label="Город" value={p.city} onChange={(v) => update("city", v)} placeholder="Москва" />
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Professional info */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-specialist" /> Профессиональная информация
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5 block">
              <Briefcase className="w-4 h-4 text-muted-foreground" /> Специализация
            </label>
            <select
              value={p.specialization}
              onChange={(e) => update("specialization", e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
            >
              <option value="">Выберите специализацию</option>
              {specializations.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <Field icon={<Award className="w-4 h-4" />} label="Стаж работы" value={p.experience} onChange={(v) => update("experience", v)} placeholder="15 лет" />
          <Field icon={<Briefcase className="w-4 h-4" />} label="Место работы" value={p.workplace} onChange={(v) => update("workplace", v)} placeholder="Городская клиническая больница №1" />
          <Field icon={<GraduationCap className="w-4 h-4" />} label="Образование" value={p.education} onChange={(v) => update("education", v)} placeholder="Первый МГМУ им. Сеченова" />
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Bio */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4 text-specialist" /> О себе
        </h3>
        <textarea
          value={p.bio}
          onChange={(e) => update("bio", e.target.value)}
          placeholder="Расскажите о себе, вашем опыте и направлениях работы..."
          rows={4}
          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm resize-none"
        />
      </div>

      <div className="h-px bg-border" />

      {/* Services */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-specialist" /> Услуги
        </h3>
        <TagEditor tags={p.services} onChange={(v) => updateProfile({ services: v })} placeholder="Добавить услугу" />
      </div>

      <div className="h-px bg-border" />

      {/* Certificates */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-specialist" /> Сертификаты и квалификации
        </h3>
        <TagEditor tags={p.certificates} onChange={(v) => updateProfile({ certificates: v })} placeholder="Добавить сертификат" />
      </div>

      <Button onClick={handleSave} className="bg-gradient-specialist hover:opacity-90 text-white font-semibold gap-2">
        <Save className="w-4 h-4" />
        {saved ? "Сохранено!" : "Сохранить профиль"}
      </Button>
    </div>
  );
}

function AdsTab() {
  const { auth, addAd, updateAd, removeAd } = useAuth();
  const ads = auth!.profile.ads;
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", link: "", image: "" });

  const handleCreate = () => {
    if (!form.title || !form.description) return;
    addAd({ ...form, active: true });
    setForm({ title: "", description: "", link: "", image: "" });
    setCreating(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display font-bold text-foreground">Ваши рекламные объявления</h3>
          <p className="text-sm text-muted-foreground">Размещайте рекламу ваших услуг, клиники или мероприятий</p>
        </div>
        <Button onClick={() => setCreating(true)} className="bg-gradient-specialist hover:opacity-90 text-white gap-2" disabled={creating}>
          <Plus className="w-4 h-4" /> Создать
        </Button>
      </div>

      {creating && (
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-display font-bold text-foreground">Новое объявление</h4>
            <button onClick={() => setCreating(false)} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
          </div>
          <Field icon={<Pencil className="w-4 h-4" />} label="Заголовок" value={form.title} onChange={(v) => setForm({ ...form, title: v })} placeholder="Например: Консультация эндокринолога" />
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5 block">
              <FileText className="w-4 h-4 text-muted-foreground" /> Описание
            </label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Подробное описание вашего предложения..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm resize-none"
            />
          </div>
          <Field icon={<LinkIcon className="w-4 h-4" />} label="Ссылка (необязательно)" value={form.link} onChange={(v) => setForm({ ...form, link: v })} placeholder="https://..." />
          <Field icon={<Image className="w-4 h-4" />} label="URL изображения (необязательно)" value={form.image} onChange={(v) => setForm({ ...form, image: v })} placeholder="https://..." />
          <Button onClick={handleCreate} className="bg-gradient-specialist hover:opacity-90 text-white gap-2">
            <Megaphone className="w-4 h-4" /> Опубликовать
          </Button>
        </div>
      )}

      {ads.length === 0 && !creating && (
        <div className="text-center py-12 bg-muted/50 rounded-xl">
          <Megaphone className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">У вас пока нет объявлений</p>
          <p className="text-muted-foreground text-xs mt-1">Создайте первое объявление, чтобы продвигать свои услуги</p>
        </div>
      )}

      {ads.map((ad) => (
        <AdCard key={ad.id} ad={ad} onToggle={() => updateAd(ad.id, { active: !ad.active })} onRemove={() => removeAd(ad.id)} />
      ))}
    </div>
  );
}

function AdCard({ ad, onToggle, onRemove }: { ad: DoctorAd; onToggle: () => void; onRemove: () => void }) {
  return (
    <div className={`bg-card border rounded-xl p-5 transition-all ${ad.active ? "border-specialist/30" : "border-border opacity-60"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-display font-bold text-foreground">{ad.title}</h4>
            <Badge className={ad.active ? "bg-green-100 text-green-700 border-0" : "bg-muted text-muted-foreground border-0"}>
              {ad.active ? "Активно" : "Приостановлено"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{ad.description}</p>
          {ad.link && (
            <a href={ad.link} target="_blank" rel="noopener noreferrer" className="text-xs text-specialist hover:underline flex items-center gap-1">
              <LinkIcon className="w-3 h-3" /> {ad.link}
            </a>
          )}
          <p className="text-xs text-muted-foreground mt-2">Создано: {new Date(ad.createdAt).toLocaleDateString("ru-RU")}</p>
        </div>
        {ad.image && (
          <img src={ad.image} alt={ad.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
        )}
      </div>
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
        <Button variant="outline" size="sm" onClick={onToggle} className="gap-1.5 text-xs">
          {ad.active ? <><EyeOff className="w-3 h-3" /> Приостановить</> : <><Eye className="w-3 h-3" /> Активировать</>}
        </Button>
        <Button variant="outline" size="sm" onClick={onRemove} className="gap-1.5 text-xs text-destructive hover:text-destructive border-destructive/30 hover:bg-destructive/5">
          <Trash2 className="w-3 h-3" /> Удалить
        </Button>
      </div>
    </div>
  );
}

const loyaltyLevels = [
  { name: "Стажёр", min: 0, max: 500, color: "bg-muted", textColor: "text-muted-foreground", icon: Zap },
  { name: "Практик", min: 500, max: 1500, color: "bg-specialist/10", textColor: "text-specialist", icon: Star },
  { name: "Эксперт", min: 1500, max: 3500, color: "bg-primary/10", textColor: "text-primary", icon: TrendingUp },
  { name: "Мастер", min: 3500, max: Infinity, color: "bg-gold/10", textColor: "text-gold", icon: Award },
];

const loyaltyActions = [
  { action: "Регистрация на портале", points: 100, done: true },
  { action: "Заполнение профиля", points: 50, done: false },
  { action: "Прохождение бесплатного курса", points: 200, done: false },
  { action: "Покупка платного курса", points: 500, done: false },
  { action: "Приглашение коллеги", points: 150, done: false },
  { action: "Публикация рекламного объявления", points: 100, done: false },
  { action: "Вступление в PRO Club", points: 300, done: false },
  { action: "Отзыв о курсе", points: 75, done: false },
];

const loyaltyRewards = [
  { name: "Скидка 10% на любой курс", cost: 500, icon: Gift },
  { name: "Бесплатный доступ к AI-расшифровке на 1 месяц", cost: 1000, icon: Zap },
  { name: "Приоритетная поддержка экспертов", cost: 1500, icon: Star },
  { name: "Скидка 30% на PRO Club", cost: 2000, icon: Award },
  { name: "Персональная консультация эксперта", cost: 3000, icon: Stethoscope },
  { name: "Бесплатный курс на выбор", cost: 5000, icon: GraduationCap },
];

function LoyaltyTab() {
  const points = 100; // Starting points (registration bonus)
  const currentLevel = loyaltyLevels.find((l) => points >= l.min && points < l.max) || loyaltyLevels[0];
  const nextLevel = loyaltyLevels[loyaltyLevels.indexOf(currentLevel) + 1];
  const progress = nextLevel ? ((points - currentLevel.min) / (nextLevel.min - currentLevel.min)) * 100 : 100;

  return (
    <div className="space-y-8">
      {/* Current status */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl ${currentLevel.color} flex items-center justify-center`}>
            <currentLevel.icon className={`w-7 h-7 ${currentLevel.textColor}`} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Ваш уровень</p>
            <h3 className={`font-display text-xl font-black ${currentLevel.textColor}`}>{currentLevel.name}</h3>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm text-muted-foreground">Баллы</p>
            <p className="font-display text-2xl font-black text-foreground">{points}</p>
          </div>
        </div>
        {nextLevel && (
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
              <span>{currentLevel.name}</span>
              <span>{nextLevel.name} — {nextLevel.min} баллов</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-hero rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">Ещё {nextLevel.min - points} баллов до следующего уровня</p>
          </div>
        )}
      </div>

      {/* How to earn */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" /> Как заработать баллы
        </h3>
        <div className="space-y-2">
          {loyaltyActions.map((a, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${a.done ? "bg-primary/5 border-primary/20" : "bg-card border-border"}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${a.done ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                {a.done ? <CheckCircle className="w-4 h-4" /> : <span className="text-xs font-bold">{i + 1}</span>}
              </div>
              <span className={`text-sm flex-1 ${a.done ? "text-foreground line-through opacity-60" : "text-foreground"}`}>{a.action}</span>
              <Badge className={`border-0 ${a.done ? "bg-primary/10 text-primary" : "bg-gold/10 text-gold"}`}>+{a.points}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards catalog */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Gift className="w-4 h-4 text-gold" /> Каталог наград
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {loyaltyRewards.map((r, i) => {
            const canAfford = points >= r.cost;
            return (
              <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${canAfford ? "bg-card border-gold/30 hover:shadow-md" : "bg-muted/30 border-border opacity-70"}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${canAfford ? "bg-gold/10" : "bg-muted"}`}>
                  <r.icon className={`w-5 h-5 ${canAfford ? "text-gold" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.cost} баллов</p>
                </div>
                <Button size="sm" variant="outline" disabled={!canAfford} className={canAfford ? "border-gold text-gold hover:bg-gold/10" : ""}>
                  {canAfford ? "Получить" : "Недоступно"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Levels */}
      <div>
        <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Star className="w-4 h-4 text-specialist" /> Уровни программы
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {loyaltyLevels.map((l) => (
            <div key={l.name} className={`text-center p-4 rounded-xl border ${points >= l.min ? "border-primary/30 bg-card" : "border-border bg-muted/30 opacity-60"}`}>
              <l.icon className={`w-8 h-8 mx-auto mb-2 ${l.textColor}`} />
              <p className={`font-display font-bold text-sm ${l.textColor}`}>{l.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{l.min === 0 ? "0" : l.min}+ баллов</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoursesTab() {
  return (
    <div className="space-y-6">
      <h3 className="font-display font-bold text-foreground">Мои курсы</h3>
      <div className="text-center py-12 bg-muted/50 rounded-xl">
        <GraduationCap className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
        <p className="text-muted-foreground text-sm">Вы пока не записаны на курсы</p>
        <p className="text-muted-foreground text-xs mt-1">Перейдите в каталог курсов, чтобы начать обучение</p>
      </div>
    </div>
  );
}

function Field({ icon, label, value, onChange, placeholder, type = "text" }: {
  icon: React.ReactNode; label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5 block">
        <span className="text-muted-foreground">{icon}</span> {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
      />
    </div>
  );
}

function TagEditor({ tags, onChange, placeholder }: { tags: string[]; onChange: (v: string[]) => void; placeholder: string }) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
      setInput("");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <Badge key={i} variant="secondary" className="gap-1 pr-1.5">
            {tag}
            <button onClick={() => onChange(tags.filter((_, j) => j !== i))} className="ml-1 hover:text-destructive">
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm"
        />
        <Button variant="outline" size="sm" onClick={addTag} className="gap-1">
          <Plus className="w-3.5 h-3.5" /> Добавить
        </Button>
      </div>
    </div>
  );
}

const Dashboard = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("profile");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!auth) return null;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "profile", label: "Профиль", icon: <User className="w-4 h-4" /> },
    { id: "loyalty", label: "Лояльность", icon: <Gift className="w-4 h-4" /> },
    { id: "ads", label: "Реклама", icon: <Megaphone className="w-4 h-4" /> },
    { id: "courses", label: "Мои курсы", icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <Layout>
      <section className="container py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-black text-foreground">Личный кабинет</h1>
            <p className="text-sm text-muted-foreground mt-1">Управление профилем и рекламными объявлениями</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2 text-sm">
            <LogOut className="w-4 h-4" /> Выйти
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-muted p-1 rounded-lg w-fit">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                tab === t.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.icon} {t.label}
              {t.id === "ads" && auth.profile.ads.length > 0 && (
                <Badge className="bg-specialist/10 text-specialist border-0 text-xs ml-1">{auth.profile.ads.length}</Badge>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl">
          {tab === "profile" && <ProfileTab />}
          {tab === "loyalty" && <LoyaltyTab />}
          {tab === "ads" && <AdsTab />}
          {tab === "courses" && <CoursesTab />}
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
