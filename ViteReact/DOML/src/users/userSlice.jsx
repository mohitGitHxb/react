import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./userAPI";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const fetchAllUsersAsync = createAsyncThunk("users/fetchAllUsers", async () => {
  const response = await fetchAllUsers();
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser: (state) => {
      console.table(state.user);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsersAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAllUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});
export const { getUser } = userSlice.actions;
export const selectUsersInfo = (state) => state.users.user;
export default userSlice.reducer;
