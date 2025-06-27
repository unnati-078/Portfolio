import { Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "President",
      company: "E-Cell SSVPS",
      location: "Dhule, MH",
      period: "Aug 2024 - Present",
      description: "Spearheading entrepreneurship and innovation initiatives for 100+ students. Organizing and conducting hackathons, seminars, and networking events.",
      achievements: [
        "Mentored teams to develop ideas and launch startups.",
        "Collaborated with mentors and industry experts for knowledge sharing.",
        "Developed and implemented strategies for E-Cell growth and activities."
      ]
    },
    {
      role: "Campus Ambassador",
      company: "E-Cell IIT Bombay",
      location: "Remote",
      period: "Jun 2024 - Oct 2024",
      description: "Represented E-Cell IIT Bombay on campus, promoting entrepreneurship and innovation.",
      achievements: [
        "Organized workshops, seminars, and webinars for students.",
        "Created marketing campaigns to boost student participation.",
        "Served as a point of contact between E-Cell IIT Bombay and campus community.",
        "Supported students in exploring ideas, applying for events, and gaining entrepreneurial exposure."
      ]
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
            Leadership and campus roles that shaped my entrepreneurial journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-neon-pink mb-2">{exp.role}</h3>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{exp.company}</h4>
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

              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">{exp.description}</p>

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
