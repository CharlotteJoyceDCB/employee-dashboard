import React, { useState } from 'react';

const AddEmployee = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

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
    }
  };

  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter employee name"
            required
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter employee position"
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter employee address"
            required
          />
        </div>
        <div>
          <label>Birthdate</label>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Enter employee birthdate"
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter employee age"
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;