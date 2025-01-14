import React, { useState } from "react";
import { Bell, User } from "react-feather";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">Employee Dashboard</h1>
      </div>
      <div className="navbar-right">
        {/* Notification Bell */}
        <div className="icon notification-icon" onClick={toggleNotificationDropdown}>
          <Bell />
          {isNotificationOpen && (
            <div className="dropdown-menu notification-dropdown">
              <p>No notifications as of this moment</p>
            </div>
          )}
        </div>

        {/* User Icon */}
        <div className="icon user-icon" onClick={toggleUserDropdown}>
          <User />
          {isUserDropdownOpen && (
            <div className="dropdown-menu user-dropdown">
              <ul>
                <li>Profile</li>
                <li>Account</li>
                <li>Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
