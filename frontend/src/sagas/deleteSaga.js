import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

function* deleteEmployee(action) {
  try {
    // make a DELETE request to the API
    yield call(
      axios.delete,
      `http://localhost:4000/api/employee/${action.payload}`
    );

    // dispatch a success action
    yield put({ type: "DELETE_EMPLOYEE_SUCCESS" });
  } catch (error) {
    // dispatch an error action
    yield put({ type: "DELETE_EMPLOYEE_ERROR", payload: error.message });
  }
}

function* watchDeleteEmployee() {
  yield takeEvery("DELETE_EMPLOYEE", deleteEmployee);
}

export default watchDeleteEmployee;
