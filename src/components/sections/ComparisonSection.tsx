import { useInView } from '@/hooks/useInView';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Цена заявки', target: '1 500 ₽', ai: 'от 15 ₽', aiWins: true },
  { feature: 'Время запуска', target: '2-4 недели', ai: '1 день', aiWins: true },
  { feature: 'Качество лидов', target: 'Холодные', ai: 'Горячие', aiWins: true },
  { feature: 'Масштабирование', target: 'Рост бюджета', ai: 'Клонирование', aiWins: true },
  { feature: 'Конкуренция', target: 'Аукцион', ai: 'Прямой контакт', aiWins: true },
  { feature: 'Автоматизация', target: 'Частичная', ai: 'Полная 24/7', aiWins: true },
];

const ComparisonSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const savingsCounter = useAnimatedCounter(100, 2000, isInView);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Сравнение с <span className="text-gradient-primary">таргетом</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Почему AI-ассистент эффективнее традиционной рекламы
          </p>
        </div>

        {/* Comparison table */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-secondary/50">
              <div className="p-4 font-display font-bold text-foreground">Критерий</div>
              <div className="p-4 font-display font-bold text-destructive text-center">Таргет</div>
              <div className="p-4 font-display font-bold text-primary text-center">AI Assistant</div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-t border-border transition-all duration-500 ${
                  isInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="p-4 text-foreground font-medium">{row.feature}</div>
                <div className="p-4 text-center text-muted-foreground flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span>{row.target}</span>
                </div>
                <div className="p-4 text-center text-foreground flex items-center justify-center gap-2 bg-primary/5">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium">{row.ai}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated counter */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <div className="text-5xl md:text-6xl font-display font-bold text-gradient-primary mb-2 counter">
              до {savingsCounter}×
            </div>
            <div className="text-lg text-muted-foreground">выгоднее таргетированной рекламы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
