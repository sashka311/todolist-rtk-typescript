import React, { FC } from "react";
import { ITodo } from "../types/todo";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { removeTodo } from "../store/reducers/todoReducer";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid black;
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.36);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.36);
  }
`;

const TodoItem: FC<ITodo> = ({ title, isChecked, isCompleted, id }) => {
  const { todo } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = () => {
    console.log("remove");
    dispatch(removeTodo({ title, isChecked, isCompleted, id }));
  };

  return <Wrapper onClick={handleRemoveTodo}>{title}</Wrapper>;
};

export default TodoItem;
