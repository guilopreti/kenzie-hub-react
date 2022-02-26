import { useEffect } from "react";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Button from "../../components/Button";
import CadTec from "../../components/CadTec";
import ChangeTec from "../../components/ChangeTec";
import Li from "../../components/Li";
import api from "../../services/api";
import { AddTec, Container, Content, DivHead, DivUser } from "./styles";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("@KZHub:user")) || ""
  );

  const [show, setShow] = useState(false);

  const [showChange, setShowChange] = useState(false);

  const [infoLi, setInfoLi] = useState({});

  const changeInfo = (title, status, id) => {
    setInfoLi({ title: title, status: status, id: id });
  };

  const [techs, setTechs] = useState([]);

  const catchTechs = () => {
    const id = JSON.parse(localStorage.getItem("@KZHub:user"));
    if (id) {
      api
        .get(`/users/${id.id}`)
        .then((resp) => setTechs(resp.data.techs))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => catchTechs(), [techs]);

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  const history = useHistory();

  if (!authenticated) {
    return <Redirect to={"/"} />;
  }

  return (
    <Container>
      <CadTec show={show} setShow={setShow} />
      <ChangeTec
        showChange={showChange}
        setShowChange={setShowChange}
        infoLi={infoLi}
      />
      <DivHead>
        <h1>Kenzie Hub</h1>
        <Button background={"#212529"} color={"#F8F9FA"} onClick={logout}>
          Sair
        </Button>
      </DivHead>
      <DivUser>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </DivUser>

      <AddTec>
        <h3>Tecnologias</h3>
        <Button
          background={"#212529"}
          color={"#FFFFFF"}
          onClick={() => setShow(true)}
        >
          +
        </Button>
      </AddTec>
      <Content>
        <ul>
          {techs.length > 0 &&
            techs.map(({ title, status, id }) => {
              return (
                <Li
                  key={id}
                  title={title}
                  status={status}
                  showChange={showChange}
                  setShowChange={setShowChange}
                  onClick={() => {
                    changeInfo(title, status, id);
                    setShowChange(true);
                  }}
                />
              );
            })}
        </ul>
      </Content>
    </Container>
  );
};

export default Dashboard;
