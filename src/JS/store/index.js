import { createStore } from "redux";
import movieReducer from "../reducers/index"
const reduxdevTools = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(movieReducer, reduxdevTools);

export default store;
