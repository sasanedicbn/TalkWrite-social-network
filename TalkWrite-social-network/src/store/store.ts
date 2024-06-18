import { configureStore } from "@reduxjs/toolkit";
import {  setUser } from "./userSlice";

const store = configureStore({
    reducer:{
     user: setUser,
    }
})
export default store;