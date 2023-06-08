import styled from "styled-components";

export const DashboardWrapper = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  margin: 25px auto 0 auto;
  padding: 0 100px;

  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 0 10px;
    margin: 0;
    flex-direction: column;
  }
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`;

export const LogoutBtn = styled.button`
  width: 100px;
  margin-bottom: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;
export const LowerContainer = styled.div`
  padding: 25px 0;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
