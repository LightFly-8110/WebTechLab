import React from 'react';
import './usertable.css';
function UserTable({ users }) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Age</th>
          <th>Hobbies</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} className="user-row">
            <td>{user.name}</td>
            <td>{user.className}</td>
            <td>{user.age}</td>
            <td>{user.hobbies}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable