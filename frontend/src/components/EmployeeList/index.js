import React, { useEffect } from "react";
import { ListWrapper, NameContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../../actions/dataActions";
import { setSelectedEmployee } from "../../actions/selectedEmployeeActions";

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
    <>
      <ListWrapper>
        <NameContainer>
          {users.map((employee) => (
            <div
              key={employee._id}
              onClick={() => handleEmployeeClick(employee)}
            >
              {employee.name}
            </div>
          ))}
        </NameContainer>
      </ListWrapper>
    </>
  );
};

export default EmployeeList;
