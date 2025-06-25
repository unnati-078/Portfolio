
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-neon-pink" />,
      title: "UI/UX Design Excellence Award",
      date: "2024",
      description: "Recognized for outstanding user experience design and innovative interface solutions across multiple client projects."
    },
    {
      icon: <Star className="w-8 h-8 text-neon-aqua" />,
      title: "AI Innovation Certificate",
      date: "2023",
      description: "Completed advanced certification in AI-driven design tools and machine learning applications in user experience."
    },
    {
      icon: <Medal className="w-8 h-8 text-neon-purple" />,
      title: "Design Thinking Workshop Lead",
      date: "2023",
      description: "Successfully led design thinking workshops for 50+ participants, focusing on human-centered design principles."
    },
    {
      icon: <Award className="w-8 h-8 text-neon-pink" />,
      title: "Best Mobile App Design",
      date: "2023",
      description: "Won first place in regional mobile app design competition for innovative healthcare accessibility solution."
    },
    {
      icon: <Target className="w-8 h-8 text-neon-aqua" />,
      title: "User Research Specialist",
      date: "2022",
      description: "Advanced certification in user research methodologies, usability testing, and behavioral analysis techniques."
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-purple" />,
      title: "Rapid Prototyping Expert",
      date: "2022",
      description: "Mastered advanced prototyping tools and techniques, reducing design-to-development time by 40% across projects."
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Milestones and recognitions that showcase my dedication to design excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-6 hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-purple/30 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-poppins font-bold mb-2 text-foreground group-hover:text-neon-pink transition-colors duration-300">
                  {achievement.title}
                </h3>
                <div className="text-neon-aqua font-medium mb-3 text-sm">
                  {achievement.date}
                </div>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
