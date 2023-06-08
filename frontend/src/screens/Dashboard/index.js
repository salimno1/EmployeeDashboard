import React from "react";
import EmployeeDetails from "../../components/EmployeeDetails";
import EmployeeForm from "../../components/EmployeeForm";
import EmployeeList from "../../components/EmployeeList";
import { Context } from "../../context/Context";
import { useContext } from "react";
import {
  DashboardWrapper,
  LogoutBtn,
  LowerContainer,
  UpperContainer,
} from "./style";
const Dashboard = () => {
  const { dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <DashboardWrapper>
      <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
      <UpperContainer>
        <EmployeeList />
        <EmployeeForm />
      </UpperContainer>
      <LowerContainer>
        <EmployeeDetails />
      </LowerContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
