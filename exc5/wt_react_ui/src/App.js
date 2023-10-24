// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserForm from './components/userform';
import UserTable from './components/usertable';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  return (
    <div className="App">
      <h1>User Data Table</h1>
      <UserForm onSubmit={addUser} />
      <UserTable users={users} />
    </div>
  );
}

export default App;
