import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  h1 {
    color: #ff577f;
    font-size: 45px;
    width: 100%;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 25px;

    button {
      height: 45px;
      font-size: 15px;
    }
  }
`;
