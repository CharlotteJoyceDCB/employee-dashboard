import React from "react";
import { Users, Home, Briefcase } from "react-feather";
import "../styles/DashboardSummary.css";

const DashboardSummary = ({ employees }) => {
    const totalEmployees = employees.length;
    const uniqueDepartments = new Set(employees.map((emp) => emp.position)).size;
    const uniquePositions = new Set(employees.map((emp) => emp.position)).size;

    const stats = [
      { 
        icon: <Users />, 
        label: "Total Employees", 
        count: totalEmployees
      },
      { 
        icon: <Home />, 
        label: "Departments", 
        count: uniqueDepartments
      },
      { 
        icon: <Briefcase />, 
        label: "Positions", 
        count: uniquePositions
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