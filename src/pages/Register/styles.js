import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #121214;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 81px 110px 20px 109px;
    color: #ff577f;
    font-weight: 700;
    font-size: 18px;
  }

  @media (min-width: 769px) {
    h1 {
      font-size: 25px;
      margin-top: 50px;
    }
  }
`;

export const Content = styled.div`
  padding: 0px 18px;
  width: 260px;
  height: 403px;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  h2 {
    color: #f8f9fa;
    margin: 34px 0px 23px;
    font-weight: 700;
  }

  @media (min-width: 769px) {
    width: 320px;
    height: 465px;

    h2 {
      margin: 42px 0px 28px;
    }
  }
`;

export const FormContent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    width: 100%;
    height: 38px;
    margin-bottom: 27px;
    font-weight: 500;
    font-size: 13px;
  }

  @media (min-width: 769px) {
    button {
      height: 48px;
    }
  }
`;

export const DivNoCad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  span {
    color: #868e96;
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 18px;
  }

  button {
    width: 100%;
    height: 38px;
  }

  @media (min-width: 769px) {
    button {
      height: 48px;
    }
  }
`;
