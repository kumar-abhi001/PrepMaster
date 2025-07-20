import React from "react";
import { Header } from "./_components/Header";
import Hero from "./_components/Hero";
import InterviewTypes from "./_components/InterviewTypes"

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
    </div>
  );
}

export default DashboardLayout;
