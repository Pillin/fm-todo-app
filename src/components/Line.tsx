import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { TodoContext } from "../flux/Contexts/Todo"
import Checkbox from "./Checkbox";
import { P } from "./Typography";

const Line = styled.section<{ isCompleted: boolean }>`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
  border: 1px solid #E3E4F1;
  border-width: 0px 0px 1px 0px;
  justify-content: flex-start;

  > P {
    color: ${({ isCompleted }) => isCompleted ? "#D1D2DA" : "#494C6B"};
    text-decoration: ${({ isCompleted }) => isCompleted ? "line-through" : "none"};;
    font-size: 18px;
  }
  &:hover {
    > button {
      display: inline;
    }
  }
`;


const Button = styled.button`
  display: none;
  background-color: transparent;
  border: 0px;
  position: absolute;
  right: 10px;
`;


const LineContainer = (props: { completed: boolean, name: string, id: number }) => {
  const [checked, setChecked] = useState(props.completed);
  const { dispatch } = useContext(TodoContext);
  return <Line key={`line - ${props.id} `} isCompleted={checked}>
    <Checkbox onChange={(isChecked: boolean) => {
      return setChecked(isChecked);
    }} checked={checked} />
    <P>{props.name}</P>
    <Button onClick={() => { dispatch({ type: "DELETED", value: props.id }) }}>
      <img src="/images/icon-cross.svg" alt="icon deleted" />
    </Button>
  </Line>
}


export default LineContainer;