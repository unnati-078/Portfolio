
import { Brain, Palette, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: Brain, label: 'AI/ML Design', level: 90 },
    { icon: Palette, label: 'UI/UX Design', level: 95 },
    { icon: Code, label: 'Frontend Dev', level: 85 },
    { icon: Zap, label: 'Innovation', level: 98 },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">About Me</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that bridge the gap between human creativity and artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl hover-glow">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I'm a creative AI/UI-UX designer with a passion for crafting innovative digital experiences. 
                My work focuses on the intersection of artificial intelligence and user experience design, 
                creating interfaces that are not only beautiful but also intelligent and intuitive.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                With expertise in modern design tools and emerging AI technologies, I bring fresh perspectives 
                to every project, ensuring that each solution is both aesthetically pleasing and functionally superior.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="glass-effect p-6 rounded-xl hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 mr-4">
                    <skill.icon className="w-6 h-6 text-neon-pink" />
                  </div>
                  <span className="font-semibold text-lg">{skill.label}</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-foreground/10 rounded-full h-3">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-neon-pink to-neon-aqua transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="absolute right-0 -top-6 text-sm font-medium text-neon-aqua">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
