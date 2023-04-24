export const setSelectedEmployee = (employee) => {
  console.log("setSelectedEmployee payload:", employee);
  return {
    type: "SET_SELECTED_EMPLOYEE",
    payload: employee,
  };
};
