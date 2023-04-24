import React, { useEffect } from "react";
import { ListWrapper, NameContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../../actions/dataActions";

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);
  return (
    <>
      <ListWrapper>
        <NameContainer>
          {users.map((employee) => (
            <div key={employee._id}>{employee.name}</div>
          ))}
        </NameContainer>
      </ListWrapper>
    </>
  );
};
