import { useInView } from '@/hooks/useInView';
import { TrendingDown, Target, Bot, Zap } from 'lucide-react';

const ComparisonSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Neon gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background neon blobs */}
      <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 glass-card glow-sm mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TrendingDown className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-semibold text-foreground">Сравнение стоимости</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-7xl font-display font-black mb-6 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Выгоднее до <span className="text-gradient-primary text-glow">100 раз</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Стоимость одной заявки: Таргет vs AI-ассистент
          </p>
        </div>

        {/* Premium Bar Chart with neon effects */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative p-10 md:p-16 glass-card-strong neon-border">
            {/* Neon glow behind */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
            
            <div className="relative flex items-end justify-center gap-20 md:gap-28 lg:gap-36 h-[420px]">
              {/* Target bar */}
              <div className="flex flex-col items-center">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-display font-black text-destructive mb-6 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '400ms' }}>
                  1 500 ₽
                </div>
                <div className="relative">
                  {/* Neon glow under bar */}
                  <div className={`absolute -inset-6 bg-destructive/30 rounded-2xl blur-2xl transition-all duration-1000 ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: '500ms' }} />
                  
                  <div 
                    className="relative w-32 md:w-40 lg:w-48 rounded-2xl overflow-hidden border border-destructive/30"
                    style={{
                      height: isInView ? '240px' : '0px',
                      transition: 'height 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: '300ms',
                    }}
                  >
                    {/* Gradient fill */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, hsl(350 89% 55%) 0%, hsl(350 89% 40%) 100%)',
                      }}
                    />
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 shimmer" />
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/20 to-transparent" />
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

              {/* Animated savings indicator with neon */}
              <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`} style={{ transitionDelay: '900ms' }}>
                <div className="relative">
                  {/* Multi-layer neon glow */}
                  <div className="absolute -inset-6 bg-neon-green/30 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute -inset-3 bg-neon-green/20 rounded-full blur-xl" />
                  <div className="relative px-8 py-5 glass-card-strong border-2 border-neon-green/40 rounded-full glow-green">
                    <span className="text-gradient-green font-display font-black text-3xl md:text-4xl">−99%</span>
                  </div>
                </div>
              </div>

              {/* AI bar */}
              <div className="flex flex-col items-center">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-display font-black text-gradient-primary text-glow mb-6 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`} style={{ transitionDelay: '600ms' }}>
                  15 ₽
                </div>
                <div className="relative">
                  {/* Neon glow under bar */}
                  <div className={`absolute -inset-8 bg-primary/40 rounded-2xl blur-2xl transition-all duration-1000 ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: '700ms' }} />
                  
                  <div 
                    className="relative w-32 md:w-40 lg:w-48 rounded-2xl overflow-hidden border border-primary/40 glow-md"
                    style={{
                      height: isInView ? '24px' : '0px',
                      transition: 'height 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                      transitionDelay: '500ms',
                    }}
                  >
                    {/* Gradient fill */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, hsl(263 80% 65%) 0%, hsl(263 70% 50%) 100%)',
                      }}
                    />
                    {/* Shimmer */}
                    <div className="absolute inset-0 shimmer" />
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/30 to-transparent" />
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

          {/* Bottom note */}
          <div className={`text-center mt-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1100ms' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card glow-sm">
              <Zap className="w-5 h-5 text-neon-green" />
              <p className="text-lg text-foreground">
                Экономия до{' '}
                <span className="font-bold text-gradient-green">99%</span>{' '}
                бюджета на привлечение клиентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;