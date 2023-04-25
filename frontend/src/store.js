import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import getEmployees from "./sagas/dataSaga";
import addEmployeSaga from "./sagas/createSaga";
import getEmployeeReducer from "./reducers/dataReducer";
import { createReducer } from "./reducers/createReducer";
import selectedEmployeeReducer from "./reducers/selectedEmployeeReducer";
import watchDeleteEmployee from "./sagas/deleteSaga";
import { watchUpdateEmployee } from "./sagas/updateSaga";
const initialState = {
  selectedEmployee: null,
};

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  getEmployeeReducer,
  createReducer,
  selectedEmployee: selectedEmployeeReducer,
});
const store = legacy_createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(getEmployees);
sagaMiddleware.run(addEmployeSaga);
sagaMiddleware.run(watchDeleteEmployee);
sagaMiddleware.run(watchUpdateEmployee);

export default store;
