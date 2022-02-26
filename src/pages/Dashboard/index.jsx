import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { AddTec, Container, Content, DivHead, DivUser } from "./styles";

const Dashboard = () => {
  const [userName] = useState(
    JSON.parse(localStorage.getItem("@KZHub:user")).name
  );

  const [module] = useState(
    JSON.parse(localStorage.getItem("@KZHub:user")).course_module
  );

  const history = useHistory();

  return (
    <Container>
      <DivHead>
        <h1>Kenzie Hub</h1>
        <Button
          background={"#212529"}
          color={"#F8F9FA"}
          onClick={() => history.push("/")}
        >
          Sair
        </Button>
      </DivHead>
      <DivUser>
        <h2>Olá, {userName}</h2>
        <p>{module}</p>
      </DivUser>

      <AddTec>
        <h3>Tecnologias</h3>
        <Button background={"#212529"} color={"#FFFFFF"}>
          +
        </Button>
      </AddTec>
    </Container>
  );
};

export default Dashboard;
