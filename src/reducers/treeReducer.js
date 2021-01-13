/* eslint-disable default-case */
const initialState = {
	trees: [],
};

const treeReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TREE":
			for (const tree of state.trees) {
				if (tree._id === action.payload._id) {
					return {
						trees: [...state.trees],
					};
				}
			};
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
