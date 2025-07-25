import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, School, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    type: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      type: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@almacation.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Mon-Sat, 9 AM - 6 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mumbai, Maharashtra",
      description: "India"
    }
  ];

  const collaborationTypes = [
    {
      icon: School,
      title: "School Partnerships",
      description: "Comprehensive personality development programs for your institution"
    },
    {
      icon: Users,
      title: "Workshop Collaboration",
      description: "Custom workshops for specific skills and age groups"
    },
    {
      icon: Calendar,
      title: "Event Speaking",
      description: "Motivational talks and keynote sessions for educational events"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent-light/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-highlight-light rounded-full px-4 py-2 text-sm font-medium text-highlight-foreground mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start a
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your students' lives? Get in touch with us to discuss how we can bring our programs to your institution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you with a customized solution for your needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="organization">School/Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Your institution name"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="type">Inquiry Type</Label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  required
                >
                  <option value="">Select inquiry type</option>
                  <option value="school-program">School Program Partnership</option>
                  <option value="workshop">Custom Workshop</option>
                  <option value="individual">Individual Training</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements, number of students, preferred dates, etc."
                  rows={5}
                  required
                  className="mt-2"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Collaboration */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-lg font-medium text-primary mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Types */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Collaboration Opportunities
              </h3>
              <div className="space-y-4">
                {collaborationTypes.map((type, index) => (
                  <div
                    key={type.title}
                    className="flex items-start space-x-4 p-6 rounded-2xl bg-background shadow-soft hover:shadow-glow transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{type.title}</h4>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-12 text-white">
          <School className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Invite Almacation to Your School
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to bring transformative personality development programs to your students? Let's schedule a visit and create a customized plan for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule School Visit
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/20">
              Download Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;