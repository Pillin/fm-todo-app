import React, { useContext } from "react";
import styled from "@emotion/styled";
import { withTheme } from '@emotion/react'
import { ThemeContext } from "../flux/Contexts/Theme"
import { Theme } from "../theme";
import { IMG } from "./Image";

const Container = styled.section < { theme: Theme }> `
  position: absolute;
  z-index: 2;
  background: ${({ theme }) => theme.backgroundColor};
  height: 100%;
`;

const IMGStyle = {
  width: "100vw",
  display: "block",
  aspectRatio: "1440 / 300"
};

const Background = (props: { theme: Theme }) => {
  const { background } = useContext(ThemeContext)
  return <Container theme={props.theme}>
    <IMG {...background} alt="" style={IMGStyle} />
  </Container>
}

export default withTheme(Background);