import { Container } from "./styles";

const Li = ({ title, status, ...rest }) => {
  return (
    <Container status={status} {...rest}>
      <h4>{title}</h4>
      <span>{status}</span>
    </Container>
  );
};

export default Li;
