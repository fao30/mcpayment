import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  transaction: transactionReducer,
});
