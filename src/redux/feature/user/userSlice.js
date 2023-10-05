import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [{ name: "mir", email: "mir@gmail.com" }],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
