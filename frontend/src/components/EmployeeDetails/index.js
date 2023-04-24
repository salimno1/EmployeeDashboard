import React from "react";
import { useSelector, useDispatch } from "react-redux";

const EmployeeDetails = () => {
  const selectedEmployee = useSelector((state) => state.selectedEmployee);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: selectedEmployee._id });
  };

  if (!selectedEmployee) {
    return <div>Please select an employee</div>;
  }

  return (
    <div>
      <h2>{selectedEmployee.name}</h2>
      <p>Gender: {selectedEmployee.gender}</p>
      <p>Date of Birth: {selectedEmployee.dateOfBirth}</p>
      <p>Salary: {selectedEmployee.salary}</p>
      <button onClick={handleDelete}>Delete Employee</button>
    </div>
  );
};

export default EmployeeDetails;
