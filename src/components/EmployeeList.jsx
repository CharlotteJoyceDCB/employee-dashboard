import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
