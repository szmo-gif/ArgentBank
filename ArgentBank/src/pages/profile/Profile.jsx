import { useDispatch, useSelector } from 'react-redux';
import accountData from '../../compoment/account/account.json';
import Account from '../../compoment/account/Account';

import React, { useEffect, useState } from 'react';

import './Profile.css';
import { editUserName, getProfile } from '../../redux/action';

export default function Profile() {
  const dispatch = useDispatch(); // 

  const user = useSelector((state) => state.auth.user); // Selectionne "user" dans le reducer
  const [editing, setEditing] = useState(false); // État pour gérer l'affichage du formulaire

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const edit = (e) => {
    e.preventDefault();
    setEditing(true); // Mettre à jour l'état pour afficher le formulaire
  };

  const cancel = (e) => {
    e.preventDefault();
    setEditing(false); // Mettre à jour l'état pour revenir au header
  };

  const save = async (e) => {
    e.preventDefault();
    const newUserName = e.target.elements.userName.value;
    dispatch(editUserName(newUserName));
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
      <section>
        {accountData.map((account) => (
          <Account
            key={account.index}
            type={account.type}
            number={account.number}
            amount={account.amount}
            balance={account.balance}
          />
        ))}
      </section>
    </main>
  );
}
