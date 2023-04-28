import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  LeftContainer,
  InputContainer,
  ButtonContainer,
  ImgHolder,
  UpperContainer,
} from "./style";
import femaledummy from "../../img/femaledummy.png";
import maledummy from "../../img/maledummy.png";
import { updateEmployee } from "../../actions/updateActions";

const EmployeeDetails = () => {
  const selectedEmployee = useSelector((state) => state.selectedEmployee);
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState({
    name: "",
    gender: "",
    dateOfBirth: "",
    salary: "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedEmployeeData = {};

    if (employeeData.name !== "") {
      updatedEmployeeData.name = employeeData.name;
    } else {
      updatedEmployeeData.name = selectedEmployee.name;
    }

    if (employeeData.gender !== "") {
      updatedEmployeeData.gender = employeeData.gender;
    } else {
      updatedEmployeeData.gender = selectedEmployee.gender;
    }

    if (employeeData.dateOfBirth !== "") {
      updatedEmployeeData.dateOfBirth = employeeData.dateOfBirth;
    } else {
      updatedEmployeeData.dateOfBirth = selectedEmployee.dateOfBirth;
    }

    if (employeeData.salary !== "") {
      updatedEmployeeData.salary = employeeData.salary;
    } else {
      updatedEmployeeData.salary = selectedEmployee.salary;
    }

    dispatch(updateEmployee({ ...selectedEmployee, ...updatedEmployeeData }));
    setEmployeeData({
      name: "",
      gender: "",
      dateOfBirth: "",
      salary: "",
    });
  };

  const handleInputChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: selectedEmployee._id });
  };

  if (!selectedEmployee) {
    return (
      <Container>
        <div>Please select an employee</div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <UpperContainer>
          <ImgHolder>
            <img
              src={
                selectedEmployee.gender === "female" ? femaledummy : maledummy
              }
              alt={
                selectedEmployee.gender === "female"
                  ? "Female Employee"
                  : "Male Employee"
              }
            />
            <h4>{selectedEmployee.name}</h4>
          </ImgHolder>
          <form onSubmit={handleUpdate}>
            <InputContainer>
              <label>
                <p>Name:</p>
                <input
                  type="text"
                  name="name"
                  value={employeeData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>Gender:</p>
                <input
                  type="text"
                  name="gender"
                  value={employeeData.gender}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>Date of Birth:</p>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={employeeData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <p>Salary:</p>
                <input
                  type="text"
                  name="salary"
                  value={employeeData.salary}
                  onChange={handleInputChange}
                />
              </label>
            </InputContainer>
          </form>
        </UpperContainer>
        <ButtonContainer>
          <button
            type="submit"
            onClick={handleUpdate}
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "rgb(0, 119, 182",
              color: "white",
              cursor: "pointer",
            }}
          >
            Update Employee
          </button>
          <button type="button" onClick={handleDelete}>
            Delete Employee
          </button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default EmployeeDetails;
