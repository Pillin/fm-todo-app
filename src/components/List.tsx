import { useContext } from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import Line from "./Line";
import { Theme } from "../theme";
import { TodoContext } from "../flux/Contexts/Todo";

const Container = styled(motion.section)<{ theme: Theme }>`
  background: ${({ theme }) => theme.backgroundList};
  box-shadow: ${({ theme }) => theme.backgroundBoxList};
  border-radius: 5px 5px 0px 0px;
  max-width: 540px;
  width: 100%;
  transition: height 3s cubic-bezier(0, 0, 0.2, 1);
`;
const LineVariants = {
  checked: {},
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.5
    }
  },
  transition: {
    duration: 1
  }
};
const List = (props: { theme: Theme }) => {
  const { list } = useContext(TodoContext);

  return (
    <Container theme={props.theme}>
      <AnimatePresence>
        {list.map((elem, index) => (
          <Line
            variants={LineVariants}
            initial="visible"
            exit="hidden"
            {...elem}
            key={`${elem.id}-${elem.completed}`}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
};

export default withTheme(List);
