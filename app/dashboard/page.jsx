import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import Hero from "./_components/Hero";

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview/>
      </div>
      {/* previous interview questions */}
      <InterviewList/>
    </div>
  );
};

export default Dashboard;
