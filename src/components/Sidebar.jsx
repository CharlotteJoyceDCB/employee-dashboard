import React from "react";
import { Clock, Briefcase, BarChart, Users, DollarSign, Clipboard, UserCheck, FileText, Calendar, Mail } from "react-feather";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <img src="https://static.vecteezy.com/system/resources/previews/024/344/087/original/business-woman-isolated-illustration-ai-generative-free-png.png" alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h4>Charlotte Joyce</h4>
          <p>Admin</p>
        </div>
      </div>

      {/* Account Section */}
      <div className="menu-section">
        <h5>Your Account</h5>
        <ul>
          <li>
            <Clock />
            Timer
          </li>
          <li>
            <Briefcase />
            Projects
          </li>
          <li>
            <BarChart />
            Reports
          </li>
        </ul>
      </div>

      {/* Company Section */}
      <div className="menu-section">
        <h5>Your Company</h5>
        <ul>
          <li>
            <Mail />
            Announcements
          </li>
          <li>
            <Users />
            Employees
          </li>
          <li>
            <DollarSign />
            Payroll
          </li>
          <li>
            <Clipboard />
            Applicant Tracking
          </li>
          <li>
            <FileText />
            Invoice
          </li>
          <li>
            <Calendar />
            Events
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;