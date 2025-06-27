const AboutSection = () => {
  const coreSkills = [
    'UI/UX',
    'Figma',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'GitHub',
    'C++',
  ];

  const toolsUsed = [
    'React',
    'TailwindCSS',
    'Framer Motion',
    'Figma',
    'Visual Studio Code',
    'Node.js',
    'Git',
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Intro Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">About Me</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            An aspiring technologist, passionate about blending design, code, and ideas to build
            meaningful digital experiences.
          </p>
        </div>

        {/* Main Text */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="glass-effect p-8 rounded-2xl hover-glow">
            <p className="text-lg leading-relaxed text-foreground/90">
              I’m <span className="font-bold">Unnati Girase</span>, an aspiring technologist and passionate
              entrepreneur. As the <span className="font-semibold">President of the Entrepreneurship Cell at SSVPS</span>, I’ve had the privilege to lead and guide a team in nurturing a culture of innovation, helping students transform ideas into impactful ventures.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-3">
              My role as a <span className="font-semibold">Campus Ambassador for E-Cell, IIT Bombay</span> has been equally enriching, allowing me to connect with like‑minded individuals across the entrepreneurship ecosystem and build a strong network of passionate changemakers.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-3">
              Driven by a deep interest in technology, design, and problem‑solving, I’m dedicated to creating meaningful, user‑centric digital experiences. Always open to collaboration, I’m eager to learn, build, and evolve every step of the way.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-3">
              Skilled in modern design tools and programming languages, I love combining aesthetics with precision engineering to build interactive solutions that stand out.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-neon-aqua">My Skills</h3>
          <div className="flex flex-wrap justify-center mt-4 gap-3">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="bg-neon-pink/20 text-neon-aqua rounded-full px-4 py-2 text-sm font-medium hover-glow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Used Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-neon-aqua">Tools I Use</h3>
          <div className="flex flex-wrap justify-center mt-4 gap-3">
            {toolsUsed.map((tool) => (
              <span
                key={tool}
                className="bg-neon-purple/20 text-neon-aqua rounded-full px-4 py-2 text-sm font-medium hover-glow"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
