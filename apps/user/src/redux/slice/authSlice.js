import { createSlice } from "@reduxjs/toolkit";

import {
  checkAuth,
  logoutUser,
} from "../../machine/authentication/UserAuthentication";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.loading = false;
      })

      // ✅ Logout User
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
