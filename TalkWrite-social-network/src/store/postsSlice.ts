import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../types/singlePostType";

type PostsState = {
  posts: Post[];
};

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
      const addPost = action.payload;
      console.log('addpostfromSLICE', addPost);
      state.posts.posts.push(addPost);
    },
    toggleLike(state, action: PayloadAction<string>) {
      const postId = action.payload;
      console.log('postId', postId);
      const post = state.posts.posts.find(post => post.post_id === postId);
      if (post) {
        console.log('toggleLike working');
      }
    },
    deletePost(state, action: PayloadAction<string>) {
      const postId = action.payload;
      state.posts = state.posts.posts.filter(post => post.post_id !== postId);
    },
    likePost(state, action: PayloadAction<string>) {
      const id = action.payload;
      const currPost = state.posts.posts.find(post => post.post_id === id);
      if (!currPost) return;
      currPost.likes++;
      currPost.liked = true;
    },
    unlikePost(state, action: PayloadAction<string>) {
      const id = action.payload;
      const currPost = state.posts.posts.find(post => post.post_id === id);
      if (!currPost) return;
      currPost.likes--;
      currPost.liked = false;
    },
  },
});

export const { getPosts, toggleLike, addPost, deletePost, likePost, unlikePost } = postsSlice.actions;

export default postsSlice.reducer;


