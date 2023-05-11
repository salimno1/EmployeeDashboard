import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../../actions/dataActions";
import { setSelectedEmployee } from "../../actions/selectedEmployeeActions";
import {
  TableWrapper,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "./style";
import { PenToSquare } from "@styled-icons/fa-regular/PenToSquare";

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getEmployeeReducer.users);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch, users]);

  const handleEmployeeClick = (employee) => {
    dispatch(setSelectedEmployee(employee));

  };

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Salary</TableHeader>
            <TableHeader>Date of Birth</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Manage</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {users.map((employee) => (
            <TableRow key={employee._id}>
              <TableData>{employee.name}</TableData>
              <TableData>{employee.salary}kr</TableData>
              <TableData>{employee.dateOfBirth}</TableData>
              <TableData>{employee.gender}</TableData>
              <TableData>
                <PenToSquare
                  size="15"
                  color="#0076b6"
                  onClick={() => handleEmployeeClick(employee)}
                  style={{ marginLeft: "25px", cursor: "pointer" }}
                />
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default EmployeeList;
