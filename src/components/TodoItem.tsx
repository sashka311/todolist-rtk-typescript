import React, { FC } from "react";
import { ITodo, ITodos } from "../types/todo";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { removeTodo } from "../store/reducers/todoReducer";
import {
  BsCircle,
  BsFillPlusCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useActions } from "../hooks/useActions";

interface IStyledProps {
  end?: boolean;
  completed?: boolean;
}

const Wrapper = styled.div<IStyledProps>`
  display: flex;
  width: 100%;
  border: 1px solid black;
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
  user-select: none;
  opacity: ${(props) => (props.completed ? 0.5 : 1)};

  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.36);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.36);
  }
`;

const Title = styled.div<IStyledProps>`
  padding: 0 10px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
`;

const WrapperSvg = styled.div<IStyledProps>`
  height: 16px;
  width: 16px;
  margin-left: ${(props) => (props.end ? "auto" : "")};
  cursor: pointer;
`;

const TodoItem: FC<ITodo> = (todo) => {
  const { removeTodo, checkTodo } = useActions();

  const handleRemoveTodo = () => {
    console.log("remove");
    removeTodo(todo);
  };

  const handleCheckTodo = () => {
    console.log("check");
    checkTodo(todo);
  };
  return (
    <Wrapper completed={todo.isCompleted}>
      <WrapperSvg onClick={handleCheckTodo}>
        {todo.isChecked ? <BsCheckCircleFill /> : <BsCircle />}
      </WrapperSvg>
      <Title completed={todo.isCompleted}>{todo.title}</Title>
      <WrapperSvg end>
        <AiFillCloseCircle onClick={handleRemoveTodo} />
      </WrapperSvg>
    </Wrapper>
  );
};

export default TodoItem;
