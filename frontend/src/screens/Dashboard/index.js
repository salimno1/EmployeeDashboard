import React from "react";
import EmployeeDetails from "../../components/EmployeeDetails";
import EmployeeForm from "../../components/EmployeeForm";
import EmployeeList from "../../components/EmployeeList";
import { DashboardWrapper, LowerContiner, UpperContainer } from "./style";
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <UpperContainer>
        <EmployeeDetails />
        <EmployeeForm />
      </UpperContainer>
      <LowerContiner>
        <EmployeeList />
      </LowerContiner>
    </DashboardWrapper>
  );
};


export default Dashboard;
