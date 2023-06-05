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

  @media (max-width: 768px) {
    width: 100%;
    margin: 25px 0;
    padding: 10px 0;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    @media (max-width: 768px) {
      margin-left: 5px;
    }
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
    @media (max-width: 768px) {
      margin: 10px;
    }
  }
  button[type="submit"] {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #0077b6;
    color: white;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 80%;
      align-self: center;
    }
  }
  button[type="submit"]:hover {
    background-color: #005b8b;
  }
`;
