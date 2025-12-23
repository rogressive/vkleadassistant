import { useInView } from '@/hooks/useInView';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Алексей Кузнецов',
    role: 'Основатель онлайн-школы',
    revenue: '270 000 ₽',
    revenueLabel: 'выручка за неделю',
    text: 'Запустили AI-ассистента для продвижения курсов по программированию. За первую неделю получили 47 заявок — это больше, чем таргет давал за месяц. Закрыли 12 продаж на 270 000 рублей. Раньше на эту сумму уходило 3 месяца работы с рекламой.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Марина Волкова',
    role: 'Директор по продажам, B2B оборудование',
    revenue: '1.8 млн ₽',
    revenueLabel: 'контракты за месяц',
    text: 'Продаём промышленное оборудование — цикл сделки обычно 2-3 месяца. С AI-ассистентом за первый месяц закрыли 6 контрактов на поставку общей суммой 1.8 миллиона рублей. Менеджеры больше не тратят время на холодные контакты — только работа с тёплыми лидами.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Игорь Морозов',
    role: 'CRM-интегратор, агентство',
    revenue: '950 000 ₽',
    revenueLabel: 'сделки за месяц',
    text: 'Внедряем CRM-системы для бизнеса. Средний чек 180-200 тысяч. За месяц работы AI-ассистента закрыли 5 новых клиентов на общую сумму 950 000 рублей. Окупили внедрение с первой же продажи. Теперь масштабируем — подключаем ещё 3 аккаунта.',
    gradient: 'from-emerald-400 to-green-500',
  },
  {
    name: 'Дмитрий Петров',
    role: 'Руководитель маркетингового агентства',
    revenue: '+600 000 ₽',
    revenueLabel: 'дополнительный оборот',
    text: 'У нас агентство полного цикла — SEO, контекст, SMM. Запустили AI-ассистента для поиска новых клиентов на SMM-услуги. За месяц подписали 19 новых договоров. Дополнительный ежемесячный оборот — плюс 600 000 рублей. Это лучшая инвестиция года.',
    gradient: 'from-pink-400 to-rose-500',
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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="results" className="py-20 md:py-28 relative overflow-hidden bg-secondary">
      {/* Neon border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background neon blobs */}
      <div className="absolute top-20 -right-60 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 -left-60 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
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

        {/* Carousel */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative">
            {/* Main testimonial card */}
            <div className="glass-card-strong p-8 md:p-12 neon-border relative overflow-hidden">
              {/* Revenue highlight - BIG */}
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

              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-primary/30" />
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 pr-0 md:pr-48">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author */}
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

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:glow-sm transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              {/* Dots */}
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