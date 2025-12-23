import { useInView } from '@/hooks/useInView';
import { Check, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const features = [
    'Полная настройка системы под вашу нишу',
    'AI-агент для комментариев и личных сообщений',
    'Обучение работе с системой',
    'Техническая поддержка 30 дней',
    'Доступ к обновлениям',
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden section-alt">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Стоимость <span className="text-primary">внедрения</span>
          </h2>
        </div>

        <div className={`max-w-xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Pricing card with glow effect */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-xl" />
            
            <div className="relative p-10 bg-card border border-border rounded-2xl shadow-2xl">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-foreground text-background rounded-full text-sm font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Внедрение под ключ
              </div>

              <div className="text-center mb-10 pt-4">
                <div className="text-6xl md:text-7xl font-display font-bold text-foreground mb-2">
                  20 000 ₽
                </div>
                <div className="text-muted-foreground text-lg">единоразовый платёж</div>
              </div>

              <ul className="space-y-4 mb-10">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Transparent expenses */}
              <div className="p-6 bg-secondary/50 border border-border rounded-xl mb-8">
                <div className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <span>Прозрачные расходы</span>
                  <span className="text-xs text-muted-foreground font-normal">(ежемесячно)</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Сервер (VPS)</span>
                    <span className="font-semibold text-foreground">~300 ₽/мес</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">API (AI)</span>
                    <span className="font-semibold text-foreground">~700–1 500 ₽/мес</span>
                  </div>
                  <div className="pt-2 border-t border-border flex justify-between items-center">
                    <span className="text-muted-foreground">Итого</span>
                    <span className="font-bold text-foreground">~1 000–2 000 ₽/мес</span>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full btn-primary text-lg h-16">
                <a href="#contact">Заказать внедрение</a>
              </Button>

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Гарантия возврата, если система не заработает</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
