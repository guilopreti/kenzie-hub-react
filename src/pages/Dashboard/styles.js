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
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 35px;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid #868e96;
  padding-bottom: 24px;

  h1 {
    color: #ff577f;
    font-weight: 700;
    font-size: 18px;
    margin-left: 13px;
  }

  button {
    width: 55px;
    height: 32px;
    margin-right: 11px;
    padding: 0;
  }

  @media (min-width: 915px) {
    justify-content: center;

    h1 {
      margin-right: 585px;
      font-size: 25px;
    }

    button {
      height: 32px;
    }
  }
`;

export const DivUser = styled.div`
  margin-top: 0;
  width: 100%;
  border-bottom: 1px solid #868e96;
  padding-bottom: 35px;

  h2 {
    margin-left: 12px;
    font-weight: 700;
    color: #f8f9fa;
  }

  p {
    color: #868e96;
    font-size: 12px;
    font-weight: 600;
    margin-left: 12px;
    margin-top: 10px;
  }

  @media (min-width: 915px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AddTec = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
  height: 32px;
  margin-bottom: 21px;
  align-items: center;

  h3 {
    color: #f8f9fa;
    font-size: 16px;
    font-weight: 600;
    margin-left: 12px;
  }

  button {
    width: 32px;
    height: 32px;
    padding: 0;
    font-size: 22px;
    margin-right: 14px;
  }

  @media (min-width: 915px) {
    justify-content: center;

    h3 {
      margin-right: 650px;
    }
  }
`;

export const Content = styled.div`
  max-width: 742px;
  padding: 22px 18px;
  width: 82%;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  ul {
    width: 100%;
  }
`;
