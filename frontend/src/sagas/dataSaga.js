import { takeEvery, call, put } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "../actions/dataActions";
import axios from "axios";

function usersFetch() {
  return axios
    .get("http://localhost:4000/api/employee")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* getEmployees() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default getEmployees;
