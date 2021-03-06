import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Theme } from "../theme";

export const P = styled(motion.p)<{
  margin?: string;
  theme: Theme;
}>`
  color: ${({ theme }) => theme.typography.p.color};
  margin: ${({ margin }) => margin || "0px"};
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;

export const H1 = styled(motion.h1)`
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 300;
  margin: 0px;
  font-size: 1.4rem;
  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;
export const H2 = styled.h2`
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 300;
  margin: 0px 0px;
  font-size: 2rem;
`;

export const H3 = styled.h3`
  color: hsla(0, 0%, 100%, 0.75);
  font-size: 0.8em;
  font-weight: 500;
  @media (min-width: 769px) {
    font-size: 1em;
  }
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
