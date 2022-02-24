import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content, FormContent, DivNoCad } from "./styles";

const Login = () => {
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h2>Login</h2>
        <FormContent>
          <Input placeholder="Seu email" label={"Email"} name="email" />
          <Input placeholder="Sua senha" label={"Senha"} name="password" />
          <Button background={"#FF577F"} color={"#FFFFFF"}>
            Entrar
          </Button>
        </FormContent>
        <DivNoCad>
          <span>Ainda não possui uma conta?</span>
          <Button background={"#868E96"} color={"#F8F9FA"}>
            Cadastre-se
          </Button>
        </DivNoCad>
      </Content>
    </Container>
  );
};

export default Login;
