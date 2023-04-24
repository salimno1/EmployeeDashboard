import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./style";

const EmployeeDetails = () => {
  const selectedEmployee = useSelector((state) => state.selectedEmployee);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: selectedEmployee._id });
    window.location.reload();
  };

  if (!selectedEmployee) {
    return (
      <Container>
        {" "}
        <div>Please select an employee</div>
      </Container>
    );
  }

  return (
    <Container>
      <h2>{selectedEmployee.name}</h2>
      <p>Gender: {selectedEmployee.gender}</p>
      <p>Date of Birth: {selectedEmployee.dateOfBirth}</p>
      <p>Salary: {selectedEmployee.salary}</p>
      <button onClick={handleDelete}>Delete Employee</button>
    </Container>
  );
};

export default EmployeeDetails;
