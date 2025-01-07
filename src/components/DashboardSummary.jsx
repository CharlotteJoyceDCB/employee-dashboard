import React from "react";
import { Users, Home, Briefcase } from "react-feather";
import "../styles/DashboardSummary.css";

const DashboardSummary = () => {
    const stats = [
      { 
        icon: <Users />, 
        label: "Total Employees", 
        count: 3 
      },
      { 
        icon: <Home />, 
        label: "Departments", 
        count: 3 
      },
      { 
        icon: <Briefcase />, 
        label: "Positions", 
        count: 3 
      },
    ];

  return (
    <div className="dashboard-summary">
      {stats.map((stat, index) => (
        <div className="summary-card" key={index}>
        <div className="icon">{stat.icon}</div>
            <div className="details">
                <h4>{stat.label}</h4>
                <p>{stat.count}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSummary;