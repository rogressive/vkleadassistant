import { useInView } from '@/hooks/useInView';
import { Search, Brain, MessageCircle, UserPlus, Send, Trash2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Парсинг базы',
    description: 'Вы собираете подписчиков конкурентов и активных в нишевых группах через Target Hunter',
    color: 'primary',
  },
  {
    icon: Brain,
    title: 'AI анализирует профиль',
    description: 'Читает 20 последних постов и раздел «О себе» — определяет деятельность и интересы',
    color: 'primary',
  },
  {
    icon: MessageCircle,
    title: 'Уникальный вопрос',
    description: 'AI пишет осмысленный вопрос под пост человека — не рекламу, а живой интерес',
    color: 'primary',
  },
  {
    icon: UserPlus,
    title: 'Заявка в друзья',
    description: 'После комментария отправляем заявку + лайк поста — выглядит естественно',
    color: 'primary',
  },
  {
    icon: Send,
    title: 'Сообщение друзьям',
    description: 'Персонализированный оффер ТОЛЬКО тем, кто добавился в друзья — никакого спама',
    color: 'accent',
  },
  {
    icon: Trash2,
    title: 'Очистка заявок',
    description: 'Автоматическое удаление исходящих заявок, которые не приняли — аккаунт чистый',
    color: 'primary',
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
            6 шагов от сбора базы до продажи — всё на автопилоте
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
