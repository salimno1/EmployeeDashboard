import styled from "styled-components";

export const Container = styled.div`
  min-width: 60%;

  p {
    font-size: 12px;
    margin: 5px 0;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 150px;
    margin-left: -10px;
  }
  p {
    font-size: 16px;
    margin: 5px 0;
  }
  h4 {
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border: none;
    border-bottom: 1px solid black;
  }
  label {
  }
`;

export const ButtonContainer = styled.div``;
