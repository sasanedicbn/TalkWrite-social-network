import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPost: { comments: [] },
};

const singlePostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getSinglePost(state, action) {
      console.log('Current Post:', state.currentPost);
      state.currentPost = {
        ...action.payload,
        comments: state.currentPost.comments,
      };
    },
    getComments(state, action) {
      console.log('Comments from Action Payload:', action.payload);
      console.log('Current Post Comments Before Update:', state.currentPost.comments);
      state.currentPost = {
        ...state.currentPost,
        comments: action.payload,
      };
      console.log('Current Post Comments After Update:', state.currentPost.comments);
    },
    setComment(state, action) {
      const { comment } = action.payload;
      console.log('New Comment:', comment);
    //   state.currentPost.comments.push(comment);
     state.currentPost = {
        ...state.currentPost,
        comments: [...state.currentPost.comments, comment],
      };
    },
  },
});

export const { getSinglePost, getComments, setComment } = singlePostSlice.actions;

export default singlePostSlice.reducer;
