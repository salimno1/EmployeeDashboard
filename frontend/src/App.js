import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm";
import { EmployeeList } from "./components/EmployeeList";

function App() {
  return (
    <>
      <EmployeeList />
      <EmployeeForm />
      <EmployeeDetails />
    </>
  );
}

export default App;
