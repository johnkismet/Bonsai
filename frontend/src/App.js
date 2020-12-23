import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

function App() {
	return (
		<div className="App">
			<nav>
				<div id="burgerMenu">
					<span className="burgerLine"></span>
					<span className="burgerLine"></span>
					<span className="burgerLine"></span>
				</div>

				<h1 id="navHeader">BONSAI</h1>
			</nav>

			<div id="treeFarm">
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
			</div>
		</div>
	);
}

export default App;
