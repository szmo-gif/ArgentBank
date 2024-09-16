import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'http://localhost:3001/api/v1/user/';
const LOG_IN_URL = BASE_URL + 'login';
const PROFILE_URL = BASE_URL + 'profile';

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      console.log(email, password, rememberMe);
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

      return token;

    } catch (error) {
      console.error('Error:', error);

      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {

      return null;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      const response = await fetch(PROFILE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
  'auth/updateUsername',
  async (userName, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      const response = await fetch(PROFILE_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user name');
      }

      const data = await response.json();

      return data.body.userName;

    } catch (error) {
      console.error('EDIT Error:', error);
      return rejectWithValue(error.message);
    }
  }
);