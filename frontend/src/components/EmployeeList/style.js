import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  height: 300px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f5f5f5;
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
