import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, Comment } from '../types/singlePostType';

type SinglePostState = {
  currentPost: Post;
};

const initialState: SinglePostState = {
  currentPost: {
    audio: null,
    post_id: '',
    text: '',
    comments: [],
    created_at: '',
    image: '',
    liked: false,
    likes: 0,
    user: {
      username: '',
      full_name: '',
      picture: '',
    },
    user_id: '',
  },
};

const singlePostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getSinglePost(state, action: PayloadAction<Post>) {
      console.log('Current Post:', state.currentPost);
      state.currentPost = {
        ...action.payload,
        comments: state.currentPost.comments,
      };
    },
    getComments(state, action: PayloadAction<Comment[]>) {
      console.log('Comments from Action Payload:', action.payload);
      console.log('Current Post Comments Before Update:', state.currentPost.comments);
      state.currentPost = {
        ...state.currentPost,
        comments: action.payload,
      };
      console.log('Current Post Comments After Update:', state.currentPost.comments);
    },
    setComment(state, action: PayloadAction<{ postId:string,comment: Comment }>) {
      const { comment } = action.payload;
      state.currentPost = {
        ...state.currentPost,
        comments: [...state.currentPost.comments, comment],
      };
    },
    deleteComment(state, action: PayloadAction<string>) {
      const commentId = action.payload;
      state.currentPost.comments = state.currentPost.comments.filter(comment => comment.comment_id !== commentId);
    },
  },
});

export const { getSinglePost, getComments, setComment, deleteComment } = singlePostSlice.actions;

export default singlePostSlice.reducer;
