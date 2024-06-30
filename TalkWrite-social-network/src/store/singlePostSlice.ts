import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPost: { comments: [] },
};

const singlePostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getSinglePost(state, action) {
      console.log('Current Post Comments:', state.currentPost);
      state.currentPost = action.payload;
    },
    getComments(state, action) {
      const comments = action.payload;
      console.log('Comments from Action Payload:', comments);
      console.log('Current Post Comments Before Update:', state.currentPost.comments);
      state.currentPost.comments = comments;
      console.log('Current Post Comments After Update:', state.currentPost.comments);
    },
    setComment(state, action) {
      const { comment } = action.payload;
      console.log('New Comment:', comment);
      state.currentPost.comments.push(comment);
    },
  },
});

export const { getSinglePost, getComments, setComment } = singlePostSlice.actions;

export default singlePostSlice.reducer;
