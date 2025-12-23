import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', contact: '', niche: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    toast({ title: 'Заявка отправлена!', description: 'Мы свяжемся с вами в ближайшее время' });
    setFormData({ name: '', contact: '', niche: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Готовы <span className="text-gradient-primary">начать</span>?
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Оставьте заявку или напишите напрямую
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`p-8 rounded-2xl bg-card border border-border transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <Input placeholder="Ваше имя" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="bg-secondary border-border" />
              <Input placeholder="Телефон или Telegram" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} required className="bg-secondary border-border" />
              <Input placeholder="Ваша ниша" value={formData.niche} onChange={(e) => setFormData({...formData, niche: e.target.value})} required className="bg-secondary border-border" />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 font-bold py-6">
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>

            <div className="border-t border-border pt-6">
              <p className="text-center text-muted-foreground mb-4">Или напишите напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="flex-1 border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc]/10">
                  <a href="https://t.me/sunberry_vik" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                  <a href="https://vk.me/id1080125063" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.684 4 8.262c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.49 2.27 4.675 2.853 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.475-.085.72-.576.72z"/></svg>
                    Написать в ВК
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
