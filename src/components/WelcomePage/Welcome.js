import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import logo from "../../assets/dev assets/simpleTree.png";
import useAuth from "../../hooks/useAuth";

function Welcome(props) {
	return (
		<div className="Welcome">
			<div className="spacer"></div>
			<div className="welcomeContainer">
				<div className="logoContainer">
					<img width="150px" src={logo} alt="Tree logo" srcset="" />
					<h1 className="loginBonsai">BONSAI</h1>
				</div>

				<Link to="/register" className="registerBtn">
					REGISTER
				</Link>
				<Link to="/login" className="loginBtn">
					LOGIN
				</Link>
			</div>
			<div className="spacer"></div>
		</div>
	);
}

// function Login() {
// 	const auth = useAuth();

// 	function loginNow() {
// 		const email = prompt("Enter your email");
// 		auth.login(email);
// 	}

// 	if (auth.loading || auth.loggingIn || auth.loggingOut) {
// 		return "Loading..........";
// 	}

// 	return <div>What's up</div>;
// }

export default Welcome;
