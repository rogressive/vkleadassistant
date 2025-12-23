import { useInView } from '@/hooks/useInView';
import { MessageCircle, Fingerprint, Clock, Brain, Shield } from 'lucide-react';

const reasons = [
  {
    icon: MessageCircle,
    title: 'Уникальные комментарии',
    description: 'Каждый комментарий генерируется AI индивидуально — никаких шаблонов и повторов',
  },
  {
    icon: Fingerprint,
    title: 'Персональные офферы',
    description: 'Сообщения в личку адаптируются под контекст поста и профиль собеседника',
  },
  {
    icon: Brain,
    title: 'Осмысленные диалоги',
    description: 'AI ведёт живой разговор, отвечает на вопросы, снимает возражения',
  },
  {
    icon: Clock,
    title: 'Человеческие интервалы',
    description: 'Между действиями выдерживаются естественные паузы, имитирующие реального человека',
  },
];

const WhyNoBanSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30 mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Безопасный метод</span>
          </div>
          
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Почему аккаунты <span className="text-gradient-primary">не банят</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Это не спам-рассылка, а интеллектуальное общение
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`p-6 rounded-2xl bg-card border border-border card-hover transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center shrink-0">
                  <reason.icon className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Алгоритмы ВКонтакте не видят разницы между AI-агентом и активным пользователем, 
            потому что поведение полностью соответствует органической активности
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNoBanSection;
