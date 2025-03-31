"use client";
import { Lightbulb, Volume2 } from "lucide-react";
import React, { useEffect } from "react";

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  console.log("🚀 ~ Questions:", mockInterviewQuestion);

  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      // Stop any ongoing speech before starting new one
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech");
    }
  };

  // Auto-play text when active question changes
  useEffect(() => {
    if (mockInterviewQuestion?.[activeQuestionIndex]?.question) {
      textToSpeech(mockInterviewQuestion[activeQuestionIndex].question);
    }
  }, [activeQuestionIndex, mockInterviewQuestion]);

  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index}
<<<<<<< HEAD
              className={`p-2 bg-primary rounded-full  text-xs md:text-sm text-center cursor-pointer 
                ${
                  activeQuestionIndex === index
                    ? "bg-white font-bold border-2 border-black text-black"
                    : "text-white"
=======
              className={`p-2 bg-primary text-white rounded-full text-xs md:text-sm text-center cursor-pointer 
                ${
                  activeQuestionIndex === index &&
                  "text-black font-bold bg-white border-2"
>>>>>>> 1abf3a7 (Feedback Change)
                }`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>

        {/* Display the current question */}
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>

        {/* Clickable Volume Icon to Replay Speech */}
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />

        {/* Note Section */}
        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-primary my-2">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE}
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
