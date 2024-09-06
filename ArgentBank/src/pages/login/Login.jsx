import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Login.css';
import { logIn } from '../../redux/action';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Veuillez remplir tous les champs');
      return;
    } 

    try {
      dispatch(logIn({ email, password, rememberMe }));
      setTimeout(() => {
        navigate('/profile');
      }, 500)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className='fa-user-circle sign-in-icon' />

        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <fieldset className="input-wrapper">
            <label htmlFor="username">email</label>
            <input 
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </fieldset>

          <fieldset className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </fieldset>

          <fieldset className="input-remember">
            <input type="checkbox"
            id='remember-me'
            onChange={(e) => setRememberMe(e.target.checked)}/>
            <label htmlFor="remember-me">Remember me</label>
          </fieldset>

          <button>Sign In</button>
        </form>
      </section>
    </main>
  )
}