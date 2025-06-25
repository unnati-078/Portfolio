
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google Career Certificates",
      date: "2022",
      credentialId: "GGL-UX-2022-156",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Machine Learning Engineer Nanodegree",
      issuer: "Udacity",
      date: "2022",
      credentialId: "UD-ML-2022-789",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Adobe Certified Expert - XD",
      issuer: "Adobe",
      date: "2021",
      credentialId: "ACE-XD-2021-456",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      verifyUrl: "#"
    }
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
              className="glass-effect rounded-2xl overflow-hidden hover-glow animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-poppins font-bold text-foreground mb-2 group-hover:text-neon-pink transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-neon-aqua font-medium mb-1">{cert.issuer}</p>
                  </div>
                  <Award className="w-6 h-6 text-neon-green ml-2 animate-glow" />
                </div>

                <div className="flex items-center mb-4 text-foreground/70">
                  <Calendar className="w-4 h-4 mr-2 text-neon-purple" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-foreground/60">
                    Credential ID: <span className="text-neon-aqua font-mono">{cert.credentialId}</span>
                  </p>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-neon-green to-neon-aqua hover:from-neon-aqua hover:to-neon-purple text-background font-semibold transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
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
