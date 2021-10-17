import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { withTheme } from '@emotion/react';
import Checkbox from "./Checkbox";
import { TodoContext } from "../flux/Contexts/Todo";
import { Theme } from "../theme";

const Container = styled.section<{ theme: Theme }>`
  width: 100%;
  max-width: 540px;
  height: 64px;
  min-height: 64px;
  background: ${({ theme }) => theme.backgroundList};
  box-shadow: ${({ theme }) => theme.backgroundBoxList};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0px;
`;

const Input = styled.input<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  border: 0px;
  background: transparent;
  font-weight: 400;
  font-size: 18px;
  outline: transparent;
  line-height: 0.25px;
  caret-color: #3A7CFD;
  color: ${({ theme }) => theme.line.input.color};

  &:placeholder {
    color: ${({ theme }) => theme.line.input.placeholder};
  }
`;


const Header = (props: { theme: Theme }) => {
  const [sentence, setSentence] = useState("");
  const [checked, setChecked] = useState(false);
  const { dispatch } = useContext(TodoContext);
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      dispatch({ type: "ADD", value: { name: sentence, completed: checked } });
      setSentence("");
      setChecked(false);
    }
  }

  return <Container theme={props.theme}>
    <Checkbox onChange={(isChecked: boolean) => { return setChecked(isChecked); }} checked={checked} />
    <Input
      theme={props.theme}
      placeholder="Create a new todo"
      value={sentence}
      onChange={e => {
        setSentence(e.target.value);
      }}
      onKeyDown={handleKeyDown} />
  </Container>
};

export default withTheme(Header);