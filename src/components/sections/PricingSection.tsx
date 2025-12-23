import { useInView } from '@/hooks/useInView';
import { Check, Shield, Zap, Sparkles } from 'lucide-react';
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
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-3xl" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-[300px] h-[300px] bg-gold/10 rounded-full blur-3xl float-slow" />
      <div className="absolute bottom-20 -right-20 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl float-medium" />
      
      <div className="container-custom relative" ref={ref}>
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Прозрачное ценообразование</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Стоимость <span className="text-gradient-primary">внедрения</span>
          </h2>
        </div>

        <div className={`max-w-xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Pricing card with animated gradient border */}
          <div className="relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-primary/50 to-primary rounded-[22px] opacity-70 blur-[2px] animated-gradient-border" 
              style={{
                background: 'linear-gradient(90deg, hsl(211 100% 50%), hsl(211 100% 70%), hsl(280 70% 60%), hsl(211 100% 50%))',
                backgroundSize: '300% 100%',
                animation: 'gradient-shift 4s linear infinite'
              }}
            />
            
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-primary/15 rounded-3xl blur-2xl" />
            
            <div className="relative p-10 md:p-12 bg-card border border-border/50 rounded-[20px] shadow-2xl overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />
              
              {/* Popular badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-foreground blur-sm opacity-50" />
                  <div className="relative px-8 py-2.5 bg-foreground text-background rounded-b-xl text-sm font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Внедрение под ключ
                  </div>
                </div>
              </div>

              <div className="text-center mb-10 pt-6">
                {/* Price with glow */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <div className="relative text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground">
                    20 000 ₽
                  </div>
                </div>
                <div className="text-muted-foreground text-lg mt-3">единоразовый платёж</div>
              </div>

              <ul className="space-y-5 mb-10">
                {features.map((feature, index) => (
                  <li 
                    key={feature} 
                    className={`flex items-center gap-4 transition-all duration-500 ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className={`w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 ${
                      isInView ? 'check-animate' : ''
                    }`} style={{ animationDelay: `${500 + index * 100}ms` }}>
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Transparent expenses */}
              <div className="p-6 bg-secondary/70 border border-border rounded-xl mb-8">
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
                  <div className="pt-3 border-t border-border flex justify-between items-center">
                    <span className="text-muted-foreground">Итого</span>
                    <span className="font-bold text-foreground text-base">~1 000–2 000 ₽/мес</span>
                  </div>
                </div>
              </div>

              {/* CTA Button with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-foreground/20 blur-xl rounded-xl" />
                <Button asChild className="relative w-full btn-primary text-lg h-16 glow-sm">
                  <a href="#contact">Заказать внедрение</a>
                </Button>
              </div>

              {/* Guarantee */}
              <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-success" />
                </div>
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