import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ResultsSection from '@/components/sections/ResultsSection';
import WhyNoBanSection from '@/components/sections/WhyNoBanSection';
import SecuritySection from '@/components/sections/SecuritySection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <ComparisonSection />
        <ResultsSection />
        <WhyNoBanSection />
        <SecuritySection />
        <PricingSection />
        <ContactSection />
      </main>
      <FloatingButtons />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-custom text-center text-sm text-muted-foreground">
          © 2025 VK Lead Assistant. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
