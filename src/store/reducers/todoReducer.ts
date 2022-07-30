import { createSlice, current } from "@reduxjs/toolkit";
import { ITodos } from "../../types/todo";

const initialState: ITodos = {
  todo: JSON.parse(localStorage.getItem("todo") || "[]"),
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo.push(action.payload);
    },
    removeTodo(state, action) {
      state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
    checkTodo(state, action) {
      state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isChecked = !todo.isChecked;
        }
      });
    },
    removeCompletedTodos(state, action) {
      console.log(current(state));
      state.todo = state.todo.filter((t) => !t.isCompleted);
    },
  },
});

export default todoSlice.reducer;
export const { removeCompletedTodos, removeTodo, addTodo, checkTodo } = todoSlice.actions;
