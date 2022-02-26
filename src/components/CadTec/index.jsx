import { Container, Content, DivHead, FormContent } from "./styles";
import Input from "../Input/index";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const CadTec = ({ show, setShow }) => {
  const [status, setStatus] = useState("Iniciante");

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addtechs = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("@KZHub:token")
          )}`,
        },
      })
      .then((_) => toast.success("Tecnologia Criada"))
      .catch((err) => {
        console.log(err);
        toast.error("Algo de errado aconteceu");
      });
  };

  const onSubmit = (data) => {
    const info = { ...data, status: status };

    addtechs(info);

    setShow(false);
  };

  return (
    <Container show={show}>
      <Content>
        <DivHead>
          <h3>Cadastrar Tecnologia</h3>
          <span onClick={() => setShow(false)}>x</span>
        </DivHead>
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Título"
            label={"Nome"}
            name="title"
            type="title"
            register={register}
            error={errors.title?.message}
            border
          />
          <label>Selecionar Status</label>
          <select onChange={(evt) => setStatus(evt.target.value)}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <Button background={"#FF577F"} color={"#FFFFFF"} type="submit">
            Cadastrar tecnologia
          </Button>
        </FormContent>
      </Content>
    </Container>
  );
};

export default CadTec;
