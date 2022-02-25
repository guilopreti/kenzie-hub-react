import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Content, FormContent, DivNoCad } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [module, setModule] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const changeMod = (value) => {
    if (value === "Primeiro módulo") {
      setModule("Primeiro módulo (Introdução ao Frontend)");
    } else if (value === "Segundo módulo") {
      setModule("Segundo módulo (Frontend Avançado)");
    } else if (value === "Terceiro módulo") {
      setModule("Terceiro módulo (Introdução ao Backend)");
    } else if (value === "Quarto módulo") {
      setModule("Quarto módulo (Backend Avançado)");
    }
  };

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
    const info = { ...data, course_module: module };
    console.log(info);
  };

  return (
    <Container>
      <div>
        <h1>Kenzie Hub</h1>
        <Button>Voltar</Button>
      </div>

      <Content>
        <h2>Crie sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Digite aqui seu nome"
            label={"Nome"}
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            placeholder="Digite aqui seu email"
            label={"Email"}
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            placeholder="Digite aqui sua senha"
            label={"Senha"}
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            placeholder="Confirme sua senha"
            label={"Confirmar Senha"}
            name="passwordConfirm"
            type="password"
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <select onChange={(evt) => changeMod(evt.target.value)}>
            <option>Primeiro módulo</option>
            <option>Segundo módulo</option>
            <option>Terceiro módulo</option>
            <option>Quarto módulo</option>
          </select>
          <Button background={"#59323F"} color={"#FFFFFF"} type="submit">
            Cadastrar
          </Button>
        </FormContent>
      </Content>
    </Container>
  );
};

export default Register;
