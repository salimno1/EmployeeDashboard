import React from "react";
import EmployeeDetails from "../../components/EmployeeDetails";
import EmployeeForm from "../../components/EmployeeForm";
import EmployeeList from "../../components/EmployeeList";
import { DashboardWrapper, LowerContainer, UpperContainer } from "./style";
const Dashboard = () => {
  return (
    <DashboardWrapper>
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
