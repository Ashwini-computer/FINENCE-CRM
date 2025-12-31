import { createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../customAxios/CustomAxios";

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const response = await customAxios.get("auth/check-auth");
      console.log(response.data.user);
      return response?.data?.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Logout failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await customAxios.post("auth/logout");
      return true;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Logout failed");
    }
  }
);
