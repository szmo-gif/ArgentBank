import { useSelector } from 'react-redux';
import accountData from '../../compoment/account/account.json';
import Account from '../../compoment/account/Account';

import './Profile.css';

export default function Profile() {
  const user = useSelector((state) => state.user);
  console.log('User object:', user);

  return (
    <main className="bg-dark">
      <div className="header">
        <h1>Welcome back {user ? user.userName : 'User'}</h1>
        <button className='edit-button'>Edit name</button>
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
