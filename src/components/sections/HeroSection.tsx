import { ArrowRight, MessageSquare, Sparkles, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const HeroSection = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Premium gradient background with visible layers */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-primary/15 blob blob-1" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-primary/10 blob blob-2" />
      <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-primary/12 blob blob-3" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 decorative-grid" />
      
      {/* Floating decorative badges */}
      <div className={`absolute top-32 right-[15%] hidden lg:flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full shadow-lg float-slow transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
        <Zap className="w-4 h-4 text-gold" />
        <span className="text-sm font-medium">Автоматизация 24/7</span>
      </div>
      
      <div className={`absolute bottom-40 left-[10%] hidden lg:flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full shadow-lg float-medium transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
        <Shield className="w-4 h-4 text-success" />
        <span className="text-sm font-medium">Без блокировок</span>
      </div>
      
      <div className={`absolute top-1/2 right-[8%] hidden lg:flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full shadow-lg float-fast transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '1000ms' }}>
        <Clock className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Окупаемость за неделю</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">AI-powered лидогенерация</span>
            </div>

            {/* Main heading */}
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1.05] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
              B2B лиды из ВКонтакте по{' '}
              <span className="text-gradient-primary">15 ₽</span>{' '}
              вместо 1500
            </h1>

            {/* Subheading */}
            <p className={`text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              Ваш AI-сотрудник находит клиентов, фильтрует профили и ведёт первые диалоги. Без рекламного бюджета и выгорания.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
              <Button
                asChild
                className="btn-primary group"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Заказать внедрение
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-outline"
              >
                <a href="#contact">Записаться на онлайн-показ</a>
              </Button>
            </div>

            {/* Subtext under buttons */}
            <p className={`text-sm text-muted-foreground mt-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              15 минут в Zoom. Покажем систему изнутри и рассчитаем окупаемость
            </p>
          </div>

          {/* Right side - Premium 3D Messenger visualization */}
          <div className={`lg:pl-8 perspective-1500 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '400ms' }}>
            <div className="relative transform-3d">
              {/* Multi-layer glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-transparent rounded-2xl blur-xl" />
              
              {/* AI Status badge - floating */}
              <div className="absolute -top-8 right-4 z-20 px-5 py-3 bg-card border border-border rounded-xl text-sm font-medium flex items-center gap-3 pulse-soft" style={{ boxShadow: 'var(--shadow-xl)' }}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </span>
                <span className="text-foreground">AI Status:</span>
                <span className="text-primary font-bold">Горячий лид</span>
              </div>

              {/* Main messenger interface with 3D depth */}
              <div 
                className="relative bg-card border border-border/50 rounded-3xl overflow-hidden reflection"
                style={{ 
                  boxShadow: 'var(--shadow-3d), inset 0 1px 0 hsl(var(--background))',
                }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
                
                {/* Header */}
                <div className="relative bg-gradient-to-r from-secondary/80 via-secondary/60 to-secondary/80 backdrop-blur-sm px-6 py-5 border-b border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground text-lg">Входящие заявки</span>
                      <div className="text-sm text-muted-foreground">VK Lead Assistant</div>
                    </div>
                    <span className="ml-auto bg-primary text-primary-foreground text-sm px-4 py-1.5 rounded-full font-semibold shadow-lg glow-sm">12 новых</span>
                  </div>
                </div>

                {/* Chat list with enhanced styling */}
                <div className="divide-y divide-border/50">
                  {[
                    { name: 'Александр М.', message: 'Здравствуйте, актуально ли предложение?', time: '2 мин', hot: true },
                    { name: 'Елена К.', message: 'Сколько стоит внедрение CRM?', time: '5 мин', hot: true },
                    { name: 'Дмитрий В.', message: 'Интересует оптовая закупка', time: '12 мин', hot: false },
                    { name: 'Ольга П.', message: 'Можно подробнее о сроках?', time: '18 мин', hot: false },
                  ].map((chat, index) => (
                    <div 
                      key={index} 
                      className={`px-6 py-5 flex items-start gap-4 transition-all duration-300 ${
                        chat.hot 
                          ? 'bg-gradient-to-r from-primary/[0.06] via-primary/[0.03] to-transparent' 
                          : 'hover:bg-secondary/50'
                      }`}
                      style={{ 
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateX(0)' : 'translateX(20px)',
                        transitionDelay: `${600 + index * 100}ms`
                      }}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold shrink-0 ${
                        chat.hot 
                          ? 'bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20' 
                          : 'bg-gradient-to-br from-secondary to-muted text-foreground'
                      }`}>
                        {chat.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-semibold text-foreground">{chat.name}</span>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                      </div>
                      {chat.hot && (
                        <span className="shrink-0 w-3 h-3 rounded-full bg-primary mt-2 animate-pulse glow-sm" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating stats badge */}
              <div 
                className={`absolute -bottom-6 -left-6 px-5 py-3 bg-card border border-border rounded-xl shadow-xl flex items-center gap-3 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                  <span className="text-success font-bold text-lg">↑</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Конверсия</div>
                  <div className="font-bold text-foreground">+340%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;