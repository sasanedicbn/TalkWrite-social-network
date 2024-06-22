
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts:[],
  singlePost:{},
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
   },
   getSinglePost(state,action){
    state.singlePost = action.payload;
    console.log('[[[[[[[[[[[',state.singlePost)
   }
   
  },
});

export const { getPosts, toggleLike, getSinglePost} = postsSlice.actions;

export default postsSlice.reducer;
