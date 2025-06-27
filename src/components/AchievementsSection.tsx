import { Trophy, Star } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-neon-pink" />,
      title: "Finalist Team Lead - NEC",
      date: "2025",
      description:
        "Led the finalist team of the National Entrepreneurship Challenge, showcasing innovation and teamwork in a highly competitive environment.",
    },
    {
      icon: <Star className="w-8 h-8 text-neon-aqua" />,
      title: "Legend Milestone - Google Arcade",
      date: "2025",
      description:
        "Achieved the prestigious 'Legend' milestone in the Google Arcade Program, demonstrating deep technical and problem-solving abilities.",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Milestones and recognitions that reflect my journey and accomplishments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-6 hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-purple/30 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
              </div>
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
