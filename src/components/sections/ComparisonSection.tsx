import { useInView } from '@/hooks/useInView';

const ComparisonSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden bg-secondary">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${
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

        {/* Bar Chart Visualization */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-end justify-center gap-16 md:gap-24 h-80">
            {/* Target bar */}
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-destructive mb-4">
                1 500 ₽
              </div>
              <div 
                className={`w-24 md:w-32 bg-destructive/20 border-2 border-destructive rounded-t-lg transition-all duration-1000 ease-out ${
                  isInView ? 'h-56' : 'h-0'
                }`}
              />
              <div className="mt-4 text-center">
                <div className="font-display font-bold text-foreground">Таргет</div>
                <div className="text-sm text-muted-foreground">Средняя цена заявки</div>
              </div>
            </div>

            {/* AI bar */}
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                15 ₽
              </div>
              <div 
                className={`w-24 md:w-32 bg-primary/20 border-2 border-primary rounded-t-lg transition-all duration-1000 ease-out delay-300 ${
                  isInView ? 'h-6' : 'h-0'
                }`}
              />
              <div className="mt-4 text-center">
                <div className="font-display font-bold text-foreground">AI-ассистент</div>
                <div className="text-sm text-muted-foreground">Цена заявки</div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center mt-12 p-6 bg-card border border-border rounded-lg">
            <p className="text-muted-foreground">
              При использовании AI-ассистента вы экономите до <span className="font-bold text-foreground">99%</span> бюджета на привлечение клиентов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;