import { useInView } from '@/hooks/useInView';
import { GraduationCap, Package, Settings, Megaphone, TrendingUp, Sparkles } from 'lucide-react';

const results = [
  {
    name: 'Алексей К.',
    role: 'Онлайн-школа',
    shortText: '47 заявок на курс за неделю. Закрыли продаж на',
    revenue: '270 000 ₽',
    subtext: 'Раньше таргет давал 10 лидов.',
    icon: GraduationCap,
    gradient: 'from-violet-400 to-purple-500',
    glowColor: 'primary',
    borderColor: 'border-violet-500/30',
  },
  {
    name: 'Марина В.',
    role: 'Оборудование',
    shortText: '6 контрактов на поставку за месяц — выручка',
    revenue: '1.8 млн ₽',
    subtext: 'Менеджер больше не пишет в холодную.',
    icon: Package,
    gradient: 'from-amber-400 to-orange-500',
    glowColor: 'gold',
    borderColor: 'border-amber-500/30',
  },
  {
    name: 'Игорь М.',
    role: 'CRM-интегратор',
    shortText: '5 сделок на',
    revenue: '950 000 ₽',
    subtext: 'за месяц. Окупили внедрение с первой же продажи.',
    icon: Settings,
    gradient: 'from-emerald-400 to-green-500',
    glowColor: 'green',
    borderColor: 'border-emerald-500/30',
  },
  {
    name: 'Дмитрий П.',
    role: 'Маркетинговое агентство',
    shortText: '19 договоров на SMM за месяц. Дополнительный оборот',
    revenue: '+600 000 ₽',
    subtext: '',
    icon: Megaphone,
    gradient: 'from-pink-400 to-rose-500',
    glowColor: 'pink',
    borderColor: 'border-pink-500/30',
  },
];

const ResultsSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="results" className="section-padding relative overflow-hidden bg-secondary">
      {/* Neon border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background neon blobs */}
      <div className="absolute top-20 -right-60 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 -left-60 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
      
      {/* Particles */}
      <div className="absolute inset-0 particles opacity-40" />
      
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 glass-card glow-sm mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-semibold text-foreground">Реальные результаты</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-7xl font-display font-black mb-6 tracking-tight transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Результаты <span className="text-gradient-neon text-glow">клиентов</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Цифры основаны на запуске по заранее собранным базам (Target Hunter + VK Lead Assistant)
          </p>
        </div>

        {/* 2x2 Grid with neon cards */}
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
                {/* Card with neon border effect */}
                <div className={`relative p-8 glass-card-strong neon-border transition-all duration-500 hover:-translate-y-3 overflow-hidden ${result.borderColor}`}>
                  {/* Neon glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Revenue badge - prominent with neon */}
                    <div className={`absolute -top-4 -right-4 px-5 py-2.5 glass-card border ${result.borderColor} rounded-xl glow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <span className={`text-xl md:text-2xl font-display font-black bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
                        {result.revenue}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${result.gradient} bg-opacity-20 border ${result.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-sm`}
                        style={{ background: `linear-gradient(135deg, hsl(var(--${result.glowColor === 'primary' ? 'primary' : result.glowColor === 'green' ? 'neon-green' : result.glowColor === 'pink' ? 'neon-pink' : 'gold'}) / 0.2), transparent)` }}
                      >
                        <IconComponent className={`w-7 h-7 bg-gradient-to-r ${result.gradient} bg-clip-text`} style={{ color: result.glowColor === 'primary' ? 'hsl(var(--primary))' : result.glowColor === 'green' ? 'hsl(var(--neon-green))' : result.glowColor === 'pink' ? 'hsl(var(--neon-pink))' : 'hsl(var(--gold))' }} />
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
        
        {/* Bottom CTA hint */}
        <div className={`text-center mt-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Ваш бизнес может быть следующим</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;