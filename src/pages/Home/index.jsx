import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = ({ authenticated }) => {
  const history = useHistory();

  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Container>
      <Content>
        <h1>KENZIE HUB</h1>

        <div>
          <Button
            onClick={() => history.push("/register")}
            background={"#868E96"}
            color={"#F8F9FA"}
          >
            Cadastre-se
          </Button>
          <Button
            onClick={() => history.push("/login")}
            background={"#FF577F"}
            color={"#FFFFFF"}
          >
            Login
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
