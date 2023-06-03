import styled from "styled-components";

export const Container = styled.div`
  min-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 12px;
    margin: 5px 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border: none;
    border-bottom: 1px solid grey;
  }
  input:focus {
    outline: none;
  }
  label {
    width: 100%;
  }
`;

export const ImgHolder = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 150px;
    margin-left: -10px;
  }
  h4 {
    margin: 0;
  }
`;
export const UpperContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;
