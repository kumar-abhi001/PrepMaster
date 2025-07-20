"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MockInterview } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

const UserMockAllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, isLoaded } = useUser();
 
  useEffect(() => {
     if (!isLoaded || !user) return;
    const fetchQuestions = async () => {
      try {
        const userEmail = user?.primaryEmailAddress?.emailAddress;
        console.log("userEmail", userEmail);
        const response = await db
          .select()
          .from(MockInterview)
          .where(eq(MockInterview.createdBy, userEmail)); // Filter by user email
        
        const formattedQuestions = response.map((item) => {
          let parsedQuestions = [];
          try {
            parsedQuestions = JSON.parse(item.jsonMockResp); // Parse JSON response
          } catch (error) {
            console.error("Error parsing jsonMockResp:", error);
          }

          return {
            questions: parsedQuestions.map((q) => q.question), // Extract only questions
            tags: item.jobDesc, // Tags (e.g., technologies used)
            interviewType: item.jobPosition, // Interview type
          };
        });
        console.log(formattedQuestions);
        setQuestions(formattedQuestions);
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [isLoaded, user]);

  return (
    <div className="p-6 dark:bg-darkCard shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Mock Interview Questions</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && questions.length === 0 && (
        <p>No questions found.</p>
      )}
      <ul className="space-y-3">
        {questions.map((item, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-blue-600">
              {item.interviewType}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Tags:</strong> {item.tags}
            </p>
            <ul className="mt-2 space-y-2">
              {item.questions.map((q, qIndex) => (
                <li
                  key={qIndex}
                  className="bg-white p-2 border rounded-md shadow-sm text-black"
                >
                  {qIndex + 1}
                  .
                  {" " + q}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMockAllQuestions;