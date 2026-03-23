import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, X } from "lucide-react";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: string;
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
    timestamp: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (!saved) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const saveConsent = (c: CookieConsent) => {
    const final = { ...c, timestamp: new Date().toISOString() };
    localStorage.setItem("cookie_consent", JSON.stringify(final));
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, functional: true, marketing: true, timestamp: "" });
  const rejectOptional = () => saveConsent({ necessary: true, analytics: false, functional: false, marketing: false, timestamp: "" });
  const saveCustom = () => saveConsent(consent);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4"
      >
        <div className="container max-w-3xl">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-6">
            {!showSettings ? (
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Мы используем cookies</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Мы используем файлы cookie для улучшения работы сайта, аналитики и персонализации.
                      Вы можете настроить свои предпочтения.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={acceptAll}>Принять все</Button>
                  <Button size="sm" variant="outline" onClick={rejectOptional}>Отклонить необязательные</Button>
                  <Button size="sm" variant="ghost" onClick={() => setShowSettings(true)}>
                    <Settings className="w-4 h-4 mr-1" /> Настроить
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display font-semibold">Настройки cookies</h3>
                  <button onClick={() => setShowSettings(false)}><X className="w-4 h-4" /></button>
                </div>
                <div className="space-y-3 mb-4">
                  {[
                    { key: "necessary" as const, label: "Обязательные", desc: "Необходимы для работы сайта", disabled: true },
                    { key: "analytics" as const, label: "Аналитические", desc: "Помогают улучшать сайт", disabled: false },
                    { key: "functional" as const, label: "Функциональные", desc: "Запоминают ваши предпочтения", disabled: false },
                    { key: "marketing" as const, label: "Маркетинговые", desc: "Для показа релевантной рекламы", disabled: false },
                  ].map((cat) => (
                    <label key={cat.key} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <span className="text-sm font-medium text-foreground">{cat.label}</span>
                        <p className="text-xs text-muted-foreground">{cat.desc}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={consent[cat.key]}
                        disabled={cat.disabled}
                        onChange={(e) => setConsent({ ...consent, [cat.key]: e.target.checked })}
                        className="w-4 h-4 accent-primary"
                      />
                    </label>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={saveCustom}>Сохранить выбор</Button>
                  <Button size="sm" variant="outline" onClick={acceptAll}>Принять все</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
