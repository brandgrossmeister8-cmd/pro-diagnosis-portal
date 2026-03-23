import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <Layout>
    <section className="container py-20 text-center max-w-lg mx-auto">
      <h1 className="font-display text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-foreground mb-6">Страница не найдена</p>
      <CharacterMessage
        character="analisa"
        message="Ой, кажется, такой страницы нет. Давайте я помогу вам найти нужный раздел!"
        className="mb-6"
      />
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/"><Button>На главную</Button></Link>
        <Link to="/specialists"><Button variant="outline">Для специалистов</Button></Link>
        <Link to="/patients"><Button variant="outline">Для пациентов</Button></Link>
      </div>
    </section>
  </Layout>
);

export default NotFound;
