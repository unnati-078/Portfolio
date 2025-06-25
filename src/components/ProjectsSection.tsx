
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Design Assistant",
      description: "Revolutionary design tool that uses machine learning to suggest optimal UI components and layouts based on user behavior patterns.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["AI/ML", "React", "Python", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Immersive VR Experience Platform",
      description: "Next-generation virtual reality platform with intuitive gesture controls and adaptive UI that responds to user emotions and preferences.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
      tags: ["VR", "Unity", "C#", "UX Research"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Smart City Dashboard",
      description: "Comprehensive urban analytics platform that visualizes real-time city data through beautiful, interactive dashboards and predictive insights.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Data Viz", "D3.js", "React", "IoT"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend creativity with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

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
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-aqua text-white transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neon-aqua text-neon-aqua hover:bg-neon-aqua hover:text-background transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
