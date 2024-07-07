import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  username: string;
}

type UserState = {
  setUser: User | null;
}

const initialState: UserState = {
  setUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.setUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
