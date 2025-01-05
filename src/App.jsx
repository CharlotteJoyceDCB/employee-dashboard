import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1,
      name: 'John Doe',
      position: 'Software Engineer'
    },
    { id: 2,
      name: 'Juan Dela Cruz',
      position: 'Backend Developer'
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
