import cors from "cors";
// import path from "path";
import express from "express";
import { Tree } from "./models/TreeModel";
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
const url =
    process.env.NODE_ENV === "production"
        ? "https://bonsai-one.vercel.app"
        : "http://localhost:3000";

let db = null;
if (db === null) {
    mongoose.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
            console.log("Connected to MongoDB");
        }
    );
    db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error"));
}

app.get("/api/tree/:id", (req, res) => {
    let id = req.params.id;
    Tree.findById(id, function (err, tree) {
        if (err) console.log(err);

        res.send(tree);
    });
});
app.get(`/api/trees/:username`, (req, res) => {
    console.log("ah");
    Tree.find((err, trees) => {
        let userTrees = trees.filter((tree) => {
            if (tree.username === req.params.username) {
                return tree;
            }
            console.log(tree.username, req.params.username);
        });
        console.log(userTrees);
        if (err) return console.error(err);
        res.send(userTrees);
    });
});

// app.get(`/api/trees`, (req, res) => {
// 	Tree.find((err, trees) => {
// 		if (err) return console.error(err);
// 		res.send(trees);
// 	});
// });

app.delete("/api/trees/:id", (req, res) => {
    let id = req.params.id;
    Tree.findByIdAndDelete(id, function (err, tree) {
        if (err) console.log(err);
        res.send("Tree deleted!");
    });
});

// app.post("/api/newTree/:username", (req, res) => {
//     // TODO: If name/type is missing then cancel the request
//     let body = req.body;
//     console.log("hi");
//     console.log(url);
//     if (!body.name || !body.typeOfTree) {
//         console.log("Must have name!");
//         return;
//     }
// 		res.status(400).redirect(`${url}/treefarm`);
// 	});
// });

app.post("/api/newTree", (req, res) => {
    // TODO: If name/type is missing then cancel the request
    let body = req.body;

    console.log(req.params.username);
    const bonsai = new Tree({
        name: body.name,
        type: body.typeOfTree,
        details: body.details,
        stage: 0,
        tasks: [],
        points: 0,
        workTimer: 0,
        username: req.params.username,
    });
    bonsai.save((err) => {
        if (err) return console.error(err);
        // res.send(`Tree made!`);
        res.status(400).redirect(`${url}/treefarm`);
    });
});

const userSchema = new mongoose.Schema({
    username: String,
    birthTime: Date,
});
const User = mongoose.model("User", userSchema);

app.post("/api/createUser", (req, res) => {
    try {
        const userReq = req.body;
        const newUser = new User({
            username: userReq.username,
            birthTime: Date.now(),
        });
        const exampleTree1 = new Tree({
            name: "Meditation",
            type: "shortTerm",
            stage: 0,
            details: "The fine art of meditation.",
            tasks: [
                {
                    name: "Meditate for 20 minutes.",
                    completed: false,
                },
                {
                    name: "Go outside and talk to a tree.",
                    completed: false,
                },
            ],
            points: 0,
            workTimer: 0,
            username: userReq.username,
        });
        const exampleTree2 = new Tree({
            name: "Excercise",
            type: "longTerm",
            stage: 0,
            details: "Get ripped.",
            tasks: [
                {
                    name: "Walk for 2 hours.",
                    completed: false,
                },
                {
                    name: "Jump 2000 times.",
                    completed: false,
                },
            ],
            points: 0,
            workTimer: 0,
            username: userReq.username,
        });
        exampleTree1.save((err) => {
            if (err) {
                console.log(err);
            }
        });
        exampleTree2.save((err) => {
            if (err) {
                console.log(err);
            }
        });
        newUser.save((err) => {
            if (err) {
                console.log(err);
            }
            res.send("User Created");
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.post("/api/setTasks/:parentId?", (req, res) => {
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
                    res.status(200)
                        .send(`Tasks set successfully, but something has likely gone awry somewhere else.
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

app.post("/api/trees/:id", (req, res) => {
    let id = req.params.id;
    Tree.findOne({ _id: id }, (err, tree) => {
        if (err) console.log(err);
        let totalAmount =
            parseInt(tree.workTimer) + parseInt(req.body.workTimer);
        tree.workTimer = totalAmount;
        tree.save();
        res.send(tree);
    });
});

app.get("/api/getTasks/:parentId", (req, res) => {
    try {
        const parentId = req.params.parentId;
        let tasks = new Array();
        Tree.findById(parentId, (err, foundTree) => {
            if (!foundTree) {
                res.status(404).send("parentId is missing or invalid.");
            } else {
                tasks = foundTree.tasks;
                res.status(200).send(tasks);
                if (err) {
                    console.log(err);
                }
            }
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default app;
