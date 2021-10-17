import React, { useContext } from "react";
import { withTheme } from '@emotion/react';
import styled from "@emotion/styled";
import { P } from "./Typography";
import { Theme } from "../theme";
import { TodoContext } from "../flux/Contexts/Todo"

const Container = styled.section<{ theme: Theme }>`
  height: 60px;
  max-width: 540px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 5px 5px;
  background: ${({ theme }) => theme.backgroundList};
  box-shadow: ${({ theme }) => theme.backgroundBoxList};
`;


const Button = styled.button<{ isActive: boolean, theme: Theme }>`
  color: ${({ isActive, theme }) => isActive ? theme.line.button.active : theme.line.button.noActive};
  background: transparent;
  border: 0px;
  font-weight: 400;
  font-size: 14px;
  line-heigh:14px;
  font-weight: 700;
  letter-spacing: -0.194444px;

  &:hover {
    color: ${({ theme }) => theme.line.button.hover};
  }
`;

const Mobile = styled.section<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  padding: 16px 0px;
  background: ${({ theme }) => theme.backgroundList};
  box-shadow: ${({ theme }) => theme.backgroundBoxList};
  border-radius: 5px;
  margin: 16px 0px;

  @media (min-width: 769px) {
    display: none;
  }
`
const Desktop = styled.section`
display: none;
@media (min-width: 769px) {
    display: inline;
  }`

const Footer = (props: { theme: Theme }) => {
  const { list, filter, dispatch } = useContext(TodoContext);


  const filterContent = () => <P theme={props.theme}>
    <Button theme={props.theme} isActive={filter === "all"} onClick={() => dispatch({ type: "ALL" })}>All</Button>
    <Button theme={props.theme} isActive={filter === "active"} onClick={() => dispatch({ type: "ACTIVE" })}>Active</Button>
    <Button theme={props.theme} isActive={filter === "completed"} onClick={() => dispatch({ type: "COMPLETED" })}>Completed</Button>
  </P>

  return <> <Container theme={props.theme}>
    <P theme={props.theme}>{`${list.length} ${list.length > 1 ? "items" : "item"} left`}</P>
    <Desktop>{filterContent()}</Desktop>
    <P theme={props.theme}> <Button theme={props.theme} isActive={false} onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</Button></P>
  </Container>
    <Mobile theme={props.theme}>{filterContent()}</Mobile>
  </>
}

export default withTheme(Footer);