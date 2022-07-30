import React, { FC } from "react";
import TodoItem from "./TodoItem";
import { ITodo, ITodos } from "../types/todo";
import { useActions } from "../hooks/useActions";
import { Button, styled } from "@mui/material";
import { getFilter } from "../helperFunctions/getFilter";
import { FilterTypes } from "../types/filter";

interface TodoListProps {
  todo: ITodo[];
  filter: string;
}

const StyledButton = styled(Button)`
  border: 1px solid black;
  color: black;
  margin: 10px auto;
  padding: 5px;
`;

const TodoList: FC<TodoListProps> = ({ todo, filter }) => {
  const { removeCompletedTodos } = useActions();
  console.log(filter);

  return (
    <div>
      {filter === FilterTypes.Removed && (
        <StyledButton onClick={() => removeCompletedTodos(todo)}>
          Remove All
        </StyledButton>
      )}
      {todo?.map(
        (elem, index) =>
          getFilter(elem, filter) && (
            <TodoItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              isChecked={elem.isChecked}
              isCompleted={elem.isCompleted}
            />
          )
      )}
    </div>
  );
};

export default TodoList;
