import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50 mt-20">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">ПД</span>
            </div>
            <span className="font-display font-bold text-lg">ПРО диагностику</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Образовательный портал по лабораторной диагностике для специалистов и пациентов.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Специалистам</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/specialists" className="hover:text-foreground transition-colors">Для специалистов</Link></li>
            <li><Link to="/courses" className="hover:text-foreground transition-colors">Курсы</Link></li>
            <li><Link to="/pro-club" className="hover:text-foreground transition-colors">PRO Club</Link></li>
            <li><Link to="/ai-analysis" className="hover:text-foreground transition-colors">AI-расшифровка</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Пациентам</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/patients" className="hover:text-foreground transition-colors">Для пациентов</Link></li>
            <li><Link to="/free-course" className="hover:text-foreground transition-colors">Азбука анализов</Link></li>
            <li><Link to="/knowledge/patients" className="hover:text-foreground transition-colors">База знаний</Link></li>
            <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Информация</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">О проекте</Link></li>
            <li><Link to="/experts" className="hover:text-foreground transition-colors">Эксперты</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground transition-colors">Конфиденциальность</Link></li>
            <li><Link to="/cookies" className="hover:text-foreground transition-colors">Политика cookies</Link></li>
            <li><Link to="/contacts" className="hover:text-foreground transition-colors">Контакты</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2024 ПРО диагностику. Все права защищены.</p>
        <p className="text-xs text-muted-foreground">Материалы портала не заменяют консультацию врача.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
