import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "./hooks/useAppSelector";
import { useActions } from "./hooks/useActions";
import { ITodo } from "./types/todo";
import Header from "./components/UI/Menu";
import TodoList from "./components/TodoList";
import { FilterTypes } from "./types/filter";

const Wrapper = styled.div`
  margin: 20px auto;

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
  height: 31px;

  &:focus {
    outline: none;
    border: 1px solid #262626;
  }
`;

const App = () => {
  const { todo } = useAppSelector((state) => state.todos);
  const { addTodo } = useActions();
  const [inputValue, setInputValue] = useState("");

  const [selectedIndexMenu, setSelectedIndexMenu] = React.useState(0);
  const menuOptions = [
    FilterTypes.Upcoming,
    FilterTypes.Checked,
    FilterTypes.Removed,
  ];

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputValue || e.key !== "Enter") return;
    const newTodo: ITodo = {
      id: Date.now(),
      title: inputValue,
      isCompleted: false,
      isChecked: false,
    };
    addTodo(newTodo);
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <Wrapper>
      <Header
        setSelectedIndexMenu={setSelectedIndexMenu}
        selectedIndexMenu={selectedIndexMenu}
        menuOptions={menuOptions}
      />
      <TodoList filter={menuOptions[selectedIndexMenu]} todo={todo} />
      <Input
        placeholder={"Add new ToDo"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        onKeyDown={(e) => handleAddTodo(e)}
      />
    </Wrapper>
  );
};

export default App;
