import {
  Container,
  DivTitulo,
  Content,
  DivHead,
  FormContent,
  DivButtons,
} from "./styles";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const ChangeTec = ({ showChange, setShowChange, infoLi }) => {
  const [status, setStatus] = useState("Iniciante");

  const { handleSubmit } = useForm();

  const onSubmit = (a, evt) => {
    const info = { status: status };

    if (
      evt.nativeEvent.submitter.className === "sc-bdvvtL gRbZEl button-exclui"
    ) {
      api
        .delete(`/users/techs/${infoLi.id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("@KZHub:token")
            )}`,
          },
        })
        .then((_) => toast.success("Tecnologia Deletada"))
        .catch((err) => {
          console.log(err);
          toast.error("Algo de errado aconteceu");
        });
    } else {
      api
        .put(`/users/techs/${infoLi.id}`, info, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("@KZHub:token")
            )}`,
          },
        })
        .then((_) => toast.success("Tecnologia Atualizada"))
        .catch((err) => {
          console.log(err);
          toast.error("Algo de errado aconteceu");
        });
    }
    setShowChange(false);
  };

  return (
    <Container showChange={showChange}>
      <Content>
        <DivHead>
          <h3>Tecnologia Detalhes</h3>
          <span onClick={() => setShowChange(false)}>x</span>
        </DivHead>
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <label>Nome do Projeto</label>
          <DivTitulo>
            <p>{infoLi.title}</p>
          </DivTitulo>
          <label>Status (Atual - {infoLi.status})</label>
          <select onChange={(evt) => setStatus(evt.target.value)}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <DivButtons>
            <Button
              background={"#59323F"}
              color={"#FFFFFF"}
              type="submit"
              className="button-altera"
            >
              Salvar Alterações
            </Button>
            <Button
              background={"#868E96"}
              color={"#FFFFFF"}
              type="submit"
              className="button-exclui"
            >
              Excluir
            </Button>
          </DivButtons>
        </FormContent>
      </Content>
    </Container>
  );
};

export default ChangeTec;
