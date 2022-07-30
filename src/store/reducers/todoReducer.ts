import { createAction, createReducer, current } from "@reduxjs/toolkit";
import { ITodo, ITodos } from "../../types/todo";

export const addTodo = createAction<ITodo, "addTodo">("addTodo");
export const removeTodo = createAction<ITodo, "removeTodo">("removeTodo");
export const checkTodo = createAction<ITodo, "checkTodo">("checkTodo");
export const removeCompletedTodos = createAction<
  ITodo[],
  "removeCompletedTodos"
>("removeCompletedTodos");

const initialState: ITodos = {
  todo: JSON.parse(localStorage.getItem("todo") || "[]"),
};
export default createReducer(initialState, (builder) =>
  builder
    .addCase(addTodo, (state, action) => {
      state.todo.push(action.payload);
    })
    .addCase(removeTodo, (state, action) => {
      state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    })
    .addCase(checkTodo, (state, action) => {
      state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isChecked = !todo.isChecked;
        }
      });
    })
    .addCase(removeCompletedTodos, (state, action) => {
      console.log(current(state));

      state.todo = state.todo.filter((t) => !t.isCompleted);
      console.log(current(state));
    })
);
