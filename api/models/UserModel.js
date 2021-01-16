const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: String,
	birthTime: Date,
	hoursWorked: Array,
	tasksDone: Array,
});
export const User = mongoose.model("User", userSchema);
