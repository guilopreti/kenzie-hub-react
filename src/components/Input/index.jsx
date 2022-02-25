import { Container, DivInput, DivLabel } from "./styles";

const Input = ({
  label,
  register,
  name,
  error = "",
  icon: Icon,
  border = false,
  ...rest
}) => {
  return (
    <Container>
      <DivLabel isErrored={!!error}>
        <label>{label} </label>
        {!!error && <span> - {error}</span>}
      </DivLabel>

      <DivInput isErrored={!!error} border={border ? "#f8f9fa" : "transparent"}>
        <input {...rest} {...register(name)} />
        {Icon && <Icon />}
      </DivInput>
    </Container>
  );
};

export default Input;
