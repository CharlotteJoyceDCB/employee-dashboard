import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees , onEdit}) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <div key={employee.id}>
            <EmployeeCard employee={employee} />
            <button onClick={() => onEdit(employee)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
