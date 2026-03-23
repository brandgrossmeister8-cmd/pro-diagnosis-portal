import Layout from "@/components/layout/Layout";
import { Shield } from "lucide-react";

const Privacy = () => (
  <Layout>
    <section className="bg-muted/50 py-12">
      <div className="container">
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Политика конфиденциальности</h1>
        <p className="text-muted-foreground">Защита ваших персональных данных</p>
      </div>
    </section>
    <section className="container py-12 max-w-3xl">
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <div className="bg-accent rounded-xl p-6 flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm">Мы серьёзно относимся к защите ваших персональных данных и обрабатываем их в соответствии с действующим законодательством.</p>
        </div>
        <h2 className="font-display text-lg font-semibold text-foreground">1. Какие данные мы собираем</h2>
        <p>При регистрации: имя, email, выбранная роль (специалист/пациент). При использовании AI-сервиса: загруженные данные анализов обрабатываются для генерации отчёта и сохраняются в личном кабинете.</p>
        <h2 className="font-display text-lg font-semibold text-foreground">2. Цели обработки</h2>
        <p>Предоставление доступа к образовательным материалам, сохранение прогресса обучения, работа AI-сервиса, обработка платежей, улучшение качества сервиса.</p>
        <h2 className="font-display text-lg font-semibold text-foreground">3. Хранение и защита</h2>
        <p>Данные хранятся на защищённых серверах с использованием шифрования. Доступ к AI-истории ограничен владельцем аккаунта. Платёжные данные обрабатываются сертифицированными платёжными системами.</p>
        <h2 className="font-display text-lg font-semibold text-foreground">4. Ваши права</h2>
        <p>Вы имеете право на доступ, исправление и удаление ваших персональных данных. Для удаления аккаунта и анонимизации данных обратитесь в поддержку. Вы можете отозвать согласие на обработку данных в любое время.</p>
        <h2 className="font-display text-lg font-semibold text-foreground">5. Cookies</h2>
        <p>Подробности об использовании cookies описаны в <a href="/cookies" className="text-primary underline">Политике cookies</a>. Необязательные cookies загружаются только после вашего согласия.</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
