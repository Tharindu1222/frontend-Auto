import React, { useState } from "react";
import "./UserTableStyles.css"; 

function UserTable({ users, setUsers }) {
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      Password: user.Password,
      Roll: user.Roll,
      phone: user.phone,
    });
  };

  const handleSave = (id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...formData } : user))
    );
    setEditingUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="user-table">
      <h3>Users</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Password</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={editingUser === user.id ? "editing-row" : ""}
            >
              <td>
                {editingUser === user.id ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td>
                {editingUser === user.id ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td>
                {editingUser === user.id ? (
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                ) : (
                  user.password
                )}
              </td>
              <td>
                {editingUser === user.id ? (
                  <input
                    type="text"
                    name="roll"
                    value={formData.roll}
                    onChange={handleChange}
                  />
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editingUser === user.id ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                ) : (
                  user.phoneNumber
                )}
              </td>
              <td>
                {editingUser === user.id ? (
                  <button
                    className="save-button"
                    onClick={() => handleSave(user.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
