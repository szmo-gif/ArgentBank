import argentBankLogo from '../../assets/image/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../assets/reduxe/action';

function Header() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <nav>
      <Link to="/">
        <img src={argentBankLogo} alt="Argent Bank Logo" />
      </Link>

      {isAuthenticated ? (
        <div className='main-nav'>
          <Link className="main-nav-item" to={'/profile'}>
            <FontAwesomeIcon icon={faUserCircle} className='fa-user-circle'/>
            <b>{user ? user.firstName : 'User'}</b>
          </Link>

          <Link to="/profile" className="main-nav-item" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className='fa-sign-out-alt'/>
            <b>Sign Out</b>
          </Link>
        </div>
      ) : (
        <Link to="/Login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} className='fa-user-circle'/>
          <b>Sign In</b>
        </Link>
      )}
    </nav>
  );
}

export default Header;
