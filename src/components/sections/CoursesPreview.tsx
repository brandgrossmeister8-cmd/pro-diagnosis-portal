import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "abc-lab",
    title: "Азбука лабораторных анализов",
    description: "Бесплатный открытый курс для всех. Основы понимания лабораторных исследований.",
    duration: "8 уроков",
    students: "2 400+",
    rating: "4.9",
    price: "Бесплатно",
    free: true,
    href: "/free-course",
  },
];

const CoursesPreview = () => (
  <section className="container py-20">
    <div className="flex items-end justify-between mb-10">
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Открытый курс</h2>
        <p className="text-muted-foreground">Начните изучение лабораторной диагностики бесплатно</p>
      </div>
    </div>
    <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
      {courses.map((course) => (
        <Link key={course.id} to={course.href} className="group">
          <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-all hover:border-primary/30">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary/10 text-primary border-0">Бесплатно</Badge>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students}</span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3 text-gold" />{course.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <div className="mt-6">
      <Link to="/free-course">
        <Button className="gap-2">Начать обучение <ArrowRight className="w-4 h-4" /></Button>
      </Link>
    </div>
  </section>
);

export default CoursesPreview;
