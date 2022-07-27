import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import TodoItem from "./TodoItem";
import { addTodo } from "../store/reducers/todoReducer";
import { ITodo } from "../types/todo";

const Wrapper = styled.div`
  width: 300px;
  -webkit-box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.7);
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #989898;

  &:focus {
    outline: none;
    border: 1px solid #262626;
  }
`;

const TodoList = () => {
  const { todo } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (!inputValue) return;
    const newTodo: ITodo = {
      id: Date.now(),
      title: inputValue,
      isCompleted: false,
      isChecked: false,
    };
    dispatch(addTodo(newTodo));
    setInputValue("");
  };

  return (
    <Wrapper>
      <h1>TodoList</h1>
      {todo.map((todo, index) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isChecked={todo.isChecked}
          isCompleted={todo.isCompleted}
        />
      ))}
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button onClick={handleAddTodo}>ADD</button>
    </Wrapper>
  );
};

export default TodoList;
