import { Button } from '@/components/ui/button';
import { Star, Quote, TrendingUp, Award, Users, School } from 'lucide-react';

const Impact = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Class 11 Student",
      school: "Delhi Public School",
      content: "Almacation transformed my confidence completely. I went from being afraid to speak in class to winning our school's debate competition!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "Principal",
      school: "Modern High School",
      content: "The impact on our students has been remarkable. We've seen improved communication skills, better teamwork, and increased self-confidence across all grades.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      role: "Mother",
      school: "Parent",
      content: "My daughter has become so much more expressive and confident after attending Almacation's programs. Thank you for believing in her potential!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "2000+",
      label: "Students Empowered",
      description: "Across 50+ educational institutions"
    },
    {
      icon: School,
      number: "50+",
      label: "Partner Schools",
      description: "Leading educational institutions trust us"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Students show measurable improvement"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Confidence Boost",
      description: "Average improvement in self-confidence"
    }
  ];

  const sessionPhotos = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-background to-accent-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-accent-light rounded-full px-4 py-2 text-sm font-medium text-accent mb-4">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Lives,
            <span className="bg-gradient-primary bg-clip-text text-transparent"> One Student</span>
            <br />at a Time
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the real impact we're making in students' lives through testimonials, success stories, and measurable achievements.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="text-center p-8 rounded-2xl bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{achievement.label}</div>
              <div className="text-sm text-muted-foreground">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What People Are Saying
            </h3>
            <p className="text-lg text-muted-foreground">
              Real stories from students, parents, and educators who've experienced our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-8 rounded-2xl bg-background shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-highlight fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.school}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Photos Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sessions in Action
            </h3>
            <p className="text-lg text-muted-foreground">
              Glimpses from our interactive workshops and training sessions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sessionPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 aspect-square"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={photo}
                  alt={`Session ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Students?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join the growing community of schools and students who are discovering their true potential with Almacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              Invite Us to Your School
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/20">
              View More Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;