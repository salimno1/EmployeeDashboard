export const UPDATE_EMPLOYEE_REQUEST = "UPDATE_EMPLOYEE_REQUEST";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";

export const updateEmployee = (employee) => ({
  type: UPDATE_EMPLOYEE_REQUEST,
  payload: employee,
});
