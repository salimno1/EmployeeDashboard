import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, LeftContainer } from "./style";

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
        <LeftContainer>
          {" "}
          <div>Please select an employee</div>
        </LeftContainer>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <LeftContainer>
          <h3>{selectedEmployee.name}</h3>
          <p>Gender: {selectedEmployee.gender}</p>
          <p>Date of Birth: {selectedEmployee.dateOfBirth}</p>
          <p>Salary: {selectedEmployee.salary}</p>
          <button onClick={handleDelete}>Delete Employee</button>
        </LeftContainer>
      </Container>
    </>
  );
};

export default EmployeeDetails;
