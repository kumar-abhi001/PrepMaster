"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
  setIsRecording,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer?.length < 10) {
        setLoading(false);
        toast("Error while saving your answer,please record again");
        return;
      }
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    console.log(userAnswer, "########");
    setLoading(true);
    const feedbackPrompt = `
    Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}
    User Answer: ${userAnswer}

    Strictly and critically evaluate the user's answer based on the provided question. 
    - If the answer is exceptionally clear, concise, accurate, and demonstrates deep understanding, provide a rating of 10/10 and highlight the strengths.
    - If the answer is generally good but has minor flaws or omissions, provide a rating of 4/5 and suggest specific improvements.
    - If the answer is mediocre, showing some understanding but lacking depth or clarity, provide a rating of 3/5 and detailed feedback on areas for improvement.
    - If the answer is poor, demonstrating limited understanding or containing significant inaccuracies, provide a rating of 2/10 and clearly explain the shortcomings.
    - If the answer is completely inadequate, irrelevant, or nonsensical ("zebrish"), provide a rating of 1/10 and state that the answer is unacceptable.
    - Give overall rating accordingly
    Provide the response in JSON format with "rating" (number, 1-10) and "feedback" (string) fields. Keep the feedback to 3-5 lines. Also include overall rating by combining all the questions rating. Be very strict in your rating.
    `;
    console.log(
      "🚀 ~ file: RecordAnswerSection.jsx:38 ~ SaveUserAnswer ~ feedbackPrompt:",
      feedbackPrompt
    );
    const result = await chatSession.sendMessage(feedbackPrompt);
    console.log(
      "🚀 ~ file: RecordAnswerSection.jsx:46 ~ SaveUserAnswer ~ result:",
      result
    );
    const mockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    console.log(
      "🚀 ~ file: RecordAnswerSection.jsx:47 ~ SaveUserAnswer ~ mockJsonResp:",
      mockJsonResp
    );
    const JsonfeedbackResp = JSON.parse(mockJsonResp);
    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: JsonfeedbackResp?.feedback,
      rating: JsonfeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY"),
    });

    if (resp) {
      toast("User Answer recorded successfully");
      setUserAnswer("");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  return (
    <div className="flex justify-cente items-center flex-col">
      <div className="flex flex-col my-20 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
          alt="webcam"
          priority
        />
        {
          <Webcam
            style={{ height: 300, width: "100%", zIndex: 10 }}
            mirrored={true}
          />
        }
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2
            onClick={() => setIsRecording(false)}
            className="text-red-600 items-center animate-pulse flex gap-2"
          >
            <StopCircle /> Stop Recording...
          </h2>
        ) : (
          <h2
            onClick={() => setIsRecording(true)}
            className="text-primary flex gap-2 items-center"
          >
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
      {/* <Button onClick={() => console.log("------", userAnswer)}>
        Show User Answer
      </Button> */}
    </div>
  );
};

export default RecordAnswerSection;
