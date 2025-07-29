import { Button } from '@/components/ui/button';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';
import almaImage from '@/assets/founder-elegant.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe every student has unlimited potential waiting to be unlocked."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education and personal development."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building supportive networks that foster growth and collaboration."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Using modern techniques to make learning engaging and effective."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-primary-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary-light rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            About Almacation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Lives Through
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to empower the next generation, Almacation bridges the gap between academic learning and real-world success skills.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src={almaImage}
                alt="Alma Asif - Founder & Lead Trainer"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Achievement */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Meet Alma Asif
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                A passionate educator, speaker, and soft skills trainer dedicated to unlocking human potential. With years of experience in personality development and youth empowerment, Alma founded Almacation to create lasting positive change in students' lives.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Vision</h4>
                  <p className="text-muted-foreground">To create a generation of confident, articulate, and emotionally intelligent individuals who can thrive in any environment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mission</h4>
                  <p className="text-muted-foreground">Bridging the gap between academic excellence and life skills through innovative, practical, and engaging personality development programs.</p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg">
              Learn More About Our Story
            </Button>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do and shape our approach to education and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-2xl bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;