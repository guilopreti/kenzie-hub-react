import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content, FormContent, DivNoCad } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Minímo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((resp) => {
        const { token, user } = resp.data;
        localStorage.setItem("@KZHub:token", JSON.stringify(token));
        localStorage.setItem("@KZHub:user", JSON.stringify(user));
        toast.success("Bem-Vindo!");
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Tente novamente"));
  };

  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Content>
        <h2>Login</h2>
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Seu email"
            label={"Email"}
            name="email"
            register={register}
            error={errors.email?.message}
            border
          />
          <Input
            placeholder="Sua senha"
            label={"Senha"}
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
            border
          />
          <Button background={"#FF577F"} color={"#FFFFFF"} type="submit">
            Entrar
          </Button>
        </FormContent>
        <DivNoCad>
          <span>Ainda não possui uma conta?</span>
          <Button
            background={"#868E96"}
            color={"#F8F9FA"}
            onClick={() => history.push("/register")}
          >
            Cadastre-se
          </Button>
        </DivNoCad>
      </Content>
    </Container>
  );
};

export default Login;
