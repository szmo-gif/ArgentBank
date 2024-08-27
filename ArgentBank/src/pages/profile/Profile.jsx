import { useSelector } from 'react-redux';
import Account from '../../compoment/account/Account';
import accountData from '../../compoment/account/account.json';

export default function Profile() {
  const user = useSelector((state) => state.user);
  console.log('User object:', user);

  return (
    <main>
      <h1>Welcome back {user ? user.userName : 'User'}</h1>
      <button>edit name</button>

      <section className="account-section">
      {accountData.map((account, index) => (
        <div key={index} className="account-item">
          <h3>{account.type} ({account.number})</h3>
          <p className="account-amount">{account.amount}</p>
          <p className="account-balance">{account.balance}</p>
        </div>
      ))}
    </section>

    </main>
  );
}
