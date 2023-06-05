import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 12px;
    margin: 5px 0;
  }
`;

export const InputContainer = styled.div`
  background-color: white;
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
  width: 25%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px rgba(209, 213, 219, 1);
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 150px;
    margin-left: -10px;
  }
  h4 {
    margin: 0;
  }
`;
export const LeftContainer = styled.div`
  width: 140%;
  height: 100%;
  gap: 25px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ButtonContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const InfoDiv = styled.div`
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InfoHolder = styled.div`
  width: 68%;
  height: 350px;
  display: flex;
  justify-content: space-around;
  gap: 25px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const RightContainer = styled.div`
  width: 58%;
  background-color: white;
  height: 350px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px rgba(209, 213, 219, 1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px rgba(209, 213, 219, 1);
  border-radius: 5px;

  h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #242424;
    text-transform: capitalize;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
