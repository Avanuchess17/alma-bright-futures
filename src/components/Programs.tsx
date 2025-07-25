import { Button } from '@/components/ui/button';
import { Mic, Users, Brain, Heart, Download, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Mic,
      title: "Public Speaking Bootcamps",
      description: "Master the art of confident communication and stage presence through practical workshops and real-world practice sessions.",
      features: ["Stage confidence", "Voice modulation", "Audience engagement", "Storytelling techniques"],
      duration: "4 weeks",
      sessions: "8 sessions",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "Soft Skills Training",
      description: "Develop essential life skills including leadership, teamwork, emotional intelligence, and professional communication.",
      features: ["Leadership skills", "Team collaboration", "Emotional intelligence", "Professional etiquette"],
      duration: "6 weeks",
      sessions: "12 sessions",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Brain,
      title: "School Collaboration Programs",
      description: "Comprehensive personality development programs designed specifically for educational institutions and integrated into school curricula.",
      features: ["Curriculum integration", "Teacher training", "Student assessments", "Progress tracking"],
      duration: "Full term",
      sessions: "Ongoing",
      gradient: "from-accent to-highlight"
    },
    {
      icon: Heart,
      title: "Mental Health & Mindset Coaching",
      description: "Build resilience, manage stress, and develop a growth mindset with our specialized coaching programs for young minds.",
      features: ["Stress management", "Resilience building", "Growth mindset", "Emotional regulation"],
      duration: "8 weeks",
      sessions: "16 sessions",
      gradient: "from-highlight to-secondary"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-primary-light/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-secondary-light rounded-full px-4 py-2 text-sm font-medium text-secondary mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Development</span>
            <br />Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our range of carefully designed programs that address every aspect of personality development and life skills enhancement.
          </p>
          
          {/* Download Brochure CTA */}
          <Button variant="outline" size="lg" className="group">
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Program Brochure
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="relative p-8 rounded-3xl bg-background shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-muted-foreground">{program.duration}</div>
                    <div className="text-sm text-muted-foreground">{program.sessions}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="ghost" className="group/btn w-full justify-between p-4 hover:bg-primary-light">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Customized Workshops CTA */}
        <div className="text-center bg-gradient-card rounded-3xl p-12 shadow-soft">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Something More Specific?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer customized personality development workshops tailored to your institution's specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Request Custom Program
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;