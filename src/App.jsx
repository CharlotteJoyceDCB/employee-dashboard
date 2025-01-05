import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/Editemployee';

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      address: 'Tondo, Manila',
      birthdate: '2000/01/01',
      age: '25'
    },
    { id: 2,
      name: 'Juan Dela Cruz',
      position: 'Backend Developer',
      address: 'Quezon City, Manila',
      birthdate: '1998/09/23',
      age: '26'
    },
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  return (
    <div className="app">
      <h1>Employee Management Dashboard</h1>
      {editingEmployee ? (
        <EditEmployee
          employee={editingEmployee}
          onUpdate={handleUpdateEmployee}
          onCancel={handleCancelEdit}
        />
      ) : (
        <AddEmployee onAdd={handleAddEmployee} />
      )}
      <EmployeeList
        employees={employees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
};

export default App;
