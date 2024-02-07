import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TTodo = {
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};
// hellow comment
// comment 2

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },

    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },

    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
