import { Card, CardContent } from "components/ui/card";
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  Users,
  Clock,
  Trophy
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Feedback",
      description: "Get intelligent insights on your performance with detailed analysis and improvement suggestions."
    },
    {
      icon: MessageSquare,
      title: "Real-time Interaction",
      description: "Natural conversation flow with our AI interviewer that adapts to your responses."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your progress with detailed metrics and identify areas for improvement."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive immediate feedback and scoring right after your interview session."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and protected. Practice with complete confidence."
    },
    {
      icon: Users,
      title: "Industry Experts",
      description: "Questions curated by experienced professionals from top tech companies."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Practice anytime, anywhere. No scheduling conflicts or time zone issues."
    },
    {
      icon: Trophy,
      title: "Skill Certification",
      description: "Earn certificates to showcase your interview skills to potential employers."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose PrepMaster?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced features designed to give you the competitive edge in your interview preparation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;