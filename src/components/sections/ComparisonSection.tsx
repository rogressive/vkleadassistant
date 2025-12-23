import { useInView } from '@/hooks/useInView';
import { TrendingDown } from 'lucide-react';

const ComparisonSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden section-alt">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TrendingDown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Сравнение стоимости</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Выгоднее до <span className="text-primary">100 раз</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Стоимость одной заявки: Таргет vs AI-ассистент
          </p>
        </div>

        {/* Premium Bar Chart Visualization */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative p-10 card-premium">
            <div className="flex items-end justify-center gap-20 md:gap-32 h-80">
              {/* Target bar */}
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-destructive mb-6">
                  1 500 ₽
                </div>
                <div className="relative">
                  <div 
                    className={`w-28 md:w-36 rounded-xl transition-all duration-1000 ease-out ${
                      isInView ? 'h-52' : 'h-0'
                    }`}
                    style={{
                      background: 'linear-gradient(180deg, hsl(0 72% 51%) 0%, hsl(0 72% 60%) 100%)',
                      boxShadow: '0 8px 32px hsl(0 72% 51% / 0.25)'
                    }}
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="font-display font-bold text-foreground text-lg">Таргет</div>
                  <div className="text-sm text-muted-foreground mt-1">Средняя цена заявки</div>
                </div>
              </div>

              {/* Savings indicator */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-500 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-primary font-display font-bold text-lg">−99%</span>
                </div>
              </div>

              {/* AI bar */}
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  15 ₽
                </div>
                <div className="relative">
                  <div 
                    className={`w-28 md:w-36 rounded-xl transition-all duration-1000 ease-out delay-300 ${
                      isInView ? 'h-5' : 'h-0'
                    }`}
                    style={{
                      background: 'linear-gradient(180deg, hsl(211 100% 50%) 0%, hsl(211 100% 60%) 100%)',
                      boxShadow: '0 8px 32px hsl(211 100% 50% / 0.25)'
                    }}
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="font-display font-bold text-foreground text-lg">AI-ассистент</div>
                  <div className="text-sm text-muted-foreground mt-1">Цена заявки</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className={`text-center mt-10 transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-muted-foreground text-lg">
              При использовании AI-ассистента вы экономите до <span className="font-bold text-foreground">99%</span> бюджета на привлечение клиентов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
