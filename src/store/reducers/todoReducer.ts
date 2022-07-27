import { createAction, createReducer } from "@reduxjs/toolkit";
import { ITodo } from "../../types/todo";

export const addTodo = createAction<ITodo, "addTodo">("addTodo");
export const removeTodo = createAction<ITodo, "removeTodo">("removeTodo");
export const checkTodo = createAction<ITodo, "checkTodo">("checkTodo");

interface ITodos {
  todo: ITodo[];
}

const initialState: ITodos = {
  todo: [
    { id: 1, title: "Title", isChecked: false, isCompleted: false },
    { id: 2, title: "Title2", isChecked: true, isCompleted: true },
  ],
};
export default createReducer(initialState, (builder) =>
  builder
    .addCase(addTodo, (state, action) => {
      state.todo.push(action.payload);
    })
    .addCase(removeTodo, (state, action) => {
      state.todo = state.todo.filter((t) => t.id !== action.payload.id);
    })
    .addCase(checkTodo, (state, action) => {})
);
