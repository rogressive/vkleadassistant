import { useInView } from '@/hooks/useInView';
import { Bot, Shield, Cpu, Lock } from 'lucide-react';

const SecuritySection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const features = [
    {
      icon: Bot,
      title: 'Выделенные AI-ассистенты',
      description: 'Работа ведётся с отдельных аккаунтов, не связанных с вашим бизнесом',
    },
    {
      icon: Shield,
      title: 'Защита репутации',
      description: 'Ваш основной профиль и бренд остаются в полной безопасности',
    },
    {
      icon: Cpu,
      title: 'Автономная работа',
      description: 'Система работает 24/7 без вашего участия и контроля',
    },
    {
      icon: Lock,
      title: 'Изоляция рисков',
      description: 'Даже в случае блокировки агента — нулевые последствия для бизнеса',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - text */}
          <div>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              Полная <span className="text-primary">безопасность</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground mb-8 transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              Мы используем выделенные AI-ассистенты, которые никак не связаны 
              с вашим основным профилем. Это полностью исключает риски для вашей репутации.
            </p>

            <div
              className={`p-6 bg-card border border-border rounded-lg transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display font-bold text-xl text-foreground">
                  0% риска для вашего бизнеса
                </div>
              </div>
              <p className="text-muted-foreground">
                Ваш основной аккаунт ВКонтакте не участвует в процессе. 
                Все взаимодействия происходят от имени независимых агентов.
              </p>
            </div>
          </div>

          {/* Right side - features */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-5 bg-card border border-border rounded-lg card-hover transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;