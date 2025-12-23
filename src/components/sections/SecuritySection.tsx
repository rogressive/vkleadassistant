import { useInView } from '@/hooks/useInView';
import { Bot, Shield, Cpu, Lock, Eye, Server } from 'lucide-react';

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
    {
      icon: Eye,
      title: 'Полная прозрачность',
      description: 'Вы видите все действия системы в реальном времени в личном кабинете',
    },
    {
      icon: Server,
      title: 'Ваш сервер',
      description: 'Все данные хранятся на вашем VPS — полный контроль над информацией',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Neon border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background blobs */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] bg-neon-green/8 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header - centered */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 glass-card glow-green mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Shield className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-semibold text-foreground">0% риска для бизнеса</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Полная <span className="text-gradient-green text-glow-green">безопасность</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Мы используем выделенные AI-ассистенты, которые никак не связаны с вашим основным профилем. Это полностью исключает риски для вашей репутации.
          </p>
        </div>

        {/* 6 equal feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group glass-card-strong p-6 neon-border transition-all duration-700 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Glow on hover */}
              <div className="absolute -inset-1 bg-neon-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-neon-green/15 border border-neon-green/30 flex items-center justify-center mb-4 group-hover:glow-green transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;