import cors from "cors";
// import path from "path";
import express from "express";
const mongoose = require("mongoose");
const app = express();
const uri =
	"mongodb+srv://Kismet:wZ0vNyvkUENVhg2o@cluster0.l8p7d.mongodb.net/tree_farm?retryWrites=true&w=majority";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
	uri,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to MongoDB");
	}
);

const treeSchema = new mongoose.Schema({
	name: String,
	type: String,
	details: String,
	tasks: Array,
	points: Number,
	workTimer: Number,
});
const Tree = mongoose.model("Tree", treeSchema);

app.get("/trees", (req, res) => {
	Tree.find((err, trees) => {
		if (err) return console.error(err);
		res.send(trees);
	});
});

app.get("/trees/:id", (req, res) => {
	let id = req.params.id;
	Tree.findById(id, function (err, tree) {
		if (err) console.log(err);

		res.send(tree);
	});
});

app.delete("/trees/:id", (req, res) => {
	let id = req.params.id;
	Tree.findByIdAndDelete(id, function (err, tree) {
		if (err) console.log(err);

		res.send("Tree deleted!");
	});
});

app.post("/newTree", (req, res) => {
	// TODO: If name/type is missing then cancel the request
	let body = req.body;
	if (!body.name || !body.typeOfTree) {
		console.log("Must have name!");
		return;
	}

	const bonsai = new Tree({
		name: body.name,
		type: body.typeOfTree,
		details: body.details,
		tasks: [],
		points: 0,
		workTimer: 0,
	});
	bonsai.save((err) => {
		if (err) return console.error(err);
	});
	// res.send(`Tree made!`);
	res.redirect("http://localhost:3000");
});

app.post("/setTasks/:parentId?", (req, res) => {
	try {
		const newTasks = req.body.tasks;
		const itemsCompleted = req.body.itemsCompleted;
		Tree.findById(req.params.parentId, (err, foundTree) => {
			if (!foundTree) {
				res.status(404).send("parentId is missing or invalid.");
			} else {
				foundTree.tasks = newTasks;
				foundTree.points += itemsCompleted * 10;
				foundTree.save((err) => {
					if (err) {
						console.log(err);
					}
				});
				if (err) {
					console.log(err);
				}
				if (foundTree.points < 0) {
					foundTree.points = 0;
					res.status(200).send(`Tasks set successfully, but something has likely gone awry somewhere else.
					 More tasks have been marked incompelete after being marked complete than possible. 
					 Resetting tree points to 0...`);
				} else {
					res.status(200).send("Tasks set successfully.");
				}	
			}
		});
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

app.post("/trees/:id", (req, res) => {
	let id = req.params.id;
	Tree.findOne({ _id: id }, (err, tree) => {
		if (err) console.log(err);
		let totalAmount = parseInt(tree.workTimer) + parseInt(req.body.workTimer);
		tree.workTimer = totalAmount;
		tree.save();
		res.send(tree);
	});
});

app.listen(4000, () => {
	console.log("express server is running on port 4000");
});
