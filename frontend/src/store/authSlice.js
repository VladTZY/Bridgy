import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const res = await axios.post("http://localhost:4004/api/user/login", {
        email: email,
        password: password,
      });
      const data = jwtDecode(res.data.token);
      return { ...data, token: res.data.token };
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  id: "",
  username: "",
  role: "",
  jwt: "",
  institutionId: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.id = "";
      state.username = "";
      state.role = "";
      state.jwt = "";
      state.institutionId = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.role = action.payload.role;
        state.jwt = action.payload.token;
        state.institutionId = action.payload.institutionId;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.id = "";
        state.username = "";
        state.role = "";
        state.jwt = "";
        state.institutionId = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
