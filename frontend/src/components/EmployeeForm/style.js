import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  background-color: white;
  width: 20%;
  flex-direction: column;
  padding: 40px 65px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px rgba(209, 213, 219, 1);
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
  button[type="submit"]:hover {
    background-color: #005b8b;
  }
`;
