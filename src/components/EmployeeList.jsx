import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees , onEdit, onDelete}) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-item">
            <EmployeeCard employee={employee} />
            <div className="employee-actions">
                <button onClick={() => onEdit(employee)}>Edit</button>
                <button onClick={() => onDelete(employee.id)}>Delete</button>
            </div>
      </div>
      ))}
    </div>
  );
};

export default EmployeeList;
