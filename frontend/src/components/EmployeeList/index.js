import React, { useState, useEffect } from "react";
import { ListWrapper, NameContainer } from "./style";
import axios from "axios";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get("http://localhost:4000/api/employee");
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);
  console.log(employees);
  return (
    <>
      <ListWrapper>
        <NameContainer>
          {employees.map((employee) => (
            <div key={employee._id}>{employee.name}</div>
          ))}
        </NameContainer>
      </ListWrapper>
    </>
  );
};
