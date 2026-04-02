import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Главная", href: "/" },
  {
    label: "Специалистам",
    href: "/specialists",
    children: [
      { label: "Курсы", href: "/courses" },
      { label: "Азбука анализов", href: "/free-course" },
      { label: "PRO Club", href: "/pro-club" },
      { label: "AI-расшифровка", href: "/ai-analysis" },
      { label: "База знаний", href: "/knowledge/specialists" },
    ],
  },
  {
    label: "Пациентам",
    href: "/patients",
    children: [
      { label: "База знаний", href: "/knowledge/patients" },
    ],
  },
  { label: "Эксперты", href: "/experts" },
  { label: "О проекте", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 glass-strong">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-sm">ПД</span>
          </div>
          <span className="font-display font-black text-lg text-foreground hidden sm:block">
            ПРО <span className="text-primary">диагностику</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {item.children && openDropdown === item.href && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-1 glass-strong rounded-lg shadow-lg py-1.5 min-w-[200px]"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/auth">
            <Button size="sm" className="hidden sm:inline-flex bg-gradient-hero hover:opacity-90 text-white font-semibold shadow-lg shadow-primary/20">
              Войти
            </Button>
          </Link>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border/50 glass-strong overflow-hidden"
          >
            <nav className="container py-3 flex flex-col gap-0.5">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex gap-2 mt-2 px-3">
                <Link to="/auth" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-hero text-white">Войти</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
