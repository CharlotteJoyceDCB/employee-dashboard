import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Position: {employee.position}</p>
      <p>Address: {employee.address}</p>
      <p>Birthdate (yyyy/mm/dd): {employee.birthdate}</p>
      <p>Age: {employee.age}</p>
    </div>
  );
};

export default EmployeeCard;