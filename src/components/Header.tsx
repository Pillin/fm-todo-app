import React, { useContext } from "react";
import styled from "@emotion/styled";
import { H1 } from "./Typography";
import { ThemeContext } from "../flux/Contexts/Theme";
import { Theme } from '../theme';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 0px;
`;
const Button = styled.button<{ theme?: Theme }>`
  background-color: transparent;
  border: 0px;
`;

const Header = () => {
  const { dispatch, name, logo } = useContext(ThemeContext);
  return <Container>
    <H1>TODO</H1>
    <Button onClick={() => dispatch({ type: name })}>
      <img src={logo} alt="change theme logo" />
    </Button>
  </Container>
}

export default Header;