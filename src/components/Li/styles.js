import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.status === "Avançado" ? "#343B41" : "#121214"};
  border-radius: 4px;
  margin-bottom: 16px;
  cursor: pointer;

  h4 {
    color: #f8f9fa;
    font-weight: 700;
    font-size: 14px;
    margin-left: 12px;
    width: 60%;
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    color: ${(props) => (props.status === "Avançado" ? "#F8F9FA" : "#868e96")};
    font-weight: 400;
    font-size: 12px;
    margin-right: 12px;
  }
`;
