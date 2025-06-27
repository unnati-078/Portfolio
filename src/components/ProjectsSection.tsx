import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GridBlazerImage from '@/components/images/Untitled design (3).png';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Grid Blazer",
      description:
        "An engaging Python game built during Stanford Code in Place. Features custom graphics, animations, and a thrilling victory sequence, designed exclusively for the Code in Place environment.",
      image: GridBlazerImage,
      tags: ["Python", "Graphics", "Animations", "Stanford Code in Place"],
      githubUrl: "https://github.com/unnati-078/Grid-Blazer.git",
      liveUrl: "https://codeinplace.stanford.edu/cip5/share/jtFEfc0Q0J1k0JnKry8T",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend creativity with technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden hover-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-neon-pink animate-float" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold mb-3 text-foreground group-hover:text-neon-pink transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-purple rounded-full border border-neon-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-aqua text-white transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-neon-aqua text-neon-aqua hover:bg-neon-aqua hover:text-background"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <p className="mt-2 text-xs text-foreground/50">
                  Code runs in Stanford Code in Place environment only
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
