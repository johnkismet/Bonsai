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
	const bonsai = new Tree({
		name: body.name,
		type: body.typeOfTree,
		details: body.details,
	});
	bonsai.save((err) => {
		if (err) return console.error(err);
	});
	// res.send(`Tree made!`);
	res.redirect("http://localhost:3000");
});

app.listen(4000, () => {
	console.log("express server is running on port 4000");
});
