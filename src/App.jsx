import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/Editemployee';
import DashboardSummary from "./components/DashboardSummary";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1,
      name: 'Juan Dela Cruz',
      position: 'Backend Developer',
      address: 'Quezon City, Manila',
      birthdate: '1998/09/23',
      age: '26'
    },
    { id: 2,
      name: 'John Doe',
      position: 'Software Engineer',
      address: 'Tondo, Manila',
      birthdate: '2000/01/01',
      age: '25'
    },
    { id: 3,
      name: 'Jane Smith',
      position: 'UI Designer',
      address: 'Cebu City, Cebu',
      birthdate: '1996/09/23',
      age: '30'
    },
  ]);

  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setFilteredEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setFilteredEmployees((prevEmployees) =>
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
    setFilteredEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter((employee) =>
        employee.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEmployees(filtered);
    }
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <DashboardSummary employees={employees} />
        <AddEmployee
          onAdd={handleAddEmployee}
          onSearch={handleSearch}
        />

        {editingEmployee ? (
          <EditEmployee
            employee={editingEmployee}
            onUpdate={handleUpdateEmployee}
            onCancel={handleCancelEdit}
          />
        ) : null}

        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />
      </div>
    </div>
  );
};

export default App;
