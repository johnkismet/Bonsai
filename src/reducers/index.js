import counterReducer from "./treeReducer";
import authReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	treeCount: counterReducer,
	authorization: authReducer,
});

export default allReducers;
