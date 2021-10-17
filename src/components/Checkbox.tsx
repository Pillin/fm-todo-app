import React, { useEffect } from "react";
import { withTheme } from '@emotion/react';
import styled from "@emotion/styled";
import { Theme } from "../theme";

const Checkbox = styled.input<{
  checked: boolean, theme: Theme
}>`
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  appearance: none;
  margin: 0px 16px;
  &::before {
    position: absolute;
    content: ${({ checked }) => checked ? "url(/images/icon-check.svg)" : "url(``)"};
    background: ${({ checked, theme }) => checked ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : `linear-gradient(${theme.backgroundList}, ${theme.backgroundList}) padding-box, linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box;`};
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ checked, theme }) => !checked ? `1px solid ${theme.checkbox.border}` : `1px solid ${theme.checkbox.borderOut}`};
    border-radius: 50%;    
  }
  &:hover {

  }

`;

const CheckboxContainer = (props: { onChange: (elem: boolean) => void, checked: boolean, theme: Theme }) => {
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  return <Checkbox theme={props.theme} type="checkbox" checked={checked} onChange={() => {
    props.onChange(!checked);
    setChecked(!checked)
  }
  } />
}

export default withTheme(CheckboxContainer);