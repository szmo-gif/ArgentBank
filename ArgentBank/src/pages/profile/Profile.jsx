import { useSelector } from 'react-redux';
import accountData from '../../compoment/account/account.json';
import Account from '../../compoment/account/Account';
import EditName from '../../compoment/editName/EditName';

import React, { useState } from 'react';

import './Profile.css';

export default function Profile() {
  const user = useSelector((state) => state.user);
  console.log('User object:', user);

  const [editName, setEditName] = useState(false);

  const handleEditName = () => {
    setEditName(!editName);
  };


  return (
    <main className="bg-dark">
      <div className="header">
        <h1>Welcome back {user ? user.userName : 'User'}</h1>
        <button className='edit-button' onClick={handleEditName}>Edit name</button>
        {editName && <EditName />}
      </div>
        {accountData.map((account) => (
          <Account
          key={account.index}
          type={account.type}
          number={account.number}
          amount={account.amount}
          balance={account.balance}
          />
        ))}
    </main>
  );
}
