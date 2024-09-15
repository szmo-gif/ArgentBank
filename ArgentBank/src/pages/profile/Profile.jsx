import { useDispatch, useSelector } from 'react-redux';
import accountData from '../../compoment/account/account.json';
import Account from '../../compoment/account/Account';

import React, { useEffect, useState } from 'react';

import './Profile.css';
import { editUserName, getProfile } from '../../redux/action';

export default function Profile() {
  const dispatch = useDispatch(); 
  const token = useSelector((state) => state.auth.user.token);

  const user = useSelector((state) => state.auth.user); 
  const [editing, setEditing] = useState(false); 

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const edit = (e) => {
    e.preventDefault();
    setEditing(true); 
  };

  const cancel = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const save = async (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.userName.value;
    dispatch(editUserName(newUsername));
    setEditing(false);
  };

  return (
    <main className="bg-dark">

      {!editing ? (
      <header className="header">

        <h1>Welcome back { user.userName }</h1>

        <button onClick={edit}>Edit name</button>
      </header>
  ) : (
    <form className='edit-form' onSubmit={save}>
    <h1>Edit User info</h1>

    <fieldset>
      <label htmlFor="username">User name: </label>
      <input
        type="text"
        id="userName"
        defaultValue={user.userName}
        required />
    </fieldset>

    <fieldset>
      <label htmlFor="firstname">First Name: </label>
      <input
      type="text"
      id="fistName"
      defaultValue={user.firstName}
      disabled />
    </fieldset>

    <fieldset>
      <label htmlFor="lastname">Last Name: </label>
      <input
      type="text"
      id="lastName"
      defaultValue={user.lastName}
      disabled />
    </fieldset>

    <fieldset className='form-group'>
      <button type="submit" className='edit-button'>Save</button>
      <button type="button" className='edit-button' onClick={cancel}>Cancel</button>
    </fieldset>
  </form>
    
  )}
      <ul>
        {accountData.map((account) => (
          <li key={account.index}>
          <Account
            type={account.type}
            number={account.number}
            amount={account.amount}
            balance={account.balance}
          />
          </li>
        ))}
      </ul>
    </main>
  );
}
