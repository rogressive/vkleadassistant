import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 decorative-grid opacity-40" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">AI-powered лидогенерация</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up tracking-tight leading-[1.1]">
              B2B лиды из ВКонтакте по{' '}
              <span className="text-primary">15 ₽</span>{' '}
              вместо 1500
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up delay-100 leading-relaxed">
              Ваш AI-сотрудник находит клиентов, фильтрует профили и ведёт первые диалоги. Без рекламного бюджета и выгорания.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up delay-200">
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
            <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up delay-300">
              15 минут в Zoom. Покажем систему изнутри и рассчитаем окупаемость
            </p>
          </div>

          {/* Right side - Premium Messenger visualization */}
          <div className="animate-fade-in-up delay-200 lg:pl-8 perspective-3d">
            <div className="relative transform-3d">
              {/* Glow effect behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl blur-2xl" />
              
              {/* AI Status badge */}
              <div className="absolute -top-6 right-8 z-20 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-foreground">AI Status:</span>
                <span className="text-primary font-bold">Горячий лид</span>
              </div>

              {/* Messenger interface */}
              <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-secondary/50 backdrop-blur-sm px-5 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Входящие заявки</span>
                      <div className="text-xs text-muted-foreground">VK Lead Assistant</div>
                    </div>
                    <span className="ml-auto bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">12 новых</span>
                  </div>
                </div>

                {/* Chat list */}
                <div className="divide-y divide-border">
                  {[
                    { name: 'Александр М.', message: 'Здравствуйте, актуально ли предложение?', time: '2 мин', hot: true },
                    { name: 'Елена К.', message: 'Сколько стоит внедрение CRM?', time: '5 мин', hot: true },
                    { name: 'Дмитрий В.', message: 'Интересует оптовая закупка', time: '12 мин', hot: false },
                    { name: 'Ольга П.', message: 'Можно подробнее о сроках?', time: '18 мин', hot: false },
                  ].map((chat, index) => (
                    <div key={index} className={`px-5 py-4 flex items-start gap-4 transition-colors ${chat.hot ? 'bg-primary/[0.03]' : 'hover:bg-secondary/50'}`}>
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-sm font-semibold text-foreground shrink-0">
                        {chat.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-foreground">{chat.name}</span>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                      </div>
                      {chat.hot && (
                        <span className="shrink-0 w-2.5 h-2.5 rounded-full bg-primary mt-2 animate-pulse" />
                      )}
                    </div>
                  ))}
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
