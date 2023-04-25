import { takeLatest, call, put } from "redux-saga/effects";
import {
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
} from "../actions/updateActions";

// API call for updating an employee
const updateEmployeeApi = (employee) => {
  return fetch(`http://localhost:4000/api/employee/${employee._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
};

function* updateEmployee(action) {
  try {
    const employee = action.payload;
    const updatedEmployee = yield call(updateEmployeeApi, employee);
    yield put({ type: UPDATE_EMPLOYEE_SUCCESS, payload: updatedEmployee });
  } catch (error) {
    yield put({ type: UPDATE_EMPLOYEE_FAILURE, payload: error.message });
  }
}

export function* watchUpdateEmployee() {
  yield takeLatest(UPDATE_EMPLOYEE_REQUEST, updateEmployee);
}
