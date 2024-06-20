
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
   toggleLike(state, action){
    const postId = action.payload
    const post = state.posts.find(post => post.post_id === postId); // Promenjeno ovde

    console.log('sasa', post)
   }
  },
});

export const { getPosts, toggleLike} = postsSlice.actions;

export default postsSlice.reducer;
