// src/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserTable from './UserTable';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  const addUser = async (user) => {
    const response = await axios.post(API_URL, user);
    setUsers([...users, response.data]);
  };

  const updateUser = async (user) => {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    setUsers(users.map((u) => (u.id === user.id ? response.data : u)));
    setEditingUser(null);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  const startEditUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container mx-auto p-4">
      <UserForm onSave={editingUser ? updateUser : addUser} editingUser={editingUser} />
      <UserTable users={users} onEdit={startEditUser} onDelete={deleteUser} />
    </div>
  );
}

export default UserList;
