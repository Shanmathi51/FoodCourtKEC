import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      const { message, user } = response.data;

      if (message === 'success') {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        navigate(user.role === 'admin' ? '/app' : '/app');
      } else {
        toast.error(message || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className='log-bg'>
      <div className='login-container'>
        <div className='login-form'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='email'>
                <strong>Email</strong>
              </label>
              <input
                type='email'
                placeholder='Enter Email'
                autoComplete='on'
                name='email'
                className='inputbox'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>
                <strong>Password</strong>
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                autoComplete='on'
                name='password'
                className='inputbox'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type='submit' className='btn btn-success m'>
              Login
            </button>
          </form>
          <p className='links'>
            Don't Have an account?{' '}
            <Link to='/register'>
              Register
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
