import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #212529;
  width: 100%;
`;

export const DivLabel = styled.div`
  display: flex;
  width: 100%;

  label {
    color: ${(props) => (props.isErrored ? "#c53030" : "#f8f9fa")};
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 18px;
  }

  span {
    color: #f8f9fa;
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 18px;
    margin-left: 4px;
    color: #c53030;
  }
`;

export const DivInput = styled.div`
  margin-bottom: 21px;
  width: 100%;
  border: 1px solid ${(props) => `${props.border}`};
  height: 38px;
  background-color: #343b41;
  border-radius: 4px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    background-color: #343b41;
    width: 85%;
    border: none;
    color: #f8f9fa;
    font-size: 13px;
    font-weight: 400;
    padding-left: 10px;
  }

  input:focus {
    outline: 0;
  }

  @media (min-width: 769px) {
    height: 48px;
  }
`;
