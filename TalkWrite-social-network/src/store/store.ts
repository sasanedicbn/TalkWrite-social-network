import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postsSlice from "./postsSlice";
import singlePostSlice from "./singlePostSlice";
import SpinnerSlice from "./Globall/SpinnerSlice";

const store = configureStore({
    reducer:{
     user: userSlice,
     posts:postsSlice,
     post: singlePostSlice,
     spinner:SpinnerSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export default store;