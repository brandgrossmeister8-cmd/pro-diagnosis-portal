import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contacts = () => (
  <Layout>
    <section className="bg-muted/50 py-12">
      <div className="container">
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Контакты</h1>
        <p className="text-muted-foreground">Свяжитесь с нами</p>
      </div>
    </section>

    <CharacterMessage character="analisa" message="Есть вопросы? Напишите нам — мы ответим в ближайшее время!" className="container -mt-4 max-w-2xl" />

    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-sm">Email</h3>
              <p className="text-muted-foreground text-sm">info@prodiagnostiku.ru</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-sm">Телефон</h3>
              <p className="text-muted-foreground text-sm">+7 (495) 123-45-67</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Send className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground text-sm">Telegram</h3>
              <p className="text-muted-foreground text-sm">@prodiagnostiku</p>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Имя</label>
            <input type="text" placeholder="Ваше имя" className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
            <input type="email" placeholder="email@example.com" className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Сообщение</label>
            <textarea placeholder="Ваше сообщение..." rows={4} className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm resize-none" />
          </div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-primary" />
            <span className="text-xs text-muted-foreground">Я даю согласие на обработку персональных данных</span>
          </label>
          <Button type="submit" className="w-full">Отправить</Button>
        </form>
      </div>
    </section>
  </Layout>
);

export default Contacts;
