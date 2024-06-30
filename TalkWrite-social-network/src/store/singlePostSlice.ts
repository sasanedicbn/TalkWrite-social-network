
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPost:{   comments: []},

};

const singlePostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
   getSinglePost(state, action){
    console.log('state.currentPost',state.currentPost)
     state.currentPost = action.payload;
   },
   getComments(state, action) {
    console.log(state.currentPost.comments, 'iz sinlgeposta su komentari')
    state.currentPost.comments = action.payload;
  },
  setComment(state, action) {
    const { postId, comment } = action.payload;
    // const post = state.posts.find(post => post.post_id === postId);
    // if (post) {
    //   post.comments.push(comment);
    // }
    console.log(postId)
    state.currentPost.push(comment)
  },
  deleteComment(state, action) {
    const commentId = action.payload;
    state.comments = state.comments.filter(comment => comment.comment_id !== commentId);
  },
  },
});

export const { getSinglePost, getComments,setComment, deleteComment } = singlePostSlice.actions;

export default singlePostSlice.reducer;
// trebam kreirati current singleslice koji je aktivan kada se otvori tab i tu za njeogve komentare da doadm ove komentare
//sve to valjda treba tamo u btns nesto se zobe postBtns