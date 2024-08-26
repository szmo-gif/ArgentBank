import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../assets/reduxe/action';

import './Login.css';

export default function Login() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <main className="bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className='fa-user-circle sign-in-icon' />

        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="input-remember">
            <input type="checkbox" id='remember-me' />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit"className="sign-in-button" disabled={loading}>Sign In</button>
        </form>
      </section>
    </main>
  )
}