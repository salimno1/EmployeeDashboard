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

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getEmployeeReducer.users);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  const handleEmployeeClick = (employee) => {
    dispatch(setSelectedEmployee(employee));
    console.log(employee);
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
          </TableRow>
        </TableHead>
        <tbody>
          {users.map((employee) => (
            <TableRow
              key={employee._id}
              onClick={() => handleEmployeeClick(employee)}
            >
              <TableData>{employee.name}</TableData>
              <TableData>{employee.salary}</TableData>
              <TableData>{employee.dateOfBirth}</TableData>
              <TableData>{employee.gender}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default EmployeeList;
