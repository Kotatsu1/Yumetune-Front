import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: !!Cookies.get("authToken"),
  authToken: Cookies.get("authToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.isAuthenticated = true;
      state.authToken = action.payload;
      Cookies.set("authToken", action.payload);
    },
    clearAuthToken: (state) => {
      state.isAuthenticated = false;
      state.authToken = null;
      Cookies.remove("authToken");
    },
  },
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;

export default authSlice.reducer;
