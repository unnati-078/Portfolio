
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Profile Image */}
        <div className="relative inline-block mb-8 animate-fade-in-up">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden neon-border hover-glow">
            <img
              src="/lovable-uploads/6a283c6d-15f9-445a-88cd-83048bf38c94.png"
              alt="Unnati Girase"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 animate-float">
            <Sparkles className="w-8 h-8 text-neon-pink" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-poppins font-bold">
            <span className="text-white">
              Hello!
            </span>
            <br />
            <span className="text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              Unnati Girase
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            AI/UI-UX Designer crafting innovative digital experiences with creativity and cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-aqua text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,128,0.5)]"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              className="border-2 border-neon-aqua text-neon-aqua hover:bg-neon-aqua hover:text-background font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-neon-aqua" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
