import Layout from "@/components/layout/Layout";
import CharacterMessage from "@/components/characters/CharacterMessage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const generalFaq = [
  { q: "Что такое «ПРО диагностику»?", a: "Это образовательный портал по лабораторной диагностике, объединяющий обучение для врачей и просветительские материалы для пациентов." },
  { q: "Нужно ли регистрироваться?", a: "Часть материалов доступна без регистрации, включая курс «Азбука лабораторных анализов». Регистрация позволяет сохранять прогресс и получить доступ к личному кабинету." },
  { q: "Материалы заменяют консультацию врача?", a: "Нет. Все материалы портала носят исключительно информационно-образовательный характер и не заменяют консультацию квалифицированного медицинского специалиста." },
];

const specialistFaq = [
  { q: "Как получить доступ к AI-расшифровке анализов?", a: "AI-сервис доступен только зарегистрированным специалистам. Зарегистрируйтесь как врач и подтвердите свою квалификацию." },
  { q: "Выдаются ли сертификаты?", a: "Да, после успешного прохождения платных курсов вы получите электронный сертификат, подтверждающий ваши компетенции." },
  { q: "Что входит в PRO Club?", a: "Еженедельные разборы кейсов, закрытые экспертные материалы, Telegram-сообщество и доступ к записям вебинаров." },
];

const patientFaq = [
  { q: "Курс «Азбука анализов» действительно бесплатный?", a: "Да, курс полностью бесплатный и доступен без оплаты и обязательной регистрации." },
  { q: "Могу ли я использовать AI-расшифровку?", a: "AI-расшифровка анализов доступна только для медицинских специалистов. Для пациентов доступна база знаний и образовательные материалы." },
  { q: "Как понять свои анализы?", a: "Начните с бесплатного курса «Азбука лабораторных анализов» и изучите материалы в базе знаний для пациентов." },
];

const FAQ = () => (
  <Layout>
    <section className="bg-muted/50 py-12">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Часто задаваемые вопросы</h1>
        <p className="text-muted-foreground">Ответы на популярные вопросы о портале</p>
      </div>
    </section>

    <CharacterMessage character="analisa" message="Не нашли ответ? Напишите нам, и я помогу разобраться!" className="container -mt-4 max-w-2xl" />

    <section className="container py-12 max-w-3xl space-y-10">
      <div>
        <h2 className="font-display text-xl font-bold text-foreground mb-4">Общие вопросы</h2>
        <Accordion type="single" collapsible>
          {generalFaq.map((f, i) => (
            <AccordionItem key={i} value={`g-${i}`}>
              <AccordionTrigger className="text-left text-sm">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-specialist/10 text-specialist border-0">Специалистам</Badge>
        </div>
        <Accordion type="single" collapsible>
          {specialistFaq.map((f, i) => (
            <AccordionItem key={i} value={`s-${i}`}>
              <AccordionTrigger className="text-left text-sm">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-patient/10 text-patient border-0">Пациентам</Badge>
        </div>
        <Accordion type="single" collapsible>
          {patientFaq.map((f, i) => (
            <AccordionItem key={i} value={`p-${i}`}>
              <AccordionTrigger className="text-left text-sm">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
