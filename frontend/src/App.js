import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import TreeFarm from "./components/treeFarm/treeFarm";
import NewTree from "./components/newTree/newTree";
import MissingPage from "./components/missingPage/MissingPage";
import Tree from "./components/tree/Tree";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<TreeFarm />
				</Route>
				<Route path="/newTree">
					<NewTree />
				</Route>
				<Route path="/trees/:id">
					<Tree />
				</Route>
				<Route path="*">
					<MissingPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
