
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts:[],
  singlePost:{},
  comments:[]
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
   },
   getSinglePost(state,action){
    state.singlePost = action.payload;
   },
   getComments(state, action) {
    state.comments = action.payload
    console.log('comments', state.comments)
   }
   
  },
});

export const { getPosts, toggleLike, getSinglePost, getComments} = postsSlice.actions;

export default postsSlice.reducer;
