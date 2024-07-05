import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postsSlice from "./postsSlice";
import singlePostSlice from "./singlePostSlice";

const store = configureStore({
    reducer:{
     user: userSlice,
     posts:postsSlice,
     post: singlePostSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;

export default store;