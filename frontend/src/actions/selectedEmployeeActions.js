export const setSelectedEmployee = (employee) => {
  return {
    type: "SET_SELECTED_EMPLOYEE",
    payload: employee,
  };
};
