import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "mir", 
  email: "mir@gmail.com",
  userTask: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
