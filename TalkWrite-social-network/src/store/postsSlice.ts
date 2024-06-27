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
      state.posts = action.payload.posts;
      console.log('posts', state.posts);
    },
    addPost(state, action) {
      const addPost = action.payload;
      console.log('addpostfromSLICE', addPost);
      if (addPost) {
        state.posts.push(addPost);
      }
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
    },
    deletePost(state, action) {
      const postId = action.payload;
      state.posts = state.posts.filter(post => post.post_id !== postId);
    },
    deleteComment(state, action) {
      const commentId = action.payload;
      state.comments = state.comments.filter(comment => comment.comment_id !== commentId);
    }
  },
});

export const { getPosts, toggleLike, getSinglePost, getComments, setComment, addPost, deletePost, deleteComment } = postsSlice.actions;

export default postsSlice.reducer;
