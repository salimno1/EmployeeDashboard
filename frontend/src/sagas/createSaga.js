import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
} from "../actions/createActions";
import { GET_USERS_FETCH } from "../actions/dataActions";

import axios from "axios";

function createEmployee(employeeData) {
  return axios
    .post("http://localhost:4000/api/employee", employeeData)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}
function* workAddEmployee(action) {
  try {
    const employee = yield call(createEmployee, action.payload);
    yield put({ type: ADD_EMPLOYEE_SUCCESS, payload: employee });
    yield put({ type: GET_USERS_FETCH });
  } catch (error) {
    yield put({ type: ADD_EMPLOYEE_FAILURE, payload: error });
  }
}

function* addEmployeSaga() {
  yield takeEvery(ADD_EMPLOYEE_REQUEST, workAddEmployee);
}

export default addEmployeSaga;
