import { useInView } from '@/hooks/useInView';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';

const PricingSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const targetDate = new Date('2025-12-31T23:59:59');

  const features = [
    'Полная настройка системы под вашу нишу',
    'AI-агент для комментариев и личных сообщений',
    'Обучение работе с системой',
    'Техническая поддержка 30 дней',
    'Доступ к обновлениям',
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gradient-gold">Специальное</span> предложение
          </h2>
        </div>

        <div className={`max-w-xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative p-8 rounded-2xl bg-card border-2 border-accent/50 glow-gold">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold">
              <Zap className="w-4 h-4 inline mr-1" />
              Акция до 31.12.2025
            </div>

            <div className="text-center mb-8 pt-4">
              <div className="text-2xl text-muted-foreground line-through mb-2">40 000 ₽</div>
              <div className="text-5xl font-display font-bold text-gradient-gold mb-4">20 000 ₽</div>
              <div className="text-muted-foreground">единоразовый платёж</div>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-secondary/50 mb-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">Подписка на AI:</div>
              <div className="font-display font-bold text-foreground">1 100 — 1 800 ₽/мес</div>
            </div>

            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 pulse-glow">
              <a href="#contact">Получить доступ</a>
            </Button>

            <div className="mt-6 flex justify-center">
              <CountdownTimer targetDate={targetDate} compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
