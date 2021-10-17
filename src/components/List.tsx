import { useContext } from "react";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Line from "./Line";
import { TodoContext } from "../flux/Contexts/Todo";


const Container = styled.section`
  background: #FFFFFF;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  max-width: 540px;
  width: 100%;
  transition: height 3s cubic-bezier(0, 0, 0.2, 1);
`;

const List = () => {
  const { list } = useContext(TodoContext);
  console.log({ list });
  return <Container>
    {list.map((elem, index) => <Line {...elem} key={`${elem.id}-${elem.completed}`} />)}
    <Footer />
  </Container>
}

export default List;