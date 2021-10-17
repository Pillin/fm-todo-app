import React, { useContext } from "react";
import styled from "@emotion/styled";
import { P } from "./Typography";
import { TodoContext } from "../flux/Contexts/Todo"

const Container = styled.section`
  height: 60px;
  max-width: 540px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


const Button = styled.button<{ isActive: boolean }>`
  color: ${({ isActive }) => isActive ? "#3A7CFD" : "#9495A5"};
  background: transparent;
  border: 0px;
  font-weight: 400;
  font-size: 14px;
  line-heigh:14px;
  font-weight: 700;
  letter-spacing: -0.194444px;

  &:hover {
    color: #494C6B;
  }
`;

const Footer = () => {
  const { list, filter, dispatch } = useContext(TodoContext);
  return <Container>
    <P>{`${list.length} ${list.length > 1 ? "items" : "item"} left`}</P>
    <P>
      <Button isActive={filter === "all"} onClick={() => dispatch({ type: "ALL" })}>All</Button>
      <Button isActive={filter === "active"} onClick={() => dispatch({ type: "ACTIVE" })}>Active</Button>
      <Button isActive={filter === "completed"} onClick={() => dispatch({ type: "COMPLETED" })}>Completed</Button>
    </P>
    <P> <Button isActive={false} onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</Button></P>
  </Container>
}

export default Footer;