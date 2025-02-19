import React, { useState } from 'react';

const AddEmployee = ({ onAdd, onSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  // const handleSearch = (e) => {
  //   const query = e.target.value.trim();
  //   if (query === "") {
  //     setFilteredEmployees(employees);
  //   } else {
  //     const filtered = employees.filter((employee) =>
  //       employee.id.toString().includes(query)
  //     );
  //     setFilteredEmployees(filtered);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && position.trim() && address.trim() && birthdate.trim() && age) {
      const newEmployee = {
        id: Date.now(),
        name,
        position,
        address,
        birthdate,
        age,
      };
      onAdd(newEmployee);

      setName('');
      setPosition('');
      setAddress('');
      setBirthdate('');
      setAge('');
      setIsModalOpen(false);
    }
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className="add-employee">
      <div className="header-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search employees by name..."
          onChange={handleSearchInputChange}
        />
        <button className="add-employee-btn" onClick={() => setIsModalOpen(true)}>
          + Add Employee
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ex. Juan Dela Cruz"
                  required
                />
              </div>
              <div>
                <label>Position</label>
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="ex. Software Engineer"
                  required
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="City, Province"
                  required
                />
              </div>
              <div>
                <label>Birthdate</label>
                <input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit">Add Employee</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;