import { useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const results = [
  {
    name: 'Алексей К.',
    role: 'Онлайн-школа',
    avatar: 'А',
    result: '47 заявок, 9 продаж',
    revenue: '270 000 ₽',
    quote: 'Загрузили в VK Lead Assistant базу 1 200 подписчиков конкурирующих школ. За две недели получили 47 заявок на курс и закрыли 9 продаж на сумму 270 000 ₽. Раньше таргет давал 10–15 лидов в месяц и едва окупал себя.',
  },
  {
    name: 'Марина В.',
    role: 'Оборудование для ресторанов',
    avatar: 'М',
    result: '32 диалога, 6 контрактов',
    revenue: '~1,8 млн ₽',
    quote: 'Передали агенту список из 800 ресторанов из Target Hunter. За первый месяц вышли на 32 плотных диалога и подписали 6 контрактов на поставку — это ~1,8 млн ₽ выручки. Раньше менеджер тратил на холодные сообщения по 3–4 часа в день, сейчас всё делает бот.',
  },
  {
    name: 'Дмитрий П.',
    role: 'Маркетинговое агентство',
    avatar: 'Д',
    result: '96 диалогов, 19 договоров',
    revenue: '+600 000 ₽/мес',
    quote: 'Запустили агента по базе владельцев онлайн-проектов. За месяц получили 96 диалогов, из них 19 перешли в договор на ведение SMM. Дополнительный ежемесячный оборот агентства вырос примерно на 600 000 ₽ — внедрение окупилось за 3 дня.',
  },
  {
    name: 'Ольга С.',
    role: 'Таргетолог на фрилансе',
    avatar: 'О',
    result: '14 запросов, 7 клиентов',
    revenue: 'от 25 000 ₽/клиент',
    quote: 'Собрала через Target Hunter 500 владельцев бизнес-страниц ВК и отдала их в работу агенту. За 10 дней пришло 14 запросов на настройку рекламы, из них 7 клиентов оплатили ведение от 25 000 ₽. До этого я месяцами искала таких клиентов вручную.',
  },
  {
    name: 'Игорь М.',
    role: 'Интегратор CRM',
    avatar: 'И',
    result: '21 лид, 5 сделок',
    revenue: '950 000 ₽',
    quote: 'Загрузили в систему 400 руководителей отделов продаж из ВК. За первый месяц агент довёл до встречи 21 лида, из них 5 сделок на внедрение CRM закрылись, суммарный чек — 950 000 ₽. После первой сделки все расходы на сервер и внедрение отбились.',
  },
];

const ResultsSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  return (
    <section id="results" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Результаты <span className="text-gradient-gold">клиентов</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Цифры основаны на запуске по заранее собранным базам (Target Hunter + VK Lead Assistant)
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            {/* Main card */}
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-primary/30 mb-6" />

              {/* Quote text */}
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{results[currentIndex].quote}"
              </p>

              {/* Author info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-xl font-display font-bold text-primary">
                    {results[currentIndex].avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground">
                      {results[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {results[currentIndex].role}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="flex gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Результат</div>
                    <div className="font-display font-bold text-foreground">
                      {results[currentIndex].result}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Выручка</div>
                    <div className="font-display font-bold text-accent">
                      {results[currentIndex].revenue}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full border-border hover:border-primary/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {results.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-6'
                        : 'bg-muted hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-border hover:border-primary/50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
