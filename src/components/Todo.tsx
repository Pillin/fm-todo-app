import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";

import List from "./List";
import Input from "./Input";

const Container = styled.section`
  position: absolute;
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Todo = () => {
  return <Container>
    <Header />
    <Input />
    <List />
  </Container>
}

export default Todo;