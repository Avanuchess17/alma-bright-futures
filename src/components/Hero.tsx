import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-students.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gradient-highlight rounded-full px-4 py-2 text-sm font-medium text-highlight-foreground">
                <Star className="w-4 h-4 mr-2" />
                Empowering Students Beyond the Classroom
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Unlock Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Potential</span>
                <br />
                with Almacation
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your communication skills, build unshakeable confidence, and develop the personality that opens doors to success. Join thousands of students who've discovered their inner strength.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Book Free Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Trusted by educators</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Award-winning programs</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Students engaging in personality development activities"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute top-8 left-8 bg-background/90 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Confidence Boost</div>
                    <div className="text-sm text-muted-foreground">85% improvement</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Public Speaking</div>
                    <div className="text-sm text-muted-foreground">Master the stage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;