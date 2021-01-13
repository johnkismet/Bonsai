const loggedReducer = (state = "", action) => {
	switch (action.type) {
		case "SET_AUTH":
			return {
				auth: [action.payload],
			};
		default:
			return state;
	}
};

export default loggedReducer;
