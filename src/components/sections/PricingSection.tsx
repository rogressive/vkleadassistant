import { useInView } from '@/hooks/useInView';
import { Check, Shield, Zap, Star } from 'lucide-react';
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
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-background">
      {/* Neon gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background neon glow - smaller */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container-custom relative" ref={ref}>
        <div className="text-center mb-10">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 glass-card glow-sm mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Star className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-foreground">Прозрачное ценообразование</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4 tracking-tight transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Стоимость <span className="text-gradient-primary text-glow">внедрения</span>
          </h2>
        </div>

        <div className={`max-w-lg mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Compact pricing card */}
          <div className="relative animated-neon-border">
            {/* Glow - smaller */}
            <div className="absolute -inset-4 bg-primary/15 rounded-2xl blur-2xl" />
            
            <div className="relative p-6 md:p-8 glass-card-strong overflow-hidden" style={{ borderRadius: '16px' }}>
              {/* Badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <div className="px-6 py-2 bg-primary text-primary-foreground rounded-b-lg text-sm font-semibold flex items-center gap-2 glow-sm">
                  <Zap className="w-3 h-3" />
                  Под ключ
                </div>
              </div>

              <div className="text-center mb-6 pt-4">
                {/* Price - smaller */}
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full" />
                  <div className="relative text-4xl md:text-5xl font-display font-black text-gradient-primary">
                    20 000 ₽
                  </div>
                </div>
                <div className="text-muted-foreground text-sm mt-2">единоразовый платёж</div>
              </div>

              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li 
                    key={feature} 
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 80}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-neon-green/20 border border-neon-green/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-neon-green" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Monthly costs - compact */}
              <div className="p-4 glass-card border-primary/20 mb-6 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Сервер + API ежемесячно:</span>
                  <span className="font-semibold text-gradient-green">~1 000–2 000 ₽</span>
                </div>
              </div>

              {/* CTA Button - smaller */}
              <Button asChild className="w-full btn-primary h-12 text-base pulse-neon">
                <a href="#contact" className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  Заказать внедрение
                </a>
              </Button>

              {/* Guarantee - compact */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 text-neon-green" />
                <span>Гарантия возврата</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;