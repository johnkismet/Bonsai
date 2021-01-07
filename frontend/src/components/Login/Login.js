import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Login.css";

function Login(props) {
	return (
		<div className="Login">
			<div className="spacer">BONSAI</div>
			<div className="loginContainer">
				<Link to="/treefarm" className="register">
					REGISTER
				</Link>
				<Link to="/treefarm" className="login">
					LOGIN
				</Link>
			</div>
			<div className="spacer"></div>
		</div>
	);
}
export default Login;
