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

=======
const taskSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	parentId: String,
});
const Task = mongoose.model("Task", taskSchema);

app.post("/addTask", (req, res) => {
	try {
		const taskRequest = req.body;
		if (!taskRequest.name) {
			res.status(400).send("Task must have a name.");
		}
		if (!taskRequest.parentId) {
			res.status(400).send("Task must have a tree.");
		}
		const newTask = new Task({
			name: taskRequest.name,
			completed: false,
			parentId: taskRequest.parentId,
		});
		Tree.findById(taskRequest.parentId, (err, foundTree) => {
			foundTree.tasks.push(newTask);
			foundTree.save((err) => {
				if (err) return console.error(err);
			});
			if (err) return console.error(err);
		});
		res.status(201).send("Task added.");
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

app.delete("/removeTask", (req, res) => {
	try {
		const taskRequest = req.body;
		if (!taskRequest.name) {
			res.status(400).send("Task must have a name.");
		}
		if (!taskRequest.parentId) {
			res.status(400).send("Task must have a tree.");
		}
		Tree.findById(taskRequest.parentId, (err, foundTree) => {
			let newTasks = foundTree.tasks.filter((task) => {
				return !(task._id == taskRequest._id); //This is purposely a loose equality since the types are different
			})
			foundTree.tasks = newTasks;
			foundTree.save((err) => {
				if (err) return console.error(err);
			});
			if (err) return console.error(err);
		});
		res.status(200).send("Task deleted successfully.")
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

app.patch("/completeTask", (req, res) => {
	try {
		const taskRequest = req.body;
		if (!taskRequest.parentId) {
			res.status(400).send("Task must have a tree.");
		}
		Tree.findById(taskRequest.parentId, (err, foundTree) => {
			let targetTask = foundTree.tasks.filter((task) => {
				if (task._id == taskRequest._id) {
					task.completed = true;
				}
				return task._id == taskRequest._id; 
			})
			let otherTasks = foundTree.tasks.filter((task) => {
				return !(task._id == taskRequest._id); 
			})
			foundTree.tasks = otherTasks.concat(targetTask);
			foundTree.points += 10;
			foundTree.save((err) => {
				if (err) {
					console.error(err);
				}
			})
			if (err) {
				return console.error(err);
			}
		})
		res.status(200).send("Task completed successfully.")
	} catch (err) {
		res.status(400).json({ message: err.message });
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
	})});

app.listen(4000, () => {
	console.log("express server is running on port 4000");
});
