import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  width: 30%;
  flex-direction: column;
  padding: 40px 65px;
  border-left: 2px solid #f2f2f2;
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
