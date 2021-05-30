import { combineReducers } from "redux";
import { localAuthReducer } from "./localAuthReducer";
import { errorReducer } from "./errorReducer";

export default combineReducers({
	localAuth: localAuthReducer,
	error: errorReducer,
});
