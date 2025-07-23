import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            Ready to Ace Your Next Interview?
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Start Your Journey to Interview Success Today
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Join thousands of professionals who have improved their interview skills and landed their dream jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 border-white"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-lg px-8 py-6 text-white border-white/30 hover:bg-white/10"
            >
              View Pricing
            </Button>
          </div>
          
          <p className="text-white/70 text-sm">
            No credit card required • Free 7-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;