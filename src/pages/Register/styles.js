import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #121214;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivHead = styled.div`
  display: flex;
  margin-top: 50px;
  width: 296px;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  height: 30px;

  h1 {
    color: #ff577f;
    font-weight: 700;
    font-size: 18px;
  }

  button {
    width: 80px;
    height: 25px;
  }

  @media (min-width: 769px) {
    h1 {
      font-size: 25px;
    }

    button {
      height: 32px;
    }
  }
`;

export const Content = styled.div`
  padding: 0px 18px;
  width: 260px;
  height: 590px;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;

  h2 {
    color: #f8f9fa;
    margin: 34px 0px 18px;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 10px;
    color: #868e96;
    margin-bottom: 18px;
  }

  @media (min-width: 769px) {
    width: 320px;
    height: 660px;

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

  label {
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 18px;
  }

  select {
    width: 100%;
    border: none;
    height: 38px;
    background-color: #343b41;
    border-radius: 4px;
    color: #868e96;
    font-size: 13px;
    font-weight: 400;
    padding-left: 10px;
    margin-bottom: 16px;
    outline: 0;
  }

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
