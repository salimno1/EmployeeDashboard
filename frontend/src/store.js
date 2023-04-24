import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import getEmployees from "./sagas/dataSaga";
import addEmployeSaga from "./sagas/createSaga";
import myFirstReducer from "./reducers/dataReducer";
import { createReducer } from "./reducers/createReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ myFirstReducer, createReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getEmployees);
sagaMiddleware.run(addEmployeSaga);

export default store;
