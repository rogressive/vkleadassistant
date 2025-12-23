import { useInView } from '@/hooks/useInView';

const results = [
  {
    name: 'Алексей К.',
    role: 'Онлайн-школа',
    shortText: '47 заявок на курс за неделю. Закрыли продаж на',
    revenue: '270 000 ₽',
    subtext: 'Раньше таргет давал 10 лидов.',
  },
  {
    name: 'Марина В.',
    role: 'Оборудование',
    shortText: '6 контрактов на поставку за месяц — выручка',
    revenue: '1.8 млн ₽',
    subtext: 'Менеджер больше не пишет в холодную.',
  },
  {
    name: 'Игорь М.',
    role: 'CRM-интегратор',
    shortText: '5 сделок на',
    revenue: '950 000 ₽',
    subtext: 'за месяц. Окупили внедрение с первой же продажи.',
  },
  {
    name: 'Дмитрий П.',
    role: 'Маркетинговое агентство',
    shortText: '19 договоров на SMM за месяц. Дополнительный оборот',
    revenue: '+600 000 ₽',
    subtext: '',
  },
];

const ResultsSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="results" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight transition-all duration-700 ${
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
          {results.map((result, index) => (
            <div
              key={result.name}
              className={`p-8 bg-card border border-border rounded-lg transition-all duration-700 card-hover ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-lg font-display font-bold text-foreground">
                  {result.name[0]}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">{result.name}</div>
                  <div className="text-sm text-muted-foreground">{result.role}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground mb-2">
                {result.shortText}{' '}
                <span className="text-2xl font-display font-bold text-primary">{result.revenue}</span>
                {result.subtext && ` ${result.subtext}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;