import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    clearAuthenticated(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { setAuthenticated, clearAuthenticated } = authSlice.actions;

export default authSlice.reducer;
