import { useInView } from '@/hooks/useInView';
import { GraduationCap, Package, Settings, Megaphone, TrendingUp } from 'lucide-react';

const results = [
  {
    name: 'Алексей К.',
    role: 'Онлайн-школа',
    shortText: '47 заявок на курс за неделю. Закрыли продаж на',
    revenue: '270 000 ₽',
    subtext: 'Раньше таргет давал 10 лидов.',
    icon: GraduationCap,
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-500/15 to-violet-500/5',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-500',
    borderColor: 'border-violet-500/20',
    glowColor: 'violet',
  },
  {
    name: 'Марина В.',
    role: 'Оборудование',
    shortText: '6 контрактов на поставку за месяц — выручка',
    revenue: '1.8 млн ₽',
    subtext: 'Менеджер больше не пишет в холодную.',
    icon: Package,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/15 to-amber-500/5',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-500/20',
    glowColor: 'amber',
  },
  {
    name: 'Игорь М.',
    role: 'CRM-интегратор',
    shortText: '5 сделок на',
    revenue: '950 000 ₽',
    subtext: 'за месяц. Окупили внедрение с первой же продажи.',
    icon: Settings,
    gradient: 'from-emerald-500 to-green-600',
    bgGradient: 'from-emerald-500/15 to-emerald-500/5',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-500/20',
    glowColor: 'emerald',
  },
  {
    name: 'Дмитрий П.',
    role: 'Маркетинговое агентство',
    shortText: '19 договоров на SMM за месяц. Дополнительный оборот',
    revenue: '+600 000 ₽',
    subtext: '',
    icon: Megaphone,
    gradient: 'from-sky-500 to-blue-600',
    bgGradient: 'from-sky-500/15 to-sky-500/5',
    iconBg: 'bg-sky-500/15',
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-500/20',
    glowColor: 'sky',
  },
];

const ResultsSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="results" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background blobs */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Реальные результаты</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Результаты <span className="text-gradient-primary">клиентов</span>
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <div
                key={result.name}
                className={`group relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Card with gradient border effect */}
                <div className="relative p-8 bg-card border border-border rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 gradient-border overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${result.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ 
                      background: `linear-gradient(135deg, var(--${result.glowColor}-500, hsl(var(--primary))) 0%, transparent 100%)`,
                      opacity: 0
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Revenue badge - prominent */}
                    <div className={`absolute -top-4 -right-4 px-5 py-2.5 bg-card border-2 ${result.borderColor} rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                      <span className={`text-xl md:text-2xl font-display font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
                        {result.revenue}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${result.iconBg} border ${result.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-7 h-7 ${result.iconColor}`} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-foreground text-lg">{result.name}</div>
                        <div className="text-sm text-muted-foreground">{result.role}</div>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-foreground leading-relaxed text-base">
                      {result.shortText}{' '}
                      <span className={`font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
                        {result.revenue}
                      </span>
                      {result.subtext && (
                        <span className="text-muted-foreground">. {result.subtext}</span>
                      )}
                    </p>
                  </div>
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