const selectedEmployeeReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SELECTED_EMPLOYEE":
      return action.payload;
    default:
      return state;
  }
};

export default selectedEmployeeReducer;
