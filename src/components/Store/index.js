import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: true };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = false;
    },
    logout(state) {
      state.isAuthenticated = true;
    }
  }
});

const store = configureStore({
  reducer: { auth: authSlice.reducer }
});

export const authActions = authSlice.actions;
export default store;
