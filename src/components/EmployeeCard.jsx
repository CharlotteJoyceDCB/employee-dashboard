import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Position: {employee.position}</p>
    </div>
  );
};

export default EmployeeCard;