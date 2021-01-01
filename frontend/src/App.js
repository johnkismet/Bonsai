import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Container } from "@material-ui/core";

// components
import TreeFarm from "./components/treeFarm/treeFarm";
import NewTree from "./components/newTree/newTree";

function App() {
	const showSettings = (event) => {
		event.preventDefault();
	};

	return (
		<Router>
			<Switch>
				<Route path="/newTree">
					<NewTree />
				</Route>
				<Route path="/">
					<TreeFarm />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
