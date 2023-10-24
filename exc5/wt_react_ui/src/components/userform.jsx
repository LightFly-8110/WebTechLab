// src/components/UserForm.js
import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    className: '',
    age: '',
    hobbies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      className: '',
      age: '',
      hobbies: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Class:
        <input
          type="text"
          name="className"
          value={formData.className}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Hobbies:
        <input
          type="text"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
