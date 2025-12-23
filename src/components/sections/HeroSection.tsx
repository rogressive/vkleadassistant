import { ArrowRight, MessageSquare, Sparkles, Zap, Shield, Clock, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const HeroSection = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen lg:min-h-[110vh] flex items-center pt-20 lg:pt-24 pb-16 lg:pb-20 overflow-hidden overflow-x-hidden">
      {/* Dark gradient background with neon accents */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Animated neon gradient blobs - smaller on mobile */}
      <div className="absolute top-10 -left-20 md:-left-40 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 blob blob-1" />
      <div className="absolute top-40 -right-10 md:-right-20 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-neon-pink/15 blob blob-2" />
      <div className="absolute -bottom-20 md:-bottom-40 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-neon-green/10 blob blob-3" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 decorative-grid opacity-40" />
      
      {/* Particle overlay */}
      <div className="absolute inset-0 particles opacity-60" />
      
      {/* Floating decorative badges with neon glow */}
      <div className={`absolute top-36 right-[12%] hidden lg:flex items-center gap-2 px-5 py-3 glass-card glow-sm float-slow transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
        <Zap className="w-4 h-4 text-neon-green" />
        <span className="text-sm font-medium text-foreground">Автоматизация 24/7</span>
      </div>
      
      <div className={`absolute bottom-48 left-[8%] hidden lg:flex items-center gap-2 px-5 py-3 glass-card glow-green float-medium transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
        <Shield className="w-4 h-4 text-neon-green" />
        <span className="text-sm font-medium text-foreground">Без блокировок</span>
      </div>
      
      <div className={`absolute top-1/2 right-[6%] hidden lg:flex items-center gap-2 px-5 py-3 glass-card glow-pink float-fast transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '1000ms' }}>
        <Clock className="w-4 h-4 text-neon-pink" />
        <span className="text-sm font-medium text-foreground">Окупаемость за неделю</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="max-w-xl">
            {/* Badge with neon glow */}
            <div className={`inline-flex items-center gap-2 px-5 py-2.5 glass-card glow-sm mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">AI-powered лидогенерация</span>
            </div>

            {/* Main heading with neon text glow */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-display font-black mb-6 md:mb-8 tracking-tight leading-[1] md:leading-[0.95] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
              B2B лиды из ВКонтакте по{' '}
              <span className="text-gradient-primary text-glow">15 ₽</span>{' '}
              <span className="text-muted-foreground">вместо 1500</span>
            </h1>

            {/* Subheading */}
            <p className={`text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              Ваш AI-сотрудник находит клиентов, фильтрует профили и ведёт первые диалоги. Без рекламного бюджета и выгорания.
            </p>

            {/* CTA Buttons with neon effects */}
            <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
              <Button
                asChild
                className="btn-primary group pulse-neon"
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

          {/* Right side - Premium 3D Messenger with neon glow */}
          <div className={`hidden lg:block lg:pl-8 perspective-1500 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '400ms' }}>
            <div className="relative lg:transform-3d">
              {/* Multi-layer neon glow effect */}
              <div className="absolute -inset-12 bg-gradient-to-br from-primary/30 via-neon-pink/15 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
              
              {/* AI Status badge - floating with neon - hidden on mobile */}
              <div className="absolute -top-10 right-4 z-20 px-6 py-3 glass-card-strong glow-md text-sm font-medium hidden md:flex items-center gap-3 pulse-neon">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
                </span>
                <span className="text-muted-foreground">AI Status:</span>
                <span className="text-gradient-green font-bold">Горячий лид</span>
              </div>

              {/* Main messenger interface with glassmorphism */}
              <div 
                className="relative glass-card-strong overflow-hidden"
                style={{ 
                  boxShadow: 'var(--shadow-3d)',
                  borderRadius: '24px',
                }}
              >
                {/* Neon border glow */}
                <div className="absolute inset-0 rounded-3xl border border-primary/30" />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
                
                {/* Header with glass effect */}
                <div className="relative bg-gradient-to-r from-secondary/80 via-card/60 to-secondary/80 backdrop-blur-xl px-6 py-5 border-b border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 glow-sm">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground text-lg">Входящие заявки</span>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Bot className="w-3 h-3" />
                        VK Lead Assistant
                      </div>
                    </div>
                    <span className="ml-auto bg-primary text-primary-foreground text-sm px-4 py-1.5 rounded-full font-semibold glow-sm">12 новых</span>
                  </div>
                </div>

                {/* Chat list with neon hover effects */}
                <div className="divide-y divide-border/30">
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
                          ? 'bg-gradient-to-r from-primary/[0.08] via-primary/[0.04] to-transparent border-l-2 border-l-primary' 
                          : 'hover:bg-card/50'
                      }`}
                      style={{ 
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateX(0)' : 'translateX(20px)',
                        transitionDelay: `${600 + index * 100}ms`
                      }}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold shrink-0 ${
                        chat.hot 
                          ? 'bg-gradient-to-br from-primary/30 to-primary/10 text-primary border border-primary/30' 
                          : 'bg-gradient-to-br from-muted to-card text-muted-foreground'
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
                        <span className="shrink-0 w-3 h-3 rounded-full bg-neon-green mt-2 animate-pulse glow-green" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating stats badge with neon glow - hidden on mobile */}
              <div 
                className={`absolute -bottom-8 -left-8 px-6 py-4 glass-card-strong glow-green hidden md:flex items-center gap-4 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-neon-green/20 flex items-center justify-center border border-neon-green/30">
                  <span className="text-neon-green font-bold text-xl">↑</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Конверсия</div>
                  <div className="font-bold text-foreground text-xl text-gradient-green">+340%</div>
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