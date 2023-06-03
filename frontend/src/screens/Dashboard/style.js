import styled from "styled-components";

export const DashboardWrapper = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  margin: 25px auto 0 auto;
  padding: 0 100px;

  border-radius: 10px;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const LowerContainer = styled.div`
  padding: 25px 0;
`;
