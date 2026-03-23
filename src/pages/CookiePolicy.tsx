import Layout from "@/components/layout/Layout";
import { Cookie } from "lucide-react";

const CookiePolicy = () => (
  <Layout>
    <section className="bg-muted/50 py-12">
      <div className="container">
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Политика cookies</h1>
        <p className="text-muted-foreground">Информация об использовании файлов cookie</p>
      </div>
    </section>
    <section className="container py-12 max-w-3xl">
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <div className="bg-accent rounded-xl p-6 flex items-start gap-3">
          <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm">Мы используем файлы cookie для обеспечения работы сайта, аналитики и улучшения пользовательского опыта. Вы можете управлять своими предпочтениями в любое время.</p>
        </div>
        <h2 className="font-display text-lg font-semibold text-foreground">Категории cookies</h2>
        <h3 className="font-semibold text-foreground">Обязательные</h3>
        <p>Необходимы для базовой работы сайта: авторизация, безопасность, сохранение настроек. Не могут быть отключены.</p>
        <h3 className="font-semibold text-foreground">Аналитические</h3>
        <p>Помогают понять, как пользователи взаимодействуют с сайтом (GA4, Яндекс.Метрика). Загружаются только после вашего согласия.</p>
        <h3 className="font-semibold text-foreground">Функциональные</h3>
        <p>Запоминают ваши предпочтения: язык, выбранный раздел, настройки отображения.</p>
        <h3 className="font-semibold text-foreground">Маркетинговые</h3>
        <p>Используются для показа релевантного контента. Загружаются только после вашего согласия.</p>
        <h2 className="font-display text-lg font-semibold text-foreground">Управление cookies</h2>
        <p>Вы можете изменить свои предпочтения в любое время через Центр управления cookies в футере сайта или в настройках профиля.</p>
      </div>
    </section>
  </Layout>
);

export default CookiePolicy;
