import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-background">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="max-w-xl">
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up tracking-tight">
              B2B лиды из ВКонтакте по{' '}
              <span className="text-primary">15 ₽</span>{' '}
              вместо 1500
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">
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
            <p className="text-sm text-muted-foreground mt-4 animate-fade-in-up delay-300">
              15 минут в Zoom. Покажем систему изнутри и рассчитаем окупаемость
            </p>
          </div>

          {/* Right side - Messenger visualization */}
          <div className="animate-fade-in-up delay-200 lg:pl-8">
            <div className="relative">
              {/* AI Status badge */}
              <div className="absolute -top-4 right-4 z-20 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium shadow-lg">
                AI Status: Горячий лид
              </div>

              {/* Messenger interface */}
              <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-secondary px-4 py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Входящие заявки</span>
                    <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">12 новых</span>
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
                    <div key={index} className={`px-4 py-3 flex items-start gap-3 ${chat.hot ? 'bg-primary/5' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-foreground shrink-0">
                        {chat.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-foreground text-sm">{chat.name}</span>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                      </div>
                      {chat.hot && (
                        <span className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
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