import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import awsLogo from '@/components/images/aws.png';
import stanfordLogo from '@/components/images/stanford.png';
import spokenLogo from '@/components/images/spoken.png';
import postmanLogo from '@/components/images/postman.svg';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "June 7, 2025",
      image: awsLogo,
      verifyUrl: "https://www.credly.com/go/t3TFxj2x",
    },
    {
      title: "Stanford University's Code in Place",
      issuer: "Stanford University",
      date: "June 6, 2025",
      image: stanfordLogo,
      verifyUrl: "https://codeinplace.stanford.edu/cip5/certificate/yyomsn",
    },
    {
      title: "Certificate for the Completion of Python 3.4.3 Training",
      issuer: "Spoken Tutorial, IIT Bombay",
      date: "May 30, 2025",
      image: spokenLogo,
      verifyUrl: "https://drive.google.com/file/d/15UH6Q22x2SCXqbXXH6vwsDEIRZeqEVmV/view?usp=drive_link",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "October 28, 2024",
      image: postmanLogo,
      verifyUrl: "https://drive.google.com/file/d/1O2jgDziw2PVhUiheaFs_TDBN_VP_v8wl/view?usp=sharing",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 flex items-center gap-4 hover-glow animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-20 h-20 rounded-xl object-contain"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-neon-pink transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-neon-aqua font-medium">{cert.issuer}</p>
                  </div>
                  <Award className="w-6 h-6 text-neon-green animate-glow" />
                </div>

                <div className="flex items-center text-foreground/70 mt-2">
                  <Calendar className="w-4 h-4 mr-2 text-neon-purple" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <Button
                  size="sm"
                  className="mt-3 w-full bg-gradient-to-r from-neon-green to-neon-aqua hover:from-neon-aqua hover:to-neon-purple text-background font-semibold transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
