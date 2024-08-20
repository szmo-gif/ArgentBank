import argentBankLogo from '../../assets/image/argentBankLogo.png';
import { Link } from 'react-router-dom';

import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={argentBankLogo} alt="Argent Bank Logo" />
      </Link>

      <Link to="/Profile" className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} className='fa-user-circle'/>
        <span>Sign In</span>
      </Link>

    </header>
  );
}

export default Header;
