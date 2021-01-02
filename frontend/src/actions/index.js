export const addTree = (tree) => {
	return {
		type: "ADD_TREE",
		payload: tree,
	};
};

export const deleteTree = (tree) => {
	return {
		type: "DEL_TREE",
		payload: tree,
	};
};
