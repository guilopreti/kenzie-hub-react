import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => `${props.background}`};
  color: ${(props) => `${props.color}`};
  border-radius: 4px;
  border: none;
  padding: 0 22px;
`;
