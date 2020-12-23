import "./App.css";
import React from "react";
// import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import Sidebar from "./components/Sidebar";

function App() {
	const showSettings = (event) => {
		event.preventDefault();
	};

	return (
		<div className="App">
			<nav>
				<Sidebar />
			</nav>

			{/* <div id="treeFarm">
				<Grid container direction="row" justify="center" alignItems="center">
					<div className="tree">Tree 1</div>
					<div className="tree">Tree 2</div>
					<div className="tree">Tree 3</div>
					<div className="tree">Tree 4</div>
					<div className="tree">Tree 5</div>
					<div className="tree">Tree 6</div>
					<div className="tree">Tree 7</div>
					<div className="tree">Tree 8</div>
				</Grid>

				<img
					className="addTaskBtn"
					src="/assets/images/Add task button.png"
					alt="Add task button"
				/>
			</div> */}
		</div>
	);
}

export default App;
