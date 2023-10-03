import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/task/taskSlice";

const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
  },
});

export default store;
