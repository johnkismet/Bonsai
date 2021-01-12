import React from "react";
import { Route, Switch } from "react-router";
import Sidebar from "./components/sidebar/Sidebar";
import Navigation from "./components/Navigation";
import Welcome from "./components/WelcomePage/Welcome";
import useAuth from "./hooks/useAuth";
import Login from "./components/WelcomePage/Login";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Links from "./components/Links";
import "./App.css";

function App() {
	const auth = useAuth();

	// Please dont do this
	async function loginNow() {
		try {
			const email = prompt("Enter your email");
			await auth.login(email);
		} catch (err) {
			console.error(err);
			// maybe updat some sort of state to let the user know that it failed =]
		}
	}

	if (auth.loading || auth.loggingIn || auth.loggingOut) {
		// User is currently trying to log in or something..
		return (
			<>
				<div className="spacer"></div>
				<div className="loading">
					<CircularProgress size={100} />
				</div>
			</>
		);
	}

	return (
		<>
			{auth.loggedIn ? (
				<>
					<Sidebar outerContainerId={"root"} />

					<Navigation />
				</>
			) : (
				<div>
					<Welcome />
					<Login />
				</div>
			)}
		</>
	);
}

export default App;
