import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 65%;
  background-color: white;
  padding: 25px;
  overflow-x: auto;
  height: 300px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    inset 0px 0px 0px 1px rgba(209, 213, 219, 1);
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
    padding: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  background-color: rgb(0, 119, 182);
  z-index: 1;
  color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableData = styled.td`
  padding: 10px;
`;
