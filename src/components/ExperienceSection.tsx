
import { Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Principal UX/UI Designer",
      company: "TechCorp Innovation Lab",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Leading AI-driven design initiatives and creating next-generation user interfaces for enterprise applications.",
      achievements: ["Increased user engagement by 40%", "Led a team of 8 designers", "Implemented AI design systems"]
    },
    {
      role: "Senior Product Designer",
      company: "Digital Dynamics",
      location: "New York, NY",
      period: "2021 - 2023",
      description: "Specialized in creating intuitive interfaces for AI-powered products and machine learning platforms.",
      achievements: ["Redesigned core product UI", "Reduced user onboarding time by 60%", "Created comprehensive design system"]
    },
    {
      role: "UI/UX Designer",
      company: "StartupHub",
      location: "Austin, TX",
      period: "2019 - 2021",
      description: "Developed user-centered designs for various startup products across different industries.",
      achievements: ["Launched 12+ products", "Improved conversion rates by 35%", "Built design team from scratch"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Experience & Roles</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A journey through innovative companies and impactful projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-poppins font-bold text-neon-pink mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {exp.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-foreground/70">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-neon-aqua" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-neon-purple" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 mr-2 text-neon-green" />
                  <span className="font-semibold text-neon-green">Key Achievements</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center text-foreground/80">
                      <div className="w-2 h-2 bg-neon-aqua rounded-full mr-3" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
