import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";

// components
import Sidebar from "../sidebar/Sidebar";

function TreeFarm() {
	return (
		<React.Fragment>
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

			<div className="App">
				<div id="page-wrap">
					<div id="treeFarm">
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
						>
							<div className="tree">Tree 1</div>
							<div className="tree">Tree 2</div>
							<div className="tree">Tree 3</div>
							<div className="tree">Tree 4</div>
							<div className="tree">Tree 5</div>
							<div className="tree">Tree 6</div>
							<div className="tree">Tree 7</div>
							<div className="tree">Tree 8</div>
							<div className="tree">Tree 9</div>
							<div className="tree">Tree 10</div>
						</Grid>

						<Link to="/newTree" className="addTaskBtn"></Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default TreeFarm;
