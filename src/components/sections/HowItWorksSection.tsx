import { useInView } from '@/hooks/useInView';
import { Search, Filter, MessageCircle, FileText, MessagesSquare } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Парсинг',
    description: 'AI находит посты и комментарии с ключевыми словами вашей ниши',
    color: 'primary',
  },
  {
    icon: Filter,
    title: 'Фильтрация',
    description: 'Отсеиваем ботов, конкурентов и нецелевую аудиторию',
    color: 'primary',
  },
  {
    icon: MessageCircle,
    title: 'Комментарий',
    description: 'Генерируем уникальный релевантный комментарий под каждый пост',
    color: 'primary',
  },
  {
    icon: FileText,
    title: 'Заявка',
    description: 'Отправляем персонализированный оффер в личные сообщения',
    color: 'primary',
  },
  {
    icon: MessagesSquare,
    title: 'Диалог',
    description: 'AI ведёт переписку и квалифицирует лида до готовности к сделке',
    color: 'accent',
  },
];

const HowItWorksSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Как это <span className="text-gradient-primary">работает</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            5 простых шагов от поста до сделки — всё на полном автопилоте
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-colors ${
                      step.color === 'accent'
                        ? 'bg-accent/20 group-hover:bg-accent/30'
                        : 'bg-primary/20 group-hover:bg-primary/30'
                    }`}
                  >
                    <step.icon
                      className={`w-7 h-7 ${step.color === 'accent' ? 'text-accent' : 'text-primary'}`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
