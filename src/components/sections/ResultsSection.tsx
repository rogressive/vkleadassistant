import { useInView } from '@/hooks/useInView';
import { GraduationCap, Package, Settings, Megaphone } from 'lucide-react';

const results = [
  {
    name: 'Алексей К.',
    role: 'Онлайн-школа',
    shortText: '47 заявок на курс за неделю. Закрыли продаж на',
    revenue: '270 000 ₽',
    subtext: 'Раньше таргет давал 10 лидов.',
    icon: GraduationCap,
    color: 'from-violet-500/10 to-violet-500/5',
    iconColor: 'text-violet-500',
    borderColor: 'border-violet-500/20',
  },
  {
    name: 'Марина В.',
    role: 'Оборудование',
    shortText: '6 контрактов на поставку за месяц — выручка',
    revenue: '1.8 млн ₽',
    subtext: 'Менеджер больше не пишет в холодную.',
    icon: Package,
    color: 'from-amber-500/10 to-amber-500/5',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-500/20',
  },
  {
    name: 'Игорь М.',
    role: 'CRM-интегратор',
    shortText: '5 сделок на',
    revenue: '950 000 ₽',
    subtext: 'за месяц. Окупили внедрение с первой же продажи.',
    icon: Settings,
    color: 'from-emerald-500/10 to-emerald-500/5',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-500/20',
  },
  {
    name: 'Дмитрий П.',
    role: 'Маркетинговое агентство',
    shortText: '19 договоров на SMM за месяц. Дополнительный оборот',
    revenue: '+600 000 ₽',
    subtext: '',
    icon: Megaphone,
    color: 'from-sky-500/10 to-sky-500/5',
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-500/20',
  },
];

const ResultsSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="results" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Результаты <span className="text-primary">клиентов</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Цифры основаны на запуске по заранее собранным базам (Target Hunter + VK Lead Assistant)
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <div
                key={result.name}
                className={`group relative p-8 bg-card border border-border rounded-2xl transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${(index + 2) * 100}ms`,
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Revenue badge */}
                  <div className={`absolute -top-4 -right-4 px-4 py-2 bg-card border ${result.borderColor} rounded-xl shadow-lg`}>
                    <span className="text-xl font-display font-bold text-foreground">{result.revenue}</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${result.color} border ${result.borderColor} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${result.iconColor}`} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-lg">{result.name}</div>
                      <div className="text-sm text-muted-foreground">{result.role}</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed">
                    {result.shortText}{' '}
                    <span className="font-bold text-primary">{result.revenue}</span>
                    {result.subtext && `. ${result.subtext}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
