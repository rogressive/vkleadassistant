import { useInView } from '@/hooks/useInView';
import { Target, Bot, TrendingDown, TrendingUp } from 'lucide-react';

const ProblemSolutionSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem */}
          <div
            className={`p-8 rounded-2xl bg-destructive/5 border border-destructive/20 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-display font-bold text-destructive">Таргетированная реклама</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Цена заявки <span className="text-destructive font-semibold">1 500 ₽</span> и растёт
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Конкуренция за аукцион сжигает бюджет</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Холодная аудитория с низкой конверсией</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Нужен таргетолог + тесты + время</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <div className="text-3xl font-display font-bold text-destructive mb-1">1 500 ₽</div>
              <div className="text-sm text-muted-foreground">средняя цена заявки</div>
            </div>
          </div>

          {/* Solution */}
          <div
            className={`p-8 rounded-2xl bg-primary/5 border border-primary/20 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary">AI Lead Assistant</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Цена заявки <span className="text-primary font-semibold">от 15 ₽</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Никакой конкуренции — прямой контакт</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Горячие клиенты, которые уже ищут решение</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Полная автоматизация 24/7</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-3xl font-display font-bold text-primary mb-1">от 15 ₽</div>
              <div className="text-sm text-muted-foreground">цена заявки</div>
            </div>
          </div>
        </div>

        {/* Comparison badge */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-lg font-display font-bold text-accent">
              Выгоднее до 100 раз
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
