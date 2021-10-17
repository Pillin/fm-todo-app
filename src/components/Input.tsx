import React from "react";
import styled from "@emotion/styled";
import Checkbox from "./Checkbox";

const Container = styled.section`
  width: 100%;
  max-width: 540px;
  height: 64px;
  background: white;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  background: transparent;
  font-weight: 400;
  font-size: 18px;
  outline: transparent;
  line-height: 0.25px;
  caret-color: #3A7CFD;
  color: #393A4B;

  &:placeholder {
    color: #9495A5;
  }
`;


const Header = () => {

  return <Container>
    <Checkbox onChange={(isChecked: boolean) => { return; }} checked={false} />
    <Input placeholder="Create a new todo" />
  </Container>
}

export default Header;