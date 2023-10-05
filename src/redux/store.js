import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/task/taskSlice";
import userSlice from "d:/iftekhar-practice/taskmaster-redux-acc/src/redux/feature/user/userSlice";

const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
    userSlice: userSlice,
  },
});

export default store;
