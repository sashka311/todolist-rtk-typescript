import React from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const App = () => {
  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  );
};

export default App;
