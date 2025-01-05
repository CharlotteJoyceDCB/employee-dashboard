import React, { useState } from 'react';

const EditEmployee = ({ employee, onUpdate, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [position, setPosition] = useState(employee.position);
  const [address, setAddress] = useState(employee.address);
  const [birthdate, setBirthdate] = useState(employee.birthdate);
  const [age, setAge] = useState(employee.age);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && position.trim() && address.trim() && birthdate.trim() && age) {
      onUpdate({ ...employee, name, position, address, birthdate, age });
    }
  };

  return (
    <div className="edit-employee">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Birthdate</label>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;