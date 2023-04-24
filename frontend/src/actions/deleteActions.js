export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

export const deleteEmployee = (employeeId) => ({
  type: DELETE_EMPLOYEE,
  payload: { employeeId },
});
