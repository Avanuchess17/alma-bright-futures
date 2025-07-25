import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
    { name: "Resources", href: "#" }
  ];

  const programs = [
    { name: "Public Speaking Bootcamp", href: "#" },
    { name: "Soft Skills Training", href: "#" },
    { name: "School Programs", href: "#" },
    { name: "Mental Health Coaching", href: "#" },
    { name: "Custom Workshops", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-background/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with Almacation
              </h3>
              <p className="text-background/80 text-lg">
                Get the latest tips, resources, and updates on personality development and educational programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-background/10 border-background/30 text-background placeholder:text-background/60 flex-1"
              />
              <Button variant="secondary" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Almacation
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering students beyond the classroom through innovative personality development programs and life skills training.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">hello@almacation.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-background/80">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-background/80 hover:text-background transition-colors duration-300"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="space-y-4">
              <Button variant="gradient" size="lg" className="w-full">
                Book Free Demo
              </Button>
              <Button variant="outline" size="lg" className="w-full border-background/30 text-background hover:bg-background hover:text-foreground">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-center md:text-left">
              <p>&copy; 2024 Almacation. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-background/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>for students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;