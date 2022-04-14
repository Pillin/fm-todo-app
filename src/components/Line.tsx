import { useState, useContext } from "react";
import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { TodoContext } from "../flux/Contexts/Todo";
import Checkbox from "./Checkbox";
import { Theme } from "../theme";
import { P } from "./Typography";

const Line = styled(motion.section)<{ isCompleted: boolean; theme: Theme }>`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
  border: ${({ theme }) => `1px solid ${theme.line.border}`};
  border-width: 0px 0px 1px 0px;
  justify-content: flex-start;

  > P {
    color: ${({ isCompleted, theme }) =>
      isCompleted ? theme.line.p.color.noActive : theme.line.p.color.active};
    text-decoration: ${({ isCompleted }) =>
      isCompleted ? "line-through" : "none"};
    font-size: 18px;
  }
  &:hover {
    > button {
      display: inline;
    }
  }
`;

const Button = styled(motion.button)`
  display: none;
  background-color: transparent;
  border: 0px;
  position: absolute;
  right: 30px;
`;

const LineContainer = (props: {
  completed: boolean;
  name: string;
  id: number;
  theme: Theme;
  variants: any;
  exit: string;
  animate: string;
  initial: string;
}) => {
  const [checked, setChecked] = useState(props.completed);
  const { dispatch } = useContext(TodoContext);
  return (
    <Line
      animate={"visible"}
      variants={props.variants}
      exit={props.exit}
      initial={"visible"}
      layoutId={`line-${props.id}`}
      key={`line-${props.id}`}
      isCompleted={checked}
      theme={props.theme}
    >
      <Checkbox
        onChange={(isChecked: boolean) => {
          dispatch({
            type: "CHANGE_COMPLETED",
            value: { id: props.id, completed: isChecked, name: props.name }
          });
          return setChecked(isChecked);
        }}
        checked={checked}
      />
      <P theme={props.theme}>{props.name}</P>
      <Button
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          dispatch({ type: "DELETED", value: props.id });
        }}
      >
        <img src="/images/icon-cross.svg" alt="icon deleted" />
      </Button>
    </Line>
  );
};

export default withTheme(LineContainer);
