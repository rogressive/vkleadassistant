import { useInView } from '@/hooks/useInView';
import { Copy, Users, TrendingUp, Infinity } from 'lucide-react';

const ScalingSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Линейное <span className="text-gradient-gold">масштабирование</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Клонируй workflow → подключай новые аккаунты ВК → получай кратный рост
          </p>
        </div>

        {/* Scaling visualization */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Central infographic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-card border border-border text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Copy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">1 Workflow</h3>
              <p className="text-sm text-muted-foreground">Настраиваете один раз</p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-card border border-border text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">N аккаунтов</h3>
              <p className="text-sm text-muted-foreground">Подключаете сколько нужно</p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-card border border-border text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
                <Infinity className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">×N лидов</h3>
              <p className="text-sm text-muted-foreground">Получаете кратный рост</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">100</div>
              <div className="text-xs text-muted-foreground">касаний / день</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">1</div>
              <div className="text-xs text-muted-foreground">аккаунт</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="text-2xl font-display font-bold text-accent mb-1">1000</div>
              <div className="text-xs text-muted-foreground">касаний / день</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="text-2xl font-display font-bold text-accent mb-1">10</div>
              <div className="text-xs text-muted-foreground">аккаунтов</div>
            </div>
          </div>

          {/* Bottom note */}
          <div
            className={`mt-8 text-center transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Рост без увеличения трудозатрат</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalingSection;
