"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import {
  ArrowLeft,
  Play,
  Settings,
  Clock,
  Brain,
  FileText,
} from "lucide-react";

const Interview = ({ params }) => {
  const { type } = params;
  const router = useRouter();
  const [difficulty, setDifficulty] = useState("Medium");

  const difficulties = ["Easy", "Medium", "Hard"];
  const duration = {
    Easy: "25-40",
    Medium: "30-50",
    Hard: "45-60",
  };

  const handleStartInterview = () => {
    if (selectedType) {
      router.push(
        `/interview/interview-session?type=${type}&difficulty=${difficulty}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center space-y-4 mb-12 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold">
              Start Your Practice Session
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your interview type and difficulty level to begin
            </p>
          </div>

          {/* Difficulty Selection */}
          <div className="animate-slide-up">
            <h2 className="text-2xl font-semibold mb-6">
              Select Difficulty Level
            </h2>
            <div className="flex gap-4 justify-center">
              {difficulties.map((level) => (
                <Button
                  key={level}
                  variant={difficulty === level ? "default" : "outline"}
                  onClick={() => setDifficulty(level)}
                  className="min-w-24"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          {/* Session Details */}
          <div className="animate-slide-up">
            <Card className="p-6 bg-gradient-subtle border-0">
              <h3 className="text-lg font-semibold mb-4">Session Overview</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Interview Type:</span>
                  <div className="font-medium">{type}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Difficulty:</span>
                  <div className="font-medium">{difficulty}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    Expected Duration:
                  </span>
                  <div className="font-medium">
                    {duration[difficulty]} minutes
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Start Button */}
          <div className="text-center animate-slide-up">
            <Link
              href={`/interview/interview-session?type=${type}&difficulty=${difficulty}`}
            >
              <Button
                size="lg"
                onClick={handleStartInterview}
                className="text-lg px-12 py-6"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Interview Session
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Make sure you're in a quiet environment with good internet
              connection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
