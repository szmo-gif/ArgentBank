import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'http://localhost:3001/api/v1/user/';
const LOG_IN_URL = BASE_URL + 'login';
const PROFILE_URL = BASE_URL + 'profile';

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch(LOG_IN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        alert('Invalid email or password');
        console.log('Response is not OK:', response);
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const token = data.body.token;

      localStorage.setItem('token', token);

      if (rememberMe) {
        sessionStorage.setItem('token', token);
      }

      return data;

    } catch (error) {
      console.error('Error:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');

      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(PROFILE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile, status: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.body) {
        throw new Error('Invalid profile data');
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUserName = createAsyncThunk(
  'auth/editUserName',
  async (userName, { rejectWithValue }) => {
    try {
      const response = await fetch(PROFILE_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit user name');
      }

      const data = await response.json();

      return data.body.userName;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);