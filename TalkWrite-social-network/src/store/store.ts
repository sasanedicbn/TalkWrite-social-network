import { configureStore } from "@reduxjs/toolkit";
import { getUser } from "./userSlice";

const store = configureStore({
    reducer:{
     user: getUser,
    }
})
export default store;