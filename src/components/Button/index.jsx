import { Container } from "./styles";

const Button = ({ children, color, background, ...rest }) => {
  return (
    <Container color={color} background={background} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
