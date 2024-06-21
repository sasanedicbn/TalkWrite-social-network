
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
    console.log('ovdeeeeee',postId)
    const post = state.posts.posts.find(state => state.post_id === postId)
    if(post){
      console.log('radi')
    }

    console.log('sasa', post)
   }
  },
});

export const { getPosts, toggleLike} = postsSlice.actions;

export default postsSlice.reducer;
