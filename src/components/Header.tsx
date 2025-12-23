import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#how-it-works', label: 'Как работает' },
    { href: '#results', label: 'Результаты' },
    { href: '#pricing', label: 'Тарифы' },
    { href: '#contact', label: 'Связаться' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo with neon glow */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 glow-sm">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            VK Lead <span className="text-gradient-primary">Assistant</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button with neon effect */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 glow-sm transition-all duration-300 hover:glow-md"
          >
            <a href="#contact">Получить доступ</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 hover:bg-card rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with glassmorphism */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/30 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2 glow-sm"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Получить доступ
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;