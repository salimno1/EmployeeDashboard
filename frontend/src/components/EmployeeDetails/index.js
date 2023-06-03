import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  InfoDiv,
  Info,
  InputContainer,
  ButtonContainer,
  RightContainer,
  InfoHolder,
  ImgHolder,
  LeftContainer,
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
    salary: "s",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployeeData({
        name: selectedEmployee.name,
        gender: selectedEmployee.gender,
        dateOfBirth: selectedEmployee.dateOfBirth,
        salary: selectedEmployee.salary,
      });
    }
  }, [selectedEmployee]);

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
  };

  const handleInputChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_EMPLOYEE", payload: selectedEmployee._id });
    setEmployeeData({
      name: "",
      gender: "",
      dateOfBirth: "",
      salary: "",
    });
    selectedEmployee.name = "";
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
        <LeftContainer>
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
          </ImgHolder>
          <InfoHolder>
            <InfoDiv>
              <Info>
                {" "}
                <div
                  style={{
                    width: "100%",
                    paddingLeft: "10px",
                    color: "#0077B6",
                  }}
                >
                  <p>Full name</p>
                </div>
                <h2>{employeeData.name}</h2>
              </Info>
              <Info>
                <div
                  style={{
                    width: "100%",
                    paddingLeft: "10px",
                    color: "#0077B6",
                  }}
                >
                  <p>Gender</p>
                </div>
                <h2>{employeeData.gender}</h2>
              </Info>
            </InfoDiv>
            <InfoDiv>
              <Info>
                <div
                  style={{
                    width: "100%",
                    paddingLeft: "10px",
                    color: "#0077B6",
                  }}
                >
                  <p>Date of birth</p>
                </div>
                <h2>{employeeData.dateOfBirth}</h2>
              </Info>
              <Info>
                <div
                  style={{
                    width: "100%",
                    paddingLeft: "10px",
                    color: "#0077B6",
                  }}
                >
                  <p>Salary</p>
                </div>
                <h2>{employeeData.salary} KR</h2>
              </Info>
            </InfoDiv>
          </InfoHolder>
        </LeftContainer>
        <RightContainer>
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
                  type="number"
                  name="salary"
                  value={employeeData.salary}
                  onChange={handleInputChange}
                />
              </label>
            </InputContainer>
          </form>
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
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgb(0, 91, 139)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgb(0, 119, 182)")
              }
            >
              Update Employee
            </button>
            <button type="button" onClick={handleDelete}>
              Delete Employee
            </button>
          </ButtonContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default EmployeeDetails;
