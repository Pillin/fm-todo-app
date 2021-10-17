import React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import Input from "./Input";

const Container = styled.section`
  position: absolute;
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: height 3s linear;
  padding: 0px 24px;
`;

const Todo = () => {
  return <Container>
    <Header />
    <Input />
    <List />
    <Footer />
  </Container>
}

export default Todo;