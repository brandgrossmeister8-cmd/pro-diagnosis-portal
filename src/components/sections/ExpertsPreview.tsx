import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const experts = [
  { id: 1, name: "Д-р Елена Соколова", role: "Клиническая биохимия", exp: "15 лет опыта", initials: "ЕС" },
  { id: 2, name: "Д-р Андрей Петров", role: "Гематология", exp: "12 лет опыта", initials: "АП" },
  { id: 3, name: "Д-р Мария Кузнецова", role: "Иммунология", exp: "10 лет опыта", initials: "МК" },
  { id: 4, name: "Д-р Игорь Волков", role: "Эндокринология", exp: "18 лет опыта", initials: "ИВ" },
];

const ExpertsPreview = () => (
  <section className="relative py-14 overflow-hidden">
    <div className="absolute inset-0 dot-pattern opacity-15" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-2">
          Наши <span className="text-gradient-gold">эксперты</span>
        </h2>
        <p className="text-muted-foreground text-sm">Ведущие специалисты в области лабораторной диагностики</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {experts.map((e, i) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/experts/${e.id}`} className="group block text-center glass rounded-xl p-5 transition-all hover:scale-[1.03] hover:shadow-glow">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-base shadow-lg shadow-primary/20">
                {e.initials}
              </div>
              <h4 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">{e.name}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{e.role}</p>
              <p className="text-xs text-primary/60 mt-0.5">{e.exp}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-6"
      >
        <Link to="/experts">
          <Button variant="outline" className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/5">
            Все эксперты <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ExpertsPreview;
