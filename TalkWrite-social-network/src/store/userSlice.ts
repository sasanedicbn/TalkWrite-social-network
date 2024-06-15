
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
     
    },
  },
});

export const { getUser } = counterSlice.actions;

export default userSlice.reducer;
