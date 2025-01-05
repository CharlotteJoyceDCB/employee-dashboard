import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      address: 'Tondo, Manila',
      birthday: 'January 1, 2000',
      age: '25'
    },
    { id: 2,
      name: 'Juan Dela Cruz',
      position: 'Backend Developer',
      address: 'Quezon City, Manila',
      birthday: 'September 8, 1998',
      age: '26'
    },
  ]);

  return (
    <div className="app">
      <h1>Welcome to Employee Management Dashboard</h1>
      <EmployeeList employees={employees}/>
    </div>
  );
};

export default App;
