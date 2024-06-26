import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  singlePost: {},
  comments: []
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
      console.log('posts', state.posts);
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
    getSinglePost(state, action) {
      state.singlePost = action.payload;
    },
    getComments(state, action) {
      state.comments = action.payload;
      console.log('comments', state.comments);
    },
    setComment(state, action) {
      const { postId, comment } = action.payload;
      const post = state.posts.find(post => post.post_id === postId);
      if (post) {
        post.comments.push(comment);
      }
    }
  },
});

export const { getPosts, toggleLike, getSinglePost, getComments, setComment, addPost } = postsSlice.actions;

export default postsSlice.reducer;
