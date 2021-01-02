/* eslint-disable default-case */
const initialState = {
	trees: [],
};

const treeReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TREE":
			return {
				...state,
				trees: [...state.trees, action.payload],
			};
		case "DEL_TREE":
			return {
				trees: [...state.trees.filter((tree) => tree !== action.payload)],
			};
		default:
			return state;
	}
};

export default treeReducer;
