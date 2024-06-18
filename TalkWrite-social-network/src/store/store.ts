import { configureStore } from "@reduxjs/toolkit";
import {  setUser } from "./userSlice";
import postsSlice from "./postsSlice";

const store = configureStore({
    reducer:{
     user: setUser,
     posts:postsSlice,
    }
})
export default store;