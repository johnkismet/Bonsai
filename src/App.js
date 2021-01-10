import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
// components
import TreeFarm from "./components/treeFarm/treeFarm";
import NewTree from "./components/newTree/newTree";
import MissingPage from "./components/missingPage/MissingPage";
import Tree from "./components/tree/Tree";
import Store from "./components/Store/Store";
import Statistics from "./components/Statistics/Statistics";
import Archive from "./components/Archive/Archive";
import Sidebar from "./components/sidebar/Sidebar";
import Welcome from "./components/WelcomePage/Welcome";
import Login from "./components/WelcomePage/Login";
import Register from "./components/WelcomePage/Register";
import Introduction from "./components/Introduction/Introduction";

function App() {
	return (
		<>
			<BrowserRouter>
				<Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
				<Switch>
					<Route exact path="/">
						<Welcome />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/introduction">
						<Introduction />
					</Route>
					<Route exact path="/treefarm">
						<TreeFarm />
					</Route>
					<Route exact path="/store">
						<Store />
					</Route>
					<Route exact path="/archive">
						<Archive />
					</Route>
					<Route exact path="/statistics">
						<Statistics />
					</Route>
					<Route exact path="/newTree">
						<NewTree />
					</Route>
					<Route exact path="/trees/:id">
						<Tree />
					</Route>
					<Route path="*">
						<MissingPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
