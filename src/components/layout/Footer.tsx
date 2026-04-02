import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 mt-0">
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center shadow-md shadow-primary/15">
              <span className="text-white font-bold text-sm">ПД</span>
            </div>
            <span className="font-display font-black text-lg">ПРО <span className="text-primary">диагностику</span></span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Образовательный портал по лабораторной диагностике для специалистов и пациентов.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm mb-3 text-foreground">Специалистам</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/specialists" className="hover:text-primary transition-colors">Для специалистов</Link></li>
            <li><Link to="/courses" className="hover:text-primary transition-colors">Курсы</Link></li>
            <li><Link to="/pro-club" className="hover:text-primary transition-colors">PRO Club</Link></li>
            <li><Link to="/ai-analysis" className="hover:text-primary transition-colors">AI-расшифровка</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm mb-3 text-foreground">Пациентам</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/patients" className="hover:text-primary transition-colors">Для пациентов</Link></li>
            <li><Link to="/free-course" className="hover:text-primary transition-colors">Азбука анализов</Link></li>
            <li><Link to="/knowledge/patients" className="hover:text-primary transition-colors">База знаний</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm mb-3 text-foreground">Информация</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">О проекте</Link></li>
            <li><Link to="/experts" className="hover:text-primary transition-colors">Эксперты</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Конфиденциальность</Link></li>
            <li><Link to="/cookies" className="hover:text-primary transition-colors">Политика cookies</Link></li>
            <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground">© 2024 ПРО диагностику. Все права защищены.</p>
        <p className="text-xs text-muted-foreground">Материалы портала не заменяют консультацию врача.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
