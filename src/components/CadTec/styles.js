import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.4);

  ${(props) =>
    !props.show &&
    css`
      display: none;
    `}
`;

export const Content = styled.div`
  max-width: 369px;
  width: 94%;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
`;

export const DivHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  background-color: #343b41;

  h3 {
    font-weight: 700;
    font-size: 12px;
    margin-left: 16px;
  }

  span {
    color: #868e96;
    font-size: 16px;
    font-weight: 600;
    margin-right: 16px;
    cursor: pointer;
  }
`;
// 395px

export const FormContent = styled.form`
  margin: 15px 18px 25px;

  label {
    font-weight: 400;
    font-size: 10px;
    margin-bottom: 18px;
  }

  select {
    width: 100%;
    border: 1px solid #f8f9fa;
    height: 48px;
    background-color: #343b41;
    border-radius: 4px;
    color: #868e96;
    font-size: 13px;
    font-weight: 400;
    padding-left: 10px;
    margin-bottom: 16px;
    margin-top: 18px;
    outline: 0;
  }

  button {
    height: 38px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }
`;
