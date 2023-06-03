import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  background-color: white;
  width: 30%;
  flex-direction: column;
  padding: 40px 65px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 5px;

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  input,
  select {
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    &:focus {
      outline: none;
      border-color: #ccc;
    }
  }
  button[type="submit"] {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #0077b6;
    color: white;
    cursor: pointer;
  }
`;
