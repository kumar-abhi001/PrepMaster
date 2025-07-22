import React from "react";
import Header from "../../components/Header"

function DashboardLayout({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
