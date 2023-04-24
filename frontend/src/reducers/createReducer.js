import {
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
} from "../actions/createActions";

const initialState = {
  employees: [],
  isLoading: false,
  error: null,
};

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        isLoading: false,
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
