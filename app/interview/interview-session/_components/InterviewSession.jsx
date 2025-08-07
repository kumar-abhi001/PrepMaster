"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Clock,
  Brain,
  Video,
  VideoOff,
  Mic,
  MicOff,
  MessageSquare,
  Loader,
  Send,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer } from "react-toastify";
import { toast } from "sonner";
import RecordAnswer from "./RecordAnswer";
import Webcam from "react-webcam";

const InterviewSession = () => {
  const searchParams = useSearchParams();
  const interviewType = searchParams.get("type");
  const difficulty = searchParams.get("difficulty");

  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [currentResponse, setCurrentResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [hasStarted, setHasStarted] = useState(true);
  const [conversation, setConversation] = useState([]);


    //Get Mic and Camera Permission
    
  // Handle Start Interview
  const handleStartInterview = () => {
    if (!apiKey.trim()) return;
    setShowApiKeyInput(false);
      setHasStarted(true);
  };

  // Mock function for current question
  const getCurrentQuestion = () => {
    return "Explain how you would optimize a database query for performance?";
  };

  // Handle response submit
  const handleSendResponse = () => {
    if (!currentResponse.trim()) return;
    setIsLoading(true);

    // Add user's response to conversation
    setConversation((prev) => [...prev, { role: "user", content: currentResponse }]);
    setCurrentResponse("");

    // Simulate AI thinking
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        { role: "interviewer", content: "Good answer! Can you elaborate more on indexing?" },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* API Key Setup */}
          {showApiKeyInput && (
            <Card className="p-6 mb-8 border-primary/20 bg-gradient-subtle">
              <h2 className="text-xl font-semibold mb-4">Setup AI Interview</h2>
              <p className="text-muted-foreground mb-4">
                Enter your Perplexity API key to start the AI-powered interview session. Your key
                is not stored and only used for this session.
              </p>
              <div className="flex gap-4">
                <Input
                  type="password"
                  placeholder="Enter your Perplexity API key..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleStartInterview} disabled={!apiKey.trim()}>
                  Start Interview
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Don't have an API key? Get one from{" "}
                <a
                  href="https://www.perplexity.ai/settings/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Perplexity AI
                </a>
              </p>
            </Card>
          )}

          {/* Interview Session */}
          {hasStarted && (
            <>
              {/* Session Info */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-6 w-6 text-primary" />
                    <h1 className="text-2xl font-bold">{interviewType || "Interview"}</h1>
                  </div>
                  <Badge
                    variant={
                      difficulty === "Easy"
                        ? "secondary"
                        : difficulty === "Medium"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {difficulty}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">{conversation.length} messages</div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Interview Area */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Video/Camera Section */}
                  <Card className="p-6">
                    <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center mb-4">
                        {isCameraOn ?(<div className="text-center">
                            <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Brain className="h-12 w-12 text-primary" />
                            </div>
                        
                            <p className="text-sm text-muted-foreground">
                                Your interview is being recorded for feedback
                            </p>
                      </div> ): (
                        <Webcam
                            mirrored={true}
                            className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center mb-4"
                        />
                      )}    
                    </div>

                    {/* Camera Controls */}
                    <div className="flex items-center justify-center space-x-4">
                      <Button
                        variant={isCameraOn ? "default" : "outline"}
                        size="sm"
                        onClick={() => setIsCameraOn((prev) => !prev)}
                      >
                        {isCameraOn ? (
                          <Video className="h-4 w-4 mr-2" />
                        ) : (
                          <VideoOff className="h-4 w-4 mr-2" />
                        )}
                        {isCameraOn ? "Camera On" : "Camera Off"}
                      </Button>
                      <RecordAnswer />
                    </div>
                  </Card>

                  {/* Current Question */}
                  <Card className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <MessageSquare className="h-6 w-6 text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Current Question</h3>
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <Loader className="h-4 w-4 animate-spin" />
                            <span className="text-muted-foreground">AI is thinking...</span>
                          </div>
                        ) : (
                          <p className="text-lg leading-relaxed">{getCurrentQuestion()}</p>
                        )}
                      </div>
                    </div>
                  </Card>

                  {/* Response Area */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Your Response</h3>
                    <div className="space-y-4">
                      <Textarea
                        placeholder="Type your response here..."
                        value={currentResponse}
                        onChange={(e) => setCurrentResponse(e.target.value)}
                        className="min-h-32"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                            handleSendResponse();
                          }
                        }}
                      />
                      <Button
                        onClick={handleSendResponse}
                        disabled={!currentResponse.trim() || isLoading}
                        className="w-full"
                      >
                        {isLoading ? (
                          <>
                            <Loader className="h-4 w-4 mr-2 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Response (Ctrl+Enter)
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Conversation History */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Conversation History</h3>
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {conversation.length === 0 ? (
                        <p className="text-muted-foreground text-sm">
                          Conversation will appear here...
                        </p>
                      ) : (
                        conversation.map((message, index) => (
                          <div
                            key={index}
                            className={`p-3 rounded-lg text-sm ${
                              message.role === "interviewer"
                                ? "bg-primary/10 border-l-4 border-primary"
                                : "bg-muted ml-4"
                            }`}
                          >
                            <div className="font-medium text-xs text-muted-foreground mb-1">
                              {message.role === "interviewer" ? "Interviewer" : "You"}
                            </div>
                            <div>{message.content}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </Card>

                  {/* Controls */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Controls</h3>
                    <div className="space-y-3">
                      <Button className="w-full">End Interview</Button>
                      <Button variant="outline" className="w-full">
                        Pause Session
                      </Button>
                      <Button variant="destructive" className="w-full">
                        End & Exit
                      </Button>
                    </div>
                  </Card>

                  {/* Tips */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Tips</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Speak clearly and be specific</p>
                      <p>• Use concrete examples</p>
                      <p>• Ask for clarification if needed</p>
                      <p>• Take your time to think</p>
                      <p>• Use Ctrl+Enter to send quickly</p>
                    </div>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewSession;
