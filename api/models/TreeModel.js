// import connectToDatabase from "../mongoConnection";
const mongoose = require("mongoose");

// const db = connectToDatabase(process.env.MONGODB_URI);

const treeSchema = new mongoose.Schema({
	name: String,
	type: String,
	stage: Number,
	details: String,
	tasks: Array,
	points: Number,
	workTimer: Number,
	belongsTo: String,
	treeFlavor: Number,
	dateLastWorked: Number,
});
export const Tree = mongoose.model("Tree", treeSchema);
