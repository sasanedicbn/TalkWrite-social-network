
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  setUser:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   setUser(state, action){
     state.setUser = action.payload;
     console.log(action.payload)
     console.log('izSLAJSA',state.setUser)
   },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
