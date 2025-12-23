import { useInView } from '@/hooks/useInView';
import { TrendingDown, Target, Bot } from 'lucide-react';

const ComparisonSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden section-alt">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background blobs */}
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TrendingDown className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Сравнение стоимости</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Выгоднее до <span className="text-gradient-primary">100 раз</span>
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
          <div className="relative p-10 md:p-14 card-premium gradient-border">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
            
            <div className="relative flex items-end justify-center gap-16 md:gap-24 lg:gap-32 h-[380px]">
              {/* Target bar */}
              <div className="flex flex-col items-center">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-destructive mb-6 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '400ms' }}>
                  1 500 ₽
                </div>
                <div className="relative">
                  {/* Glow under bar */}
                  <div className={`absolute -inset-4 bg-destructive/20 rounded-2xl blur-2xl transition-all duration-1000 ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: '500ms' }} />
                  
                  <div 
                    className="relative w-28 md:w-36 lg:w-40 rounded-2xl overflow-hidden"
                    style={{
                      height: isInView ? '220px' : '0px',
                      transition: 'height 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: '300ms',
                    }}
                  >
                    {/* Gradient fill with shimmer */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, hsl(0 72% 55%) 0%, hsl(0 72% 45%) 100%)',
                      }}
                    />
                    {/* Animated shimmer overlay */}
                    <div className="absolute inset-0 shimmer" />
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/20 to-transparent" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-destructive" />
                    <span className="font-display font-bold text-foreground text-lg">Таргет</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Средняя цена заявки</div>
                </div>
              </div>

              {/* Animated savings indicator */}
              <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`} style={{ transitionDelay: '800ms' }}>
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl" />
                  <div className="relative px-8 py-4 bg-card border-2 border-primary/30 rounded-full shadow-2xl">
                    <span className="text-primary font-display font-bold text-2xl md:text-3xl">−99%</span>
                  </div>
                </div>
              </div>

              {/* AI bar */}
              <div className="flex flex-col items-center">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-6 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '600ms' }}>
                  15 ₽
                </div>
                <div className="relative">
                  {/* Glow under bar */}
                  <div className={`absolute -inset-6 bg-primary/25 rounded-2xl blur-2xl transition-all duration-1000 ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: '700ms' }} />
                  
                  <div 
                    className="relative w-28 md:w-36 lg:w-40 rounded-2xl overflow-hidden glow-md"
                    style={{
                      height: isInView ? '22px' : '0px',
                      transition: 'height 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: '500ms',
                    }}
                  >
                    {/* Gradient fill */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, hsl(211 100% 60%) 0%, hsl(211 100% 45%) 100%)',
                      }}
                    />
                    {/* Shimmer */}
                    <div className="absolute inset-0 shimmer" />
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/30 to-transparent" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-primary" />
                    <span className="font-display font-bold text-foreground text-lg">AI-ассистент</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Цена заявки</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note with animated appearance */}
          <div className={`text-center mt-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
            <p className="text-lg text-muted-foreground">
              При использовании AI-ассистента вы экономите до{' '}
              <span className="font-bold text-gradient-primary">99%</span>{' '}
              бюджета на привлечение клиентов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;