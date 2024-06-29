import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
    addPost(state, action) {
      const addPost = action.payload;
      console.log('addpostfromSLICE', addPost);
      if(addPost){
        state.posts.posts.push(addPost)}
    },
    toggleLike(state, action) {
      const postId = action.payload;
      console.log('postId', postId);
      const post = state.posts.find(post => post.post_id === postId);
      if (post) {
        console.log('toggleLike working');
      }
    },
  
    deletePost(state, action) {
      const postId = action.payload;

      state.posts = state.posts.posts.filter(post => post.post_id !== postId);
    },
   
  },
});

export const { getPosts, toggleLike,addPost,deletePost, } = postsSlice.actions;

export default postsSlice.reducer;
