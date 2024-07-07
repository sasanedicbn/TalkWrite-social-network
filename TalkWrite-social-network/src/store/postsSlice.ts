import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../types/singlePostType";

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    toggleLike(state, action: PayloadAction<string>) {
      const postId = action.payload;
      const post = state.posts.find(post => post.post_id === postId);
      if (post) {
        console.log('toggleLike working');
      }
    },
    deletePost(state, action: PayloadAction<string>) {
      const postId = action.payload;
      state.posts = state.posts.filter(post => post.post_id !== postId);
    },
    likePost(state, action: PayloadAction<string>) {
      const postId = action.payload;
      const post = state.posts.find(post => post.post_id === postId);
      if (post) {
        post.likes++;
        post.liked = true;
      }
    },
    unlikePost(state, action: PayloadAction<string>) {
      const postId = action.payload;
      const post = state.posts.find(post => post.post_id === postId);
      if (post) {
        post.likes--;
        post.liked = false;
      }
    },
  },
});

export const { getPosts, toggleLike, addPost, deletePost, likePost, unlikePost } = postsSlice.actions;

export default postsSlice.reducer;
