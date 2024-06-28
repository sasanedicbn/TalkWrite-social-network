
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSlice:null,
};

const singlePostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
   getSinglePost(state, action){
     state.currentSlice = action.payload;
   },
  },
});

export const { getSinglePost } = singlePostSlice.actions;

export default singlePostSlice.reducer;
// trebam kreirati current singleslice koji je aktivan kada se otvori tab i tu za njeogve komentare da doadm ove komentare
//sve to valjda treba tamo u btns nesto se zobe postBtns