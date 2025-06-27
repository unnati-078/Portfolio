import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { SiGooglecloud, SiCredly, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'unnatigirase03@gmai.com', href: 'mailto:unnatigirase03@gmai.com' },
    { icon: Phone, label: 'Phone', value: '+91-8390576603', href: 'tel:+91-8390576603' },
    { icon: MapPin, label: 'Location', value: 'Dhule, Maharashtra, India', href: '#' },
  ];
  
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/unnati-girase-2a3abb280', color: 'text-blue-400 hover:text-blue-300' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/unnati-078', color: 'text-gray-400 hover:text-gray-300' },
    { icon: SiGooglecloud, label: 'Google Cloud Skills Boost', href: 'https://www.cloudskillsboost.google/public_profiles/0c32104e-d048-40a2-9a71-815dd87db87c', color: 'text-yellow-400 hover:text-yellow-300' },
    { icon: SiCredly, label: 'Credly', href: 'https://www.credly.com/users/unnati-girase/badges', color: 'text-green-400 hover:text-green-300' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/unnat_07/', color: 'text-orange-400 hover:text-orange-300' },
    { icon: SiGeeksforgeeks, label: 'GeeksForGeeks', href: 'https://auth.geeksforgeeks.org/user/unnatic2d0m/', color: 'text-green-500 hover:text-green-400' },
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Contact</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">Let's collaborate and create something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl hover-glow">
              <h3 className="text-2xl font-poppins font-bold mb-6 text-neon-pink">Get In Touch</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. Reach out and let's build something impactful together!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 mr-4 group-hover:from-neon-pink/30 group-hover:to-neon-purple/30 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-neon-aqua" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl hover-glow">
            <h3 className="text-2xl font-poppins font-bold mb-6 text-neon-aqua">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-foreground/5 border-foreground/20 focus:border-neon-pink text-foreground placeholder:text-foreground/50"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-foreground/5 border-foreground/20 focus:border-neon-aqua text-foreground placeholder:text-foreground/50"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-foreground/5 border-foreground/20 focus:border-neon-purple text-foreground placeholder:text-foreground/50 resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-aqua hover:from-neon-aqua hover:via-neon-green hover:to-neon-pink text-white font-semibold py-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-foreground/10">
          <p className="text-foreground/60">© 2025 Unnati Girase. Crafted with ❤️ and lots of ☕</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
