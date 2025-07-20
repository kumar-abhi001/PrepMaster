import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";


const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                AI-Powered Mock Interviews
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Your Next
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Interview</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Practice DSA problems, managerial scenarios, and CV-based questions with our AI interviewer. 
                Get real-time feedback and improve your interview skills.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Practice
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Interviews Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="/HeroImage.png"
                alt="Interview Platform Hero" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
          </div>
          
    </section>
  );
};

export default Hero;