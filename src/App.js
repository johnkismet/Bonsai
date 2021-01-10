import React from "react";
import { Route, Switch } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import Navigation from "./components/Navigation";
import Welcome from "./components/WelcomePage/Welcome";
import "./App.css";

{
	/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */
}

function App() {
	return (
		<>
			<Welcome />
		</>
	);
}

export default App;
