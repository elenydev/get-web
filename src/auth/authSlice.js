import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    synced: false,
    user: null
  },
  reducers: {
    login: (state, action) =>{
        state.synced = true
        state.user= action.payload
    },
    logout: (state, action) =>{
        state.user = null
    },
  }
});

export const { login, logout, handLogin } = authSlice.actions;

export const selectCurrentUser = state => state.auth.user;

export default authSlice.reducer;
