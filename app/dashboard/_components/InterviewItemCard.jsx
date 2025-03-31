import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewItemCard = ({ interview }) => {
  const router = useRouter();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };

  return (
    <div
      className="border shadow-sm rounded-sm p-3 transition-all duration-300 
      hover:scale-105 hover:shadow-lg hover:border-primary"
    >
      <h2 className="font-bold text-primary">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-500">{interview?.jobExperience}</h2>
      <h2 className="text-xs text-gray-400">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between gap-5 mt-2">
        <Button
          size="sm"
          variant="outline"
          className="w-full border-2 bg-secondary hover:bg-secondary/80"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button className="w-full text-white" size="sm" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
