import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeRequest } from "../../actions/createActions";
import { FormWrapper } from "./style";

const EmployeeForm = () => {
  const { error } = useSelector(state => state.createReducer);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [salary, setSalary] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();
    dispatch(addEmployeeRequest({ name, dateOfBirth, salary, gender }));
    setName("");
    setDateOfBirth("");
    setSalary("");
    setGender("");
    console.log("Submitted form data: ", { name, dateOfBirth, salary, gender });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="text"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>
      <label>
        Salary:
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">--Select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Add Employee</button>
      {error && <p style={{ color: "red" , margin: '2px'}}>Make sure the fields are correctly filled</p>}
    </FormWrapper>
    
  );
};

export default EmployeeForm;
