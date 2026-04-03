import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import CharacterMessage from "@/components/characters/CharacterMessage";

const Auth = () => {
  const [params] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [tab, setTab] = useState(params.get("tab") === "register" ? "register" : "login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const from = (location.state as { from?: string })?.from || "/specialists";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Заполните все обязательные поля");
      return;
    }

    if (tab === "register") {
      if (!name) {
        setError("Укажите ваше имя");
        return;
      }
      if (!agreed) {
        setError("Необходимо принять политику конфиденциальности");
        return;
      }
      register(email, name);
    } else {
      login(email, email.split("@")[0]);
    }

    navigate(from, { replace: true });
  };

  return (
    <Layout>
      <section className="container py-16 max-w-md mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-display text-xl font-bold text-center mb-1">Раздел для специалистов</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Войдите или зарегистрируйтесь для доступа</p>

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
              Регистрация предназначена для специалистов и врачей. Пациентам регистрация не требуется — материалы раздела «Пациентам» доступны без аккаунта.
            </p>
          )}

          {error && (
            <p className="text-xs text-destructive bg-destructive/10 rounded-lg p-3 mb-4">{error}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {tab === "register" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Имя</label>
                <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <input type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Пароль</label>
              <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm" />
            </div>

            {tab === "register" && (
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 accent-primary" />
                <span className="text-xs text-muted-foreground">
                  Я соглашаюсь с <Link to="/privacy" className="underline text-primary">политикой конфиденциальности</Link> и
                  даю <Link to="/privacy" className="underline text-primary">согласие на обработку персональных данных</Link>
                </span>
              </label>
            )}

            <Button type="submit" className="w-full bg-gradient-specialist hover:opacity-90 text-white font-semibold">{tab === "login" ? "Войти" : "Зарегистрироваться"}</Button>
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
