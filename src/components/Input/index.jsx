import { Container, DivInput, DivLabel } from "./styles";

const Input = ({ label, register, name, error = "", icon: Icon, ...rest }) => {
  return (
    <Container>
      <DivLabel>
        <label>{label} </label>
        {!!error && <span> - {error}</span>}
      </DivLabel>

      <DivInput isErrored={!!error}>
        <input {...rest} />
        {Icon && <Icon />}
      </DivInput>
    </Container>
  );
};

export default Input;
