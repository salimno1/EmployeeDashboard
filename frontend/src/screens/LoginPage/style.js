import styled from "styled-components";

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(0, 119, 182);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
