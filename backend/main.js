import cors from "cors";
// import path from "path";
import express from "express";
const mongoose = require("mongoose");
const app = express();
const uri =
	"mongodb+srv://Kismet:wZ0vNyvkUENVhg2o@cluster0.l8p7d.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

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
	});
	bonsai.save((err) => {
		if (err) return console.error(err);
	});
	// res.send(`Tree made!`);
	res.redirect("http://localhost:3000");
});

app.post("/addTask", (req, res) => {
	// TODO: Users will be able to add tasks to the tree, complete them, and delete tasks
	try {
		res.status(201).send("This is stub request. Change me!")
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

app.delete("/removeTask", (req, res) => {
	// TODO: Users will be able to add tasks to the tree, complete them, and delete tasks
	try {
		res.status(200).send("This is stub request. Change me!")
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

app.patch("/completeTask", (req, res) => {
	// TODO: Users will be able to add tasks to the tree, complete them, and delete tasks
	try {
		res.status(200).send("This is stub request. Change me!")
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

app.listen(4000, () => {
	console.log("express server is running on port 4000");
});
