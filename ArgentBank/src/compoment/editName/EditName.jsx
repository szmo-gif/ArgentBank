import './editName.css'

import React, { useEffect, useState } from 'react';
export default function EditName({ userName, firstName, lastName }) {
  const [changeUserName, setChangeUserName] = useState(userName);

  useEffect(() => {
    setChangeUserName(userName);
  }, [userName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          userName: changeUserName,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user name');
      }

      const data = await response.json();
      console.log('User name updated successfully:', data);

    } catch (error) {
      console.error('Error updating user name:', error);

    }
  };

  return (
    <form className='edit-form' onSubmit={handleSubmit}>
      <h1>Edit User info</h1>

      <div>
        <label htmlFor="username">User name: </label>
        <input
          type="text"
          id="userName"
          value={changeUserName}
          onChange={(e) => setChangeUserName(e.target.value)} />
      </div>

      <div>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" id="fistName" value={firstName} readOnly />
      </div>

      <div>
        <label htmlFor="lastname">Last Name: </label>
        <input type="text" id="lastName" value={lastName} readOnly />
      </div>

      <div className='form-group'>
        <button type="submit" className='edit-button'>Save</button>
        <button type="submit" className='edit-button'>Cancel</button>
      </div>
    </form>
  )
}