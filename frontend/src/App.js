import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import TreeFarm from "./components/treeFarm/treeFarm";
import NewTree from "./components/newTree/newTree";

function App() {
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
