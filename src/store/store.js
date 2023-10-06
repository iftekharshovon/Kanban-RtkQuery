import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/task/taskSlice.js";
import userSlice from "./feature/user/userSlice.js";

const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
    userSlice: userSlice,
  },
});

export default store;
