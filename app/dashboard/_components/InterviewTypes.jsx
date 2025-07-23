import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Users, FileText, ArrowRight, Clock, Target } from "lucide-react";
import Link from "next/link";

const InterviewTypes = () => {
  const interviewTypes = [
    {
      icon: Code2,
      title: "DSA Interviews",
      type: "DSA",
      description: "Practice data structures, algorithms, and coding problems with real-time code execution.",
      features: ["Live Code Editor", "Multiple Languages", "Complexity Analysis", "Optimal Solutions"],
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10",
      borderColor: "border-tech-blue/20"
    },
    {
      icon: Users,
      title: "Managerial Interviews",
      type: "Managerial-Interview",
      description: "Behavioral questions, leadership scenarios, and management case studies.",
      features: ["STAR Method", "Leadership Scenarios", "Team Management", "Conflict Resolution"],
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10",
      borderColor: "border-tech-purple/20"
    },
    {
      icon: FileText,
      title: "CV-Based Interviews",
      type: "CV-Based",
      description: "Questions tailored to your resume, experience, and career background.",
      features: ["Resume Analysis", "Experience Deep-dive", "Skill Assessment", "Career Progression"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Interview Type</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice with AI-powered interviews tailored to your career goals and skill level.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {interviewTypes.map((type, index) => (
            <Card 
              key={type.title} 
              className={`relative overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${type.borderColor} border-2 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-xl ${type.bgColor} w-fit`}>
                  <type.icon className={`h-6 w-6 ${type.color}`} />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <CardDescription className="text-base">{type.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    30-60 mins
                  </div>
                  
                  <Link href={`/interview/${type.type}`}>
                    <Button variant="ghost" size="sm">
                    Start Practice <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                 
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewTypes;