import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CharacterMessage from "@/components/characters/CharacterMessage";

const Auth = () => {
  const [params] = useSearchParams();
  const [tab, setTab] = useState(params.get("tab") === "register" ? "register" : "login");

  return (
    <Layout>
      <section className="container py-16 max-w-md mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex gap-2 mb-6">
            <button onClick={() => setTab("login")} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${tab === "login" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              Вход
            </button>
            <button onClick={() => setTab("register")} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${tab === "register" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              Регистрация
            </button>
          </div>

          {tab === "register" && (
            <p className="text-xs text-muted-foreground bg-specialist/5 border border-specialist/20 rounded-lg p-3 mb-6">
              Регистрация доступна для специалистов и врачей. Пациентам регистрация не требуется — все материалы доступны без аккаунта.
            </p>
          )}

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {tab === "register" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Имя</label>
                <input type="text" placeholder="Ваше имя" className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <input type="email" placeholder="email@example.com" className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Пароль</label>
              <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
            </div>

            {tab === "register" && (
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 accent-primary" />
                <span className="text-xs text-muted-foreground">
                  Я соглашаюсь с <Link to="/privacy" className="underline text-primary">политикой конфиденциальности</Link> и
                  даю <Link to="/privacy" className="underline text-primary">согласие на обработку персональных данных</Link>
                </span>
              </label>
            )}

            <Button type="submit" className="w-full">{tab === "login" ? "Войти" : "Зарегистрироваться"}</Button>

            {tab === "login" && (
              <p className="text-center text-xs text-muted-foreground">
                <button className="text-primary underline">Забыли пароль?</button>
              </p>
            )}
          </form>
        </div>

        <CharacterMessage
          character="analytia"
          message={tab === "login" ? "Рада вас снова видеть! Войдите, чтобы продолжить обучение." : "Регистрация откроет доступ к курсам, AI-расшифровке анализов и личному кабинету специалиста."}
          className="mt-6"
          size="sm"
        />
      </section>
    </Layout>
  );
};

export default Auth;
