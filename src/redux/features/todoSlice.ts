import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TTodo = {
  title: string;
  description: string;
  isCompleted?: boolean;
};
// hello
type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
