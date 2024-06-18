
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts:[],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
   getPosts(state, action){
     state.posts = action.payload;
     console.log('ovaj',state.posts)
   },
  },
});

export const { getPosts } = postsSlice.actions;

export default postsSlice.reducer;
