import { useInView } from '@/hooks/useInView';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Игорь М.',
    role: 'CRM-интегратор',
    revenue: '950 000 ₽',
    revenueLabel: 'сделки за месяц',
    text: 'Загрузили в систему 400 руководителей отделов продаж из ВК. За первый месяц агент довёл до встречи 21 лида, из них 5 сделок на внедрение CRM закрылись, суммарный чек — 950 000 ₽. После первой сделки все расходы на сервер и внедрение отбились.',
    gradient: 'from-emerald-400 to-green-500',
  },
  {
    name: 'Алексей К.',
    role: 'Онлайн-школа',
    revenue: '270 000 ₽',
    revenueLabel: 'продаж за 2 недели',
    text: 'Загрузили в VK Lead Assistant базу 1 200 подписчиков конкурирующих школ. За две недели получили 47 заявок на курс и закрыли 9 продаж на сумму 270 000 ₽. Раньше таргет давал 10–15 лидов в месяц и едва окупал себя.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Марина В.',
    role: 'Поставки оборудования',
    revenue: '1.8 млн ₽',
    revenueLabel: 'выручка за месяц',
    text: 'Передали агенту список из 800 ресторанов из Target Hunter. За первый месяц вышли на 32 плотных диалога и подписали 6 контрактов на поставку — это ~1,8 млн ₽ выручки. Раньше менеджер тратил на холодные сообщения по 3–4 часа в день, сейчас всё делает бот.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Дмитрий П.',
    role: 'Маркетинговое агентство',
    revenue: '+600 000 ₽',
    revenueLabel: 'оборот в месяц',
    text: 'Запустили агента по базе владельцев онлайн-проектов. За месяц получили 96 диалогов, из них 19 перешли в договор на ведение SMM. Дополнительный ежемесячный оборот агентства вырос примерно на 600 000 ₽ — внедрение окупилось за 3 дня.',
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Елена С.',
    role: 'Таргетолог',
    revenue: '175 000 ₽',
    revenueLabel: 'за 10 дней',
    text: 'Собрала через Target Hunter 500 владельцев бизнес-страниц ВК и отдала их в работу агенту. За 10 дней пришло 14 запросов на настройку рекламы, из них 7 клиентов оплатили ведение от 25 000 ₽. До этого я месяцами искала таких клиентов вручную.',
    gradient: 'from-cyan-400 to-blue-500',
  },
];

const ResultsSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="results" className="py-20 md:py-28 relative overflow-hidden bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 -right-60 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 -left-60 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
      
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 glass-card glow-sm mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-semibold text-foreground">Реальные результаты</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Результаты <span className="text-gradient-neon text-glow">клиентов</span>
          </h2>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative">
            <div className="glass-card-strong p-8 md:p-12 neon-border relative overflow-hidden">
              {/* Revenue highlight */}
              <div className="absolute -top-2 right-8 md:right-12">
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${currentTestimonial.gradient} blur-2xl opacity-40`} />
                  <div className="relative glass-card px-6 py-4 border-2 border-primary/30 glow-md">
                    <div className={`text-3xl md:text-4xl lg:text-5xl font-display font-black bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                      {currentTestimonial.revenue}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{currentTestimonial.revenueLabel}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="w-12 h-12 text-primary/30" />
              </div>

              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 pr-0 md:pr-48">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center text-white font-bold text-xl`}>
                  {currentTestimonial.name[0]}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-lg">{currentTestimonial.name}</div>
                  <div className="text-muted-foreground">{currentTestimonial.role}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:glow-sm transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary glow-sm' 
                        : 'w-2 bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full glass-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:glow-sm transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;