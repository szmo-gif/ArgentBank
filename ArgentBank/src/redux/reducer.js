import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getProfile, editUserName } from './action';

const initialState = {
  isConnected: false,
  user: {
    firstName: '',
    lastName: '',
    userName: '',
  },
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isConnected = true;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isConnected = false;
        state.token = null;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editUserName.fulfilled, (state, action) => {
        state.user.userName = action.payload;
        state.error = null;
      })
      .addCase(editUserName.rejected, (state, action) => {
        state.error = action.payload;
      })
  },
});

export default authSlice.reducer;