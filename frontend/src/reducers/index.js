import counterReducer from "./treeReducer";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	treeCount: counterReducer,
});

export default allReducers;
