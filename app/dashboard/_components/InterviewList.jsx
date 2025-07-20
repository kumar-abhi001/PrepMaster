"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq, is } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard"

const InterviewList = () => {
  const { user } = useUser();
  const [InterviewList, setInterviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    user && GetInterviewList();
  }, [user]);
  const GetInterviewList = async () => {
    setIsLoading(true);
    const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(MockInterview.id))
      .limit(6);

    console.log(
      "🚀 ~ file: InterviewList.jsx:14 ~ GetInterviewList ~ GetInterviewList:",
      GetInterviewList
    );
    setInterviewList(result)
    setIsLoading(false);
  };
  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interview</h2>
      {isLoading ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="border p-4 rounded-md animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
        <div className="h-32 bg-gray-200 rounded" />
      </div>
    ))}
  </div>) :
        (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {InterviewList&&InterviewList.map((interview,index)=>(
            <InterviewItemCard interview={interview} key={index}/>
        ))}
      </div>)}
    </div>
  );
};

export default InterviewList;
