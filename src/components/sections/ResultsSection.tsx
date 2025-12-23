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
    quote: 'За месяц получил больше заявок, чем за полгода таргета. Качество лидов просто космос — люди уже готовы покупать.',
  },
  {
    name: 'Марина В.',
    role: 'Оборудование для ресторанов',
    avatar: 'М',
    result: '6 контрактов',
    revenue: '1 800 000 ₽',
    quote: 'В B2B такой подход работает идеально. Клиенты приходят с уже сформированной потребностью, остаётся только закрыть сделку.',
  },
  {
    name: 'Дмитрий П.',
    role: 'Маркетинговое агентство',
    avatar: 'Д',
    result: '19 договоров',
    revenue: '+600 000 ₽/мес',
    quote: 'Масштабировал до 5 аккаунтов и получаю стабильный поток клиентов. ROI считать даже не нужно — он бесконечный.',
  },
  {
    name: 'Ольга С.',
    role: 'Таргетолог',
    avatar: 'О',
    result: '7 клиентов за 10 дней',
    revenue: 'Полная загрузка',
    quote: 'Как таргетолог, была скептиком. Теперь использую для своих услуг и рекомендую клиентам. Это будущее лидгена.',
  },
  {
    name: 'Игорь М.',
    role: 'Интегратор CRM',
    avatar: 'И',
    result: '5 сделок',
    revenue: '950 000 ₽',
    quote: 'Высокий чек — не проблема. AI находит тех, кто уже ищет CRM, и грамотно выводит на диалог.',
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
            Реальные кейсы из разных ниш
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
