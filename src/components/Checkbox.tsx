import React, { useEffect } from "react";
import styled from "@emotion/styled";

const Checkbox = styled.input<{ checked: boolean }>`
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  appearance: none;
  margin: 0px 16px;
  &::before {
    position: absolute;
    content: ${({ checked }) => checked ? "url(/images/icon-check.svg)" : "url(``)"};
    background: ${({ checked }) => checked ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : "linear-gradient(white, white) padding-box, linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box; "};
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ checked }) => !checked ? "1px solid #E3E4F1" : "1px solid white"};
    border-radius: 50%;    
  }
  &:hover {

  }

`;

const CheckboxContainer = (props: { onChange: (elem: boolean) => void, checked: boolean }) => {
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  return <Checkbox type="checkbox" checked={checked} onChange={() => {
    props.onChange(!checked);
    setChecked(!checked)
  }
  } />
}

export default CheckboxContainer;