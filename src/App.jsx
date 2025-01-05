import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

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

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <div className="app">
      <h1>Welcome to Employee Management Dashboard</h1>
      <EmployeeList employees={employees}/>
      <AddEmployee onAdd={handleAddEmployee} />
    </div>
  );
};

export default App;
