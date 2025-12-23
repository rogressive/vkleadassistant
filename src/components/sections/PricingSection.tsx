import { useInView } from '@/hooks/useInView';
import { Check, Shield, Zap, Sparkles, Star } from 'lucide-react';
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
    <section id="pricing" className="section-padding relative overflow-hidden bg-background">
      {/* Neon gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/10 rounded-full blur-[200px]" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[150px] float-slow" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-neon-green/10 rounded-full blur-[150px] float-medium" />
      
      {/* Particles */}
      <div className="absolute inset-0 particles opacity-40" />
      
      <div className="container-custom relative" ref={ref}>
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 glass-card glow-sm mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Star className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-foreground">Прозрачное ценообразование</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-7xl font-display font-black mb-6 tracking-tight transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Стоимость <span className="text-gradient-primary text-glow">внедрения</span>
          </h2>
        </div>

        <div className={`max-w-xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Pricing card with animated neon border */}
          <div className="relative animated-neon-border">
            {/* Multi-layer glow */}
            <div className="absolute -inset-8 bg-primary/20 rounded-3xl blur-3xl" />
            
            <div className="relative p-10 md:p-14 glass-card-strong overflow-hidden" style={{ borderRadius: '20px' }}>
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] to-transparent pointer-events-none" />
              
              {/* Popular badge with neon */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-md opacity-70" />
                  <div className="relative px-8 py-3 bg-primary text-primary-foreground rounded-b-xl text-sm font-semibold flex items-center gap-2 glow-md">
                    <Zap className="w-4 h-4" />
                    Внедрение под ключ
                  </div>
                </div>
              </div>

              <div className="text-center mb-12 pt-8">
                {/* Price with intense neon glow */}
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full" />
                  <div className="absolute -inset-8 bg-primary/15 blur-[60px] rounded-full animate-pulse" />
                  <div className="relative text-6xl md:text-7xl lg:text-8xl font-display font-black text-gradient-primary text-glow">
                    20 000 ₽
                  </div>
                </div>
                <div className="text-muted-foreground text-lg mt-4">единоразовый платёж</div>
              </div>

              <ul className="space-y-5 mb-12">
                {features.map((feature, index) => (
                  <li 
                    key={feature} 
                    className={`flex items-center gap-4 transition-all duration-500 ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className={`w-8 h-8 rounded-full bg-neon-green/20 border border-neon-green/30 flex items-center justify-center shrink-0 glow-green ${
                      isInView ? 'check-animate' : ''
                    }`} style={{ animationDelay: `${500 + index * 100}ms` }}>
                      <Check className="w-4 h-4 text-neon-green" />
                    </div>
                    <span className="text-foreground text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Transparent expenses with glass effect */}
              <div className="p-6 glass-card border-primary/20 mb-10">
                <div className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
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
                  <div className="pt-3 border-t border-border/50 flex justify-between items-center">
                    <span className="text-muted-foreground">Итого</span>
                    <span className="font-bold text-gradient-green text-base">~1 000–2 000 ₽/мес</span>
                  </div>
                </div>
              </div>

              {/* CTA Button with intense neon pulse */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-xl animate-pulse" />
                <Button asChild className="relative w-full btn-primary text-lg h-16 pulse-neon">
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Заказать внедрение
                  </a>
                </Button>
              </div>

              {/* Guarantee with neon accent */}
              <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-neon-green/15 border border-neon-green/30 flex items-center justify-center glow-green">
                  <Shield className="w-5 h-5 text-neon-green" />
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