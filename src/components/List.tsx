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
height: 400px;
`;

const List = () => {
  const { list } = useContext(TodoContext);
  console.log({ list })
  return <Container>
    {list.map((elem, index) => <Line {...elem} />)}
    <Footer />
  </Container>
}

export default List;