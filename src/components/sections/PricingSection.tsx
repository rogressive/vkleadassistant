import { useInView } from '@/hooks/useInView';
import { Check } from 'lucide-react';
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
    <section id="pricing" className="section-padding relative overflow-hidden bg-secondary">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Стоимость <span className="text-primary">внедрения</span>
          </h2>
        </div>

        <div className={`max-w-xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative p-8 bg-card border border-border rounded-lg">
            <div className="text-center mb-8">
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                Внедрение под ключ — 20 000 ₽
              </div>
              <div className="text-muted-foreground">единоразовый платёж</div>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Transparent expenses */}
            <div className="p-6 bg-secondary rounded-lg mb-6">
              <div className="font-display font-bold text-foreground mb-4">Прозрачные расходы</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сервер (VPS)</span>
                  <span className="text-foreground">~300 ₽/мес</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">API (AI)</span>
                  <span className="text-foreground">~700–1 500 ₽/мес</span>
                </div>
              </div>
            </div>

            <Button asChild className="w-full btn-primary">
              <a href="#contact">Заказать внедрение</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;