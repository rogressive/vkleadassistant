import { useInView } from '@/hooks/useInView';
import { TrendingDown, TrendingUp, Bot, Zap, Target } from 'lucide-react';

const ComparisonSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  // Generate stock chart points for "falling" line (Target)
  const generateFallingChart = () => {
    const points = [];
    let y = 30;
    for (let x = 0; x <= 100; x += 5) {
      y += Math.random() * 15 - 3; // Mostly going up (which means falling value)
      y = Math.max(20, Math.min(90, y));
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  // Generate stock chart points for "rising" line (AI)
  const generateRisingChart = () => {
    const points = [];
    let y = 85;
    for (let x = 0; x <= 100; x += 5) {
      y -= Math.random() * 12 - 2; // Mostly going down (which means rising value)
      y = Math.max(15, Math.min(90, y));
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Neon gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background neon blobs */}
      <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 glass-card glow-sm mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TrendingDown className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-semibold text-foreground">Сравнение стоимости</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Выгоднее до <span className="text-gradient-primary text-glow">100 раз</span>
          </h2>
        </div>

        {/* Stock Charts Comparison */}
        <div className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-700 delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Target Chart - Falling/Expensive */}
          <div className="relative glass-card-strong p-6 md:p-8 neon-border group hover:-translate-y-2 transition-all duration-500">
            {/* Red glow on hover */}
            <div className="absolute -inset-2 bg-destructive/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-destructive/20 border border-destructive/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-lg">Таргет ВКонтакте</div>
                    <div className="text-sm text-muted-foreground">Средняя цена заявки</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-destructive">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium">Растёт</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-4xl md:text-5xl font-display font-black text-destructive mb-6">
                1 500 ₽
                <span className="text-lg text-muted-foreground font-normal ml-2">/ заявка</span>
              </div>

              {/* Stock Chart SVG */}
              <div className="relative h-32 md:h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2" />
                  
                  {/* Area under chart */}
                  <defs>
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(350, 89%, 60%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(350, 89%, 60%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points={`0,60 ${generateFallingChart()} 100,100 0,100`}
                    fill="url(#redGradient)"
                    className={`transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Chart line - going up = price increasing */}
                  <polyline
                    points="0,60 10,55 20,62 30,50 40,58 50,45 60,52 70,40 80,48 90,35 100,42"
                    fill="none"
                    stroke="hsl(350, 89%, 60%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      strokeDasharray: 200,
                      strokeDashoffset: isInView ? 0 : 200,
                      transition: 'stroke-dashoffset 2s ease-out'
                    }}
                  />
                </svg>
              </div>

              {/* Bottom stats */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                <span className="text-sm text-muted-foreground">Конкуренция растёт</span>
                <span className="text-sm text-destructive font-medium">+40% год к году</span>
              </div>
            </div>
          </div>

          {/* AI Chart - Rising/Cheap */}
          <div className="relative glass-card-strong p-6 md:p-8 neon-border group hover:-translate-y-2 transition-all duration-500">
            {/* Green glow on hover */}
            <div className="absolute -inset-2 bg-neon-green/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center glow-sm">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-foreground text-lg">AI-ассистент</div>
                    <div className="text-sm text-muted-foreground">Стоимость заявки</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neon-green">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-sm font-medium">Падает</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-4xl md:text-5xl font-display font-black text-gradient-primary text-glow mb-6">
                15 ₽
                <span className="text-lg text-muted-foreground font-normal ml-2">/ заявка</span>
              </div>

              {/* Stock Chart SVG */}
              <div className="relative h-32 md:h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="hsl(var(--border))" strokeWidth="0.3" strokeDasharray="2" />
                  
                  {/* Area under chart */}
                  <defs>
                    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(155, 100%, 50%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(155, 100%, 50%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points={`0,30 ${generateRisingChart()} 100,100 0,100`}
                    fill="url(#greenGradient)"
                    className={`transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Chart line - going down = price decreasing */}
                  <polyline
                    points="0,30 10,38 20,32 30,45 40,40 50,55 60,50 70,62 80,58 90,70 100,65"
                    fill="none"
                    stroke="hsl(155, 100%, 50%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      strokeDasharray: 200,
                      strokeDashoffset: isInView ? 0 : 200,
                      transition: 'stroke-dashoffset 2s ease-out'
                    }}
                  />
                </svg>
              </div>

              {/* Bottom stats */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                <span className="text-sm text-muted-foreground">Экономия</span>
                <span className="text-sm text-gradient-green font-bold">−99% от стоимости</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom savings indicator */}
        <div className={`text-center mt-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card glow-green">
            <Zap className="w-5 h-5 text-neon-green" />
            <span className="text-lg text-foreground font-medium">
              Экономия <span className="font-bold text-gradient-green">до 100×</span> на привлечение клиентов
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;