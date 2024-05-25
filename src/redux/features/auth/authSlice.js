import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, logOut } = authSlice.actions;

export default authSlice.reducer;

export const CurrentToken = (state) => state.auth.token;
export const CurrentUser = (state) => state.auth.user;
