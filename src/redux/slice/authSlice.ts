import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {  userType } from "../../common/type/types";


const initialState: { currentUser: userType | null } = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<userType>) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const currentUser = (state: { auth: { currentUser: userType  } }) => state.auth.currentUser;

export default authSlice.reducer;
