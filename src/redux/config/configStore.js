import { configureStore } from "@reduxjs/toolkit";
import commentPost from "../modules/commentSlice";

export const store = configureStore({
  reducer: { commentPost },
});
