import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
