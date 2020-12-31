// import cors from "cors";
// import path from "path";
import express from "express";
const mongoose = require("mongoose");
const app = express();
const uri =
	"mongodb+srv://Kismet:wZ0vNyvkUENVhg2o@cluster0.l8p7d.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
	uri,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected with Mongo");
	}
);

const treeSchema = new mongoose.Schema({
	name: String,
});
const Tree = mongoose.model("Tree", treeSchema);

app.get("/trees", (req, res) => {
	Tree.find((err, trees) => {
		if (err) return console.error(err);
		res.send(trees);
	});
});

app.post("/trees", (req, res) => {
	let treeName = req.body.name;
	const bonsai = new Tree({
		name: treeName,
	});
	bonsai.save((err) => {
		if (err) return console.error(err);
	});
	res.send(`${treeName} was posted!`);
});

app.listen(4000, () => {
	console.log("express server is running on port 4000");
});
