import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import InterviewTypes from "./_components/InterviewTypes";
import Footer from "./_components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <InterviewTypes />
      <Features />
      <Footer />
    </div>
  );
};

export default Dashboard;
