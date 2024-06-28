
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSlice:null,
};

const singlePostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
   getSinglePost(state, action){
     state.currentSlice = action.payload;
   },
  },
});

export const { getSinglePost } = singlePostSlice.actions;

export default singlePostSlice.reducer;
