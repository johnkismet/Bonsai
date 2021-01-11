import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import logo from "../../assets/dev assets/simpleTree.png";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Navigation";
const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app"
		: "http://localhost:3000";

function Welcome(props) {
	const auth = useAuth();

	function loginNow() {
		const email = prompt("Enter your email");
		auth.login(email);
	}

	return (
		<div className="Welcome">
			<h1>Welcome to Bonsai!</h1>
			<button onClick={loginNow}></button>
		</div>
	);
}

// function Login() {

// 	if (auth.loading || auth.loggingIn || auth.loggingOut) {
// 		return "Loading..........";
// 	}

// 	return <div>What's up</div>;
// }

export default Welcome;
