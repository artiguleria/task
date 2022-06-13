import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import assmt from "./assmt";
import assmtId from "./assmtId";

const rootReducer = combineReducers({
  auth,
  user,
  assmt,
  assmtId,
});

export default rootReducer;