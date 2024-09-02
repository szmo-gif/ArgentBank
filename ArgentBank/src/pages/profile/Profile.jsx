import { useSelector } from 'react-redux';
import accountData from '../../compoment/account/account.json';
import Account from '../../compoment/account/Account';
import EditName from '../../compoment/editName/EditName';

import React, { useEffect, useState } from 'react';

import './Profile.css';

export default function Profile() {
  const user = useSelector((state) => state.user);
  console.log('User object:', user);

  const [editName, setEditName] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleEditName = () => {
    setEditName(!editName);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <main className="bg-dark">
      <header className="header">
        <h1>Welcome back {user ? user.userName : 'User'}</h1>
        <button className='edit-button' onClick={handleEditName}>Edit name</button>
        {editName &&
          <EditName
            firstName={userData.firstName}
            lastName={userData.lastName}
            userName={userData.userName}
          />}
      </header>
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
