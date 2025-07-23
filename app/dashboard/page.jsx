import React from "react";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import InterviewTypes from "./_components/InterviewTypes";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Hero />
      <InterviewTypes />
      <Features />
      <Footer />
    </div>
  );
};

export default Dashboard;
